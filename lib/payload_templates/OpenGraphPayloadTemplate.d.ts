import {AbstractPayloadTemplate} from "./AbstractPayloadTemplate";
import {OpenGraphElement} from "../models/elements/OpenGraphElement";
/**
 * Created by amatsegor on 5/25/17.
 */

export declare class OpenGraphPayloadTemplate extends AbstractPayloadTemplate {
    elements: OpenGraphElement[];
    template_type;

    constructor(element: OpenGraphElement);
}