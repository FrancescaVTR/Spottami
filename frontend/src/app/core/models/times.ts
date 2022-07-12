export interface Time {
    id: number;
    data: string;
    view: string;
    valid: boolean;
}

export const TIMES: Time[] = [
    { id: 1, data: '08:00:00', view: '08:00', valid: true},
    { id: 2, data: '09:00:00', view: '09:00', valid: true},
    { id: 3, data: '10:00:00', view: '10:00', valid: true},
    { id: 4, data: '11:00:00', view: '11:00', valid: true},
    { id: 5, data: '12:00:00', view: '12:00', valid: true},
    { id: 6, data: '13:00:00', view: '13:00', valid: true},
    { id: 7, data: '14:00:00', view: '14:00', valid: true},
    { id: 8, data: '15:00:00', view: '15:00', valid: true},
    { id: 9, data: '16:00:00', view: '16:00', valid: true},
    { id: 10, data: '17:00:00', view: '17:00', valid: true},
    { id: 11, data: '18:00:00', view: '18:00', valid: true},
];