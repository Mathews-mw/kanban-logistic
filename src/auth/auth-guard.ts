import { redirect } from 'next/navigation';
import { getAuthFromHeaders } from './auth';

export function authGuard(nextPath?: string) {
	const auth = getAuthFromHeaders();

	if (!auth) {
		redirect(`/sign-in${nextPath ? `?next=${encodeURIComponent(nextPath)}` : ''}`);
	}

	return auth;
}

/** 
 * Exemplo de uso

	export default function SettingsPage() {
  	const auth = requireAuthOrRedirect("/settings");
  	return <div>Configurações de {auth.email}</div>;
	}
*/
