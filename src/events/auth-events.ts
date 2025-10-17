import mitt from 'mitt';

type Events = {
	logout: void;
	redirectToLogin: void;
	forbidden: void;
};

export const authEmitter = mitt<Events>();
