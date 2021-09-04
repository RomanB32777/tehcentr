import { types } from "./types";

import { handlersAdditions } from "./actions/additionsActions";
import { handlersProducts } from "./actions/productsActions";
import { handlersProducers } from "./actions/producersActions";
import { handlersModals } from "./actions/modalActions";
import { handlersToasts } from "./actions/toastsActions";
import { handlersCategories } from "./actions/categoriesActions";
import { handlersLoading } from "./actions/loadingActions";
import { handlersSettings } from "./actions/settingsActions";

export const handlers = {
    [types.DEFAULT]: (state) => {
        return {...state}
    },
    ...handlersProducts,
    ...handlersAdditions,
    ...handlersProducers,
    ...handlersCategories,
    ...handlersModals,
    ...handlersToasts,
    ...handlersLoading,
    ...handlersSettings
}
