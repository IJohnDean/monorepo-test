/**
 * Instance
 */
export class Application {

    /**
     * Имя приложения
     * @type {string}
     */
    public readonly name: string;

    /**
     * Класс с название приложения
     * @param {string} name - название приложения
     */
    constructor(name: string) {
        this.name = name;
    }

}