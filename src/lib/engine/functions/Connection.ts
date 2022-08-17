import { connectToParent } from "penpal"
import { handlers } from "../handlers/index"

export class Connection {
    constructor() {}

    async init(optHandlers) {
        const connection = connectToParent({
            // Methods child is exposing to parent.
            methods: {
                ...handlers,
                ...optHandlers,
            },
        })

        const parent = await connection.promise
        return parent
    }
}
