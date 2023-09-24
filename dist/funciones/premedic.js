"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valorPremedic = void 0;
// <!----------------------Funcion VALOR DEL PLAN PREMEDIC start---------------------------->
const functions = __importStar(require("../funciones/"));
function valorPremedic(aportesOS, coeficienteSanCorSalud, edad_2, num_Hijo, valor_AdultosPremedic, preciohm_25, preciohm_1, edad_IdPremedic, con_afinidad, bonAfinidad_porcentaje) {
    let tipo_IngresoPDMI = aportesOS[0];
    let beneficiariosF184 = aportesOS[1];
    let eleccionSueldoOAporte = aportesOS[2];
    let sueldoSueldoOAporte = aportesOS[3];
    let categoria_Mono = aportesOS[4];
    let arrayValorMonotXCategoria = aportesOS[5];
    let porporsentajeDeAPorte = coeficienteSanCorSalud;
    let numHijo = num_Hijo;
    let valorAdultosPremedic = valor_AdultosPremedic;
    let preciohm25 = preciohm_25;
    let preciohm1 = preciohm_1;
    let edadIdPremedic = edad_IdPremedic;
    let valor_plan_premedic = {};
    let deduccionAportesObraSocial = 0;
    let array = [];
    if (edadIdPremedic.includes('I') == true) {
        valor_plan_premedic = Object.entries(preciohm25).reduce((acc, [key, value]) => // dis hijos o mas
         ({
            ...acc,
            [key]: parseInt((acc[key]) || 0) + parseInt(value * numHijo)
        }), {
            ...valorAdultosPremedic
        });
    }
    else {
        valor_plan_premedic = valorAdultosPremedic;
    }
    //Funcion para el calculo de aportes
    deduccionAportesObraSocial = functions.calculoDescuentoPorAportes(tipo_IngresoPDMI, eleccionSueldoOAporte, sueldoSueldoOAporte, porporsentajeDeAPorte, categoria_Mono, arrayValorMonotXCategoria, beneficiariosF184);
    //	<!-----------------------Bucle PREMEDIC start------------------------>
    for (let j in valor_plan_premedic) {
        let empresaPlan = [j][0];
        let plan_id = empresaPlan;
        let plan_nombre = empresaPlan.substring(3);
        let afiche = con_afinidad;
        let bonAfinidadporcentaje = functions.promoDescuento(valor_plan_premedic[j], bonAfinidad_porcentaje, afiche)[2];
        let bonAfinidad = functions.promoDescuento(valor_plan_premedic[j], bonAfinidadporcentaje, afiche)[1];
        let valor_total_plan = functions.promoDescuento(valor_plan_premedic[j], bonAfinidadporcentaje, afiche)[0];
        //funcion para que impacten los descuentos y bonificaciones
        let precio_final_a_pagar = functions.final(tipo_IngresoPDMI, deduccionAportesObraSocial, valor_total_plan);
        var plan = new Object();
        plan.item_id = plan_id;
        plan.name = 'Premedic ' + plan_nombre;
        plan.precio = precio_final_a_pagar;
        plan.valorLista = valor_plan_premedic[j];
        plan.promoPorcentaje = bonAfinidadporcentaje;
        plan.promoDescuento = bonAfinidad;
        plan.valorLista = valor_plan_premedic[j];
        plan.aporteOS = deduccionAportesObraSocial;
        array.push(plan);
    }
    //	<!-----------------------Bucle PREMEDIC end------------------------>								
    console.log('array PREMEDIC');
    console.log(array);
    return array;
}
exports.valorPremedic = valorPremedic;
// <!----------------------Funcion VALOR DEL PLAN PREMEDIC end---------------------------->
//# sourceMappingURL=premedic.js.map