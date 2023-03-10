/**
 * Функция для js анимации
 * @param {number} duration
 * @param {function} timing тайминг функция анимации
 * @param {function} draw коллбэк, в который прокидывается прогресс [0, 1]
 * @returns {void}
 */
export declare type TimingInterface = (timeFraction: number) => number;
export declare type DrawInterface = (progress: number) => void;
export interface AnimateArgumentsInterface {
    duration: number;
    timing: TimingInterface;
    draw: DrawInterface;
}
export declare function animate({ duration, timing, draw, }: AnimateArgumentsInterface): void;
