import { nanoid } from 'nanoid';
import create from 'zustand';

export interface Notification {
    id: string,
    type: 'info' | 'success' | 'warning' | 'error';
    title: string,
    message?: string
};

interface NotificationsStore {
    notifications: Notification[],
    addNotification: (notification: Omit<Notification, 'id'>) => void;
    dismissNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationsStore>((set) => ({
    notifications: [],
    addNotification: (notification) =>
        set((state) => ({
            notifications: [...state.notifications, { id: nanoid(), ...notification }],
        })),
    dismissNotification: (id) =>
        set((state) => ({
            notifications: state.notifications.filter((notification) => notification.id !== id),
        })),
}));

