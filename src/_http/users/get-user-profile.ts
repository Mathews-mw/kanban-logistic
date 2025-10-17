import { IProfile, IUser } from '@/@types/user';
import { api } from '@/_http/api-client';

interface IResponse {
	profile: IProfile;
}

export async function getUserProfile(): Promise<IResponse> {
	const response = await api.get('users/me').json<IResponse>();

	return response;
}
