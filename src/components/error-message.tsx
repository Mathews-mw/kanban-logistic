interface IErrorMessage {
	message?: string;
}

export function ErrorMessage({ message }: IErrorMessage) {
	if (!message) {
		return null;
	}

	return <small className="text-rose-500">{message}</small>;
}
