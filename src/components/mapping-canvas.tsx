import '@xyflow/react/dist/style.css';

// Documentação: https://xyflow.com/react
//
// Este componente renderiza um canvas de mapeamento visual
// entre colunas do CSV (à esquerda) e campos do BD (à direita),
// permitindo ligar com linhas (edges). Ele valida campos obrigatórios,
// evita múltiplos mapeamentos para o mesmo campo de destino e expõe
// o resultado via onConfirm.

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
	ReactFlow,
	Controls,
	addEdge,
	Connection,
	ConnectionMode,
	Edge,
	Node,
	useEdgesState,
	useNodesState,
	Position,
} from '@xyflow/react';
import { Button } from './ui/button';
import { TriangleAlert } from 'lucide-react';

// Tipos
export type FieldConfig = {
	value: string; // ex.: "vatNumber"
	label: string; // ex.: "VAT Number"
	required?: boolean;
};

export type MappingCanvasProps = {
	headers: string[]; // obtidos da rota /api/import/preview
	fields: FieldConfig[]; // campos do BD para a entidade
	onConfirm?: (mapping: Record<string, string>) => void; // { csvHeader -> fieldValue }
	height?: number;
};

const LEFT_X = 50; // posição X das colunas do CSV
const RIGHT_X = 650; // posição X dos campos do BD
const ROW_H = 70; // espaçamento vertical

export default function MappingCanvas({ headers, fields, onConfirm, height = 520 }: MappingCanvasProps) {
	// Nós (nodes) e arestas (edges)
	const initialNodes: Node[] = useMemo(() => {
		const left: Node[] = headers.map((h, i) => ({
			id: `csv-${i}`,
			position: { x: LEFT_X, y: 40 + i * ROW_H },
			sourcePosition: Position.Right,
			data: { label: h, side: 'left' },
			type: 'input',
			draggable: false,
			style: baseNodeStyle,
		}));

		const right: Node[] = fields.map((f, i) => ({
			id: `db-${f.value}`,
			position: { x: RIGHT_X, y: 40 + i * ROW_H },
			targetPosition: Position.Left,
			data: { label: f.label, value: f.value, required: f.required, side: 'right' },
			type: 'output',
			draggable: false,
			style: f.required ? requiredNodeStyle : baseNodeStyle,
		}));

		return [...left, ...right];
	}, [headers, fields]);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// resetar ao mudar headers/fields
		setNodes(initialNodes);
		setEdges([]);
	}, [initialNodes, setNodes, setEdges]);

	// Util: retorna mapeamento { csvHeader -> field }
	const mapping: Record<string, string> = useMemo(() => {
		const map: Record<string, string> = {};
		edges.forEach((e) => {
			const src = nodes.find((n) => n.id === e.source);
			const tgt = nodes.find((n) => n.id === e.target);
			if (!src || !tgt) return;
			const csvHeader = String(src?.data?.label ?? '');
			const fieldVal = String(tgt?.data?.value ?? '');
			if (csvHeader && fieldVal) map[csvHeader] = fieldVal;
		});
		return map;
	}, [edges, nodes]);

	const requiredFields = useMemo(() => fields.filter((f) => f.required).map((f) => f.value), [fields]);

	const allRequiredMapped = useMemo(
		() => requiredFields.every((rf) => Object.values(mapping).includes(rf)),
		[mapping, requiredFields]
	);

	// Garantir que cada campo de destino receba no máximo UMA conexão
	const onConnect = useCallback(
		(connection: Connection) => {
			if (!connection.source || !connection.target) return;

			const srcOk = connection.source.startsWith('csv-');
			const tgtOk = connection.target.startsWith('db-');
			if (!srcOk || !tgtOk) return; // força direção esquerda -> direita

			// se já existir uma conexão chegando no target, removê-la (replace)
			setEdges((eds) => {
				const filtered = eds.filter((e) => e.target !== connection.target);
				return addEdge({ ...connection, animated: true }, filtered);
			});
		},
		[setEdges]
	);

	const handleConfirm = useCallback(() => {
		setError(null);
		if (!allRequiredMapped) {
			setError('Mapeie todos os campos obrigatórios.');
			return;
		}
		onConfirm?.(mapping);
	}, [allRequiredMapped, mapping, onConfirm]);

	const clearAll = useCallback(() => setEdges([]), [setEdges]);

	return (
		<div className="w-full">
			<div className="flex items-start gap-4">
				<div className="ml-auto flex items-center gap-2">
					<Button variant="outline" className="bg-card" onClick={clearAll}>
						Clear
					</Button>

					<Button onClick={handleConfirm} disabled={!allRequiredMapped}>
						Confirm Mapping
					</Button>
				</div>
			</div>

			<div style={{ height }} className="mt-3 rounded border">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					fitView
					connectionMode={ConnectionMode.Loose}
					style={{ background: '#fff', border: '1px solid #f97316' }} // fundo branco
					proOptions={{ hideAttribution: true }} // opcional: esconde “attribution”
				>
					{/* <Background gap={16} /> */}
					<Controls position="bottom-right" />
				</ReactFlow>
			</div>

			{!allRequiredMapped && (
				<div className="flex items-center gap-2 text-sm text-amber-600">
					<TriangleAlert className="size-4" />
					<span>Mandatory fields marked in orange are not yet mapped.</span>
				</div>
			)}
			{error && <div className="mt-2 text-sm text-red-600">{error}</div>}
		</div>
	);
}

// Estilos base (inline para simplicidade)
const baseNodeStyle: React.CSSProperties = {
	padding: 10,
	borderRadius: 12,
	border: '1px solid #d1d5db',
	background: '#fff',
	fontSize: 13,
	width: 120,
};

const requiredNodeStyle: React.CSSProperties = {
	...baseNodeStyle,
	border: '2px solid #fb923c', // laranja para obrigatórios
	background: '#fff7ed',
};
