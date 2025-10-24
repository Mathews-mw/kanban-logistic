import { ITicketDetails } from '@/@types/ticket';

import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { TiDownload } from 'react-icons/ti';
import { MapPin, Truck } from 'lucide-react';

interface IProps {
	ticket: ITicketDetails;
}

export function TopCardSection({ ticket }: IProps) {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
			<Card>
				<CardHeader className="pb-2">
					<div className="flex items-center gap-2">
						<MapPin className="text-primary" />
						<CardTitle>Parts and localization</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="space-y-2 text-sm">
					<div className="flex gap-1">
						<span className="text-muted-foreground">Supplier:</span>
						<span className="font-medium">
							{ticket.supplier.name} ({ticket.supplier.vatNumber})
						</span>
					</div>
					<div className="space-x-1">
						<span className="text-muted-foreground">Customer:</span>
						<span className="font-medium">
							{ticket.customer.name} ({ticket.customer.vatNumber})
						</span>
					</div>

					<Separator />

					<div className="flex flex-col gap-2">
						<span className="font-bold">Delivery Plant</span>

						<div className="flex flex-col gap-1">
							<span className="font-medium">{ticket.deliveryPlant.name}</span>
							<span className="text-muted-foreground font-medium">{ticket.deliveryPlant.address1}</span>
							<span className="text-muted-foreground font-medium">
								{ticket.deliveryPlant.postalCode ?? '—'} • {ticket.deliveryPlant.city ?? '—'} •{' '}
								{ticket.deliveryPlant.country ?? '—'}
							</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-2">
					<div className="flex items-center gap-2">
						<Truck className="text-primary" />
						<CardTitle>Transporter</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="space-y-2 text-sm">
					<div className="space-x-1">
						<span className="text-muted-foreground">Transporter:</span>
						<span className="font-medium">{ticket.transporter.name}</span>
					</div>
					<div className="space-x-1">
						<span className="text-muted-foreground">Vehicle:</span>
						<span className="font-medium">{ticket.vehicle.plateNumber}</span>
					</div>
					<div className="space-x-1">
						<span className="text-muted-foreground">Vehicle Type:</span>
						<span className="font-medium">{ticket.vehicle.vehicleType ?? '—'}</span>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-2">
					<div className="flex items-center gap-2">
						<TiDownload className="text-primary size-6" />
						<CardTitle>Load</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="space-y-2 text-sm">
					<div className="space-x-1">
						<span className="text-muted-foreground">Product:</span>
						<span className="font-medium">
							{ticket.product.code} — {ticket.product.description}
						</span>
					</div>

					<Separator />

					<div className="grid grid-cols-3 gap-2">
						<div className="flex flex-col">
							<span className="text-muted-foreground">Tare</span>
							<span className="font-medium">
								{ticket.tareWeight} {ticket.unit}
							</span>
						</div>
						<div className="flex flex-col">
							<span className="text-muted-foreground">Gross</span>
							<span className="font-medium">
								{ticket.grossWeight} {ticket.unit}
							</span>
						</div>
						<div className="flex flex-col">
							<span className="text-muted-foreground">Net</span>
							<span className="font-medium">
								{ticket.netWeight} {ticket.unit}
							</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
