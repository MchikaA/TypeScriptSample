"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
    var Talk = /** @class */ (function () {
        function Talk() {
        }
        Talk.GetGreeting = function (now) {
            if (now.getHours() < 5) {
                return "Welcome back!";
            }
            else if (now.getHours() < 12) {
                return "Good morning!";
            }
            else if (now.getHours() < 16) {
                return "Good afternoon!";
            }
            else if (now.getHours() < 22) {
                return "Good evening!";
            }
            else {
                return "Welcome back!";
            }
            ;
        };
        return Talk;
    }());
    App.Talk = Talk;
})(App = exports.App || (exports.App = {}));
//# sourceMappingURL=app-talk.js.map