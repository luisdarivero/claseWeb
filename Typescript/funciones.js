"use strict";
function (param1, param2 = "inicializado", param3) {
    if (param3) {
        console.log(`${param1} ${param2} ${param3}`);
    }
    else {
        console.log(`${param1} ${param2});
  }
}

parametros("v1");
parametros("v1", "v2","v3");
parametros("v1","v2", "v3");
        );
    }
}
