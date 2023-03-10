interface SoftwareKeyboardState {
    isOpened: boolean;
}
/**
 Проверяет, закрыла ли клавиатура часть экрана, 24% подошло к большинству устройств
 Работает на iOS и Android, где софт-клавиатура ресайзит viewport в браузерах
 */
export declare function getPreciseKeyboardState(window: any): boolean;
export declare function useKeyboard(): SoftwareKeyboardState;
export {};
