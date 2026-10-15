export default class Recipe {

    #id;

    constructor({ id, category, name, durationHours, durationMinutes, description, userId }) {
        this.#id = id;
        this.category = category;
        this.name = name;
        this.durationHours = durationHours;
        this.durationMinutes = durationMinutes;
        this.description = description;
        this.userId = userId;
    }

    get id() {
        return this.#id;
    }

    toJSON() {
        return {
            id: this.#id,
            ...this
        }
    }
}