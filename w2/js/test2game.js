window._alreadyScaledWormTextures = window._alreadyScaledWormTextures || new Set();
function optimizarTextura(_0x1eb6bc) {
  if (!_0x1eb6bc || !_0x1eb6bc.Hc || !_0x1eb6bc.Hc.baseTexture) {
    console.warn("⚠️ Textura inválida o sin baseTexture.");
    return;
  }
  const _0x3e4803 = _0x1eb6bc.Hc.baseTexture;
  const _0x21d2c1 = _0x3e4803.cacheId || _0x3e4803.resource?.["url"] || _0x3e4803.resource?.["source"]?.["src"] || '';
  if (!_0x21d2c1 || window._alreadyScaledWormTextures.has(_0x21d2c1)) {
    return;
  }
  try {
    if (_0x21d2c1.includes('100300_portions.png') && _0x3e4803.resolution > 0.025) {
      _0x3e4803.resolution = 0.025;
      console.log("🛠️ Resolución ajustada (" + _0x3e4803.resolution + "): " + _0x21d2c1);
    }
    if ("mipmap" in _0x3e4803) {
      _0x3e4803.mipmap = false;
    } else if ('mipmap' in _0x3e4803.baseTexture) {
      _0x3e4803.baseTexture.mipmap = false;
    }
    if ('anisotropicLevel' in _0x3e4803) {
      _0x3e4803.anisotropicLevel = 0x1;
    } else if ("anisotropicLevel" in _0x3e4803.baseTexture) {
      _0x3e4803.baseTexture.anisotropicLevel = 0x1;
    }
    if (_0x3e4803.width > 0x400 || _0x3e4803.height > 0x400) {
      const _0x3600ae = 0x400 / _0x3e4803.width;
      const _0x5e4b91 = 0x400 / _0x3e4803.height;
      const _0x1611c5 = Math.min(_0x3600ae, _0x5e4b91);
      if (_0x3e4803.setSize) {
        _0x3e4803.setSize(_0x3e4803.width * _0x1611c5, _0x3e4803.height * _0x1611c5);
      } else if (_0x3e4803.resource?.["source"] instanceof HTMLImageElement) {
        _0x3e4803.resource.source.width *= _0x1611c5;
        _0x3e4803.resource.source.height *= _0x1611c5;
      }
      console.log("🔧 Imagen escalada (" + Math.round(_0x1611c5 * 0x64) + "%): " + _0x21d2c1);
    }
    if (_0x3e4803.isPowerOfTwo && !_0x21d2c1.includes('atlas') && !_0x21d2c1.includes('sprite')) {
      _0x3e4803.isPowerOfTwo = false;
    }
    if (_0x3e4803.destroyed || _0x3e4803.resource?.["destroyed"]) {
      _0x3e4803.destroy(true);
      console.log("🗑️ Textura destruida por estado inválido: " + _0x21d2c1);
    }
    window._alreadyScaledWormTextures.add(_0x21d2c1);
    console.log("✅ Optimización completa: " + _0x21d2c1);
  } catch (_0x463918) {
    console.error("❌ Error al optimizar textura: " + _0x21d2c1, _0x463918);
  }
}
function checkOrientation() {
  const _0x5dfdc1 = document.getElementById("rotate-gif");
  if (window.matchMedia("(orientation: portrait)").matches) {
    _0x5dfdc1.style.display = 'block';
  } else {
    _0x5dfdc1.style.display = "none";
  }
}
window.addEventListener("load", checkOrientation);
window.addEventListener('resize', checkOrientation);
window.onload = function () {
  document.getElementById("progress-bar").style.width = '100%';
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = '0';
    setTimeout(() => {
      document.getElementById("loading-screen").remove();
    }, 0x1f4);
  }, 0x7d0);
};
var __extends = this && this.__extends || function () {
  var _0x3ef1b1 = function (_0x3a2214, _0x2edbe5) {
    _0x3ef1b1 = Object.setPrototypeOf || {
      '__proto__': []
    } instanceof Array && function (_0x1e32dd, _0x2cfbd) {
      _0x1e32dd.__proto__ = _0x2cfbd;
    } || function (_0x51b8a2, _0x46191c) {
      for (var _0x67505a in _0x46191c) if (Object.prototype.hasOwnProperty.call(_0x46191c, _0x67505a)) {
        _0x51b8a2[_0x67505a] = _0x46191c[_0x67505a];
      }
    };
    return _0x3ef1b1(_0x3a2214, _0x2edbe5);
  };
  return function (_0x29a4d, _0x56bf78) {
    if (typeof _0x56bf78 !== "function" && _0x56bf78 !== null) {
      throw new TypeError("Class extends value " + String(_0x56bf78) + " is not a constructor or null");
    }
    _0x3ef1b1(_0x29a4d, _0x56bf78);
    function _0x57da0d() {
      this.constructor = _0x29a4d;
    }
    _0x29a4d.prototype = _0x56bf78 === null ? Object.create(_0x56bf78) : (_0x57da0d.prototype = _0x56bf78.prototype, new _0x57da0d());
  };
}();
var Direction;
(function (_0x447407) {
  _0x447407.LEFT = "left";
  _0x447407.TOP = 'top';
  _0x447407.BOTTOM = "bottom";
  _0x447407.RIGHT = "right";
  _0x447407.TOP_LEFT = "top_left";
  _0x447407.TOP_RIGHT = "top_right";
  _0x447407.BOTTOM_LEFT = 'bottom_left';
  _0x447407.BOTTOM_RIGHT = 'bottom_right';
})(Direction = {});
var Joystick = function (_0x3efcb3) {
  __extends(_0x409e73, _0x3efcb3);
  function _0x409e73(_0x394931) {
    var _0x389662 = _0x3efcb3.call(this) || this;
    _0x389662.outerRadius = 0x0;
    _0x389662.innerRadius = 0x0;
    _0x389662.innerAlphaStandby = 0.5;
    _0x389662.settings = Object.assign({
      'outerScale': {
        'x': 0x1,
        'y': 0x1
      },
      'innerScale': {
        'x': 0x1,
        'y': 0x1
      }
    }, _0x394931);
    if (!_0x389662.settings.outer) {
      var _0x59adcb = new PIXI.Graphics();
      _0x59adcb.beginFill(0xff0000);
      _0x59adcb.drawCircle(0x0, 0x0, 0x3c);
      _0x59adcb.alpha = 0.5;
      _0x389662.settings.outer = _0x59adcb;
    }
    if (!_0x389662.settings.inner) {
      var _0x526f44 = new PIXI.Graphics();
      _0x526f44.beginFill(0xff0000);
      _0x526f44.drawCircle(0x0, 0x0, 0x23);
      _0x526f44.alpha = _0x389662.innerAlphaStandby;
      _0x389662.settings.inner = _0x526f44;
    }
    _0x389662.initialize();
    return _0x389662;
  }
  _0x409e73.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ("anchor" in this.outer) {
      this.outer.anchor.set(0.5);
    }
    if ('anchor' in this.inner) {
      this.inner.anchor.set(0.5);
    }
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 0x2;
    this.bindEvents();
  };
  _0x409e73.prototype.bindEvents = function () {
    var _0x3b11c9 = this;
    this.interactive = true;
    var _0xd7f993 = false;
    var _0x48e416;
    var _0x334a05;
    var _0x3e9021;
    this.onDragStart = function (_0x1b2bac) {
      var _0x2d25bc;
      var _0x4428b1;
      _0x48e416 = _0x1b2bac;
      _0x3e9021 = this.toLocal(_0x48e416);
      _0xd7f993 = true;
      _0x3b11c9.inner.alpha = 0x1;
      if ((_0x4428b1 = (_0x2d25bc = _0x3b11c9.settings).onStart) === null || _0x4428b1 === undefined) {
        undefined;
      } else {
        _0x4428b1.call(_0x2d25bc);
      }
    };
    this.onDragEnd = function (_0x40e6ea) {
      var _0x4b3261;
      var _0x45b5ca;
      if (_0xd7f993 == false) {
        return;
      }
      _0x3b11c9.inner.position.set(0x0, 0x0);
      _0xd7f993 = false;
      _0x3b11c9.inner.alpha = _0x3b11c9.innerAlphaStandby;
      if ((_0x45b5ca = (_0x4b3261 = _0x3b11c9.settings).onEnd) === null || _0x45b5ca === undefined) {
        undefined;
      } else {
        _0x45b5ca.call(_0x4b3261);
      }
    };
    this.onDragMove = function (_0x38ef5c) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 0x2;
      var _0x3139cc;
      var _0x2c3007;
      var _0x441ec;
      var _0x563248;
      var _0x36c396;
      var _0x1f5df3;
      if (_0xd7f993 == false) {
        return;
      }
      var _0x308b45 = this.toLocal(_0x38ef5c);
      var _0x4edb8a = _0x308b45.x - _0x3e9021.x;
      var _0x3defc0 = _0x308b45.y - _0x3e9021.y;
      var _0x117fc5 = new PIXI.Point(0x0, 0x0);
      var _0x3dbd00 = 0x0;
      if (_0x4edb8a == 0x0 && _0x3defc0 == 0x0) {
        return;
      }
      var _0xb1db9a = 0x0;
      if (_0x4edb8a * _0x4edb8a + _0x3defc0 * _0x3defc0 >= _0x3b11c9.outerRadius * _0x3b11c9.outerRadius) {
        _0xb1db9a = _0x3b11c9.outerRadius;
      } else {
        _0xb1db9a = _0x3b11c9.outerRadius - _0x3b11c9.innerRadius;
      }
      var _0x440fe0 = Direction.LEFT;
      if (_0x4edb8a == 0x0) {
        if (_0x3defc0 > 0x0) {
          _0x117fc5.set(0x0, _0x3defc0 > _0x3b11c9.outerRadius ? _0x3b11c9.outerRadius : _0x3defc0);
          _0x3dbd00 = 0x10e;
          _0x440fe0 = Direction.BOTTOM;
        } else {
          _0x117fc5.set(0x0, -(Math.abs(_0x3defc0) > _0x3b11c9.outerRadius ? _0x3b11c9.outerRadius : Math.abs(_0x3defc0)));
          _0x3dbd00 = 0x5a;
          _0x440fe0 = Direction.TOP;
        }
        _0x3b11c9.inner.position.set(_0x117fc5.x, _0x117fc5.y);
        _0x334a05 = _0x3b11c9.getPower(_0x117fc5);
        if ((_0x2c3007 = (_0x3139cc = _0x3b11c9.settings).onChange) === null || _0x2c3007 === undefined) {
          undefined;
        } else {
          _0x2c3007.call(_0x3139cc, {
            'angle': _0x3dbd00,
            'direction': _0x440fe0,
            'power': _0x334a05
          });
        }
        return;
      }
      if (_0x3defc0 == 0x0) {
        if (_0x4edb8a > 0x0) {
          _0x117fc5.set(Math.abs(_0x4edb8a) > _0x3b11c9.outerRadius ? _0x3b11c9.outerRadius : Math.abs(_0x4edb8a), 0x0);
          _0x3dbd00 = 0x0;
          _0x440fe0 = Direction.LEFT;
        } else {
          _0x117fc5.set(-(Math.abs(_0x4edb8a) > _0x3b11c9.outerRadius ? _0x3b11c9.outerRadius : Math.abs(_0x4edb8a)), 0x0);
          _0x3dbd00 = 0xb4;
          _0x440fe0 = Direction.RIGHT;
        }
        _0x3b11c9.inner.position.set(_0x117fc5.x, _0x117fc5.y);
        _0x334a05 = _0x3b11c9.getPower(_0x117fc5);
        if ((_0x563248 = (_0x441ec = _0x3b11c9.settings).onChange) === null || _0x563248 === undefined) {
          undefined;
        } else {
          _0x563248.call(_0x441ec, {
            'angle': _0x3dbd00,
            'direction': _0x440fe0,
            'power': _0x334a05
          });
        }
        return;
      }
      var _0x40a361 = Math.abs(_0x3defc0 / _0x4edb8a);
      var _0x983852 = Math.atan(_0x40a361);
      _0x3dbd00 = _0x983852 * 0xb4 / Math.PI;
      var _0x449942 = 0x0;
      var _0x6219b5 = 0x0;
      if (_0x4edb8a * _0x4edb8a + _0x3defc0 * _0x3defc0 >= _0x3b11c9.outerRadius * _0x3b11c9.outerRadius) {
        _0x449942 = _0x3b11c9.outerRadius * Math.cos(_0x983852);
        _0x6219b5 = _0x3b11c9.outerRadius * Math.sin(_0x983852);
      } else {
        _0x449942 = Math.abs(_0x4edb8a) > _0x3b11c9.outerRadius ? _0x3b11c9.outerRadius : Math.abs(_0x4edb8a);
        _0x6219b5 = Math.abs(_0x3defc0) > _0x3b11c9.outerRadius ? _0x3b11c9.outerRadius : Math.abs(_0x3defc0);
      }
      if (_0x3defc0 < 0x0) {
        _0x6219b5 = -Math.abs(_0x6219b5);
      }
      if (_0x4edb8a < 0x0) {
        _0x449942 = -Math.abs(_0x449942);
      }
      if (_0x4edb8a > 0x0 && _0x3defc0 < 0x0) {} else {
        if (_0x4edb8a < 0x0 && _0x3defc0 < 0x0) {
          _0x3dbd00 = 0xb4 - _0x3dbd00;
        } else {
          if (_0x4edb8a < 0x0 && _0x3defc0 > 0x0) {
            _0x3dbd00 = _0x3dbd00 + 0xb4;
          } else if (_0x4edb8a > 0x0 && _0x3defc0 > 0x0) {
            _0x3dbd00 = 0x168 - _0x3dbd00;
          }
        }
      }
      _0x117fc5.set(_0x449942, _0x6219b5);
      _0x334a05 = _0x3b11c9.getPower(_0x117fc5);
      _0x440fe0 = _0x3b11c9.getDirection(_0x117fc5);
      _0x3b11c9.inner.position.set(_0x117fc5.x, _0x117fc5.y);
      if ((_0x1f5df3 = (_0x36c396 = _0x3b11c9.settings).onChange) === null || _0x1f5df3 === undefined) {
        undefined;
      } else {
        _0x1f5df3.call(_0x36c396, {
          'angle': _0x3dbd00,
          'direction': _0x440fe0,
          'power': _0x334a05
        });
      }
    };
  };
  _0x409e73.prototype.getPower = function (_0x26b361) {
    var _0x1f406c = _0x26b361.x - 0x0;
    var _0x588fa0 = _0x26b361.y - 0x0;
    return Math.min(0x1, Math.sqrt(_0x1f406c * _0x1f406c + _0x588fa0 * _0x588fa0) / this.outerRadius);
  };
  _0x409e73.prototype.getDirection = function (_0x1694ee) {
    var _0x37deaf = Math.atan2(_0x1694ee.y, _0x1694ee.x);
    if (_0x37deaf >= -Math.PI / 0x8 && _0x37deaf < 0x0 || _0x37deaf >= 0x0 && _0x37deaf < Math.PI / 0x8) {
      return Direction.RIGHT;
    } else {
      if (_0x37deaf >= Math.PI / 0x8 && _0x37deaf < 0x3 * Math.PI / 0x8) {
        return Direction.BOTTOM_RIGHT;
      } else {
        if (_0x37deaf >= 0x3 * Math.PI / 0x8 && _0x37deaf < 0x5 * Math.PI / 0x8) {
          return Direction.BOTTOM;
        } else {
          if (_0x37deaf >= 0x5 * Math.PI / 0x8 && _0x37deaf < 0x7 * Math.PI / 0x8) {
            return Direction.BOTTOM_LEFT;
          } else {
            if (_0x37deaf >= 0x7 * Math.PI / 0x8 && _0x37deaf < Math.PI || _0x37deaf >= -Math.PI && _0x37deaf < -0x7 * Math.PI / 0x8) {
              return Direction.LEFT;
            } else {
              if (_0x37deaf >= -0x7 * Math.PI / 0x8 && _0x37deaf < -0x5 * Math.PI / 0x8) {
                return Direction.TOP_LEFT;
              } else {
                return _0x37deaf >= -0x5 * Math.PI / 0x8 && _0x37deaf < -0x3 * Math.PI / 0x8 ? Direction.TOP : Direction.TOP_RIGHT;
              }
            }
          }
        }
      }
    }
  };
  return _0x409e73;
}(PIXI.Container);
function _typeof(_0x15fa11) {
  '@babel/helpers - typeof';

  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x347be8) {
    return typeof _0x347be8;
  } : function (_0x2a2e2f) {
    return _0x2a2e2f && "function" == typeof Symbol && _0x2a2e2f.constructor === Symbol && _0x2a2e2f !== Symbol.prototype ? "symbol" : typeof _0x2a2e2f;
  })(_0x15fa11);
}
var lenguaje = {
  'es': {
    'opciones': "opciones",
    'zoomVelocidad': "Zoom Velocidad",
    'anchoPotenciador': "ancho del potenciador",
    'auraPotenciador': "aura del potenciador",
    'anchoComida': "ancho de la comida",
    'brilloComida': "brillo de la comida",
    'fondo': "fondo Solido",
    'laser': "laser de cabeza",
    'sectores': 'sectores',
    'colorJuego': "color del juego",
    'colorLaser': "color del laser",
    'colorBorde': "color del borde",
    'copiar': "copiar",
    'fondos': "fondos",
    'fondo0': "por defecto",
    'fondo1': "espacio",
    'fondo2': "espacio 2",
    'fondo3': 'azul',
    'fondo4': "espacio 3",
    'skinVisible': "SkinVisible(Para publico)",
    'soundTuto1': "descargar sonido",
    'soundTuto2': "subir sonido",
    'soundTuto3': "sonido link cabeza",
    'soundTuto4': "sonido link 10cabezas"
  },
  'en': {
    'opciones': "settings",
    'zoomVelocidad': "Zoom Speed",
    'anchoPotenciador': "booster width",
    'auraPotenciador': "power up glow",
    'anchoComida': "size of food",
    'brilloComida': "food shine",
    'fondo': "Solid background",
    'laser': "Center laser",
    'sectores': "sectors",
    'colorJuego': "game color",
    'colorLaser': "laser color",
    'colorBorde': "border color",
    'copiar': "copy",
    'fondos': "background",
    'fondo0': "default",
    'fondo1': "Green",
    'fondo2': "Blue",
    'fondo3': "Blue Black",
    'fondo4': "Blue Light",
    'skinVisible': "SkinVisible(For public)",
    'soundTuto1': "download sounds",
    'soundTuto2': "turn up sound",
    'soundTuto3': "sound link head",
    'soundTuto4': "sound link 10heads"
  },
  'uk': {
    'opciones': "????????????",
    'anchoPotenciador': "?????? ???????????",
    'auraPotenciador': "????? ???????????",
    'anchoComida': "?????? ???",
    'brilloComida': "????? ???",
    'fondo': "??????? ???",
    'laser': "??????????? ?????",
    'sectores': "???????",
    'colorJuego': "????? ???",
    'colorLaser': "????? ??????",
    'colorBorde': "????? ????",
    'copiar': "?????????",
    'fondos': '????',
    'fondo0': "?? ?????????????",
    'fondo1': "??????",
    'fondo2': "?????? 2",
    'fondo3': "?????",
    'fondo4': "?????? 3",
    'skinVisible': "SkinVisible(??? ???????)",
    'soundTuto1': "??????????? ????",
    'soundTuto2': "??????????? ????",
    'soundTuto3': "???? ??? ??????",
    'soundTuto4': "???? ??? 10 ?????"
  }
};
const _wrmxt = {
  'isSkinCustom'(_0x3bac95) {
    var _0x49d0f7 = /[a-zA-Z]/;
    return "string" === typeof _0x3bac95 && _0x49d0f7.test(_0x3bac95);
  },
  'testSkinCustom': function (_0x53e952) {
    return _wrmxt.isSkinCustom(_0x53e952) ? 0x22 || 0x21 : _0x53e952;
  },
  'testSkinMod': function (_0x43ac19) {
    return 0x18f <= _0x43ac19 && 0x3e7 > _0x43ac19;
  },
  'testWear': function (_0x168767) {
    return 0x18f <= _0x168767 && 0x3e7 > _0x168767;
  },
  'isNumberValid': function (_0x1ebed4) {
    return '' !== _0x1ebed4 && null !== _0x1ebed4 && undefined !== _0x1ebed4 && !isNaN(_0x1ebed4);
  },
  'validInput': function (_0x5138aa) {
    if (!(0x18f <= _0x5138aa && 0x3e7 > _0x5138aa) && !_wrmxt.isSkinCustom(_0x5138aa)) {
      return _0x5138aa;
    }
    try {
      let _0x1e92e9 = $('#inputReplaceSkin').val();
      return encodeURI('' !== _0x1e92e9 && null !== _0x1e92e9 && undefined !== _0x1e92e9 && !isNaN(_0x1e92e9) ? _0x1e92e9 : 0x23);
    } catch (_0x279a2c) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
var intervalID = null;
var isRunning = false;
var initialInterval = 0x37;
(function () {
  var _0x2f29ad = function () {
    var _0x4655ac;
    try {
      _0x4655ac = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0xf22e96) {
      _0x4655ac = window;
    }
    return _0x4655ac;
  };
  var _0x3d9ecb = _0x2f29ad();
  _0x3d9ecb.setInterval(_0x509214, 0x3e8);
})();
var cycleCounter = 0x1;
var isIncrementing = true;
let pixi = new Function("return PIXI;")();
let ungirotexture = pixi.Texture.from("https://i.imgur.com/12MgJyy.png");
let explotWtexture = pixi.Texture.from("https://i.imgur.com/DbWbUxD.png");
var keys = {
  'zoom': 'z',
  'restart': 'r',
  'giro': 's',
  'wormExplot': 'x',
  'laserHS': 'l',
  'sectores': 'q',
  'background': 'c',
  'noSkin': 'f',
  'noAuras': 'g'
};
function cambiarKey(_0x21bff2, _0x1aa641) {
  if (keys.hasOwnProperty(_0x21bff2)) {
    keys[_0x21bff2] = _0x1aa641;
  }
}
let theoObjects = {
  'teamColor': 'FFFFFF',
  'laserColor': "FFFFFF",
  'colorFondo': "0D0400",
  'colorBorde': 'FF0000',
  'hsTextColor': "FFFFFF",
  'killTextColor': "FFFFFF",
  'minimapBorderColor': "FFFFFF"
};
var zw_updatezoom;
var zw_multiplier;
var zw_zoomtext;
var crearRegion2;
var zw_servertext;
var zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = true;
var zw_TopHS_RecordHs;
var zw_Top3HS_RecordHs;
var zw_TopFriends_list;
var zw_TopHS_BestPlayers;
var zw_MinimapTeamCode;
var zw_MinimapSombra;
var zw_lastserver;
var zw_toplist;
var zw_Background;
var ctxHeadshotLine;
var zw_zoomplustexture;
var zw_zoomsubtracttexture;
var zw_giroplustexture;
var zw_girosubtracttexture;
var zw_explotWubtracttexture;
var zw_settingsblockbadwords;
var zw_selectedbackground;
var zw_joystick;
var zw_mobilecontrol;
var zw_mobilecontrol2;
var zw_mobilecontroltextures;
var zw_mobilepredictiontextures;
var zw_mobileprediction;
var zw_joysticks;
var zw_mobilearrowtexture;
var zw_mobilepeedtexture;
var zw_mobilefullscreenstatus;
var zw_mobilecheck;
zw_multiplier = 0x1;
let frameTimes = [];
let lastFrameTime = performance.now();
var killtext;
var hstext;
var circle;
var backgrounds = ['https://asserts.wormworld.io/backgrounds/bkgnd0.png', 'https://asserts.wormworld.io/backgrounds/bkgnd8.png', "https://asserts.wormworld.io/backgrounds/bkgnd9.png", "https://asserts.wormworld.io/backgrounds/bkgnd10.png", "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png', 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png', "https://asserts.wormworld.io/backgrounds/arena01.png", "https://asserts.wormworld.io/backgrounds/arena02.png", "https://asserts.wormworld.io/backgrounds/arena03.png", "https://asserts.wormworld.io/backgrounds/arena04.png"];
let currentIndex = localStorage.getItem("selectedBackground") ? parseInt(localStorage.getItem('selectedBackground')) : 0x0;
var fonts = ["Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace", "'Georgia', serif", "'Times New Roman', serif", "'Comic Sans MS', cursive", "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let currentFontIndex = localStorage.getItem("selectedFont") ? parseInt(localStorage.getItem("selectedFont")) : 0x0;
function getPingColor(_0x56615e) {
  if (_0x56615e <= 0x32) {
    return '#00FF00';
  }
  if (_0x56615e <= 0x50) {
    return "#ADFF2F";
  }
  if (_0x56615e <= 0x78) {
    return "#FFFF00";
  }
  if (_0x56615e <= 0xb4) {
    return "#FFA500";
  }
  if (_0x56615e <= 0xfa) {
    return "#FF4500";
  }
  return '#FF0000';
}
function getFPSColor(_0x73dbf7) {
  if (_0x73dbf7 >= 0x3c) {
    return "#00FF00";
  }
  if (_0x73dbf7 >= 0x32) {
    return "#ADFF2F";
  }
  if (_0x73dbf7 >= 0x28) {
    return "#FFFF00";
  }
  if (_0x73dbf7 >= 0x1e) {
    return "#FFA500";
  }
  if (_0x73dbf7 >= 0x14) {
    return "#FF4500";
  }
  return "#FF0000";
}
window.onwheel = _0x4c14a6 => {
  if (_0x4c14a6.deltaY > 0x0) {
    zw_updatezoom(Math.max(zw_multiplier - 0.75 * parseFloat(theoKzObjects.zoomSpeed), 0.5));
  } else {
    zw_updatezoom(Math.min(zw_multiplier + 1.05 * parseFloat(theoKzObjects.zoomSpeed), 0x32));
  }
};
var zw_mobilecheck = function () {
  var _0x23c4fc = new Function("return RegExp;")();
  return new _0x23c4fc('iPhone|iPad|iPod|Android', 'i').test(navigator.userAgent);
};
var zw_updatezoom = function (_0x226d7b) {
  zw_multiplier = _0x226d7b;
  var _0x51abe3 = parseFloat(zw_multiplier.toFixed(0x2));
  if (Math.abs(_0x51abe3) < 0.01) {
    _0x51abe3 = 0x0;
  } else if (Math.abs(_0x51abe3 - 0x1) < 0.01) {
    _0x51abe3 = 0x1;
  }
  zw_zoomtext.text = _0x51abe3 + 'x';
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var isPlaying = false;
window.keyMove = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': "dynamic",
    'position': {
      'left': "110px",
      'bottom': "110px"
    },
    'color': "#222",
    'pxy': 0x6e
  }
};
var idiomaActual = window.location.href.includes("/es") ? 'es' : window.location.href.includes("/uk") ? 'uk' : 'en';
let lastHsTextColor = null;
let lastKillTextColor = null;
let lastMinimapBorderColor = null;
let frameCount = 0x0;
let totalFPSTime = 0x0;
const TWO_PI = 0x2 * Math.PI;
if (typeof window.coords === 'undefined') {
  window.coords = {
    'playerX': 0x0,
    'playerY': 0x0
  };
}
var theoKzObjects = {
  'FB_UserID': '',
  'fps': false,
  'ping': false,
  'chngBotSkins': false,
  'chngPersonsSkins': false,
  'minimapTeamcod': false,
  'hideYouNameInMinimap': false,
  'Incognito': false,
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': false,
  'sectores': false,
  'visiblePowersAll': false,
  'speed_zigzag': true,
  'timerSpZg': false,
  'zoomSpeed': localStorage.getItem("zoomSpeed") || 0x1,
  'PotenciadorSize': localStorage.getItem("PotenciadorSize") || 0x2,
  'PotenciadorAura': localStorage.getItem("PotenciadorAura") || 1.2,
  'ComidaShadow': localStorage.getItem('ComidaShadow') || 0x2,
  'ComidaSize': localStorage.getItem("ComidaSize") || 0x2,
  'mouseDelay': localStorage.getItem("mouseDelay") || 0x14,
  'smoothCamera': localStorage.getItem("smoothCamera") || 0.5,
  'eat_animation': 0.0025,
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'showTeamList': true,
  'animationHeadshot': true,
  'top8': true,
  'killFeed': false,
  'noAuras': true,
  'noSkin': true,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'dead': false,
  'FoodShadow': localStorage.ComidaShadow || 0x2,
  'FoodSize': localStorage.ComidaSize || 0x2,
  'headshot': 0x0,
  'idReplaceSkin': 0x23,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents.joystick,
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && "null" !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects.loading = true;
let soundEnabled;
var wriseData = {
  'id_user': '',
  'nickname': 'wrise',
  'enemyNameHs': "wrise",
  'teamCode': '',
  'playerX': 0x0,
  'playerY': 0x0,
  'hs': 0x0,
  'kill': 0x0,
  'message': '',
  'teamColor': localStorage.getItem("teamColor") || "0xffffff",
  'wssServer': ''
};
const socket = new WebSocket("wss://wrise.xyz:9800");
const gameState = {
  'players': new Map()
};
let lastUpdate = 0x0;
socket.addEventListener('open', () => console.log("Conectado al servidor WebSocket"));
socket.addEventListener("close", () => console.log("Desconectado del servidor WebSocket"));
socket.addEventListener("message", async _0x157a0b => {
  try {
    const _0xf9e3a5 = typeof _0x157a0b.data === "string" ? JSON.parse(_0x157a0b.data) : JSON.parse(await _0x157a0b.data.text());
    handleMessage(_0xf9e3a5);
  } catch (_0x2d6aa4) {
    console.error("Error al procesar el mensaje:", _0x2d6aa4);
  }
});
function handleMessage(_0x123dcb) {
  if (!_0x123dcb || _0x123dcb.wssServer !== '') {
    return;
  }
  if (_0x123dcb.id_user && ['gg_107164783301809303612', "gg_107696732696574095850", "gg_110413852592088957484"].includes(_0x123dcb.id_user)) {
    createServerMessage("[wrise OWNER]", _0x123dcb.message);
    console.log("Servidor " + _0x123dcb.id_user + " ha enviado un mensaje: " + _0x123dcb.message);
  }
  switch (_0x123dcb.type) {
    case "initialState":
      handlers.initialState(_0x123dcb.players);
      break;
    case 'playerUpdate':
      handlers.playerUpdate(_0x123dcb);
      break;
    case "hsKillUpdate":
      handlers.hsKillUpdate(_0x123dcb);
      break;
    case 'playerDeath':
      handlers.playerDeath(_0x123dcb);
      break;
    case "playerDisconnect":
      removePlayer(_0x123dcb.id);
      break;
    default:
      console.log("Mensaje desconocido:", _0x123dcb);
  }
}
function getUserData(_0x5c6061) {
  return clientes.clientesActivos.find(_0x4ba2c => _0x4ba2c.client_ID === _0x5c6061);
}
let messageQueue = [];
let isProcessingQueue = false;
function sendMessage() {
  if (!canSendMessage) {
    console.log("⏳ Espera antes de enviar otro mensaje...");
    return;
  }
  const _0x4c6531 = $("#chat-input").val().trim();
  if (!_0x4c6531) {
    return;
  }
  canSendMessage = false;
  setTimeout(() => canSendMessage = true, 0x3e8);
  const _0x3b84ca = 'wrise'.substring(0x0, 0x10);
  const _0x4059f2 = getUserData('');
  const _0x14a0e3 = {
    'type': "chatMessage",
    'id_user': '',
    'nickname': _0x3b84ca,
    'message': _0x4c6531,
    'wssServer': '',
    'color': _0x4059f2?.["color"] || "rgba(255, 255, 255, 0.1)",
    'image': _0x4059f2?.['image'] || 'default_icon.png'
  };
  messageQueue.push(_0x14a0e3);
  processMessageQueue();
  displayMessage(_0x3b84ca, _0x4c6531, '', _0x14a0e3.color, _0x14a0e3.image, true);
  $("#chat-input").val('');
}
async function processMessageQueue() {
  if (isProcessingQueue || messageQueue.length === 0x0) {
    return;
  }
  isProcessingQueue = true;
  while (messageQueue.length > 0x0) {
    const _0x3a747a = messageQueue.shift();
    try {
      socket.send(JSON.stringify(_0x3a747a));
      await new Promise(_0x22fec4 => setTimeout(_0x22fec4, 0x32));
    } catch (_0x50472c) {
      console.error("Error enviando mensaje:", _0x50472c);
    }
  }
  isProcessingQueue = false;
}
function displayMessage(_0x19bad8, _0x498d6b, _0x9f1636, _0x59c8ec, _0x2e9205, _0x46a131 = false) {
  const _0x2ffce7 = _0x59c8ec || "rgba(255, 255, 255, 0.1)";
  const _0x1e583e = _0x2e9205 ? "<img src=\"" + _0x2e9205 + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : '';
  const _0xb97fb2 = "\n        <div class=\"chat-message\" style=\"background: " + _0x2ffce7 + ";\">\n            " + _0x1e583e + "\n            <strong id=\"" + _0x9f1636 + "\" style=\"color: " + (_0x46a131 ? "lightblue" : "white") + "\">" + _0x19bad8 + ":</strong>\n            <span>" + _0x498d6b + "</span>\n        </div>\n    ";
  $("#chat-history").append(_0xb97fb2).scrollTop($("#chat-history")[0x0].scrollHeight);
}
const handlers = {
  'initialState': _0x2ba949 => {
    _0x2ba949.forEach(_0x42cc1b => gameState.players.set(_0x42cc1b.id_user, _0x42cc1b));
    console.log("Estado inicial recibido:", _0x2ba949);
  },
  'playerUpdate': _0x29d79e => {
    gameState.players.set(_0x29d79e.id_user, {
      ..._0x29d79e
    });
    updateTop8Hs();
    if (_0x29d79e.teamCode && _0x29d79e.teamCode === '') {
      createTeamUbication(_0x29d79e.teamCode, _0x29d79e.teamColor);
      createTeamMessage(_0x29d79e.teamCode, _0x29d79e.nickname, _0x29d79e.message);
    }
  },
  'hsKillUpdate': _0xde33ab => {
    const _0x428483 = gameState.players.get(_0xde33ab.id_user);
    if (_0x428483) {
      _0x428483.hskill = _0xde33ab.hskill;
    } else {
      gameState.players.set(_0xde33ab.id_user, {
        ..._0xde33ab,
        'position': {
          'x': 0x0,
          'y': 0x0
        }
      });
    }
    updateTop8Hs();
  },
  'playerDeath': _0x3d60ee => {
    gameState.players["delete"](_0x3d60ee.id_user);
    console.log("El jugador " + _0x3d60ee.nickname + " ha muerto.");
    updateTop8Hs();
    clearTeamUbication();
  }
};
Object.assign(window, handlers);
let pendingUpdate = null;
let updateTimeout = null;
function sendUpdate(_0x19629d, _0x526479 = {}) {
  const _0xd3c736 = {
    'type': _0x19629d,
    'id_user': '',
    'nickname': 'wrise',
    'enemyNameHs': "wrise",
    'hskill': {
      'hs': 0x0,
      'kill': 0x0
    },
    'position': {
      'x': 0x0,
      'y': 0x0
    },
    'message': '',
    'teamCode': '',
    'teamColor': wriseData.teamColor,
    'wssServer': '',
    ..._0x526479
  };
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(_0xd3c736));
  }
}
function sendPlayerUpdate(_0x22a2e1, _0x51c36d) {
  const _0x3fc1b4 = Date.now();
  if (_0x3fc1b4 - lastUpdate < 0x32) {
    if (pendingUpdate) {
      clearTimeout(updateTimeout);
    }
    pendingUpdate = {
      'x': _0x22a2e1,
      'y': _0x51c36d
    };
    updateTimeout = setTimeout(() => {
      if (pendingUpdate) {
        wriseData.playerX = pendingUpdate.x;
        wriseData.playerY = pendingUpdate.y;
        sendUpdate("playerUpdate", {
          'position': pendingUpdate
        });
        pendingUpdate = null;
        lastUpdate = Date.now();
      }
    }, 0x32 - (_0x3fc1b4 - lastUpdate));
    return;
  }
  wriseData.playerX = _0x22a2e1;
  wriseData.playerY = _0x51c36d;
  sendUpdate("playerUpdate", {
    'position': {
      'x': _0x22a2e1,
      'y': _0x51c36d
    }
  });
  lastUpdate = _0x3fc1b4;
}
function sendPlayerDeath(_0x4b647d, _0x1f04bf) {
  sendUpdate("playerDeath", {
    'hskill': {
      'hs': _0x4b647d,
      'kill': _0x1f04bf
    }
  });
}
function sendHSKillUpdate(_0x2bdd83, _0x1d48c4) {
  sendUpdate("hsKillUpdate", {
    'hskill': {
      'hs': _0x2bdd83,
      'kill': _0x1d48c4
    }
  });
}
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
let clientsSkins = {
  'clientsSkinsVencidos': [],
  'clientsSkinsActivos': []
};
var TIME = new Date().getTime();
async function loadUsers() {
  await fetch('https://wormrise.github.io/extension/w2/api/users.json?v=' + TIME).then(_0x40c2bf => _0x40c2bf.json()).then(_0x28dbf1 => {
    console.log(_0x28dbf1);
    if (_0x28dbf1.success) {
      let _0x3c5073 = _0x28dbf1.Users;
      clientes.clientesActivos = _0x3c5073.filter(_0x2e99aa => {
        return _0x2e99aa.client_ID;
      });
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadUsers();
async function loadSkinUnlock() {
  await fetch('https://wormrise.github.io/extension/w2/api/skinsactive.php?v=' + TIME).then(_0x40472b => _0x40472b.json()).then(_0x14d00e => {
    console.log(_0x14d00e);
    if (_0x14d00e.success) {
      let _0x3a87c6 = _0x14d00e.Users;
      clientsSkins.clientsSkinsActivos = _0x3a87c6.filter(_0x1c5865 => {
        return _0x1c5865.client_ID;
      });
    } else {
      clientsSkins = {
        'clientsSkinsVencidos': [],
        'clientsSkinsActivos': []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  const _0x1948e7 = 'https://wriseextenstion.com/wormExtension/api/serversTimMap.php?v=' + TIME;
  try {
    const _0x5548ec = await fetch(_0x1948e7);
    const _0x22c50b = await _0x5548ec.text();
    const _0x4ea406 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    const _0x2422b6 = [..._0x22c50b.matchAll(_0x4ea406)];
    serverDataTimMap = _0x2422b6.map(_0x2370f1 => {
      const _0x49516a = _0x2370f1[0x1];
      const _0x23b48d = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      const _0x20a7b1 = _0x49516a.match(_0x23b48d);
      if (!_0x20a7b1) {
        return null;
      }
      const _0x3b8dbc = _0x20a7b1[0x3].replace(/\\\//g, '/');
      const _0x5cd4a5 = _0x20a7b1[0x2];
      const _0x518ad8 = decodeUnicode(_0x20a7b1[0x4].trim());
      const _0x4ea9e5 = /<img src=\\"(.*?)\\"/;
      const _0x2d9184 = _0x49516a.match(_0x4ea9e5);
      const _0x5e0038 = _0x2d9184 ? _0x2d9184[0x1].replace(/\\\//g, '/') : '';
      return {
        'dataCon': _0x3b8dbc,
        'dataRoom': _0x5cd4a5,
        'dataType': "false",
        'imgSrc': _0x5e0038,
        'serverName': _0x518ad8
      };
    }).filter(Boolean);
  } catch (_0x5acc24) {
    console.error("Error al cargar servidores TimMap:", _0x5acc24);
  }
}
var top1Servers = {};
async function extractTopScores() {
  const _0x283b82 = "https://wrise.xyz:3305/data?v=" + Date.now();
  try {
    let _0x2432ba = await fetch(_0x283b82);
    if (!_0x2432ba.ok) {
      throw new Error("HTTP error! Status: " + _0x2432ba.status);
    }
    let _0x42d0b1 = await _0x2432ba.json();
    top1Servers = {};
    for (let _0x4d5916 in _0x42d0b1) {
      const _0x34e7fc = _0x42d0b1[_0x4d5916];
      if (!_0x34e7fc.wsUrl) {
        continue;
      }
      const _0x42d444 = _0x34e7fc.players || [];
      const _0x47e1b6 = _0x34e7fc.wsUrl;
      if (_0x42d444.length > 0x0) {
        let _0x38e99a = _0x42d444.reduce((_0x29e172, _0x46f607) => _0x46f607.Score > _0x29e172.Score ? _0x46f607 : _0x29e172, _0x42d444[0x0]);
        let _0x496cd5 = formatScore(_0x38e99a.Score);
        let _0xbe6f1 = getStatusColor(_0x38e99a.Score);
        top1Servers[_0x47e1b6] = {
          'ServerName': _0x38e99a.ServerName,
          'Initials': _0x4d5916,
          'Score': _0x496cd5,
          'StatusColor': _0xbe6f1,
          'Avatar': _0x34e7fc.avatar || null,
          'Name': _0x38e99a.Name || "(unknown)",
          'TopPlayers': _0x42d444.slice(0x0, 0xa)
        };
      } else if (_0x34e7fc.wsUrl) {
        top1Servers[_0x47e1b6] = {
          'ServerName': _0x34e7fc.serverName,
          'Initials': _0x4d5916,
          'Score': "Vacío",
          'StatusColor': 'gray',
          'Avatar': _0x34e7fc.avatar || "https://i.imgur.com/placeholder.png",
          'Name': "(N/A)",
          'TopPlayers': []
        };
      }
    }
    console.log("Datos de Top 1 organizados por WSS:", top1Servers);
  } catch (_0x450960) {
    console.error("Error fetching server data:", _0x450960);
  }
}
let serverData = [];
async function loadServersWormWorld() {
  const _0x402e88 = Date.now();
  const _0x15ab24 = "https://wormrise.github.io/extension/w2/api/servers.json?v=" + _0x402e88;
  try {
    const _0x2ed67a = await fetch(_0x15ab24);
    const _0x5c93c5 = await _0x2ed67a.json();
    serverData = _0x5c93c5.map(_0x5c0602 => ({
      'dataCon': _0x5c0602.dataCon,
      'dataRoom': _0x5c0602.dataRoom,
      'serverName': _0x5c0602.serverName,
      'dataType': _0x5c0602.dataType,
      'imgSrc': _0x5c0602.imgSrc
    }));
    console.log(serverData);
  } catch (_0x365f84) {
    console.error("Error al cargar los servidores:", _0x365f84);
  }
}
function formatScore(_0x164cd2) {
  if (_0x164cd2 >= 0xf4240) {
    return (_0x164cd2 / 0xf4240).toFixed(0x1) + 'M';
  } else {
    if (_0x164cd2 >= 0x3e8) {
      return (_0x164cd2 / 0x3e8).toFixed(0x1) + 'K';
    }
  }
  return _0x164cd2.toString();
}
function getStatusColor(_0x2466f0) {
  if (_0x2466f0 > 0x989680) {
    return 'green';
  } else {
    return _0x2466f0 > 0x1e8480 ? 'orange' : "red";
  }
}
async function registerUpdatePlayer(_0x518297) {
  await fetch("https://wormrise.github.io/extension/w2/api/register_update_player.php", {
    'method': "POST",
    'body': JSON.stringify({
      'data': _0x518297
    })
  }).then(_0xf9b98d => _0xf9b98d.json()).then(_0x5a4831 => {
    console.log(_0x5a4831);
  });
}
async function checkSubscriptionExpired(_0x7e7ea7) {
  await fetch("https://wormrise.github.io/extension/w2/api/checkSubscriptionExpired.php", {
    'method': 'POST',
    'body': JSON.stringify({
      'code': _0x7e7ea7
    })
  }).then(_0x1c4e0b => _0x1c4e0b.json()).then(_0x26bd83 => {
    console.log(_0x26bd83);
  });
}
function fetchCustomLogo(_0x1e2b9c) {
  $.ajax({
    'url': 'https://wormrise.github.io/extension/w2/api/streming.php',
    'method': "GET",
    'dataType': "json",
    'success': function (_0x1e2114) {
      var _0x16aa50 = _0x1e2114.allstreamers.streamers.filter(function (_0x1e1fab) {
        return _0x1e1fab.id_game === _0x1e2b9c;
      });
      if (_0x16aa50.length === 0x0) {
        console.log("No hay streamers online.");
        return;
      }
      var _0x24a3f2 = _0x16aa50[0x0];
      $(".mm-logo").attr("src", _0x24a3f2.logo);
      $(".loading-logo").attr("src", _0x24a3f2.logo);
      $('.mm-logo').attr('src', _0x24a3f2.logo);
    },
    'error': function (_0x3471da) {
      console.error("Error al obtener los datos:", _0x3471da);
    }
  });
}
async function init() {
  await Promise.all([extractTopScores(), loadServersWormWorld(), loadServersTimMap()]);
  console.log("Todo listo");
  renderInterface(serverData, serverDataTimMap, top1Servers);
}
function renderInterface(_0x10bdab, _0x2deec8, _0x274f58) {
  $('.description-text').empty();
  let _0x111cc3 = "wormworld";
  const _0x3ee368 = {
    'sao': 'br',
    'vin': 'us',
    'dal': 'us',
    'fra': 'de',
    'sgp': 'sg',
    'tok': 'jp',
    'syd': 'au',
    'lon': 'gb',
    'tor': 'ca',
    'mex': 'mx',
    'sin': 'sg',
    'hil': 'us',
    'gra': 'de'
  };
  const _0x1a0c25 = [{
    'code': 'br',
    'name': 'Peru'
  }, {
    'code': 'mx',
    'name': "Mexico"
  }, {
    'code': 'us',
    'name': "EEUU"
  }, {
    'code': 'ca',
    'name': "Canada"
  }, {
    'code': 'de',
    'name': 'Germania'
  }, {
    'code': 'fr',
    'name': 'Francia'
  }, {
    'code': 'sg',
    'name': "Singapur"
  }, {
    'code': 'jp',
    'name': 'Japon'
  }, {
    'code': 'au',
    'name': 'Australia'
  }, {
    'code': 'gb',
    'name': "Granbretana"
  }];
  function _0xb829cc(_0xe28633) {
    if (/^\d+[a-z]{2}$/i.test(_0xe28633)) {
      return _0xe28633.slice(-0x2).toLowerCase();
    } else {
      return /^[A-Z]{2}_\d+$/i.test(_0xe28633) ? _0xe28633.split('_')[0x0].toLowerCase() : "otros";
    }
  }
  $(".description-text").append("\n        <div class=\"switchServerSource\" style=\"position: absolute; top: -5px; left: 200px; width: 200px;\">\n            <button id=\"toggleServerSource\" style=\"margin-bottom: 10px; padding: 6px 12px; background: #252535; color: white; border: 1px solid; border-radius: 1px;\">\n                🔄 Switch to TimMap Servers\n            </button>\n        </div>\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let _0x5eae94 = $("#optionSelect").val();
    let _0x38b3ce = $("#numberInput").val();
    if (!_0x5eae94 || _0x38b3ce === '') {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
      return;
    }
    zw_lastserver = "wss://" + _0x5eae94 + ':' + _0x38b3ce + "/wormy";
    anApp.r.Hd();
    anApp.sa(zw_lastserver);
    zw_servertext.text = '' + zw_lastserver.replace('wss://', '').replace(".wormate.io", '').replace("/wormy", '');
  });
  const _0x26202c = $("<ul class=\"ui-tabs-nav\"></ul>");
  const _0x5a5297 = $("<div class=\"servers-container\"></div>");
  _0x1a0c25.forEach(function (_0xc3b25a, _0x518df1) {
    _0x26202c.append("\n            <li class=\"ui-tabs-tab ui-tab " + (_0x518df1 === 0x0 ? "ui-tab-active" : '') + "\" data-country=\"" + _0xc3b25a.code + "\">\n                <a><span class=\"flag " + _0xc3b25a.code + "\"></span></a>\n            </li>\n        ");
    _0x5a5297.append("\n            <div class=\"servers-" + _0xc3b25a.code + "\" style=\"display: " + (_0x518df1 === 0x0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
  });
  $(".description-text").append(_0x26202c, _0x5a5297);
  $(".ui-tabs-tab").click(function () {
    var _0x10fc8c = $(this).data('country');
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + _0x10fc8c).fadeIn(0xc8);
  });
  function _0x5561fd(_0x228eb7) {
    $(".server-table tbody").empty();
    _0x228eb7.forEach(function (_0x2b59a9) {
      const _0x51794e = {
        'serverName': _0x2b59a9.serverName || _0x2b59a9.name || '???',
        'dataCon': _0x2b59a9.dataCon || _0x2b59a9.wss,
        'dataRoom': _0x2b59a9.dataRoom || _0x2b59a9.room || "???",
        'imgSrc': _0x2b59a9.imgSrc || _0x2b59a9.streamerImg || "https://i.imgur.com/placeholder.png"
      };
      _0xe1e0a9(_0x51794e, _0x274f58);
    });
  }
  $(document).on("click", '#toggleServerSource', function () {
    _0x111cc3 = _0x111cc3 === "wormworld" ? "timmap" : "wormworld";
    $(this).text(_0x111cc3 === "wormworld" ? "🔄 Switch to TimMap Servers" : "🔄 Switch to WormWorld Servers");
    _0x5561fd(_0x111cc3 === "wormworld" ? _0x10bdab : _0x2deec8);
  });
  _0x5561fd(_0x10bdab);
  function _0xe1e0a9(_0x3abd23, _0x26c221) {
    let _0x5dff97 = _0xb829cc(_0x3abd23.dataRoom);
    if (_0x5dff97 === 'ae') {
      _0x5dff97 = 'gb';
    }
    if (!_0x1a0c25.some(_0x1c6f4d => _0x1c6f4d.code === _0x5dff97)) {
      return;
    }
    let _0x492b15 = _0x3abd23.dataCon?.["match"](/wss:\/\/([a-z]+)-/i);
    let _0x2ebc57 = _0x492b15 ? _0x492b15[0x1] : null;
    let _0x511fa5 = _0x3ee368[_0x2ebc57] ? _0x3ee368[_0x2ebc57].toUpperCase() : "Desconocido";
    const _0xb25d5d = _0x3abd23.dataCon || _0x3abd23.wss;
    let _0x457110 = _0x26c221[_0xb25d5d] || {
      'Score': "???",
      'StatusColor': "gray",
      'Avatar': "https://i.imgur.com/placeholder.png"
    };
    let _0x5ce674 = $("\n            <tr class=\"server-row\" data-wss=\"" + _0xb25d5d + "\" value=\"" + _0x3abd23.dataRoom + "\">\n                <td class=\"server-status\" data-score=\"" + _0x457110.Score + "\" data-img=\"" + _0x457110.Avatar + "\">\n                    <span class=\"status-dot\" style=\"background-color: " + _0x457110.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\">" + _0x3abd23.serverName + "</td>\n                <td class=\"server-region\">" + _0x511fa5 + "</td>\n                <td class=\"server-top1\" data-score=\"" + _0x457110.Score + "\" data-img=\"" + _0x457110.Avatar + "\">" + _0x457110.Score + "</td>\n                <td><img src=\"" + _0x3abd23.imgSrc + "\" class=\"streamer-image\"></td>\n                <td><button class=\"btn-check-ports\">📡📶</button></td>\n            </tr>\n        ");
    $(".servers-" + _0x5dff97 + " tbody").append(_0x5ce674);
  }
  $(document).on("click", ".server-row", function () {
    let _0x39b569 = $(this).attr('value');
    let _0x353730 = $(this).attr("data-wss");
    if (_0x353730) {
      anApp.r.Hd();
      anApp.sa(_0x353730);
      zw_servertext.text = _0x39b569;
      setTimeout(() => {
        zw_servertext.text = _0x39b569;
      }, 0x7d0);
    }
  });
  createFloatingElements();
  bindHoverEvents(".server-top1");
  bindHoverEvents(".server-status");
}
function createFloatingElements() {
  if (!document.getElementById("avatarPreview")) {
    const _0x4e5158 = document.createElement("div");
    _0x4e5158.id = "avatarPreview";
    Object.assign(_0x4e5158.style, {
      'position': 'absolute',
      'display': "none",
      'pointerEvents': 'none',
      'opacity': '0',
      'transition': "opacity 0.3s ease",
      'zIndex': "9999"
    });
    const _0x33642e = document.createElement("img");
    _0x33642e.id = "avatarImage";
    Object.assign(_0x33642e.style, {
      'width': '100px',
      'height': "100px",
      'borderRadius': "50%",
      'border': "2px solid #fff",
      'boxShadow': "0 0 10px rgba(0,0,0,0.5)",
      'backgroundColor': '#1a1a1a'
    });
    _0x4e5158.appendChild(_0x33642e);
    document.body.appendChild(_0x4e5158);
  }
  if (!document.getElementById('top10Preview')) {
    const _0x1385e9 = document.createElement("div");
    _0x1385e9.id = "top10Preview";
    Object.assign(_0x1385e9.style, {
      'position': "absolute",
      'display': "none",
      'pointerEvents': "none",
      'opacity': '0',
      'transition': "opacity 0.3s ease",
      'zIndex': "9999",
      'padding': '10px',
      'borderRadius': "8px",
      'backgroundColor': "rgba(30, 30, 40, 0.95)",
      'color': "#fff",
      'fontSize': "12px",
      'minWidth': "230px",
      'boxShadow': "0 0 10px rgba(0,0,0,0.6)",
      'fontFamily': "Segoe UI, sans-serif"
    });
    const _0x40c937 = document.createElement("div");
    _0x40c937.id = "top10List";
    _0x1385e9.appendChild(_0x40c937);
    document.body.appendChild(_0x1385e9);
  }
}
function showAvatar(_0x2984ab, _0x26f3bc) {
  if (_0x26f3bc) {
    $("#avatarImage").attr("src", _0x26f3bc);
    $("#avatarPreview").css({
      'top': _0x2984ab.pageY + 0xa + 'px',
      'left': _0x2984ab.pageX + 0xa + 'px',
      'display': 'block'
    }).stop(true, true).fadeTo(0xc8, 0x1);
  }
}
function showTop10(_0x10b50e, _0x1fd6ee) {
  if (_0x1fd6ee.length > 0x0) {
    let _0x37bd2b = "<div style=\"font-size:14px; font-weight:bold; text-align:center; margin-bottom:8px;\">🏆 Top 10 🏆</div><hr style=\"border-color:#444;\">";
    _0x37bd2b += _0x1fd6ee.map((_0x4de57c, _0x4273fe) => {
      const _0x2dd04a = _0x4273fe === 0x0;
      return "\n                <div style=\"display:flex; justify-content:space-between; margin: 4px 0; " + (_0x2dd04a ? "font-weight:bold; color:#ffd700;" : '') + "\">\n                    <span>" + (_0x2dd04a ? '⭐️' : _0x4273fe + 0x1 + '.') + " " + _0x4de57c.Name.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '').trim() + "</span>\n                    <span>" + formatScore(_0x4de57c.Score) + "</span>\n                </div>";
    }).join('');
    $("#top10List").html(_0x37bd2b);
    $("#top10Preview").css({
      'top': _0x10b50e.pageY + 0xa + 0x64 + 0xa + 'px',
      'left': _0x10b50e.pageX + 0xa + 'px',
      'display': "block"
    }).stop(true, true).fadeTo(0xc8, 0x1);
  }
}
function bindHoverEvents(_0x5634ca) {
  $(document).off("mouseenter", _0x5634ca).on("mouseenter", _0x5634ca, function (_0x317213) {
    const _0x45fe8b = $(this).closest('tr').attr("data-wss");
    if (!_0x45fe8b) {
      return;
    }
    const _0x553b7a = top1Servers[_0x45fe8b];
    if (_0x553b7a) {
      showAvatar(_0x317213, _0x553b7a.Avatar);
      showTop10(_0x317213, _0x553b7a.TopPlayers || []);
    }
  });
  $(document).off("mousemove", _0x5634ca).on("mousemove", _0x5634ca, function (_0x5ee25b) {
    $("#avatarPreview").css({
      'top': _0x5ee25b.pageY + 0xa + 'px',
      'left': _0x5ee25b.pageX + 0xa + 'px'
    });
    $("#top10Preview").css({
      'top': _0x5ee25b.pageY + 0xa + 0x64 + 0xa + 'px',
      'left': _0x5ee25b.pageX + -0x4b + 'px'
    });
  });
  $(document).off('mouseleave', _0x5634ca).on("mouseleave", _0x5634ca, function () {
    $('#avatarPreview').stop(true, true).fadeTo(0x12c, 0x0, function () {
      $(this).hide();
    });
    $("#top10Preview").stop(true, true).fadeTo(0x12c, 0x0, function () {
      $(this).hide();
    });
  });
}
init();
function sanitize(_0x571df0) {
  return _0x571df0.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '').trim();
}
function obtenerImagenPorSeleccion(_0x434341) {
  let _0x3a1489 = '';
  switch (_0x434341) {
    case '0':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bkgnd0.png";
      break;
    case '1':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bkgnd8.png";
      break;
    case '2':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bkgnd9.png";
      break;
    case '3':
      _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bkgnd10.png';
      break;
    case '4':
      _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bkgnd6.png';
      break;
    case '5':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case '6':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case '7':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case '8':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case '9':
      _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png';
      break;
    case '10':
      _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png';
      break;
    case '11':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/arena01.png";
      break;
    case '12':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case '13':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case '14':
      _0x3a1489 = "https://asserts.wormworld.io/backgrounds/arena04.png";
      break;
    default:
      console.warn("Valor no v�lido, se utilizar� una imagen por defecto.");
  }
  return _0x3a1489;
}
function startInterval() {
  clearInterval(intervalID);
  if (intervalID === null) {
    intervalID = setInterval(function () {
      var _0x78aa4c = anApp.s.H.sk;
      let _0x218713 = Math.PI;
      var _0x25833b = _0x78aa4c + _0x218713 / 0x168 * 0x9;
      if (_0x25833b >= _0x218713) {
        _0x25833b = -_0x78aa4c;
      }
      anApp.s.H.sk = _0x25833b;
    }, 0x37);
  }
}
function adjustInterval() {
  if (cycleCounter >= 0x28) {
    if (isIncrementing) {
      initialInterval += 0x19;
    } else {
      initialInterval -= 0x64;
    }
    cycleCounter = 0x1;
  }
}
function controlIntervalAdjustment() {
  if (initialInterval === 0x37 && cycleCounter >= 0x28) {
    initialInterval += 0x19;
    cycleCounter = 0x1;
    isIncrementing = true;
  }
  if (initialInterval === 0x50) {
    adjustInterval();
  }
  if (initialInterval === 0x69) {
    adjustInterval();
  }
  if (initialInterval === 0x82) {
    adjustInterval();
  }
  if (initialInterval === 0x9b) {
    adjustInterval();
  }
  if (initialInterval === 0xb4) {
    adjustInterval();
  }
  if (initialInterval === 0xcd) {
    adjustInterval();
  }
  if (initialInterval === 0xe6) {
    adjustInterval();
  }
  if (initialInterval === 0xff) {
    adjustInterval();
  }
  if (initialInterval === 0x118) {
    adjustInterval();
  }
  if (initialInterval === 0x131) {
    adjustInterval();
  }
  if (initialInterval === 0x14a) {
    adjustInterval();
  }
  if (initialInterval === 0x163) {
    adjustInterval();
  }
  if (initialInterval === 0x17c) {
    adjustInterval();
  }
  if (initialInterval === 0x195) {
    adjustInterval();
  }
  if (initialInterval === 0x1ae) {
    adjustInterval();
  }
  if (initialInterval === 0x1c7 && cycleCounter >= 0x28) {
    initialInterval -= 0x64;
    cycleCounter = 0x1;
    isIncrementing = false;
  }
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (intervalID === null) {
    let _0xc5b195 = anApp.s.H.sk;
    let _0x30b06e = Math.PI;
    let _0xffa5ee = _0xc5b195 + _0x30b06e / 0x168 * 0x9;
    if (_0xffa5ee >= _0x30b06e) {
      _0xffa5ee = -_0xc5b195;
    }
    anApp.s.H.sk = _0xffa5ee;
    cycleCounter += 0x1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
    }
  }
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 0x37;
  cycleCounter = 0x1;
  isIncrementing = true;
  manageIntervalCycle();
}
const isPremiumUser = localStorage.getItem("premium") === "true";
const wormxt_5dlrs_Obj = {
  'visiblePowersAll': false,
  'speed_zigzag': true
};
var wormxt_Obj = {
  'laserColor': "FFFFFF",
  'colorFondo': "0D0400",
  'colorBorde': "FF0000",
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': false,
  'sectores': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
const showVersionPays = async function (_0x597e45) {
  var _0x53d3e1 = clientes.clientesActivos.find(function (_0x11db33) {
    return _0x11db33.client_ID === _0x597e45.user_data.userId;
  });
  if (_0x53d3e1) {
    console.log("El ID " + _0x597e45.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    const _0x1fa3d4 = new Date();
    const _0x3e4aa1 = new Date(_0x53d3e1.client_DateExpired);
    if (_0x1fa3d4 > _0x3e4aa1) {
      console.log("La fecha de expiraci�n ha vencido.");
      localStorage.setItem("premium", "false");
    } else {
      console.log("La fecha de expiraci�n es v�lida.");
      settings5dolars(_0x53d3e1.client_DateExpired);
      localStorage.setItem("premium", "true");
    }
  } else {
    console.log("El ID generado no coincide con ning�n ID almacenado en la base de datos.");
    localStorage.setItem("premium", "false");
  }
};
function setSectorsGame() {
  zw_Background.removeChildren();
  zw_Background.clear();
  console.log("0D0400");
  zw_Background.removeChildren();
  zw_Background.clear();
  zw_Background.lineStyle(0x1, 0xff0000, 0x1);
  zw_Background.drawCircle(0x0, 0x0, 0x1f4);
  zw_Background.endFill();
}
function decodeUnicode(_0x1e3d1d) {
  return _0x1e3d1d.replace(/\\u[\dA-F]{4}/gi, function (_0x914601) {
    return String.fromCharCode(parseInt(_0x914601.replace(/\\u/, ''), 0x10));
  }).replace(/\\u[0-9A-F]{2}/g, function (_0x233311) {
    return String.fromCharCode(parseInt(_0x233311.replace(/\\u/, ''), 0x10));
  });
}
const settings5dolars = async function (_0x384b68) {
  var _0x5ebec1 = $("div[category='theme']");
  addMinicolor(_0x5ebec1[0x1], "gameColorGroup", "GAME", "colorFondo", "0D0400");
  addMinicolor(_0x5ebec1[0x1], "borderColorGroup", "BORDE GAME", "colorBorde", 'FF0000');
  addMinicolor(_0x5ebec1[0x1], "laserColorGroup", 'LASER', "laserColor", "FFFFFF");
  addMinicolor(_0x5ebec1[0x1], "hsTextColorGroup", "HS TEXT", 'hsTextColor', "FFFFFF");
  addMinicolor(_0x5ebec1[0x1], "killTextColorGroup", "KILL TEXT", "killTextColor", "FFFFFF");
  addMinicolor(_0x5ebec1[0x1], "minimapBorderColorGroup", "MINIMAP BORDER", "minimapBorderColor", "FFFFFF");
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css('position', 'absolute').css("display", "block");
    giroActive = false;
    toggleGiro();
  });
  let _0x40fd36 = localStorage.getItem("showTeamList");
  let _0x5abd16;
  if (_0x40fd36 === "true") {
    _0x5abd16 = true;
    theoKzObjects.showTeamList = true;
  } else if (_0x40fd36 === 'false') {
    _0x5abd16 = false;
    theoKzObjects.showTeamList = false;
  } else {
    _0x5abd16 = true;
  }
  let _0x2d7da2 = localStorage.getItem("showAnimationHeadshot");
  let _0x57769f;
  if (_0x2d7da2 === 'true') {
    _0x57769f = true;
    theoKzObjects.animationHeadshot = true;
  } else if (_0x2d7da2 === "false") {
    _0x57769f = false;
    theoKzObjects.animationHeadshot = false;
  } else {
    _0x57769f = true;
  }
  $("#settings-backgroundSolid-switch").prop("checked", false);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $('#showAnimationHeadshot').on("change", function () {
    theoKzObjects.animationHeadshot = $(this).is(':checked');
    localStorage.setItem("showAnimationHeadshot", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $("#showTeamList").on("change", function () {
    theoKzObjects.showTeamList = $(this).is(":checked");
    localStorage.setItem("showTeamList", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    giroActive = true;
    toggleGiro();
  });
  let _0x303788 = $("<div class=\"cursor-menu\"></div>");
  let _0x5e6601 = $("<div class=\"icon-selector\"></div>");
  for (let _0x5ca10c = 0x1; _0x5ca10c < 0x2a; _0x5ca10c++) {
    const _0x521918 = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + _0x5ca10c.toString().padStart(0x2, '0') + '.cur';
    const _0x5ae730 = _0x5ca10c === 0x1 ? "active" : '';
    const _0x359e50 = $('<img>').attr({
      'src': _0x521918,
      'data-cursor': _0x521918,
      'alt': "Cursor " + _0x5ca10c
    });
    const _0x5cc117 = $('<div>').addClass("cursor-box icon-selector__item").addClass(_0x5ae730).append(_0x359e50);
    _0x5e6601.append(_0x5cc117);
  }
  _0x303788.append(_0x5e6601);
  $(".options-list.ps div[category=\"cursor\"]").append(_0x303788);
  $("#background-canvas").after("<div id=\"firefly-container\"></div>");
  for (let _0x5c5b48 = 0x0; _0x5c5b48 < 0x14; _0x5c5b48++) {
    let _0x3b7d9d = $("<div>").addClass("firefly");
    _0x3b7d9d.css({
      'left': Math.random() * window.innerWidth + 'px',
      'top': Math.random() * window.innerHeight + 'px',
      'animationDuration': 0x2 + Math.random() + "s, " + (0x5 + Math.random() * 0xa) + 's'
    });
  }
  $(".profile-info").prepend("\n        <div class=\"premium-badge\">\n            ⭐ Premium ⭐ <br> \n            Expire: <span id=\"premium-expiration\">" + _0x384b68 + "</span>\n        </div>\n    ");
  $(".hotkey-container").append("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $("#zoom-key").val('z');
  $("#restart-key").val('r');
  $("#laserHSkey-key").val('l');
  $('#wormExplot-key').val('x');
  $("#giro-key").val('s');
  $("#noSkin-key").val('f');
  $("#noAuras-key").val('g');
  $("#sectores-key").val('q');
  $('#background-key').val('c');
  $("#hotkeys-icon").on("click", function () {
    $('#hotkeys-icon').addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $('#user-section').hide();
  });
  $('.key-input').keydown(function (_0x3cbf15) {
    _0x3cbf15.stopPropagation();
  });
  $(".key-input").keypress(function (_0xd8b075) {
    _0xd8b075.preventDefault();
    var _0x156d22 = _0xd8b075.key.toLowerCase();
    $(this).val(_0x156d22);
    var _0x47635c = $(this).attr('id');
    switch (_0x47635c) {
      case 'zoom-key':
        cambiarKey("zoom", _0x156d22);
        break;
      case "restart-key":
        cambiarKey('restart', _0x156d22);
        break;
      case "wormExplot-key":
        cambiarKey("wormExplot", _0x156d22);
        break;
      case "laserHSkey-key":
        cambiarKey("laserHS", _0x156d22);
        break;
      case 'giro-key':
        cambiarKey('giro', _0x156d22);
        break;
      case 'noSkin-key':
        cambiarKey("noSkin", _0x156d22);
        break;
      case "noAuras-key":
        cambiarKey("noAuras", _0x156d22);
        break;
      case "sectores-key":
        cambiarKey("sectores", _0x156d22);
        break;
      case "background-key":
        cambiarKey("background", _0x156d22);
        break;
    }
    $(this).blur();
  });
  $("#user-section").append(_0x5e6601);
  $(".cursor-box").on("click", function () {
    var _0x493176 = $(this).find("img").attr("src");
    $("body, button, input, a, textarea, select, div, span, p").css({
      'cursor': "url(" + _0x493176 + "), auto"
    });
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + _0x384b68 + '</span>');
  $('#sound-hs').val("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  $("#sound-10hs").val("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_hssound = new Audio($("#sound-hs").val());
  zw_laughsound = new Audio($('#sound-10hs').val());
  $('#sound-hs').on('input', function () {
    zw_hssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    zw_laughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual].laser + "</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-sectores-switch\">" + "<span class=\"names_settings\" id=\"sectores\"> " + lenguaje[idiomaActual].sectores + "</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-notAbilityAll-switch\">" + "<span class=\"names_settings\"> : Show All Power-Ups</span>" + "</div>" + "<div class=\"settings-checkbox\">" + "<input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\">" + "<span class=\"names_settings\"> : Show Speed&Zigzag</span>" + "</div>" + "<div id=\"display_color\">" + "<div class=\"container\">" + "<input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\">" + "<span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual].colorJuego + " </span>" + "</div>" + "<div class=\"container\">" + "<input id=\"color_palet\" type=\"color\" value=\"#00243E\">" + "<span class=\"names_settings\" id=\"colorLaser\"> " + lenguaje[idiomaActual].colorLaser + " </span>" + "</div>" + "<div class=\"container\">" + "<input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\">" + "<span class=\"names_settings\" id=\"colorBorde\"> " + lenguaje[idiomaActual].colorBorde + '</span>' + "</div>");
  const _0x41fc45 = {
    'color_paletRGB': _0x4a250f => wormxt_Obj.colorFondo = _0x4a250f,
    'color_palet': _0x44166a => wormxt_Obj.laserColor = _0x44166a,
    'color_palet2': _0x5b349b => wormxt_Obj.colorBorde = _0x5b349b
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const _0x2bcb8c = $(this).attr('id');
    const _0x180ca5 = $(this).val().replace('#', '');
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + _0x2bcb8c + ": " + _0x180ca5);
    if (_0x41fc45[_0x2bcb8c]) {
      _0x41fc45[_0x2bcb8c](_0x180ca5);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop('checked', false);
  $('#settings-notAbilityAll-switch').on('click', function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
    }
  });
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#settings-Speed_ZigZag-switch").prop('checked', true);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.speed_zigzag = true;
    } else {
      wormxt_5dlrs_Obj.speed_zigzag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", false);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.laserHS = true;
    } else {
      wormxt_Obj.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop('checked', wormxt_Obj.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      zw_explotWubtracttexture.interactive = false;
    } else {}
  });
  $("#settings-sectores-switch").prop("checked", false);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
    } else {
      wormxt_Obj.sectores = false;
      setSectorsGame();
    }
  });
};
var TIME = new Date().getTime();
var linkCSS = "https://zwormextenstion.com/wormExtension/css/style2.css?v=" + TIME;
var unlockSkinsExecuted = false;
var unlockSkinsPrivate = async function (_0x224688) {
  if (unlockSkinsExecuted) {
    console.log("unlockSkinsPrivate ya fue ejecutada anteriormente.");
    return;
  }
  unlockSkinsExecuted = true;
  var _0x5bbe93 = _0x224688.u.si.userId;
  var _0x2af705 = clientsSkins.clientsSkinsActivos.find(_0x455b5a => _0x455b5a.client_ID === _0x5bbe93);
  if (_0x2af705 && _0x2af705.Client_VisibleSkinPrivate) {
    console.log(_0x2af705);
    const _0x863e6b = new Date();
    const _0x210992 = new Date(_0x2af705.client_DateExpired);
    if (_0x863e6b > _0x210992) {
      console.log("La fecha de skins expiración ha vencido.");
    } else {
      console.log("La fecha de skins expiración es válida.");
      let _0x48d442 = Array.isArray(_0x2af705.Client_VisibleSkinPrivate) ? _0x2af705.Client_VisibleSkinPrivate : [_0x2af705.Client_VisibleSkinPrivate];
      _0x48d442.forEach(_0x4f8870 => {
        let _0x47db97 = theoKzObjects.idSkin.find(_0x1c9531 => _0x1c9531.id === _0x4f8870);
        if (_0x47db97) {
          _0x47db97.nonbuyable = false;
        }
      });
      console.log("Skins privadas desbloqueadas para el usuario " + _0x5bbe93 + ':', _0x48d442);
    }
  } else {
    console.log("No se encontraron skins privadas para el usuario " + _0x5bbe93 + '.');
  }
};
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    zw_girosubtracttexture.texture = ungirotexture;
    zw_girosubtracttexture.alpha = 0.25;
    console.log("Giro deactivated");
    isRunning = false;
    initialInterval = 0x37;
    cycleCounter = 0x1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
  } else {
    zw_girosubtracttexture.alpha = 0.75;
    console.log("Giro activated");
    startInterval();
    isRunning = true;
  }
  giroActive = !giroActive;
}
const showServer2 = async function (_0x180e19) {
  updateBackground();
  fetchCustomLogo(_0x180e19.u.si.userId);
  zwormData.id_user = _0x180e19.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(_0x180e19, _0x180e19.u.si.userId);
  zw_hssound = new Audio("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  zw_laughsound = new Audio("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_explotWubtracttexture = new pixi.Sprite();
  zw_explotWubtracttexture.texture = explotWtexture;
  zw_explotWubtracttexture.interactive = true;
  zw_explotWubtracttexture.buttonMode = true;
  zw_explotWubtracttexture.x = -0x2d;
  zw_explotWubtracttexture.y = 0xa;
  zw_explotWubtracttexture.alpha = 0.25;
  function _0x3ac71d() {
    zw_explotWubtracttexture.interactive = false;
    var _0x2cbb14 = 0x0;
    var _0x527b39 = setInterval(function () {
      var _0x143b38 = 0x1 - 0.0075 * _0x2cbb14;
      zw_explotWubtracttexture.alpha = _0x143b38;
      _0x2cbb14++;
      if (_0x2cbb14 > 0x64) {
        clearInterval(_0x527b39);
        zw_explotWubtracttexture.alpha = 0.25;
        zw_explotWubtracttexture.interactive = true;
      }
    }, 100);
  }
  zw_explotWubtracttexture.on('mouseup', function () {
    _0x3ac71d();
    const _0x1b02d4 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(_0x1b02d4);
    setTimeout(() => {
      let _0x22870f = zw_lastserver;
      $(".overlay-2").css("position", 'static');
      if (_0x22870f) {
        anApp.r.Hd();
        anApp.sa(_0x22870f);
      }
    }, 0x3e8);
  });
  zw_girosubtracttexture = new pixi.Sprite();
  zw_girosubtracttexture.texture = ungirotexture;
  zw_girosubtracttexture.interactive = true;
  zw_girosubtracttexture.buttonMode = true;
  zw_girosubtracttexture.x = -0xa;
  zw_girosubtracttexture.y = 0xa;
  zw_girosubtracttexture.alpha = 0.25;
  zw_girosubtracttexture.on("mouseup", function () {
    toggleGiro();
  });
  if (zw_mobilecheck()) {
    zw_girosubtracttexture.x = -0x5a;
    zw_explotWubtracttexture.x = -0x87;
    zw_explotWubtracttexture.y = 0xa;
    let _0x3e91a4 = new Function("return PIXI;")();
    let _0x56d912 = _0x3e91a4.Texture.from('https://i.imgur.com/kGjR9yf.png');
    let _0x496c31 = _0x3e91a4.Texture.from('https://i.imgur.com/4JZUa1u.png');
    zw_zoomplustexture = new _0x3e91a4.Sprite();
    zw_zoomplustexture.texture = _0x56d912;
    zw_zoomplustexture.interactive = true;
    zw_zoomplustexture.buttonMode = true;
    zw_zoomplustexture.x = -0xa;
    zw_zoomplustexture.y = 0xa;
    zw_zoomplustexture.alpha = 0.25;
    zw_zoomplustexture.on("mouseup", function () {
      zw_updatezoom(Math.min(zw_multiplier + 0.25, 0x32));
    });
    zw_zoomsubtracttexture = new _0x3e91a4.Sprite();
    zw_zoomsubtracttexture.texture = _0x496c31;
    zw_zoomsubtracttexture.interactive = true;
    zw_zoomsubtracttexture.buttonMode = true;
    zw_zoomsubtracttexture.x = -0x2b;
    zw_zoomsubtracttexture.y = 0xa;
    zw_zoomsubtracttexture.alpha = 0.25;
    zw_zoomsubtracttexture.on("mouseup", function () {
      zw_updatezoom(Math.max(zw_multiplier - 0.25, 0.25));
    });
  }
  $('#game-canvas').after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  var _0x2cf202 = function () {
    $("#chatInput").css("display", "none").val('');
    $("#game-canvas").focus();
  };
  var _0x4f247b = function () {
    let _0x3f7fc0 = $("#chatInput").val();
    if ($.trim(_0x3f7fc0) !== '') {
      console.log("Mensaje enviado:", _0x3f7fc0);
      zwormData.message = _0x3f7fc0;
      setTimeout(() => {
        zwormData.message = '';
      }, 0x5dc);
    }
  };
  $("#chatInput").on("keydown", function (_0x13c5b2) {
    if (_0x13c5b2.key === "Enter") {
      _0x4f247b();
      _0x2cf202();
    } else if (_0x13c5b2.key === "Escape") {
      _0x2cf202();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $('#mm-leaders').html("<i class=\"material-icons\">leaderboard</i>");
  $('#mm-store').html("<i class=\"material-icons\">store</i>");
  $('#mm-zw-settings').html("<i class=\"material-icons\">manage_accounts</i>");
  $("#user-icon").on('click', function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass("active");
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#game-view").append("<span id=\"ping\"></span>");
  $("#aqnvgcpz05orkobh").replaceWith("\n    <div id=\"premium-panel\" style=\"box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 20px; text-align: center;\">\n        <h2 style=\"color: #fff;\">Get the Premium Version!</h2>\n        <p style=\"color: #f9f9f9;\">Access exclusive benefits by purchasing the premium version. Dedicated support, more options, and much more.</p>\n        <p style=\"color: #fff; font-weight: bold;\">Advertise with more visibility and reach more customers!</p>\n\n        <!-- Button to redirect to Discord -->\n        <button id=\"buy-premium\" style=\"background-color: #7289da; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;\">\n            Buy on Discord\n        </button>\n    </div>\n        ");
  $("#buy-premium").on('click', function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", '_blank');
  });
  $("#social-buttons").replaceWith('');
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $('.mm-logo').attr("src", "https://i.imgur.com/jXzoG5D.png");
  $(".loading-logo").attr("src", "https://i.imgur.com/jXzoG5D.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #zwplayagain, #final-replay").click(function () {
    $('.overlay-2').css('position', 'static');
  });
  $("#mm-zw-settings").click(function () {
    $("#settings-menu").css({
      'display': "flex",
      'opacity': '1'
    });
  });
  $('#popup-menu-back').click(function () {
    $("#settings-menu").css("opacity", '0');
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass('cambio-skin2');
    }, 0x15e);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass('cambio-skin2');
    }, 0x15e);
  });
  const _0xd2b4b4 = ['#mm-player-info', "#mm-skin-canv", '#mm-settings', "#mm-leaders", "#mm-store", '#mm-coins-box'];
  $(_0xd2b4b4.join(", ")).click(function () {
    $("#settings-menu").css({
      'display': "none",
      'opacity': '0'
    });
  });
  const _0x4f3529 = ["#mm-action-play", '#mm-settings', '#mm-leaders', "#mm-store", '#mm-zw-settings'];
  _0x4f3529.forEach(function (_0x2347c7) {
    $(_0x2347c7).hover(function () {
      $(this).css({
        'box-shadow': "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        'box-shadow': "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $(".mm-merchant-cont").replaceWith('');
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $('#zwplayagain').prepend("<i class=\"material-icons\">replay</i>");
  $(".mm-logo").on("click", function () {
    var _0x5f0dc5 = prompt("Extension 'W' or 'T':");
    if (_0x5f0dc5 === 'W') {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("WormWorld");
          }, 0x7d0);
        }, 0x5dc);
      }, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $('.servers-germania').html('');
      $('.servers-francia').html('');
      $(".servers-singapur").html('');
      $('.servers-japon').html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (a = 0x0; a < serverData.length; a++) {
          var _0xe4edeb = serverData[a].dataCon;
          var _0x5913df = serverData[a].dataRoom;
          var _0x2821f3 = serverData[a].serverName;
          var _0x107ad8 = serverData[a].imgSrc;
          let _0x211fd7 = "<a>\n                        <img src=\"" + _0x107ad8 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let _0x26252f = _0x5913df.match(/[a-zA-Z]+/g).join('');
          let _0x4bb650 = document.createElement('p');
          _0x4bb650.value = _0xe4edeb;
          _0x4bb650.innerHTML = _0x2821f3;
          let _0x3996a0 = document.createElement('div');
          _0x3996a0.setAttribute("class", "conteiner");
          if (_0x26252f == 'br') {
            $(".servers-peru").append(_0x3996a0);
            $(_0x3996a0).append(_0x4bb650);
            $(_0x4bb650).append(_0x211fd7);
          } else {
            if (_0x26252f == 'mx') {
              $(".servers-mexico").append(_0x3996a0);
              $(_0x3996a0).append(_0x4bb650);
              $(_0x4bb650).append(_0x211fd7);
            } else {
              if (_0x26252f == 'us') {
                $('.servers-eeuu').append(_0x3996a0);
                $(_0x3996a0).append(_0x4bb650);
                $(_0x4bb650).append(_0x211fd7);
              } else {
                if (_0x26252f == 'ca') {
                  $(".servers-canada").append(_0x3996a0);
                  $(_0x3996a0).append(_0x4bb650);
                  $(_0x4bb650).append(_0x211fd7);
                } else {
                  if (_0x26252f == 'de') {
                    $('.servers-germania').append(_0x3996a0);
                    $(_0x3996a0).append(_0x4bb650);
                    $(_0x4bb650).append(_0x211fd7);
                  } else {
                    if (_0x26252f == 'fr') {
                      $(".servers-francia").append(_0x3996a0);
                      $(_0x3996a0).append(_0x4bb650);
                      $(_0x4bb650).append(_0x211fd7);
                    } else {
                      if (_0x26252f == 'sg') {
                        $('.servers-singapur').append(_0x3996a0);
                        $(_0x3996a0).append(_0x4bb650);
                        $(_0x4bb650).append(_0x211fd7);
                      } else {
                        if (_0x26252f == 'jp') {
                          $(".servers-japon").append(_0x3996a0);
                          $(_0x3996a0).append(_0x4bb650);
                          $(_0x4bb650).append(_0x211fd7);
                        } else {
                          if (_0x26252f == 'au') {
                            $(".servers-australia").append(_0x3996a0);
                            $(_0x3996a0).append(_0x4bb650);
                            $(_0x4bb650).append(_0x211fd7);
                          } else if (_0x26252f == 'ae') {
                            $('.servers-granbretana').append(_0x3996a0);
                            $(_0x3996a0).append(_0x4bb650);
                            $(_0x4bb650).append(_0x211fd7);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          $(_0x4bb650).attr("class", "selectSala");
          $(_0x4bb650).attr("value", _0x5913df);
          $(_0x4bb650).attr("data-con", _0xe4edeb);
          $(_0x4bb650).click(function () {
            $(".overlay-2").css("position", "static");
            let _0x1c990c = $(this).attr("data-con");
            console.log(_0x1c990c);
            if (_0x1c990c) {
              _0x180e19.r.Hd();
              _0x180e19.sa(_0x1c990c);
              zw_servertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 0xbb8);
    } else if (_0x5f0dc5 === 'T') {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $('.mm-logo').text("Tim Map");
          }, 0x7d0);
        }, 0x5dc);
      }, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $(".servers-germania").html('');
      $(".servers-francia").html('');
      $('.servers-singapur').html('');
      $(".servers-japon").html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (a = 0x0; a < serverDataTimMap.length; a++) {
          var _0x352e31 = serverDataTimMap[a].dataCon;
          var _0x3716a4 = serverDataTimMap[a].dataRoom;
          var _0x1253ac = serverDataTimMap[a].serverName;
          var _0x11820a = serverDataTimMap[a].imgSrc;
          var _0x5a5dae = serverDataTimMap[a].secondHref;
          let _0x2a48fe = _0x3716a4.match(/[a-zA-Z]+/g).join('');
          let _0x445824 = document.createElement('p');
          _0x445824.value = _0x352e31;
          let _0x308e15 = "<a>\n                        <img src=\"" + _0x11820a + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let _0x45d038 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (_0x45d038.test(_0x308e15)) {
            _0x308e15 = _0x308e15.replace(_0x45d038, '');
          } else {
            _0x308e15;
          }
          let _0x3bf03 = /<span style=\\"(.*?)"><\\\/span>/;
          if (_0x3bf03.test(_0x1253ac)) {
            _0x1253ac = _0x1253ac.replace(_0x3bf03, "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>");
          } else {
            _0x1253ac;
          }
          _0x445824.innerHTML = _0x1253ac;
          let _0x472879 = document.createElement('div');
          _0x472879.setAttribute('class', "conteiner");
          if (_0x2a48fe == 'BR') {
            $(".servers-peru").append(_0x472879);
            $(_0x472879).append(_0x445824);
            $(_0x445824).append(_0x308e15);
          } else {
            if (_0x2a48fe == 'MX') {
              $('.servers-mexico').append(_0x472879);
              $(_0x472879).append(_0x445824);
              $(_0x445824).append(_0x308e15);
            } else {
              if (_0x2a48fe == 'US') {
                $(".servers-eeuu").append(_0x472879);
                $(_0x472879).append(_0x445824);
                $(_0x445824).append(_0x308e15);
              } else {
                if (_0x2a48fe == 'CA') {
                  $(".servers-canada").append(_0x472879);
                  $(_0x472879).append(_0x445824);
                  $(_0x445824).append(_0x308e15);
                } else {
                  if (_0x2a48fe == 'DE') {
                    $('.servers-germania').append(_0x472879);
                    $(_0x472879).append(_0x445824);
                    $(_0x445824).append(_0x308e15);
                  } else {
                    if (_0x2a48fe == 'FR') {
                      $('.servers-francia').append(_0x472879);
                      $(_0x472879).append(_0x445824);
                      $(_0x445824).append(_0x308e15);
                    } else {
                      if (_0x2a48fe == 'SG') {
                        $('.servers-singapur').append(_0x472879);
                        $(_0x472879).append(_0x445824);
                        $(_0x445824).append(_0x308e15);
                      } else {
                        if (_0x2a48fe == 'JP') {
                          $(".servers-japon").append(_0x472879);
                          $(_0x472879).append(_0x445824);
                          $(_0x445824).append(_0x308e15);
                        } else {
                          if (_0x2a48fe == 'AU') {
                            $(".servers-australia").append(_0x472879);
                            $(_0x472879).append(_0x445824);
                            $(_0x445824).append(_0x308e15);
                          } else if (_0x2a48fe == 'AE') {
                            $(".servers-granbretana").append(_0x472879);
                            $(_0x472879).append(_0x445824);
                            $(_0x445824).append(_0x308e15);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          $(_0x445824).attr("class", "selectSala");
          $(_0x445824).attr("value", _0x3716a4);
          $(_0x445824).attr('data-con', _0x352e31);
          $(_0x445824).click(function () {
            $(".overlay-2").css('position', "static");
            let _0x168a2d = $(this).attr("data-con");
            let _0x8b1ba9 = $(this).attr("value");
            console.log(_0x8b1ba9);
            if (_0x168a2d) {
              _0x180e19.r.Hd();
              _0x180e19.sa(_0x168a2d);
            }
          });
        }
      }, 0xbb8);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const ctx = {
  'fontStyle': {
    'blanco': new PIXI.TextStyle({
      'align': 'center',
      'fill': '#FFF',
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'wordWrap': true
    })
  }
};
timeFontColors = ["#FFD500", '#FFC75A', "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", '#ff0999'];
timeFontColors2 = ['#51a913', "#f97a1d", "#00B2ED", '#FF4544', "#0094D7", '#CCCF81', "#ff0999"];
for (let index = 0x0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    'align': "center",
    'fill': color,
    'fontSize': 0x19,
    'lineJoin': "round",
    'whiteSpace': "normal",
    'wordWrap': true,
    'dropShadow': true,
    'dropShadowBlur': 0x6,
    'fontWeight': "bold"
  });
}
ctx.ptc = {};
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0; i < portionTimes.length; i++) {
  let name = "clock_ad" + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle["tfc" + i]);
  ctx.ptc[name].y = 0x3d;
}
ctx.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived);
ctx.containerImgTest.anchor.set(0.5);
ctx.containerImgTest.x = window.innerWidth / 0x2;
ctx.containerImgTest.y = window.innerHeight / 0x2;
ctx.containerImgTest.alpha = 0.3;
ctx.pointsContainer = new PIXI.Container();
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    console.error("Error: window.coords no est� definido correctamente o no contiene playerX y playerY.");
    return;
  }
  if (!ctx.team_2) {
    ctx.team_2 = new PIXI.Graphics();
    ctx.team_2.zIndex = 0x2;
    ctx.team_2.alpha = 0.9;
    ctx.team_2.beginFill(0xff0000);
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
    ctx.team_2.lineStyle(0x1, "black");
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
  }
  ctx.team_2.x = window.coords.playerX;
  ctx.team_2.y = window.coords.playerY;
  if (ctx.pointsContainer) {
    ctx.pointsContainer.addChild(ctx.team_2);
  } else {
    console.error("Error: ctx.pointsContainer no est� definido.");
  }
};
ctx.teamsContainer = new PIXI.Container();
var createServerMessage = function (_0x1d7005, _0xe72002) {
  if (_0xe72002.trim() === '') {
    return;
  }
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': "toast-top-center",
    'preventDuplicates': true,
    'onclick': null,
    'showDuration': "300",
    'hideDuration': "1000",
    'timeOut': "5000",
    'extendedTimeOut': "1000",
    'showEasing': "swing",
    'hideEasing': "linear",
    'showMethod': "fadeIn",
    'hideMethod': 'fadeOut',
    'toastClass': 'server-message-toast'
  };
  toastr.success(_0xe72002, _0x1d7005, {
    'iconClass': "toast-info"
  });
};
var createTeamMessage = function (_0x5cfda9, _0xeb3f60, _0x2004f0) {
  if (_0x2004f0.trim() === '') {
    return;
  }
  gameState.players.forEach((_0x461ee8, _0x4b8cff) => {
    if (_0x461ee8.teamCode === _0x5cfda9 && _0x461ee8.nickname !== _0xeb3f60) {
      let _0x3a3d89 = _0x461ee8.nickname.length > 0xc ? _0x461ee8.nickname.slice(0x0, 0xc) : _0x461ee8.nickname;
      toastr.options = {
        'closeButton': false,
        'debug': false,
        'newestOnTop': true,
        'progressBar': true,
        'positionClass': "toast-top-center",
        'preventDuplicates': true,
        'onclick': null,
        'showDuration': '300',
        'hideDuration': '1000',
        'timeOut': "5000",
        'extendedTimeOut': "1000",
        'showEasing': "swing",
        'hideEasing': "linear",
        'showMethod': 'fadeIn',
        'hideMethod': "fadeOut"
      };
      toastr.success('' + _0x2004f0, '' + _0xeb3f60, {
        'iconClass': "toast-info"
      });
      console.log("Mensaje enviado por " + _0xeb3f60 + " recibido por el jugador " + _0x3a3d89 + " (" + _0x4b8cff + ") del equipo " + _0x5cfda9);
    }
  });
};
var createTeamUbication = function (_0x51da46, _0x92431f) {
  updateTeamTable(gameState, _0x51da46);
  gameState.players.forEach((_0x52d1f6, _0x1284c0) => {
    if (_0x52d1f6.teamCode === _0x51da46) {
      let _0x2d6831 = _0x52d1f6.teamColor || _0x92431f;
      let _0x14fba5 = _0x52d1f6.nickname.replace(/\u3164/g, '').replace(/ZW_\d+$/, '').trim();
      if (!ctx[_0x1284c0]) {
        ctx[_0x1284c0] = new PIXI.Graphics();
        ctx[_0x1284c0].zIndex = 0x2;
        ctx[_0x1284c0].alpha = 0.9;
        ctx.teamsContainer.addChild(ctx[_0x1284c0]);
        let _0x3e58f1 = new PIXI.Text(_0x14fba5, {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xe,
          'fill': _0x2d6831,
          'stroke': 0x0,
          'strokeThickness': 0x2
        });
        _0x3e58f1.anchor.set(0.5);
        _0x3e58f1.visible = false;
        _0x3e58f1.y = -0xf;
        ctx[_0x1284c0].addChild(_0x3e58f1);
        ctx[_0x1284c0].hitArea = new PIXI.Circle(0x0, 0x0, 2.4);
        ctx[_0x1284c0].interactive = true;
        ctx[_0x1284c0].buttonMode = true;
        ctx[_0x1284c0].on('mouseover', () => {
          _0x3e58f1.visible = true;
        });
        ctx[_0x1284c0].on("mouseout", () => {
          _0x3e58f1.visible = false;
        });
        ctx[_0x1284c0].on("mouseup", () => {
          _0x3e58f1.visible = !_0x3e58f1.visible;
        });
        ctx[_0x1284c0].on("touchend", () => {
          _0x3e58f1.visible = !_0x3e58f1.visible;
        });
        ctx[_0x1284c0].nameText = _0x3e58f1;
      }
      ctx[_0x1284c0].clear();
      ctx[_0x1284c0].beginFill(_0x2d6831);
      ctx[_0x1284c0].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x1284c0].endFill();
      ctx[_0x1284c0].lineStyle(0x1, 0x0);
      ctx[_0x1284c0].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x1284c0].endFill();
      ctx[_0x1284c0].x = _0x52d1f6.position.x;
      ctx[_0x1284c0].y = _0x52d1f6.position.y;
      ctx[_0x1284c0].nameText.y = -0xf;
      if (ctx[_0x1284c0].nameText.text !== _0x14fba5) {
        ctx[_0x1284c0].nameText.text = _0x14fba5;
      }
      if (ctx[_0x1284c0].nameText.style.fill !== _0x2d6831) {
        ctx[_0x1284c0].nameText.style.fill = _0x2d6831;
      }
    }
  });
};
var clearTeamUbication = function () {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(_0x5998cb => {
      if (ctx[_0x5998cb] instanceof PIXI.Graphics && ctx[_0x5998cb].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x5998cb]);
        ctx[_0x5998cb].destroy(true);
        delete ctx[_0x5998cb];
      }
      if (ctx[_0x5998cb + '_text'] && ctx[_0x5998cb + "_text"].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x5998cb + '_text']);
        ctx[_0x5998cb + "_text"].destroy(true);
        delete ctx[_0x5998cb + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
};
ctx.titleRec2 = new PIXI.Text("Friends", ctx.fontStyle.blanco);
ctx.titleRec2.y = -0x5;
ctx.containerHsRec2 = new PIXI.Container();
ctx.containerHsRec2.x = 0x1e;
ctx.containerHsRec2.y = 0xaa;
let playersTexts = [];
for (let index = 0x0; index < 0x5; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(wallBounce + '.', ctx.fontStyle.blanco);
  deltaCoordinate.x = 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': '#FFFFFF',
    'fontSize': 0xc
  });
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(playerNameText);
  playersTexts.push(playerNameText);
}
ctx.containerHsRec2.addChild(ctx.titleRec2);
function updatePlayerTable(_0x5b6942) {
  const _0x5bbc4d = _0x5b6942.players;
  const _0x510d3f = Array.from(_0x5bbc4d.values());
  const _0x55dbff = _0x510d3f.filter(_0x13a8b1 => _0x13a8b1.teamCode === '');
  playersTexts.forEach((_0x3e5963, _0x572572) => {
    if (_0x55dbff[_0x572572]) {
      let _0x5e032e = _0x55dbff[_0x572572];
      _0x3e5963.text = _0x5e032e.nickname.substring(0x0, 0x14);
      _0x3e5963.style.fill = _0x5e032e.teamColor;
    } else {
      _0x3e5963.text = '--';
      _0x3e5963.style.fill = "#FFFFFF";
    }
  });
}
zw_TopFriends_list = new PIXI.Container();
zw_TopFriends_list.x = 0x50;
zw_TopFriends_list.y = 0xb9;
const titleTextfriendlist = new PIXI.Text("TEAM LIST", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xc,
  'fill': 0xffffff,
  'fontWeight': "bold"
});
titleTextfriendlist.x = 0xa;
titleTextfriendlist.y = -0x5;
zw_TopFriends_list.addChild(titleTextfriendlist);
const dividerfriendlist = new PIXI.Graphics();
dividerfriendlist.lineStyle(0x2, 0xffffff, 0x1);
dividerfriendlist.moveTo(-0xf, 0xf);
dividerfriendlist.lineTo(0x50, 0xf);
dividerfriendlist.x = 0x5;
zw_TopFriends_list.addChild(dividerfriendlist);
function updateTeamTable(_0x3a2e4c, _0x513c23) {
  for (let _0x211bed = zw_TopFriends_list.children.length - 0x1; _0x211bed >= 0x0; _0x211bed--) {
    let _0x1da394 = zw_TopFriends_list.children[_0x211bed];
    if (_0x1da394 !== titleTextfriendlist && _0x1da394 !== dividerfriendlist) {
      zw_TopFriends_list.removeChild(_0x1da394);
    }
  }
  let _0x5e495e = 0x0;
  _0x3a2e4c.players.forEach((_0x2dd2f7, _0x4b85a9) => {
    if (_0x2dd2f7.teamCode === _0x513c23 && _0x2dd2f7.wssCode === zwormData.wssCode) {
      let _0x527a2d = _0x2dd2f7.nickname.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '').trim();
      let _0x26065e = /[\u0600-\u06FF]/.test(_0x527a2d);
      const _0x58472a = new PIXI.Text(_0x5e495e + 0x1 + ". " + _0x527a2d, {
        'fontFamily': fonts[currentFontIndex],
        'fontSize': 0xc,
        'fill': _0x2dd2f7.teamColor || 0xffffff,
        'stroke': 0x0,
        'strokeThickness': 0x2,
        'align': _0x26065e ? "right" : "left"
      });
      _0x58472a.x = -0x32;
      _0x58472a.y = 0x14 + _0x5e495e * 0xf;
      zw_TopFriends_list.addChild(_0x58472a);
      _0x5e495e++;
      if (_0x5e495e >= 0xa) {
        return;
      }
    }
  });
}
zw_TopHS_RecordHs = new PIXI.Container();
zw_TopHS_RecordHs.x = -0x37;
zw_TopHS_RecordHs.y = 0x73;
const titleText = new PIXI.Text("Top HS (👑)", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xc,
  'fill': 0xffd700,
  'fontWeight': 'bold'
});
titleText.x = 0xa;
titleText.y = -0x5;
zw_TopHS_RecordHs.addChild(titleText);
const divider = new PIXI.Graphics();
divider.lineStyle(0x2, 0xffffff, 0x1);
divider.moveTo(0x0, 0xf);
divider.lineTo(0x50, 0xf);
divider.x = 0x5;
zw_TopHS_RecordHs.addChild(divider);
zw_Top3HS_RecordHs = new PIXI.Container();
zw_Top3HS_RecordHs.y = 0x19;
const titleText3hs = new PIXI.Text("Top 3 HS (👑)", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xc,
  'fill': 0xffd700,
  'fontWeight': "bold"
});
titleText3hs.x = 0xa;
titleText3hs.y = -0x5;
zw_Top3HS_RecordHs.addChild(titleText3hs);
const divider3hs = new PIXI.Graphics();
divider3hs.lineStyle(0x2, 0xffffff, 0x1);
divider3hs.moveTo(0x0, 0xf);
divider3hs.lineTo(0x50, 0xf);
divider3hs.x = 0x5;
zw_Top3HS_RecordHs.addChild(divider3hs);
var playerTexts = [];
const cleanNickname = _0x377105 => {
  return _0x377105.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '').trim();
};
const updateTop8Hs = function () {
  const _0x1b2239 = Array.from(gameState.players.values());
  const _0x225d36 = _0x1b2239.filter(_0x532729 => _0x532729.hskill.hs > 0x0 && _0x532729.nickname.trim() !== '');
  let _0x247046 = _0x225d36.some(_0x56f456 => _0x56f456.nickname === 'zworm');
  if (!_0x247046 && false) {
    _0x225d36.push({
      'nickname': 'zworm',
      'hskill': {
        'hs': 0x0
      },
      'teamColor': zwormData.teamColor
    });
  }
  if (_0x225d36.length === 0x0) {
    return;
  }
  _0x225d36.sort((_0x12c8a7, _0x5ac813) => _0x5ac813.hskill.hs - _0x12c8a7.hskill.hs);
  for (let _0x405088 = zw_TopHS_RecordHs.children.length - 0x1; _0x405088 >= 0x0; _0x405088--) {
    let _0x45776a = zw_TopHS_RecordHs.children[_0x405088];
    if (_0x45776a !== titleText && _0x45776a !== divider) {
      zw_TopHS_RecordHs.removeChild(_0x45776a);
    }
  }
  playerTexts.length = 0x0;
  for (let _0x21a87d = 0x0; _0x21a87d < Math.min(_0x225d36.length, 0x6); _0x21a87d++) {
    let _0x1260ad = _0x225d36[_0x21a87d];
    let _0x2b5551 = _0x1260ad.nickname.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '').trim();
    let _0x1a8ba2 = /[\u0600-\u06FF]/.test(_0x2b5551);
    let _0x903065 = _0x2b5551.padEnd(0xf, " ");
    let _0x23898e = ("☠️ " + _0x1260ad.hskill.hs).padStart(0x6, " ");
    let _0x3665a3 = new PIXI.Text(_0x21a87d + 0x1 + ".  " + _0x903065 + " - " + _0x23898e + " ☠️", {
      'fontFamily': fonts[currentFontIndex],
      'fontSize': 0xa,
      'fill': _0x1260ad.teamColor || 0xffffff,
      'stroke': 0x0,
      'strokeThickness': 0x2,
      'align': _0x1a8ba2 ? 'right' : "left",
      'wordWrap': true,
      'wordWrapWidth': 0xc8,
      'breakWords': true
    });
    _0x3665a3.x = 0xa;
    _0x3665a3.y = 0x14 + _0x21a87d * 0xf;
    playerTexts.push(_0x3665a3);
    zw_TopHS_RecordHs.addChild(_0x3665a3);
  }
  zw_Top3HS_RecordHs.y = 0x1e + playerTexts.length * 0xf;
};
const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
const textStyle = {
  'align': "center",
  'fontSize': 0xc,
  'lineJoin': 'round',
  'strokeThickness': 0x1,
  'whiteSpace': "normal",
  'wordWrap': true
};
ctx.titleRec3 = new PIXI.Text("----------☠️---------", ctx.fontStyle.blanco);
ctx.titleRec3.y = -0x5;
ctx.titleRec3.x = 0xa;
ctx.containerHsRec3 = new PIXI.Container();
ctx.containerHsRec3.x = -0x37;
ctx.containerHsRec3.y = 0x118;
for (let index = 0x0; index < 0x8; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(" ", ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 0x9 ? -0x5 : 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': "#00FF00",
    ...textStyle
  });
  playerNameText.x = index >= 0x9 ? -0x5 : 0x0;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(playerNameText);
  let playerName2Text = new PIXI.Text('?', {
    'fill': colors[index % colors.length],
    ...textStyle
  });
  playerName2Text.x = 0x46;
  playerName2Text.y = 0xd * wallBounce;
  let playerHsText = new PIXI.Text('--', {
    'fill': '#FF0000',
    ...textStyle
  });
  playerHsText.x = 0x7d;
  playerHsText.y = 0xd * wallBounce;
  ctx.containerHsRec3.addChild(playerHsText);
}
ctx.containerHsRec3.addChild(ctx.titleRec3);
var createTop1InMinimap = function (_0x22e27f) {
  if (_0x22e27f && _0x22e27f.position) {
    if (!ctx.top1Point) {
      ctx.top1Point = new PIXI.Graphics();
      ctx.top1Point.zIndex = 0x2;
      ctx.top1Point.alpha = 0.9;
      if (ctx.teamsContainer) {
        ctx.teamsContainer.addChild(ctx.top1Point);
      } else {
        console.error("Error: ctx.teamsContainer is not defined.");
      }
    }
    ctx.top1Point.clear();
    ctx.top1Point.beginFill(0xfff000);
    ctx.top1Point.drawCircle(0x0, 0x0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.lineStyle(0x1, 0xff0000);
    ctx.top1Point.drawCircle(0x0, 0x0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.shadow = true;
    ctx.top1Point.shadowColor = 0xff0000;
    ctx.top1Point.shadowBlur = 0xf;
    ctx.top1Point.shadowOffsetX = 0x0;
    ctx.top1Point.shadowOffsetY = 0x0;
    const _0x4ae097 = new PIXI.Text('👑', {
      'fontFamily': "Arial",
      'fontSize': 0xa,
      'fill': 0xffffff,
      'align': 'center'
    });
    _0x4ae097.x = -_0x4ae097.width / 0x2;
    _0x4ae097.y = -_0x4ae097.height / 0x2;
    ctx.top1Point.addChild(_0x4ae097);
    ctx.top1Point.x = _0x22e27f.position.x;
    ctx.top1Point.y = _0x22e27f.position.y;
    console.log("Top 1 actualizado:", _0x22e27f.nombre);
  } else {
    console.error("No hay jugadores disponibles para actualizar el top 1.");
  }
};
const updateHeadshotHistory = function (_0x1d5d35) {
  for (let _0x52941e = 0x0; _0x52941e < 0x8; _0x52941e++) {
    if (ctx.containerHsRec3.children[0x3 * _0x52941e + 0x1]) {
      ctx.containerHsRec3.children[0x3 * _0x52941e + 0x1].text = _0x1d5d35[_0x52941e].nombre2;
    }
    if (ctx.containerHsRec3.children[0x3 * _0x52941e + 0x3]) {
      ctx.containerHsRec3.children[0x3 * _0x52941e + 0x2].text = _0x1d5d35[_0x52941e].enemyNameHs;
    }
  }
};
function assignPtcValues(_0x1cd609, _0x2a037c, _0x4d03d6) {
  let _0x3a5e53 = portionTimes[_0x2a037c] - parseInt((0.99 == _0x4d03d6 ? 0x1 : _0x4d03d6) * portionTimes[_0x2a037c] / 0x1);
  let _0x3b326a = "clock_ad" + _0x2a037c;
  _0x1cd609.Tf[_0x2a037c].addChild(ctx.ptc[_0x3b326a]);
  if (ctx.ptc[_0x3b326a]) {
    ctx.ptc[_0x3b326a].x = _0x3a5e53 >= 0x64 ? 0xb : _0x3a5e53 >= 0xa ? 0x12 : 0x1a;
    ctx.ptc[_0x3b326a].text = _0x3a5e53;
  }
}
function account() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var _0x25929b = $(this).attr("data-country-name");
    $(".ui-tab").removeClass('ui-tab-active');
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + _0x25929b.toLowerCase()).fadeIn(0xc8);
    $(".servers-container > div").not(".servers-" + _0x25929b.toLowerCase()).fadeOut(0x64);
  });
}
function obtieneUSER() {
  var _0x3a56af = {};
  window.onclick = function () {
    _0x3a56af = window.nodes;
    if (_0x3a56af && Object.keys(_0x3a56af).length > 0x0) {
      console.log(_0x3a56af);
      if (_0x3a56af) {
        var _0x972c31 = window.mouseX - _0x3a56af.qj.If.x;
        var _0x2526c9 = window.mouseY - _0x3a56af.qj.If.y;
        var _0x418314 = _0x3a56af.Mb.ad;
        var _0x4be492 = Math.sqrt(_0x972c31 * _0x972c31 + _0x2526c9 * _0x2526c9);
        console.log("Cell:", _0x3a56af, "nickname: ", _0x418314, "Distance:", _0x4be492);
      }
    }
  };
}
;
function loadScript2(_0x21007a, _0x4ab89e = true) {
  return new Promise((_0x160cce, _0x396a44) => {
    var _0x69b22a = document.createElement('script');
    _0x69b22a.type = "text/javascript";
    _0x69b22a.src = _0x21007a;
    _0x69b22a.defer = _0x4ab89e;
    _0x69b22a.onload = _0x160cce;
    _0x69b22a.onerror = _0x396a44;
    document.head.appendChild(_0x69b22a);
  });
}
function loadStylesheet(_0x949a75) {
  return new Promise((_0x3b2625, _0x42ba9a) => {
    var _0x24ba39 = document.createElement("link");
    _0x24ba39.rel = "stylesheet";
    _0x24ba39.type = "text/css";
    _0x24ba39.href = _0x949a75;
    _0x24ba39.onload = _0x3b2625;
    _0x24ba39.onerror = _0x42ba9a;
    document.head.appendChild(_0x24ba39);
  });
}
loadStylesheet('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap');
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js", true);
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css');
loadScript2("https://cdn.socket.io/4.4.1/socket.io.min.js");
loadScript2('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js');
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x576f99) {
  return typeof _0x576f99;
} : function (_0x4929cf) {
  return _0x4929cf && 'function' == typeof Symbol && _0x4929cf.constructor === Symbol && _0x4929cf !== Symbol.prototype ? "symbol" : typeof _0x4929cf;
};
var GoogleAuth;
!function () {
  try {
    console.log(function (_0x31e5c8, _0x40dbd7) {
      for (var _0x4333bb = 0x0; _0x4333bb < _0x40dbd7.length; _0x4333bb += 0x2) {
        _0x31e5c8 = _0x31e5c8.replaceAll(_0x40dbd7[_0x4333bb], _0x40dbd7[_0x4333bb + 0x1]);
      }
      return _0x31e5c8;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', "hhhh", 'Q', 'ssss', 'M', "mmm", 'Y', 'yyy', 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0x38b453) {}
}();
window.addEventListener("load", function () {
  function _0x3ab61e() {
    (function (_0x3740f8, _0x50e6a6, _0x52fca6) {
      var _0x24c39d = [];
      var _0x1ccf62 = [];
      var _0x38ae24 = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x573942, _0x5a076d) {
          var _0x362ea0 = this;
          setTimeout(function () {
            _0x5a076d(_0x362ea0[_0x573942]);
          }, 0x0);
        },
        'addTest': function (_0x56622d, _0x596f35, _0x5daa55) {
          _0x1ccf62.push({
            'name': _0x56622d,
            'fn': _0x596f35,
            'options': _0x5daa55
          });
        },
        'addAsyncTest': function (_0x37c572) {
          _0x1ccf62.push({
            'name': null,
            'fn': _0x37c572
          });
        }
      };
      var _0x4239dd = function () {};
      _0x4239dd.prototype = _0x38ae24;
      _0x4239dd = new _0x4239dd();
      var _0x46cb51 = false;
      try {
        _0x46cb51 = "WebSocket" in _0x3740f8 && 0x2 === _0x3740f8.WebSocket.CLOSING;
      } catch (_0x556d89) {}
      _0x4239dd.addTest('websockets', _0x46cb51);
      var _0x3672ef = _0x50e6a6.documentElement;
      var _0x47714f = "svg" === _0x3672ef.nodeName.toLowerCase();
      _0x4239dd.addTest('canvas', function () {
        var _0x204c70 = "function" != typeof _0x50e6a6.createElement ? _0x50e6a6.createElement(arguments[0x0]) : _0x47714f ? _0x50e6a6.createElementNS.call(_0x50e6a6, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x50e6a6.createElement.apply(_0x50e6a6, arguments);
        return !(!_0x204c70.getContext || !_0x204c70.getContext('2d'));
      });
      _0x4239dd.addTest("canvastext", function () {
        return false !== _0x4239dd.canvas && "function" == typeof ("function" != typeof _0x50e6a6.createElement ? _0x50e6a6.createElement(arguments[0x0]) : _0x47714f ? _0x50e6a6.createElementNS.call(_0x50e6a6, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x50e6a6.createElement.apply(_0x50e6a6, arguments)).getContext('2d').fillText;
      });
      (function () {
        var _0x419101;
        var _0x5dae70;
        var _0x1d4e78;
        var _0x593a07;
        var _0x3d4d42;
        var _0x163c1b;
        var _0x82550d;
        for (var _0x3552c8 in _0x1ccf62) if (_0x1ccf62.hasOwnProperty(_0x3552c8)) {
          _0x419101 = [];
          _0x5dae70 = _0x1ccf62[_0x3552c8];
          if (_0x5dae70.name && (_0x419101.push(_0x5dae70.name.toLowerCase()), _0x5dae70.options && _0x5dae70.options.aliases && _0x5dae70.options.aliases.length)) {
            for (_0x1d4e78 = 0x0; _0x1d4e78 < _0x5dae70.options.aliases.length; _0x1d4e78++) {
              _0x419101.push(_0x5dae70.options.aliases[_0x1d4e78].toLowerCase());
            }
          }
          _0x593a07 = (undefined === _0x5dae70.fn ? 'undefined' : _typeof(_0x5dae70.fn)) === "function" ? _0x5dae70.fn() : _0x5dae70.fn;
          for (_0x3d4d42 = 0x0; _0x3d4d42 < _0x419101.length; _0x3d4d42++) {
            _0x163c1b = _0x419101[_0x3d4d42];
            _0x82550d = _0x163c1b.split('.');
            if (0x1 === _0x82550d.length) {
              _0x4239dd[_0x82550d[0x0]] = _0x593a07;
            } else {
              if (!(!_0x4239dd[_0x82550d[0x0]] || _0x4239dd[_0x82550d[0x0]] instanceof Boolean)) {
                _0x4239dd[_0x82550d[0x0]] = new Boolean(_0x4239dd[_0x82550d[0x0]]);
              }
              _0x4239dd[_0x82550d[0x0]][_0x82550d[0x1]] = _0x593a07;
            }
            _0x24c39d.push((_0x593a07 ? '' : "no-") + _0x82550d.join('-'));
          }
        }
      })();
      (function (_0x4fce4a) {
        var _0x2b2fe1 = _0x3672ef.className;
        var _0x14eca9 = _0x4239dd._config.classPrefix || '';
        if (_0x47714f) {
          _0x2b2fe1 = _0x2b2fe1.baseVal;
        }
        if (_0x4239dd._config.enableJSClass) {
          var _0xb690cb = new RegExp("(^|\\s)" + _0x14eca9 + "no-js(\\s|$)");
          _0x2b2fe1 = _0x2b2fe1.replace(_0xb690cb, '$1' + _0x14eca9 + "js$2");
        }
        if (_0x4239dd._config.enableClasses) {
          _0x2b2fe1 += " " + _0x14eca9 + _0x4fce4a.join(" " + _0x14eca9);
          if (_0x47714f) {
            _0x3672ef.className.baseVal = _0x2b2fe1;
          } else {
            _0x3672ef.className = _0x2b2fe1;
          }
        }
      })(_0x24c39d);
      delete _0x38ae24.addTest;
      delete _0x38ae24.addAsyncTest;
      for (var _0x2842f0 = 0x0; _0x2842f0 < _0x4239dd._q.length; _0x2842f0++) {
        _0x4239dd._q[_0x2842f0]();
      }
      _0x3740f8.Modernizr = _0x4239dd;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x3ab61e()) {
    return void (document.getElementById("error-view").style.display = "block");
  }
  !function () {
    function _0x4961dc(_0x29740e) {
      const _0x1b0bb1 = _0x29740e + '=';
      const _0x4eac51 = document.cookie.split(';');
      for (let _0xc2e354 = 0x0; _0xc2e354 < _0x4eac51.length; _0xc2e354++) {
        let _0x584e2f = _0x4eac51[_0xc2e354];
        while (_0x584e2f.charAt(0x0) === " ") {
          _0x584e2f = _0x584e2f.substring(0x1);
        }
        if (_0x584e2f.indexOf(_0x1b0bb1) === 0x0) {
          return _0x584e2f.substring(_0x1b0bb1.length, _0x584e2f.length);
        }
      }
      return '';
    }
    function _0x350985(_0xf4f914, _0x278ef6, _0x16fc90) {
      var _0x286ff8 = new Date();
      _0x286ff8.setTime(_0x286ff8.getTime() + 0x5265c00 * _0x16fc90);
      var _0x1b74ba = "expires=" + _0x286ff8.toUTCString();
      document.cookie = _0xf4f914 + '=' + _0x278ef6 + "; " + _0x1b74ba + "; path=/";
    }
    function _0x55a05a(_0x58bb1f) {
      var _0x56eab8 = (Math.floor(_0x58bb1f) % 0x3c).toString();
      var _0x582a32 = (Math.floor(_0x58bb1f / 0x3c) % 0x3c).toString();
      var _0x47af96 = (Math.floor(_0x58bb1f / 0xe10) % 0x18).toString();
      var _0xbf0ea3 = Math.floor(_0x58bb1f / 0x15180).toString();
      var _0x47227b = window.I18N_MESSAGES['util.time.days'];
      var _0x3c83e2 = window.I18N_MESSAGES["util.time.hours"];
      var _0x16ce55 = window.I18N_MESSAGES["util.time.min"];
      var _0x17799d = window.I18N_MESSAGES["util.time.sec"];
      return _0xbf0ea3 > 0x0 ? _0xbf0ea3 + " " + _0x47227b + " " + _0x47af96 + " " + _0x3c83e2 + " " + _0x582a32 + " " + _0x16ce55 + " " + _0x56eab8 + " " + _0x17799d : _0x47af96 > 0x0 ? _0x47af96 + " " + _0x3c83e2 + " " + _0x582a32 + " " + _0x16ce55 + " " + _0x56eab8 + " " + _0x17799d : _0x582a32 > 0x0 ? _0x582a32 + " " + _0x16ce55 + " " + _0x56eab8 + " " + _0x17799d : _0x56eab8 + " " + _0x17799d;
    }
    function _0x9024fe(_0x4f7749, _0x2a067f, _0x260ac7) {
      var _0x19be72 = document.createElement('script');
      var _0x59ca49 = true;
      if (_0x2a067f) {
        _0x19be72.id = _0x2a067f;
      }
      _0x19be72.async = "async";
      _0x19be72.type = "text/javascript";
      _0x19be72.src = _0x4f7749;
      if (_0x260ac7) {
        _0x19be72.onload = _0x19be72.onreadystatechange = function () {
          _0x59ca49 = false;
          try {
            _0x260ac7();
          } catch (_0x186cf3) {
            console.log(_0x186cf3);
          }
          _0x19be72.onload = _0x19be72.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0x0]).appendChild(_0x19be72);
    }
    function _0x22ee20(_0x34bb57, _0x196743) {
      _0x196743.prototype = Object.create(_0x34bb57.prototype);
      _0x196743.prototype.constructor = _0x196743;
      _0x196743.parent = _0x34bb57;
      return _0x196743;
    }
    function _0x344f8a(_0x3f896c) {
      _0x3f896c %= _0x1d3753;
      return _0x3f896c < 0x0 ? _0x3f896c + _0x1d3753 : _0x3f896c;
    }
    function _0x46bcc8(_0x5d6bac, _0x106502, _0x1b7212, _0x52d94c) {
      var _0x3395d5 = _0x106502 + _0x52d94c;
      if (null == _0x5d6bac) {
        throw new TypeError("this is null or not defined");
      }
      var _0x1b35ec = _0x5d6bac.length >>> 0x0;
      var _0x20fbc5 = _0x1b7212 >> 0x0;
      var _0x7c4f40 = _0x20fbc5 < 0x0 ? Math.max(_0x1b35ec + _0x20fbc5, 0x0) : Math.min(_0x20fbc5, _0x1b35ec);
      var _0x831aa5 = _0x106502 >> 0x0;
      var _0x29fc78 = _0x831aa5 < 0x0 ? Math.max(_0x1b35ec + _0x831aa5, 0x0) : Math.min(_0x831aa5, _0x1b35ec);
      var _0x271ac0 = undefined === _0x3395d5 ? _0x1b35ec : _0x3395d5 >> 0x0;
      var _0x5736e4 = _0x271ac0 < 0x0 ? Math.max(_0x1b35ec + _0x271ac0, 0x0) : Math.min(_0x271ac0, _0x1b35ec);
      var _0x43053f = Math.min(_0x5736e4 - _0x29fc78, _0x1b35ec - _0x7c4f40);
      var _0x208713 = 0x1;
      for (_0x29fc78 < _0x7c4f40 && _0x7c4f40 < _0x29fc78 + _0x43053f && (_0x208713 = -0x1, _0x29fc78 += _0x43053f - 0x1, _0x7c4f40 += _0x43053f - 0x1); _0x43053f > 0x0;) {
        if (_0x29fc78 in _0x5d6bac) {
          _0x5d6bac[_0x7c4f40] = _0x5d6bac[_0x29fc78];
        } else {
          delete _0x5d6bac[_0x7c4f40];
        }
        _0x29fc78 += _0x208713;
        _0x7c4f40 += _0x208713;
        _0x43053f--;
      }
      return _0x5d6bac;
    }
    function _0x31c7b2(_0x23e3d0) {
      if (null != _0x23e3d0.parent) {
        _0x23e3d0.parent.removeChild(_0x23e3d0);
      }
    }
    function _0x10f410(_0x3efb39, _0x1b0df9, _0x4316e8) {
      var _0x230d2d = (0x1 - Math.abs(0x2 * _0x4316e8 - 0x1)) * _0x1b0df9;
      var _0x3eb520 = _0x230d2d * (0x1 - Math.abs(_0x3efb39 / 0x3c % 0x2 - 0x1));
      var _0x5e44d2 = _0x4316e8 - _0x230d2d / 0x2;
      return 0x0 <= _0x3efb39 && _0x3efb39 < 0x3c ? [_0x5e44d2 + _0x230d2d, _0x5e44d2 + _0x3eb520, _0x5e44d2 + 0x0] : 0x3c <= _0x3efb39 && _0x3efb39 < 0x78 ? [_0x5e44d2 + _0x3eb520, _0x5e44d2 + _0x230d2d, _0x5e44d2 + 0x0] : 0x78 <= _0x3efb39 && _0x3efb39 < 0xb4 ? [_0x5e44d2 + 0x0, _0x5e44d2 + _0x230d2d, _0x5e44d2 + _0x3eb520] : 0xb4 <= _0x3efb39 && _0x3efb39 < 0xf0 ? [_0x5e44d2 + 0x0, _0x5e44d2 + _0x3eb520, _0x5e44d2 + _0x230d2d] : 0xf0 <= _0x3efb39 && _0x3efb39 < 0x12c ? [_0x5e44d2 + _0x3eb520, _0x5e44d2 + 0x0, _0x5e44d2 + _0x230d2d] : [_0x5e44d2 + _0x230d2d, _0x5e44d2 + 0x0, _0x5e44d2 + _0x3eb520];
    }
    function _0x171133() {
      function _0x4ea31b() {
        $('#adbl-1').text(window.I18N_MESSAGES['index.game.antiadblocker.msg1']);
        $("#adbl-2").text(window.I18N_MESSAGES['index.game.antiadblocker.msg2']);
        $("#adbl-3").text(window.I18N_MESSAGES['index.game.antiadblocker.msg3']);
        $('#adbl-4').text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace('{0}', 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $("#adbl-continue").hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0x5f4657 = 0x5;
        for (var _0x254494 = 0x0; _0x254494 < 0x5; _0x254494++) {
          setTimeout(function () {
            _0x5f4657--;
            $("#adbl-4").text(window.I18N_MESSAGES['index.game.antiadblocker.msg4'].replace("{0}", _0x5f4657));
            if (0x0 === _0x5f4657) {
              console.log("aipAABC");
              try {
                ga("send", 'event', "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x5df466) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, 0x3e8 * (_0x254494 + 0x1));
        }
      }
      var _0xfc575d = false;
      var _0x19611c = function () {};
      var _0x429365 = {};
      $('#adbl-continue').click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0x19611c(false);
      });
      _0x429365.a = function (_0x10436a) {
        _0x19611c = _0x10436a;
        if (!_0xfc575d) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                'AIP_COMPLETE': function (_0x8c21f9) {
                  console.log("aipC");
                  _0x19611c(true);
                  $('#1eaom01c3pxu9wd3').hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga('send', "event", "preroll", window.runtimeHash + "_complete");
                  } catch (_0x5b24f7) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0xfc575d = true;
          } catch (_0x1c3cd4) {}
        }
      };
      _0x429365.b = function () {
        if (undefined !== aiptag.adplayer) {
          console.log('aipS');
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (_0x3ecd6b) {}
          _0x4ea31b();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + '_start');
          } catch (_0x48f551) {}
          _0x4ea31b();
        }
      };
      return _0x429365;
    }
    function _0x341617(_0x3be43c, _0x321de9) {
      return {
        'a': function () {},
        'c': function () {}
      };
    }
    function _0x3e4797() {
      function _0x5a8e82(_0x16ad55) {
        var _0xc43298 = _0x16ad55 + 0x25 * Math.floor(0xffff * Math.random());
        _0x350985(_0x166161.d, _0xc43298, 0x1e);
      }
      return function () {
        var _0x1fb94f = parseInt(_0x4961dc(_0x166161.d)) % 0x25;
        console.log("init1 pSC: " + _0x1fb94f);
        if (!(_0x1fb94f >= 0x0 && _0x1fb94f < _0x25fccb.e)) {
          _0x1fb94f = Math.max(0x0, _0x25fccb.e - 0x2);
          console.log("init2 pSC: " + _0x1fb94f);
        }
        var _0x271144 = {};
        _0x1ff066 = _0x271144;
        _0x271144.f = _0x25fccb;
        _0x271144.g = false;
        _0x271144.i = Date.now();
        _0x271144.j = 0x0;
        _0x271144.k = 0x0;
        _0x271144.l = null;
        _0x271144.m = _0x15aa89;
        _0x271144.n = _0x581b91;
        _0x271144.o = null;
        _0x271144.p = null;
        _0x271144.q = null;
        _0x271144.r = null;
        _0x271144.s = null;
        _0x271144.t = null;
        _0x271144.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0xd4dd39) {
              if (undefined !== _0xd4dd39.coords) {
                var _0xf6a65 = _0xd4dd39.coords;
                if (undefined !== _0xf6a65.latitude && undefined !== _0xf6a65.longitude) {
                  _0x271144.l = _0xd4dd39;
                }
              }
            }, function (_0x3a05ef) {});
          }
        } catch (_0x39f6d8) {}
        _0x271144.v = function () {
          _0x271144.p = new _0x112566();
          _0x271144.q = new _0x388025();
          _0x271144.r = new _0xdbe872();
          _0x271144.s = new _0x5a0a49();
          _0x271144.t = new _0x57902d();
          _0x271144.u = new _0x212a4d();
          _0x271144.o = new _0x2a3e5b();
          _0x271144.o.z = new _0x57bcab(_0x271144.o);
          _0x271144.a();
        };
        _0x271144.a = function () {
          try {
            ga('send', "event", 'app', window.runtimeHash + "_init");
          } catch (_0x3897e1) {}
          _0x271144.o.A = function () {
            _0x271144.o.B();
          };
          _0x271144.o.C = function () {
            var _0x41f042 = _0x271144.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + '_start', _0x41f042);
            } catch (_0xeded43) {}
            _0x271144.r.G(_0xdbe872.AudioState.H);
            _0x271144.s.I(_0x271144.s.H.J());
          };
          _0x271144.o.B = function () {
            try {
              ga("send", 'event', "game", window.runtimeHash + '_end');
            } catch (_0x527f1d) {}
            if ($("body").height() >= 0x1ae) {
              _0x271144.f.K.c();
            }
            _0x271144.p.L();
            (function () {
              var _0x234336 = Math.floor(_0x271144.o.N.M);
              var _0x19f1ad = _0x271144.o.O;
              if (_0x271144.u.P()) {
                _0x271144.u.Q(function () {
                  _0x271144.R(_0x234336, _0x19f1ad);
                });
              } else {
                _0x271144.R(_0x234336, _0x19f1ad);
              }
            })();
          };
          _0x271144.o.S = function (_0x262349) {
            _0x262349(_0x271144.s.H.T(), _0x271144.s.H.U());
          };
          _0x271144.u.V(function () {
            if (_0x271144.p.W) {
              _0x271144.r.G(_0xdbe872.AudioState.F);
              _0x271144.s.I(_0x271144.s.F);
            }
            if (_0x271144.u.P()) {
              try {
                var _0x4d59f0 = _0x271144.u.X();
                ga("set", "userId", _0x4d59f0);
              } catch (_0x293dbf) {}
            }
            if (_0x271144.Y() && _0x271144.u.P() && !_0x271144.u.Z()) {
              _0x271144.$(false, false);
              _0x271144.s.aa._(new _0xefd538());
            } else {
              _0x271144.ba(true);
            }
          });
          _0x271144.p.ca(function () {
            _0x271144.r.G(_0xdbe872.AudioState.F);
            _0x271144.s.I(_0x271144.s.F);
          });
          _0x271144.q.a(function () {
            _0x271144.o.a();
            _0x271144.r.a();
            _0x271144.s.a();
            _0x271144.t.a();
            _0x271144.p.a();
            _0x271144.u.a();
            if (_0x271144.Y() && !_0x271144.Z()) {
              _0x271144.s.aa._(new _0xefd538());
            } else {
              _0x271144.ba(true);
            }
          });
        };
        _0x271144.da = function (_0x117abe) {
          if (_0x271144.u.P()) {
            var _0x92a20 = _0x271144.u.ea();
            $.get(_0x7fa75 + "/pub/wuid/" + _0x92a20 + "/consent/change?value=" + encodeURI(_0x117abe), function (_0x1b60f2) {});
          }
        };
        _0x271144.fa = function (_0x325038) {
          var _0x177872 = _0x271144.u.ea();
          var _0x52e765 = _0x271144.s.F.D();
          var _0x5e8c50 = _0x271144.s.F.ga();
          var _0x2d56f9 = _0x271144.t.ha(_0x4e8d86.ia);
          var _0x3f8d0c = _0x271144.t.ha(_0x4e8d86.ja);
          var _0x27085d = _0x271144.t.ha(_0x4e8d86.ka);
          var _0x24b76d = _0x271144.t.ha(_0x4e8d86.la);
          var _0x818b07 = _0x271144.t.ha(_0x4e8d86.ma);
          var _0x588925 = 0x0;
          if (null != _0x271144.l) {
            var _0x50df3c = _0x271144.l.coords.latitude;
            var _0x2b0dee = _0x271144.l.coords.longitude;
            _0x588925 = 0x1 | Math.max(0x0, Math.min(0x7fff, (_0x50df3c + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math.min(0xffff, (_0x2b0dee + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          if (_wrmxt.isSkinCustom(_0x2d56f9)) {} else {
            _0x2d56f9;
          }
          let _0x501ac5 = "ZW_" + (0x270f < _0x2d56f9 ? "0000" : _0x2d56f9.toString().padStart(0x4, 0x0)) + (0x1869f < _0x818b07 ? "00000" : _0x818b07.toString().padStart(0x5, 0x0));
          _0x5e8c50 = (0x20 <= _0x5e8c50.length ? _0x5e8c50.substr(0x0, 0x10) : _0x5e8c50.substr(0x0, 0x10).padEnd(0x10)) + _0x501ac5;
          _0x5e8c50 = _0x5e8c50.trim().replace(/\s/g, 'ㅤ');
          console.log(_0x5e8c50);
          var _0x658aad = document.getElementById("teamNickname");
          if (_0x658aad !== null) {
            zwormData.nickname = _0x5e8c50;
          } else {
            console.warn("⚠️ Advertencia: No se encontró el elemento 'teamNickname'.");
          }
          var _0x47d31c = _0x7fa75 + "/pub/wuid/" + _0x177872 + "/start?gameMode=" + encodeURI(_0x52e765) + '&gh=' + _0x588925 + '&nickname=' + encodeURI(_0x5e8c50) + '&skinId=' + _wrmxt.validInput(_0x2d56f9) + "&eyesId=" + encodeURI(_0x3f8d0c) + '&mouthId=' + encodeURI(_0x27085d) + "&glassesId=" + encodeURI(_0x24b76d) + "&hatId=" + encodeURI(_0x818b07);
          console.log("urlRequest: " + _0x47d31c);
          $.get(_0x47d31c, function (_0x1e3f53) {
            var _0xdf3770 = _0x1e3f53.server_url;
            _0x325038(_0xdf3770);
          });
        };
        _0x271144.na = function () {
          _0x1fb94f++;
          console.log("start pSC: " + _0x1fb94f);
          if (!_0x271144.f.oa && _0x1fb94f >= _0x271144.f.e) {
            _0x271144.s.I(_0x271144.s.pa);
            _0x271144.r.G(_0xdbe872.AudioState.qa);
            _0x271144.f.ra.b();
          } else {
            _0x5a8e82(_0x1fb94f);
            _0x271144.sa();
            zw_servertext.text = '';
          }
        };
        _0x271144.sa = function (_0x1827b8) {
          zw_killcount = 0x0;
          zw_hscount = 0x0;
          if (_0x271144.o.ta()) {
            _0x271144.s.I(_0x271144.s.ua);
            _0x271144.r.G(_0xdbe872.AudioState.ua);
            var _0x33d94e = _0x271144.s.F.D();
            _0x350985(_0x166161.va, _0x33d94e, 0x1e);
            console.log("save gm: " + _0x33d94e);
            var _0x4ec246 = _0x271144.s.xa.wa();
            _0x350985(_0x166161.ya, _0x4ec246, 0x1e);
            console.log("save sPN: " + _0x4ec246);
            if (_0x271144.u.P()) {
              _0x271144.fa(function (_0x192e83) {
                zw_lastserver = _0x1827b8 ? _0x1827b8 : _0x192e83;
                zwormData.wssServer = zw_lastserver;
                zw_servertext.text = '' + zw_lastserver.replace("wss://", '').replace(".wormate.io", '').replace("/wormy", '');
                _0x271144.o.za(_0x1827b8 || _0x192e83, _0x271144.u.ea());
              });
            } else {
              var _0x3680fc = _0x271144.s.F.ga();
              _0x350985(_0x166161.Aa, _0x3680fc, 0x1e);
              var _0x4592c1 = _0x271144.t.ha(_0x4e8d86.ia);
              _0x350985(_0x166161.Ba, _0x4592c1, 0x1e);
              _0x271144.fa(function (_0x543ee6) {
                zw_lastserver = _0x1827b8 ? _0x1827b8 : _0x543ee6;
                zwormData.wssServer = zw_lastserver;
                zw_servertext.text = '' + zw_lastserver.replace('wss://', '').replace(".wormate.io", '').replace("/wormy", '');
                _0x271144.o.Ca(_0x1827b8 || _0x543ee6, _0x3680fc, _0x4592c1);
              });
            }
          }
        };
        _0x271144.R = function (_0x53243a, _0x20fa5c) {
          var _0x2c9b6a = _0x271144.s.F.ga();
          _0x271144.s.H.Da(_0x53243a, _0x20fa5c, _0x2c9b6a);
          _0x271144.r.G(_0xdbe872.AudioState.Ea);
          _0x271144.s.I(_0x271144.s.H.Fa());
        };
        _0x271144.Ga = function () {
          if (!_0x271144.Ha()) {
            return _0x271144.t.Ia();
          }
          var _0x270456 = parseInt(_0x4961dc(_0x166161.Ba));
          return null != _0x270456 && _0x271144.t.Ja(_0x270456, _0x4e8d86.ia) ? _0x270456 : _0x271144.t.Ia();
        };
        _0x271144.Ka = function (_0x201421) {
          _0x350985(_0x166161.La, !!_0x201421, 0x708);
        };
        _0x271144.Ha = function () {
          return 'true' === _0x4961dc(_0x166161.La);
        };
        _0x271144.ba = function (_0x32307f) {
          if (_0x32307f != _0x271144.g) {
            _0x271144.g = _0x32307f;
            var _0x2045b3 = _0x2045b3 || {};
            _0x2045b3.consented = _0x32307f;
            _0x2045b3.gdprConsent = _0x32307f;
            _0x271144.f.Ma.a();
            _0x271144.f.K.a();
            _0x271144.f.ra.a(function (_0x24b16f) {
              if (_0x24b16f) {
                _0x5a8e82(_0x1fb94f = 0x0);
              }
              _0x271144.sa();
            });
          }
        };
        _0x271144.$ = function (_0xea691e, _0xb081d2) {
          _0x350985(_0x166161.Na, _0xea691e ? 'true' : 'false');
          if (_0xb081d2) {
            _0x271144.da(_0xea691e);
          }
          _0x271144.ba(_0xea691e);
        };
        _0x271144.Z = function () {
          switch (_0x4961dc(_0x166161.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x271144.Y = function () {
          try {
            return !!window.isIPInEEA || !(null == _0x271144.l || !_0x796b.Oa(_0x271144.l.coords.latitude, _0x271144.l.coords.longitude));
          } catch (_0x15cfbe) {
            return true;
          }
        };
        _0x271144.Pa = function (_0x71af5b) {
          const _0x43eedb = performance.now();
          _0x271144.j = _0x43eedb;
          _0x271144.k = _0x71af5b;
          _0x271144.o.Qa(_0x43eedb, _0x71af5b);
          _0x271144.s.Qa(_0x43eedb, _0x71af5b);
          _0x271144.i = _0x43eedb;
        };
        _0x271144.Ra = function () {
          _0x271144.s.Ra();
        };
        return _0x271144;
      }();
    }
    function _0x2a3e5b() {
      var _0x8467dc = {
        Wa: 0x1e,
        Xa: new Float32Array(0x64),
        Ya: 0x0,
        Za: 0x0,
        $a: 0x0,
        _a: 0x0,
        ab: 0x0,
        bb: 0x0,
        cb: 0x0,
        db: null,
        eb: 0x12c,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new _0x38582a(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 0x28,
        kb: 0x1,
        lb: -0x1,
        mb: 0x1,
        nb: 0x1,
        ob: -0x1,
        pb: -0x1,
        qb: 0x1,
        rb: 0x1,
        sb: -0x1,
        O: 0x1f4,
        tb: 0x1f4
      };
      _0x8467dc.fb.ub = 0x1f4;
      _0x8467dc.N = new _0x241e41(_0x8467dc.fb);
      _0x8467dc.a = function () {
        null.vb((window.anApp = _0x1ff066).s.H.wb);
        let _0x768b20 = setInterval(function () {
          _0x8467dc.S(function (_0x2ff797, _0x612ac) {
            _0x8467dc.xb(_0x2ff797, _0x612ac);
          });
        }, theoKzObjects.mouseDelay);
        _0x8467dc.updatePacketInterval = function (_0x738f03) {
          clearInterval(_0x768b20);
          theoKzObjects.mouseDelay = _0x738f03;
          _0x768b20 = setInterval(function () {
            _0x8467dc.S(function (_0x2b8f38, _0x260be5) {
              console.log(_0x2b8f38, _0x260be5);
              _0x8467dc.xb(_0x2b8f38, _0x260be5);
            });
          }, theoKzObjects.mouseDelay);
        };
      };
      _0x8467dc.yb = function (_0x5779a5, _0x31c534, _0x5f232f, _0x180c8b) {
        _0x8467dc.lb = _0x5779a5;
        _0x8467dc.mb = _0x31c534;
        _0x8467dc.nb = _0x5f232f;
        _0x8467dc.ob = _0x180c8b;
        _0x8467dc.zb();
      };
      _0x8467dc.Ab = function (_0x46cea6) {
        _0x8467dc.kb = _0x46cea6;
        _0x8467dc.zb();
      };
      _0x8467dc.zb = function () {
        _0x8467dc.pb = _0x8467dc.lb - 0x1;
        _0x8467dc.qb = 2;
        _0x8467dc.rb = 0;
        _0x8467dc.sb = _0x8467dc.ob + 0x1;
      };
      _0x8467dc.Qa = function (_0x458721, _0x5cd6bc) {
        _0x5cd6bc = Math.min(Math.max(0x1, _0x5cd6bc), 0x64);
        _0x8467dc.$a += _0x5cd6bc;
        _0x8467dc.Za -= 0 * _0x5cd6bc;
        null.Bb();
        if (false && (false || false)) {
          _0x8467dc.Cb(_0x458721, _0x5cd6bc);
          _0x8467dc.jb = 0x4 + 12.5 * null.Db;
        }
        const _0x34e0d3 = 0x3e8 / _0x5cd6bc;
        let _0x46727c = 0x0;
        for (let _0x234422 = 0x0; _0x234422 < _0x8467dc.Xa.length - 0x1; _0x234422++) {
          _0x8467dc.Xa[_0x234422] = _0x8467dc.Xa[_0x234422 + 0x1];
          _0x46727c += _0x8467dc.Xa[_0x234422];
        }
        _0x8467dc.Xa[_0x8467dc.Xa.length - 0x1] = _0x34e0d3;
        _0x8467dc.Wa = (_0x46727c + _0x34e0d3) / _0x8467dc.Xa.length;
      };
      _0x8467dc.Eb = function (_0x221442, _0x14f5a7) {
        return _0x221442 > _0x8467dc.pb && _0x221442 < 0x1 && _0x14f5a7 > 0x1 && _0x14f5a7 < _0x8467dc.sb;
      };
      _0x8467dc.Cb = function (_0xad237c, _0x5d2fc8) {
        var _0x5b92c0 = -NaN;
        null.Fb(_0xad237c, _0x5d2fc8);
        null.Gb(_0xad237c, _0x5d2fc8, _0x5b92c0, _0x8467dc.Eb);
        var _0x1e635e = 0x0;
        var _0x4a85e5;
        for (_0x4a85e5 in _0x8467dc.hb) {
          var _0x568af3 = _0x8467dc.hb[_0x4a85e5];
          _0x568af3.Fb(_0xad237c, _0x5d2fc8);
          _0x568af3.Gb(_0xad237c, _0x5d2fc8, _0x5b92c0, _0x8467dc.Eb);
          if (_0x568af3.Hb && _0x568af3.Db > _0x1e635e) {
            _0x1e635e = _0x568af3.Db;
          }
          if (!(_0x568af3.Ib || !(_0x568af3.Jb < 0.005) && _0x568af3.Hb)) {
            _0x568af3.Kb();
            delete _0x8467dc.hb[_0x568af3.Mb.Lb];
          }
        }
        _0x8467dc.Ab(0x3 * _0x1e635e);
        var _0x357496;
        for (_0x357496 in _0x8467dc.gb) {
          var _0x3cce81 = _0x8467dc.gb[_0x357496];
          _0x3cce81.Fb(_0xad237c, _0x5d2fc8);
          _0x3cce81.Gb(_0xad237c, _0x5d2fc8, _0x8467dc.Eb);
          if (_0x3cce81.Nb && (_0x3cce81.Jb < 0.005 || !_0x8467dc.Eb(_0x3cce81.Ob, _0x3cce81.Pb))) {
            _0x3cce81.Kb();
            delete _0x8467dc.gb[_0x3cce81.Mb.Lb];
          }
        }
      };
      _0x8467dc.Qb = function (_0x424b03, _0x343961) {
        var _0x336213 = (window.anApp = _0x1ff066).j;
        _0x8467dc.bb = _0x424b03;
        if (0x0 === _0x424b03) {
          _0x8467dc._a = _0x336213 - 0x5f;
          _0x8467dc.ab = _0x336213;
          _0x8467dc.$a = 0x0;
          _0x8467dc.Za = 0x0;
        } else {
          _0x8467dc._a = 0x0;
          _0x8467dc.ab = 0x0 + _0x343961;
        }
        _0x8467dc.Ya = -NaN;
      };
      _0x8467dc.Rb = function () {
        if (false || false) {
          _0x8467dc.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0x8467dc.db = null;
            }
          }, 0x1388);
          _0x8467dc.B();
        }
      };
      _0x8467dc.ta = function () {
        return true && (_0x8467dc.cb = 0x1, null.Sb(), _0x8467dc.gb = {}, _0x8467dc.hb = {}, null.Tb(), false && (null.close(), _0x8467dc.db = null), true);
      };
      _0x8467dc.Ub = function () {
        _0x8467dc.db = null;
        null.Sb();
        _0x8467dc.A();
        _0x8467dc.cb = 0x0;
      };
      _0x8467dc.za = function (_0x3b760d, _0x41ba28) {
        _0x8467dc.Vb(_0x3b760d, function () {
          console.log(_0x41ba28);
          var _0x33e5f6 = Math.min(0x800, _0x41ba28.length);
          var _0x365289 = new ArrayBuffer(0x6 + 0x2 * _0x33e5f6);
          var _0x962ea7 = new DataView(_0x365289);
          var _0x4fb05 = 0x0;
          _0x962ea7.setInt8(_0x4fb05, 0x81);
          _0x4fb05 = _0x4fb05 + 0x1;
          _0x962ea7.setInt16(_0x4fb05, 0xaf0);
          _0x4fb05 = _0x4fb05 + 0x2;
          _0x962ea7.setInt8(_0x4fb05, 0x1);
          _0x4fb05 = _0x4fb05 + 0x1;
          _0x962ea7.setInt16(_0x4fb05, _0x33e5f6);
          _0x4fb05 = _0x4fb05 + 0x2;
          var _0x17c3d7 = 0x0;
          for (; _0x17c3d7 < _0x33e5f6; _0x17c3d7++) {
            _0x962ea7.setInt16(_0x4fb05, _0x41ba28.charCodeAt(_0x17c3d7));
            _0x4fb05 = _0x4fb05 + 0x2;
          }
          _0x8467dc.Wb(_0x365289);
        });
      };
      _0x8467dc.Ca = function (_0x3a09c0, _0x20c057, _0x42707b) {
        _0x8467dc.Vb(_0x3a09c0, function () {
          var _0x42ee3d = Math.min(0x20, _0x20c057.length);
          var _0x4fd5ae = new ArrayBuffer(0x7 + 0x2 * _0x42ee3d);
          var _0xa0c2dc = new DataView(_0x4fd5ae);
          var _0xae6a05 = 0x0;
          _0xa0c2dc.setInt8(_0xae6a05, 0x81);
          _0xae6a05 = _0xae6a05 + 0x1;
          _0xa0c2dc.setInt16(_0xae6a05, 0xaf0);
          _0xae6a05 = _0xae6a05 + 0x2;
          _0xa0c2dc.setInt8(_0xae6a05, 0x0);
          _0xae6a05 = _0xae6a05 + 0x1;
          _0xa0c2dc.setInt16(_0xae6a05, _0x42707b);
          _0xae6a05 = _0xae6a05 + 0x2;
          _0xa0c2dc.setInt8(_0xae6a05, _0x42ee3d);
          _0xae6a05++;
          var _0x3d1c5a = 0x0;
          for (; _0x3d1c5a < _0x42ee3d; _0x3d1c5a++) {
            _0xa0c2dc.setInt16(_0xae6a05, _0x20c057.charCodeAt(_0x3d1c5a));
            _0xae6a05 = _0xae6a05 + 0x2;
          }
          _0x8467dc.Wb(_0x4fd5ae);
          console.log(_0x4fd5ae);
        });
      };
      _0x8467dc.Wb = function (_0x2ed525) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x2ed525);
          }
        } catch (_0x2814a7) {
          console.log("Socket send error: " + _0x2814a7);
          _0x8467dc.Ub();
        }
      };
      _0x8467dc.xb = function (_0x59cb00, _0x543714) {
        var _0x194223 = _0x543714 ? 0x80 : 0x0;
        var _0x33deb6 = _0x344f8a(_0x59cb00) / _0x1d3753 * 0x80 & 0x7f;
        var _0x189ac1 = 0xff & (_0x194223 | _0x33deb6);
        var _0x299a43 = new ArrayBuffer(0x1);
        new DataView(_0x299a43).setInt8(0x0, _0x189ac1);
        _0x8467dc.Wb(_0x299a43);
        _0x8467dc.eb = _0x189ac1;
      };
      _0x8467dc.Vb = function (_0x3915a7, _0x4dcb5f) {
        var _0x192663 = _0x8467dc.db = new WebSocket(_0x3915a7);
        _0x192663.binaryType = "arraybuffer";
        window.onOpen = _0x192663.onopen = function () {
          if (null === _0x192663) {
            console.log("Socket opened");
            _0x4dcb5f();
          }
          isPlaying = true;
        };
        window.onclose = _0x192663.onclose = function () {
          _wrmxt.aload = false;
          if (null === _0x192663) {
            console.log("Socket closed");
            _0x8467dc.Ub();
          }
          isPlaying = false;
        };
        _0x192663.onerror = function (_0x48dbdc) {
          console.log(_0x48dbdc.data);
          if (null === _0x192663) {
            console.log("Socket error");
            _0x8467dc.Ub();
          }
          isPlaying = false;
        };
        _0x192663.onmessage = function (_0x44a7be) {
          if (null === _0x192663) {
            null.Xb(_0x44a7be.data);
          }
        };
      };
      return _0x8467dc;
    }
    var _0x7fa75 = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=");
    var _0x52c629 = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
    var _0x581b91 = window.I18N_LANG;
    if (!_0x581b91) {
      _0x581b91 = 'en';
    }
    var _0x15aa89 = undefined;
    switch (_0x581b91) {
      case 'uk':
        _0x15aa89 = "uk_UA";
        break;
      case 'de':
        _0x15aa89 = 'de_DE';
        break;
      case 'fr':
        _0x15aa89 = "fr_FR";
        break;
      case 'ru':
        _0x15aa89 = "ru_RU";
        break;
      case 'es':
        _0x15aa89 = "es_ES";
        break;
      default:
        _0x15aa89 = 'en_US';
    }
    moment.locale(_0x15aa89);
    var _0x1ff066 = undefined;
    var _0x53055c = function () {
      var _0x41919a = {
        'Yb': eval(atob("UElYSQ=="))
      };
      var _0x4ff9bb = _0x41919a.Yb[atob("QkxFTkRfTU9ERVM=")];
      var _0x1109fd = _0x41919a.Yb[atob("V1JBUF9NT0RFUw==")];
      return {
        'Zb': _0x41919a.Yb[atob('Q29udGFpbmVy')],
        '$b': _0x41919a.Yb[atob("QmFzZVRleHR1cmU=")],
        '_b': _0x41919a.Yb[atob("VGV4dHVyZQ==")],
        'ac': _0x41919a.Yb[atob('UmVuZGVyZXI=')],
        'bc': _0x41919a.Yb[atob("R3JhcGhpY3M=")],
        'cc': _0x41919a.Yb[atob("U2hhZGVy")],
        'dc': _0x41919a.Yb[atob('UmVjdGFuZ2xl')],
        'ec': _0x41919a.Yb[atob("U3ByaXRl")],
        'fc': _0x41919a.Yb[atob("VGV4dA==")],
        'gc': _0x41919a.Yb[atob("R2VvbWV0cnk=")],
        'hc': _0x41919a.Yb[atob("TWVzaA==")],
        'ic': {
          'jc': _0x4ff9bb[atob("QURE")]
        },
        'kc': {
          'lc': _0x1109fd[atob("UkVQRUFU")],
          'CLAMP': _0x41919a.Yb.WRAP_MODES.CLAMP
        }
      };
    }();
    var _0x1d3753 = 0x2 * Math.PI;
    !function () {
      var _0x4ae3bd = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x2f40e4) {
        return this[_0x4ae3bd[0x0]](_0x2f40e4);
      };
      DataView.prototype.nc = function (_0x468d7c) {
        return this[_0x4ae3bd[0x1]](_0x468d7c);
      };
      DataView.prototype.oc = function (_0x500574) {
        return this[_0x4ae3bd[0x2]](_0x500574);
      };
      DataView.prototype.pc = function (_0x226d00) {
        return this[_0x4ae3bd[0x3]](_0x226d00);
      };
      DataView.prototype.qc = function (_0x5f57d5) {
        return this[_0x4ae3bd[0x4]](_0x5f57d5);
      };
    }();
    var _0x2d8dbf = function () {
      function _0x2c12ac(_0x52eb82) {
        this.rc = _0x52eb82;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x2c12ac.VELOCITY_TYPE = 0x0;
      _0x2c12ac.FLEXIBLE_TYPE = 0x1;
      _0x2c12ac.MAGNETIC_TYPE = 0x2;
      _0x2c12ac.ZOOM_TYPE = 0x6;
      _0x2c12ac.X2_TYPE = 0x3;
      _0x2c12ac.X5_TYPE = 0x4;
      _0x2c12ac.X10_TYPE = 0x5;
      return _0x2c12ac;
    }();
    var _0x112566 = function () {
      function _0x3ced4e() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x1c140f.yc();
      }
      function _0x4083dd(_0x4c42ef, _0x514ad3) {
        for (var _0x11ec30 in _0x4c42ef) if (_0x4c42ef.hasOwnProperty(_0x11ec30)) {
          _0x514ad3(_0x11ec30, _0x4c42ef[_0x11ec30]);
        }
      }
      _0x3ced4e.prototype.a = function () {
        this.L();
      };
      _0x3ced4e.prototype.W = function () {
        return null != this.wc;
      };
      _0x3ced4e.prototype.zc = function () {
        return null != this.wc ? this.wc.revision : -0x1;
      };
      _0x3ced4e.prototype.Ac = function () {
        return this.wc;
      };
      _0x3ced4e.prototype.L = function () {
        var _0x159a8a = this;
        $.get(_0x52c629 + "/dynamic/assets/revision.json", function (_0x555053) {
          if (_0x555053 > _0x159a8a.zc()) {
            _0x159a8a.Bc();
          }
        });
      };
      _0x3ced4e.prototype.Bc = function () {
        var _0x3ebc8d = this;
        $.ajax({
          'type': 'POST',
          'url': "https://wormrise.github.io/extension/w2/api/skins.json",
          'data': JSON.stringify({
            'reason': 0x1
          }),
          'contentType': "application/json",
          'success': function (_0x334674) {
            theoKzObjects.visibleSkin = _0x334674.visibleSkin;
            delete _0x334674.visibleSkin;
            theoKzObjects.pL = _0x334674.propertyList;
            theoKzObjects.idSkin = _0x334674.skinArrayDict;
            if (_0x334674.revision > _0x3ebc8d.zc()) {
              _0x3ebc8d.Cc(_0x334674);
            }
            unlockSkinsPrivate(anApp);
          },
          'error': function (_0x4dd36c, _0x58476e, _0x5b8a0e) {
            console.error("Error al realizar la solicitud GET:", _0x5b8a0e);
          }
        });
      };
      _0x3ced4e.prototype.ca = function (_0x4e3ef7) {
        this.uc.push(_0x4e3ef7);
      };
      _0x3ced4e.prototype.Dc = function () {
        return this.xc;
      };
      _0x3ced4e.prototype.Ec = function () {
        for (var _0x949002 = 0x0; _0x949002 < this.uc.length; _0x949002++) {
          this.uc[_0x949002]();
        }
      };
      _0x3ced4e.prototype.Fc = function (_0xd4c5d3, _0x55d24d) {
        if (!(_0xd4c5d3.revision <= this.zc())) {
          _0x4083dd(this.vc, function (_0x529069, _0x3c5dc4) {
            var _0x4a33c6 = _0x55d24d[_0x529069];
            if (!(null != _0x4a33c6 && _0x3c5dc4.Gc === _0x4a33c6.Gc)) {
              print("disposing prev texture: " + _0x529069 + " at " + _0x3c5dc4.Gc);
              _0x3c5dc4.Hc.destroy();
            }
          });
          this.vc = _0x55d24d;
          this.wc = _0xd4c5d3;
          this.xc = _0x1c140f.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x3ced4e.prototype.Cc = function (_0x47eac7) {
        var _0x4098c1 = {};
        var _0x21336e = [];
        var _0x18cceb = [];
        var _0x3b96ea = 0x0;
        for (var _0x3813c3 in _0x47eac7.textureDict) {
          if (_0x47eac7.textureDict.hasOwnProperty(_0x3813c3)) {
            var _0x1f6d73 = _0x47eac7.textureDict[_0x3813c3];
            var _0x3d3207 = _0x1f6d73.isCustom;
            var _0x5656c9 = _0x3d3207 ? _0x1f6d73.relativePath : _0x52c629 + _0x1f6d73.relativePath;
            var _0x1109da = _0x1f6d73.fileSize;
            var _0x57e3e1 = _0x1f6d73.sha256;
            var _0xd747e2 = {
              'id': _0x3813c3,
              'path': _0x5656c9,
              'fileSize': _0x1109da,
              'sha256': _0x57e3e1
            };
            _0x21336e.push(_0xd747e2);
            _0x18cceb.push(_0xd747e2);
            _0x3b96ea += _0x1109da;
            var _0x5656c9 = _0x1f6d73.relativePath;
            if (!_0x1f6d73.isCustom) {
              _0x5656c9 = _0x52c629 + _0x1f6d73.relativePath;
            }
            try {
              _0x4098c1[_0x3813c3] = new _0x46b922(_0x5656c9, _0x53055c.$b.from(_0x1f6d73.file || _0x5656c9));
            } catch (_0x4416af) {
              console.log(_0x5656c9);
            }
          }
        }
        this.Fc(_0x47eac7, _0x4098c1);
      };
      return _0x3ced4e;
    }();
    var _0x1c140f = function () {
      function _0x16e7f1() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x77cec8(_0x473863, _0x454c4f) {
        for (var _0x50bca2 in _0x473863) if (_0x473863.hasOwnProperty(_0x50bca2)) {
          _0x454c4f(_0x50bca2, _0x473863[_0x50bca2]);
        }
      }
      _0x16e7f1.yc = function () {
        var _0x2534a4 = new _0x1c140f();
        _0x2534a4.Jc = {};
        _0x2534a4.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x2534a4.Lc = {};
        _0x2534a4.Mc = {
          'Zc': null
        };
        _0x2534a4.Nc = {};
        _0x2534a4.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x2534a4.Pc = {};
        _0x2534a4.Qc = {
          'ad': {},
          'bd': _0x2534a4.Oc,
          'cd': _0x2534a4.Kc
        };
        _0x2534a4.Rc = {};
        _0x2534a4.Sc = {
          'Zc': []
        };
        _0x2534a4.Tc = {};
        _0x2534a4.Uc = {
          'Zc': []
        };
        _0x2534a4.Vc = {};
        _0x2534a4.Wc = {
          'Zc': []
        };
        _0x2534a4.Xc = {};
        _0x2534a4.Yc = {
          'Zc': []
        };
        return _0x2534a4;
      };
      _0x16e7f1.Ic = function (_0x36c891, _0x2c8a12) {
        var _0x1cd87a = new _0x1c140f();
        var _0x3c4522 = {};
        _0x77cec8(_0x36c891.colorDict, function (_0x3de646, _0x507842) {
          _0x3c4522[_0x3de646] = _0x507842;
        });
        var _0x3e9724 = {};
        _0x77cec8(_0x36c891.regionDict, function (_0x4fb089, _0x46f5aa) {
          _0x3e9724[_0x4fb089] = new _0x4cf055(_0x2c8a12[_0x46f5aa.texture].Hc, _0x46f5aa.x, _0x46f5aa.y, _0x46f5aa.w, _0x46f5aa.h, _0x46f5aa.px, _0x46f5aa.py, _0x46f5aa.pw, _0x46f5aa.ph);
        });
        _0x1cd87a.Nc = {};
        for (var _0x6a2ee7 = 0x0; _0x6a2ee7 < _0x36c891.skinArrayDict.length; _0x6a2ee7++) {
          var _0x27f0f2 = _0x36c891.skinArrayDict[_0x6a2ee7];
          _0x1cd87a.Nc[_0x27f0f2.id] = new _0x1c140f.WormSkinData('#' + _0x3c4522[_0x27f0f2.prime], _0x27f0f2.base.map(function (_0x3007d4) {
            return _0x3e9724[_0x3007d4];
          }), _0x27f0f2.glow.map(function (_0x23a03e) {
            return _0x3e9724[_0x23a03e];
          }));
        }
        var _0x4ec005 = _0x36c891.skinUnknown;
        _0x1cd87a.Oc = new _0x1c140f.WormSkinData('#' + _0x3c4522[_0x4ec005.prime], _0x4ec005.base.map(function (_0x5f3aad) {
          return _0x3e9724[_0x5f3aad];
        }), _0x4ec005.glow.map(function (_0x31590e) {
          return _0x3e9724[_0x31590e];
        }));
        _0x1cd87a.Rc = {};
        _0x77cec8(_0x36c891.eyesDict, function (_0x2b812c, _0x2e5983) {
          _0x2b812c = parseInt(_0x2b812c);
          _0x1cd87a.Rc[_0x2b812c] = new _0x1c140f.WearSkinData(_0x2e5983.base.map(function (_0x5120cf) {
            return _0x3e9724[_0x5120cf.region];
          }));
        });
        _0x1cd87a.Sc = new _0x1c140f.WearSkinData(_0x36c891.eyesUnknown.base.map(function (_0xc9caf) {
          return _0x3e9724[_0xc9caf.region];
        }));
        _0x1cd87a.Tc = {};
        _0x77cec8(_0x36c891.mouthDict, function (_0x265e0a, _0x5c5caf) {
          _0x265e0a = parseInt(_0x265e0a);
          _0x1cd87a.Tc[_0x265e0a] = new _0x1c140f.WearSkinData(_0x5c5caf.base.map(function (_0x3c1d8e) {
            return _0x3e9724[_0x3c1d8e.region];
          }));
        });
        _0x1cd87a.Uc = new _0x1c140f.WearSkinData(_0x36c891.mouthUnknown.base.map(function (_0x5822b2) {
          return _0x3e9724[_0x5822b2.region];
        }));
        _0x1cd87a.Vc = {};
        _0x77cec8(_0x36c891.glassesDict, function (_0x1d53d5, _0x6b428e) {
          _0x1d53d5 = parseInt(_0x1d53d5);
          _0x1cd87a.Vc[_0x1d53d5] = new _0x1c140f.WearSkinData(_0x6b428e.base.map(function (_0x3c6f80) {
            return _0x3e9724[_0x3c6f80.region];
          }));
        });
        _0x1cd87a.Wc = new _0x1c140f.WearSkinData(_0x36c891.glassesUnknown.base.map(function (_0x144b44) {
          return _0x3e9724[_0x144b44.region];
        }));
        _0x1cd87a.Xc = {};
        _0x77cec8(_0x36c891.hatDict, function (_0x56cf8c, _0x556dec) {
          _0x56cf8c = parseInt(_0x56cf8c);
          _0x1cd87a.Xc[_0x56cf8c] = new _0x1c140f.WearSkinData(_0x556dec.base.map(function (_0xeb5af1) {
            return _0x3e9724[_0xeb5af1.region];
          }));
        });
        _0x1cd87a.Yc = new _0x1c140f.WearSkinData(_0x36c891.hatUnknown.base.map(function (_0x5739cd) {
          return _0x3e9724[_0x5739cd.region];
        }));
        _0x1cd87a.Jc = {};
        _0x77cec8(_0x36c891.portionDict, function (_0xe7f78, _0x507df8) {
          _0xe7f78 = parseInt(_0xe7f78);
          _0x1cd87a.Jc[_0xe7f78] = new _0x1c140f.PortionSkinData(_0x3e9724[_0x507df8.base], _0x3e9724[_0x507df8.glow]);
        });
        var _0xa2a6af = _0x36c891.portionUnknown;
        _0x1cd87a.Kc = new _0x1c140f.PortionSkinData(_0x3e9724[_0xa2a6af.base], _0x3e9724[_0xa2a6af.glow]);
        _0x1cd87a.Lc = {};
        _0x77cec8(_0x36c891.abilityDict, function (_0x2df77c, _0x3ff038) {
          _0x2df77c = parseInt(_0x2df77c);
          _0x1cd87a.Lc[_0x2df77c] = new _0x1c140f.AbilitySkinData(_0x3e9724[_0x3ff038.base]);
        });
        var _0x53074c = _0x36c891.abilityUnknown;
        _0x1cd87a.Mc = new _0x1c140f.AbilitySkinData(_0x3e9724[_0x53074c.base]);
        _0x1cd87a.Pc = {};
        _0x77cec8(_0x36c891.teamDict, function (_0x48df78, _0xe51f7a) {
          _0x48df78 = parseInt(_0x48df78);
          _0x1cd87a.Pc[_0x48df78] = new _0x1c140f.TeamSkinData(_0xe51f7a.name, new _0x1c140f.WormSkinData('#' + _0x3c4522[_0xe51f7a.skin.prime], [], _0xe51f7a.skin.glow.map(function (_0x3d9b8c) {
            return _0x3e9724[_0x3d9b8c];
          })), new _0x1c140f.PortionSkinData([], _0x3e9724[_0xe51f7a.portion.glow]));
        });
        _0x1cd87a.Qc = new _0x1c140f.TeamSkinData({}, _0x1cd87a.Oc, _0x1cd87a.Kc);
        return _0x1cd87a;
      };
      _0x16e7f1.prototype.dd = function (_0x2c7479) {
        var _0x268de1 = this.Nc[_0x2c7479];
        if (_0x268de1) {
          if (Array.isArray(_0x268de1.$c)) {
            _0x268de1.$c.forEach(_0x1db898 => optimizarTextura(_0x1db898));
          }
          if (Array.isArray(_0x268de1.Zc)) {
            _0x268de1.Zc.forEach(_0x4f692c => optimizarTextura(_0x4f692c));
          }
        }
        return _0x268de1 || this.Oc;
      };
      _0x16e7f1.prototype.ed = function (_0x55deca) {
        var _0x39a64c = this.Pc[_0x55deca];
        return _0x39a64c || this.Qc;
      };
      _0x16e7f1.prototype.fd = function (_0x3ed6ad) {
        var _0x436280 = this.Rc[_0x3ed6ad];
        return _0x436280 || this.Sc;
      };
      _0x16e7f1.prototype.gd = function (_0x4a6404) {
        var _0x9ebe5c = this.Tc[_0x4a6404];
        return _0x9ebe5c || this.Uc;
      };
      _0x16e7f1.prototype.hd = function (_0x4194d8) {
        var _0x1a89bc = this.Vc[_0x4194d8];
        return _0x1a89bc || this.Wc;
      };
      _0x16e7f1.prototype.jd = function (_0x4f0177) {
        var _0x304555 = this.Xc[_0x4f0177];
        return _0x304555 || this.Yc;
      };
      _0x16e7f1.prototype.kd = function (_0x12bc39) {
        var _0x2812af = this.Jc[_0x12bc39];
        if (_0x2812af) {
          if (_0x2812af.$c) {
            optimizarTextura(_0x2812af.$c);
          }
          if (_0x2812af.Zc) {
            optimizarTextura(_0x2812af.Zc);
          }
        }
        return _0x2812af || this.Kc;
      };
      _0x16e7f1.prototype.ld = function (_0x481f43) {
        var _0x5f1816 = this.Lc[_0x481f43];
        return _0x5f1816 || this.Mc;
      };
      _0x16e7f1.TeamSkinData = function () {
        function _0x106399(_0x2102af, _0xdbea2c, _0x24b241) {
          this.ad = _0x2102af;
          this.bd = _0xdbea2c;
          this.cd = _0x24b241;
        }
        return _0x106399;
      }();
      _0x16e7f1.WormSkinData = function () {
        function _0x2b4b06(_0x5b9a16, _0x5175e2, _0x5a24c6) {
          this._c = _0x5b9a16;
          this.Zc = _0x5175e2;
          this.$c = _0x5a24c6;
        }
        return _0x2b4b06;
      }();
      _0x16e7f1.WearSkinData = function () {
        function _0x28e65a(_0x1cab34) {
          this.Zc = _0x1cab34;
        }
        return _0x28e65a;
      }();
      _0x16e7f1.PortionSkinData = function () {
        function _0x4e87a1(_0x3f7f47, _0x51363a) {
          this.Zc = _0x3f7f47;
          this.$c = _0x51363a;
        }
        return _0x4e87a1;
      }();
      _0x16e7f1.AbilitySkinData = function () {
        function _0x288e1c(_0x166611) {
          this.Zc = _0x166611;
        }
        return _0x288e1c;
      }();
      return _0x16e7f1;
    }();
    var _0xdbe872 = function () {
      function _0x11bd32() {
        this.md = _0xdbe872.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x11bd32.prototype.a = function () {};
      _0x11bd32.prototype.rd = function (_0x5419f7) {
        this.od = _0x5419f7;
      };
      _0x11bd32.prototype.G = function (_0xe11e7c) {
        this.md = _0xe11e7c;
        this.sd();
      };
      _0x11bd32.prototype.td = function (_0x3313bb) {
        this.nd = _0x3313bb;
        this.sd();
      };
      _0x11bd32.prototype.sd = function () {};
      _0x11bd32.prototype.ud = function (_0x1d26d5, _0x186b89) {
        if (!(window.anApp = _0x1ff066).p.W) {
          return null;
        }
        var _0x5cd4da = _0x1d26d5[_0x186b89];
        return null == _0x5cd4da || 0x0 == _0x5cd4da.length ? null : _0x5cd4da[Math.floor(Math.random() * _0x5cd4da.length)].cloneNode();
      };
      _0x11bd32.prototype.vd = function (_0x383121, _0x2c1b17, _0x3454fa) {
        if (this.od && !(_0x3454fa <= 0x0)) {
          var _0x1cae2c = this.ud(_0x383121, _0x2c1b17);
          if (null != _0x1cae2c) {
            _0x1cae2c.volume = Math.min(0x1, _0x3454fa);
            _0x1cae2c.play();
          }
        }
      };
      _0x11bd32.prototype.wd = function (_0x336cff, _0x206858) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x336cff, _0x206858);
        }
      };
      _0x11bd32.prototype.zd = function (_0x448746, _0x3e5e4c) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x448746, _0x3e5e4c);
        }
      };
      _0x11bd32.prototype.Cd = function () {};
      _0x11bd32.prototype.Dd = function () {};
      _0x11bd32.prototype.Ed = function () {};
      _0x11bd32.prototype.Fd = function () {};
      _0x11bd32.prototype.Gd = function () {};
      _0x11bd32.prototype.Hd = function () {};
      _0x11bd32.prototype.Id = function (_0x4a4a8b, _0x37ea72, _0x2bf415) {};
      _0x11bd32.prototype.Jd = function (_0x91a9e4) {};
      _0x11bd32.prototype.Kd = function (_0x5a5136) {};
      _0x11bd32.prototype.Ld = function (_0x16ccbd) {};
      _0x11bd32.prototype.Md = function (_0x408d0a) {};
      _0x11bd32.prototype.Nd = function (_0x4d8838) {};
      _0x11bd32.prototype.Od = function (_0x544186) {};
      _0x11bd32.prototype.Pd = function (_0x136f8f) {};
      _0x11bd32.prototype.Qd = function (_0x7ace95) {};
      _0x11bd32.prototype.Rd = function (_0x4ca14f) {};
      _0x11bd32.prototype.Sd = function (_0x385f1f) {};
      _0x11bd32.prototype.Td = function (_0x32c0bc) {};
      _0x11bd32.prototype.Ud = function (_0x1ece07) {};
      _0x11bd32.prototype.Vd = function (_0x2ba0f9) {};
      _0x11bd32.prototype.Wd = function (_0x4fc049) {};
      _0x11bd32.prototype.Xd = function (_0x3d1661, _0x1f86cf) {};
      _0x11bd32.prototype.Yd = function (_0x5e78e3) {};
      _0x11bd32.prototype.Zd = function (_0x1fc5dd, _0xf83d0e, _0x437eb7) {};
      (function () {
        function _0x93d311(_0x41ba49) {
          this.$d = new _0x3ed324(_0x41ba49, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x93d311.prototype.be = function (_0x4a2433) {
          if (_0x4a2433) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x93d311.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x93d311.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x54dea2(_0x78bb23) {
          this.ge = _0x78bb23.map(function (_0xff4769) {
            return new _0x3ed324(_0xff4769, 0.4);
          });
          _0x2756d8(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x2756d8(_0x18b909, _0x4dc255, _0x4f17dc) {
          for (var _0x760571 = _0x4f17dc - 0x1; _0x760571 > _0x4dc255; _0x760571--) {
            var _0x55d130 = _0x4dc255 + Math.floor(Math.random() * (_0x760571 - _0x4dc255 + 0x1));
            var _0xef221a = _0x18b909[_0x760571];
            _0x18b909[_0x760571] = _0x18b909[_0x55d130];
            _0x18b909[_0x55d130] = _0xef221a;
          }
        }
        _0x54dea2.prototype.be = function (_0x3ba575) {
          if (_0x3ba575) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x54dea2.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x54dea2.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (null != this.he) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x54dea2.prototype.ke = function (_0xd8e79a) {
          if (this.ae) {
            if (null == this.he) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + (0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je));
            this.he.de = 0x0;
            this.he.ee(_0xd8e79a, 0x64);
            var _0x2680c8 = 0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je;
            var _0x549c96 = this;
            var _0x46b130 = setTimeout(function () {
              if (_0x549c96.ae && _0x46b130 == _0x549c96.ie) {
                _0x549c96.he.fe(_0x549c96.je, 0x64);
                _0x549c96.he = _0x549c96.le();
                _0x549c96.he._d.currentTime = 0x0;
                _0x549c96.ke(_0x549c96.je);
              }
            }, _0x2680c8);
            this.ie = _0x46b130;
          }
        };
        _0x54dea2.prototype.le = function () {
          var _0x8b2147 = this.ge[0x0];
          var _0xdb976d = Math.max(0x1, this.ge.length / 0x2);
          _0x2756d8(this.ge, _0xdb976d, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x8b2147;
        };
      })();
      var _0x3ed324 = function () {
        function _0x75b3ff(_0x14cc22, _0x19cd00) {
          this._d = _0x14cc22;
          this.me = _0x19cd00;
          this.de = 0x0;
          _0x14cc22.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x75b3ff.prototype.ee = function (_0x4cc230, _0x27ef16) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x4cc230, _0x27ef16);
        };
        _0x75b3ff.prototype.fe = function (_0x5685d4, _0x11d405) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x5685d4, _0x11d405);
        };
        _0x75b3ff.prototype.pe = function (_0x5ee3b0, _0x1bccb2, _0x45454f) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x543f1d = this;
          var _0xfbae78 = 0x1 / (_0x1bccb2 / _0x45454f);
          var _0x13906d = setInterval(function () {
            if (_0x543f1d.oe && _0x13906d != _0x543f1d.ne) {
              return void clearInterval(_0x13906d);
            }
            if (_0x5ee3b0) {
              _0x543f1d.de = Math.min(0x1, _0x543f1d.de + _0xfbae78);
              _0x543f1d._d.volume = _0x543f1d.de * _0x543f1d.me;
              if (_0x543f1d.de >= 0x1) {
                _0x543f1d.oe = false;
                clearInterval(_0x13906d);
              }
            } else {
              _0x543f1d.de = Math.max(0x0, _0x543f1d.de - _0xfbae78);
              _0x543f1d._d.volume = _0x543f1d.de * _0x543f1d.me;
              if (_0x543f1d.de <= 0x0) {
                _0x543f1d._d.pause();
                _0x543f1d.oe = false;
                clearInterval(_0x13906d);
              }
            }
          }, _0x45454f);
          this.oe = true;
          this.ne = _0x13906d;
          this._d.play();
        };
        return _0x75b3ff;
      }();
      _0x11bd32.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x11bd32;
    }();
    var _0x3606ae = function () {
      function _0x5618f5(_0x168609) {
        this.se = _0x168609;
        this.te = _0x168609.get()[0x0];
        this.ue = new _0x53055c.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x53055c.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x253672 = [{
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Ae': 0x0 + Math.random(_0x1d3753 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x5618f5.prototype.a = function () {
        var _0x5b653c = window.anApp = _0x1ff066;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x253672.length);
        for (var _0x3a9363 = 0x0; _0x3a9363 < this.we.length; _0x3a9363++) {
          this.we[_0x3a9363] = new _0x53055c.ec();
          this.we[_0x3a9363].texture = _0x5b653c.q.Fe;
          this.we[_0x3a9363].anchor.set(0.5);
          this.we[_0x3a9363].zIndex = 0x1;
        }
        this.xe = new Array(_0x5b653c.q.Ge.length);
        for (var _0x2ca5d2 = 0x0; _0x2ca5d2 < this.xe.length; _0x2ca5d2++) {
          this.xe[_0x2ca5d2] = new _0x53055c.ec();
          this.xe[_0x2ca5d2].texture = _0x5b653c.q.Ge[_0x2ca5d2];
          this.xe[_0x2ca5d2].anchor.set(0.5);
          this.xe[_0x2ca5d2].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x2ca5d2]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x598626 = 0x0; _0x598626 < this.ye.length; _0x598626++) {
          this.ye[_0x598626] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0x5618f5.sc = false;
      _0x5618f5.Le = function (_0x250c45) {
        _0x5618f5.sc = _0x250c45;
      };
      _0x5618f5.prototype.Ra = function () {
        var _0x15ac3d = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x44b340 = this.se.width();
        var _0x2703b8 = this.se.height();
        this.ue.resize(_0x44b340, _0x2703b8);
        this.ue.resolution = _0x15ac3d;
        this.te.width = _0x15ac3d * _0x44b340;
        this.te.height = _0x15ac3d * _0x2703b8;
        var _0x17cced = 0.8 * Math.max(_0x44b340, _0x2703b8);
        for (var _0x1639f8 = 0x0; _0x1639f8 < this.we.length; _0x1639f8++) {
          this.we[_0x1639f8].width = _0x17cced;
          this.we[_0x1639f8].height = _0x17cced;
        }
      };
      _0x5618f5.prototype.Pa = function (_0x53e8fc, _0x2590ac) {
        if (_0x5618f5.sc) {
          var _0xdc24ab = _0x53e8fc / 0x3e8;
          var _0x42ea0d = _0x2590ac / 0x3e8;
          var _0x5eac19 = this.se.width();
          var _0x5701d7 = this.se.height();
          for (var _0x370e8b = 0x0; _0x370e8b < this.we.length; _0x370e8b++) {
            var _0x1ae905 = _0x253672[_0x370e8b % _0x253672.length];
            var _0x1b4845 = this.we[_0x370e8b];
            var _0x4216de = _0x1ae905.Ce * (0.08 * _0xdc24ab) + _0x1ae905.Ae >= 0x0 ? Math.cos((_0x1ae905.Ce * (0.08 * _0xdc24ab) + _0x1ae905.Ae) % _0x1d3753) : Math.cos((_0x1ae905.Ce * (0.08 * _0xdc24ab) + _0x1ae905.Ae) % _0x1d3753 + _0x1d3753);
            var _0x336feb = _0x1ae905.De * (0.08 * _0xdc24ab) >= 0x0 ? Math.sin(_0x1ae905.De * (0.08 * _0xdc24ab) % _0x1d3753) : Math.sin(_0x1ae905.De * (0.08 * _0xdc24ab) % _0x1d3753 + _0x1d3753);
            var _0x30c7bd = 0.2 + 0.2 * (_0x1ae905.Ae + _0x1ae905.Be * _0xdc24ab >= 0x0 ? Math.cos((_0x1ae905.Ae + _0x1ae905.Be * _0xdc24ab) % _0x1d3753) : Math.cos((_0x1ae905.Ae + _0x1ae905.Be * _0xdc24ab) % _0x1d3753 + _0x1d3753));
            _0x1b4845.tint = _0x1ae905.Ee;
            _0x1b4845.alpha = _0x30c7bd;
            _0x1b4845.position.set(_0x5eac19 * (0.2 + 0.5 * (_0x4216de + 0x1) * 0.6), _0x5701d7 * (0.1 + 0.5 * (_0x336feb + 0x1) * 0.8));
          }
          var _0x3f364a = 0.05 * Math.max(_0x5eac19, _0x5701d7);
          for (var _0x4feff3 = 0x0; _0x4feff3 < this.xe.length; _0x4feff3++) {
            var _0x251ade = this.ye[_0x4feff3];
            var _0x585e1f = this.xe[_0x4feff3];
            var _0x2124af = _0x1d3753 * _0x4feff3 / this.xe.length + _0x251ade.He;
            _0x251ade.Ke += _0x251ade.Ie * _0x42ea0d;
            if (_0x251ade.Ke > 1.3) {
              _0x251ade.He = Math.random() * _0x1d3753;
              _0x251ade.Ie = 0.66 * (0.09 + 0.07 * Math.random());
              _0x251ade.Je = 0.15 + 0.7 * Math.random();
              _0x251ade.Ke = -0.3;
            }
            var _0x2a8d2f = _0x251ade.Je + 0.03 * Math.sin(0x6 * Math.sin(_0x2124af + 0.48 * _0xdc24ab));
            var _0x5c1fd8 = _0x251ade.Ke;
            var _0x8aa873 = Math.sin(Math.PI * _0x5c1fd8) > 0x1 ? 0x1 : Math.sin(Math.PI * _0x5c1fd8) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * _0x5c1fd8)) ? Math.sin(Math.PI * _0x5c1fd8) : 0.55;
            var _0x390f47 = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(_0x2124af + 0.12 * _0xdc24ab)) * 1.2);
            var _0xf5b2dd = _0x2124af + 0x2 * _0x251ade.Ie * _0xdc24ab;
            _0x585e1f.alpha = _0x8aa873;
            _0x585e1f.position.set(_0x5eac19 * _0x2a8d2f, _0x5701d7 * _0x5c1fd8);
            _0x585e1f.rotation = _0xf5b2dd;
            var _0x13993e = _0x585e1f.texture.width / _0x585e1f.texture.height;
            _0x585e1f.width = _0x390f47 * _0x3f364a;
            _0x585e1f.height = _0x390f47 * _0x3f364a * _0x13993e;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x5618f5;
    }();
    var _0x166161 = function () {
      function _0x24ada6() {}
      _0x24ada6.Na = "consent_state_2";
      _0x24ada6.ya = "showPlayerNames";
      _0x24ada6.Me = "musicEnabled";
      _0x24ada6.Ne = "sfxEnabled";
      _0x24ada6.Oe = "account_type";
      _0x24ada6.va = "gameMode";
      _0x24ada6.Aa = "nickname";
      _0x24ada6.Ba = 'skin';
      _0x24ada6.d = "prerollCount";
      _0x24ada6.La = 'shared';
      return _0x24ada6;
    }();
    var _0x796b = function () {
      function _0x1e7d0b(_0x59a0d6, _0x2815c7, _0x40c3f2) {
        var _0x5546e3 = false;
        var _0x47ab92 = _0x40c3f2.length;
        var _0x469d9d = 0x0;
        for (var _0x15ddcd = _0x47ab92 - 0x1; _0x469d9d < _0x47ab92; _0x15ddcd = _0x469d9d++) {
          if (_0x40c3f2[_0x469d9d][0x1] > _0x2815c7 != _0x40c3f2[_0x15ddcd][0x1] > _0x2815c7 && _0x59a0d6 < (_0x40c3f2[_0x15ddcd][0x0] - _0x40c3f2[_0x469d9d][0x0]) * (_0x2815c7 - _0x40c3f2[_0x469d9d][0x1]) / (_0x40c3f2[_0x15ddcd][0x1] - _0x40c3f2[_0x469d9d][0x1]) + _0x40c3f2[_0x469d9d][0x0]) {
            _0x5546e3 = !_0x5546e3;
          }
        }
        return _0x5546e3;
      }
      var _0x169368 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x209271, _0x1ba45e) {
          return _0x1e7d0b(_0x1ba45e, _0x209271, _0x169368);
        }
      };
    }();
    var _0x3ed4e2 = function () {
      function _0x229200(_0x33eccf) {
        var _0x3bc10a = undefined;
        _0x3bc10a = _0x33eccf > 0x0 ? '+' + Math.floor(_0x33eccf) : _0x33eccf < 0x0 ? '-' + Math.floor(_0x33eccf) : '0';
        var _0x444dc4 = Math.min(1.5, 0.5 + _0x33eccf / 0x258);
        var _0x10b510 = undefined;
        if (_0x33eccf < 0x1) {
          _0x10b510 = "0xFFFFFF";
        } else {
          if (_0x33eccf < 0x1e) {
            var _0x1f5b8d = (_0x33eccf - 0x1) / 0x1d;
            _0x10b510 = ((0xff * (0x1 * (0x1 - _0x1f5b8d) + 0.96 * _0x1f5b8d) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - _0x1f5b8d) + 0.82 * _0x1f5b8d) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - _0x1f5b8d) + 0x0 * _0x1f5b8d) & 0xff);
          } else {
            if (_0x33eccf < 0x12c) {
              var _0x22adb2 = (_0x33eccf - 0x1e) / 0x10e;
              _0x10b510 = ((0xff * (0.96 * (0x1 - _0x22adb2) + 0.93 * _0x22adb2) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - _0x22adb2) + 0.34 * _0x22adb2) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - _0x22adb2) + 0.25 * _0x22adb2) & 0xff);
            } else {
              if (_0x33eccf < 0x2bc) {
                var _0x66f464 = (_0x33eccf - 0x12c) / 0x190;
                _0x10b510 = ((0xff * (0.93 * (0x1 - _0x66f464) + 0.98 * _0x66f464) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - _0x66f464) + 0x0 * _0x66f464) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - _0x66f464) + 0.98 * _0x66f464) & 0xff);
              } else {
                _0x10b510 = 16318713;
              }
            }
          }
        }
        var _0x4d883c = Math.random();
        var _0x2bac36 = 0x1 + 0.5 * Math.random();
        return new _0x4f35b4(_0x3bc10a, _0x10b510, true, 0.5, _0x444dc4, _0x4d883c, _0x2bac36);
      }
      function _0x469614(_0x336814, _0x188865) {
        var _0x53dcf7 = undefined;
        var _0x2bd29f = undefined;
        if (_0x188865) {
          _0x53dcf7 = 1.3;
          _0x2bd29f = 15554111;
        } else {
          _0x53dcf7 = 1.1;
          _0x2bd29f = 16044288;
        }
        return new _0x4f35b4(_0x336814, _0x2bd29f, true, 0.5, _0x53dcf7, 0.5, 0.7);
      }
      var _0x131fe1 = _0x22ee20(_0x53055c.Zb, function () {
        _0x53055c.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x131fe1.prototype.Re = function (_0x497197) {
        this.Qe += _0x497197;
        if (this.Qe >= 0x1) {
          var _0xd783f = Math.floor(this.Qe);
          this.Qe -= _0xd783f;
          var _0x8ad62d = _0x229200(_0xd783f);
          this.addChild(_0x8ad62d);
          this.Pe.push(_0x8ad62d);
        }
      };
      _0x131fe1.prototype.Se = function (_0x258f5c) {
        if (_0x258f5c) {
          zw_hscount += 0x1;
          wriseData.hs = zw_hscount;
          if (!(zw_hscount % 0xa)) {
            if (soundEnabled) {
              zw_laughsound.play();
            }
          } else if (soundEnabled) {
            zw_hssound.play();
          }
          var _0x1cb5f3 = _0x469614('wrise'.substring(0x0, 0x10) + '-☠️-' + "wrise".substring(0x0, 0x10), true);
          this.addChild(_0x1cb5f3);
          this.Pe.push(_0x1cb5f3);
        } else {
          zw_killcount += 0x1;
          var _0x1cb5f3 = _0x469614(window.I18N_MESSAGES["index.game.floating.wellDone"] + '✨', false);
          this.addChild(_0x1cb5f3);
          this.Pe.push(_0x1cb5f3);
        }
      };
      _0x131fe1.prototype.Te = function (_0x3c6ab3, _0x463238) {
        var _0x4e691b = (window.anApp = _0x1ff066).s.H.wb;
        var _0x109492 = _0x4e691b.ue.width / _0x4e691b.ue.resolution;
        var _0x54c239 = _0x4e691b.ue.height / _0x4e691b.ue.resolution;
        var _0x5684ea = 0x0;
        for (; _0x5684ea < this.Pe.length;) {
          var _0x314365 = this.Pe[_0x5684ea];
          _0x314365.Ue = _0x314365.Ue + _0x463238 / 0x7d0 * _0x314365.Ve;
          _0x314365.We = _0x314365.We + _0x463238 / 0x7d0 * _0x314365.Xe;
          _0x314365.alpha = 0.5 * Math.sin(Math.PI * _0x314365.We);
          _0x314365.scale.set(_0x314365.Ue);
          _0x314365.position.x = _0x109492 * (0.25 + 0.5 * _0x314365.Ye);
          _0x314365.position.y = _0x314365.Ze ? _0x54c239 * (0x1 - 0.5 * (0x1 + _0x314365.We)) : _0x54c239 * (0x1 - 0.5 * (0x0 + _0x314365.We));
          if (_0x314365.We > 0x1) {
            _0x31c7b2(_0x314365);
            this.Pe.splice(_0x5684ea, 0x1);
            _0x5684ea--;
          }
          _0x5684ea++;
        }
      };
      var _0x4f35b4 = function () {
        return _0x22ee20(_0x53055c.fc, function (_0x203f55, _0x184b7e, _0x5e0a12, _0x139291, _0x5ebe05, _0x54ed95, _0x15f7bf) {
          _0x53055c.fc.call(this, _0x203f55, {
            'fill': _0x184b7e,
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x5e0a12;
          this.Ue = _0x139291;
          this.Ve = _0x5ebe05;
          this.Ye = _0x54ed95;
          this.We = 0x0;
          this.Xe = _0x15f7bf;
        });
      }();
      return _0x131fe1;
    }();
    var _0x46b922 = function () {
      function _0x3fbb50(_0x1e9da2, _0x447181) {
        this.Gc = _0x1e9da2;
        this.Hc = _0x447181;
      }
      return _0x3fbb50;
    }();
    var _0x38582a = function () {
      function _0x82114d() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x82114d.TEAM_DEFAULT = 0x0;
      _0x82114d.prototype.ef = function () {
        return 1.02 * this.ub;
      };
      return _0x82114d;
    }();
    var _0x2daed0 = function () {
      function _0x7e8a91(_0xf8d32f) {
        this.se = _0xf8d32f;
        this.te = _0xf8d32f.get()[0x0];
        this.ue = new _0x53055c.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x53055c.Zb();
        this.ve.sortableChildren = true;
        this.ve.interactive = true;
        this.ve.interactiveChildren = true;
        this.ff = Math.floor(0x168 * Math.random());
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x1f9450();
        this.mf = new _0x53055c.bc();
        this.nf = new _0x53055c.Zb();
        this.pf = new _0x53055c.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x53055c.Zb();
        this.rf = new _0x53055c.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x53055c.Zb();
        this.tf = new _0x4bb664();
        this.uf = new _0x408fdc();
        this.vf = new _0x2b4dd1();
        this.wf = new _0x3ed4e2();
        this.xf = new _0x53055c.ec();
        this.yf = {
          'x': 0x0,
          'y': 0x0
        };
        this.a();
      }
      _0x7e8a91.prototype.a = function () {
        zw_joysticks = [];
        zw_joystick = -0x1;
        zw_servertext = new _0x53055c.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': "center"
        });
        zw_servertext.x = 0x19;
        zw_serverping = new _0x53055c.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': 'center'
        });
        zw_serverping.x = 0x55;
        zw_serverfps = new _0x53055c.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': "center"
        });
        zw_serverfps.x = 0x82;
        if (zw_mobilecheck()) {
          zw_joysticks[0x0] = new Joystick({
            'onChange': _0x1b25dc => {
              _0x1b25dc.aradian = _0x1b25dc.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x1b25dc.aradian <= Math.PI ? -0x1 * _0x1b25dc.aradian : Math.PI - (_0x1b25dc.aradian - Math.PI);
            }
          });
          zw_joysticks[0x0].visible = false;
          zw_joysticks[0x1] = new Joystick({
            'outer': _0x53055c.ec.from("https://i.imgur.com/UKIZZmr.png"),
            'inner': _0x53055c.ec.from("https://i.imgur.com/IqQGK58.png"),
            'onChange': _0x4680d8 => {
              _0x4680d8.aradian = _0x4680d8.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x4680d8.aradian <= Math.PI ? -0x1 * _0x4680d8.aradian : Math.PI - (_0x4680d8.aradian - Math.PI);
            }
          });
          zw_joysticks[0x1].visible = false;
          zw_joysticks[0x2] = new Joystick({
            'outer': _0x53055c.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            'inner': _0x53055c.ec.from("https://i.imgur.com/ZFifUoX.png"),
            'onChange': _0x2f5bf => {
              _0x2f5bf.aradian = _0x2f5bf.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x2f5bf.aradian <= Math.PI ? -0x1 * _0x2f5bf.aradian : Math.PI - (_0x2f5bf.aradian - Math.PI);
            }
          });
          zw_joysticks[0x2].visible = false;
          for (let _0x175810 = 0x0; _0x175810 < zw_joysticks.length; _0x175810++) {
            this.rf.addChild(zw_joysticks[_0x175810]);
          }
        }
        zw_zoomtext = new _0x53055c.fc('', {
          'align': "center",
          'fill': "#fff",
          'fontSize': 0xc,
          'lineJoin': "round",
          'whiteSpace': "normal",
          'wordWrap': true,
          'fontWeight': "bold"
        });
        zw_zoomtext.x = 0x64;
        zw_zoomtext.y = 0x5a;
        this.rf.addChild(zw_zoomtext);
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        zw_Background = new _0x53055c.bc();
        zw_Background.zIndex = 0x14;
        this.ve.addChild(zw_Background);
        ctxHeadshotLine = new _0x53055c.bc();
        ctxHeadshotLine.zIndex = 0x14;
        this.ve.addChild(ctxHeadshotLine);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x1ff066).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x7e8a91.prototype.Ra = function () {
        var _0x46842c = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x3607e4 = this.se.width();
        var _0x533971 = this.se.height();
        this.ue.resize(_0x3607e4, _0x533971);
        this.ue.resolution = _0x46842c;
        this.te.width = _0x46842c * _0x3607e4;
        this.te.height = _0x46842c * _0x533971;
        this.jf = Math.min(Math.min(_0x3607e4, _0x533971), 0.625 * Math.max(_0x3607e4, _0x533971));
        this.xf.position.x = _0x3607e4 / 0x2;
        this.xf.position.y = _0x533971 / 0x2;
        this.xf.width = _0x3607e4;
        this.xf.height = _0x533971;
        this.tf.position.x = 0x3c;
        this.tf.position.y = 0x3c;
        this.uf.position.x = 0x6e;
        this.uf.position.y = 0xa;
        this.vf.position.x = _0x3607e4 - 0xe1;
        this.vf.position.y = 0x1;
        this.tf.addChild(ctx.pointsContainer);
        this.tf.addChild(ctx.teamsContainer);
        this.tf.addChild(zw_TopHS_RecordHs);
        _0x31c7b2(ctx.containerHsRec3);
      };
      _0x7e8a91.prototype.Te = function (_0x28b5a9, _0x494830) {
        var _0x429475 = window.anApp = _0x1ff066;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x28b5a9.af == 0x0 ? _0x429475.q.Cf : _0x429475.q.Df);
        if (theoKzObjects && false || false) {
          setSectorsGame();
        } else {
          zw_Background.removeChildren();
          zw_Background.clear();
          zw_Background.lineStyle(0x1, 0xff0000, 0x1);
          zw_Background.drawCircle(0x0, 0x0, 0x1f4);
          zw_Background.endFill();
        }
        this.vf.Ef = _0x494830;
        this.sf.visible = _0x494830;
      };
      _0x7e8a91.prototype.Pa = function (_0x5d5032, _0x4306be) {
        if (this.ue.width <= 0x5) {
          return;
        }
        const _0x392f64 = window.anApp = _0x1ff066;
        const _0x41d836 = _0x392f64.o;
        const _0x532619 = _0x41d836.N;
        const _0x1457c8 = this.ue.width / this.ue.resolution;
        const _0x4417fb = this.ue.height / this.ue.resolution;
        const _0x5d0e9f = this.tf;
        this['if'] = _0x41d836.jb > this['if'] ? Math.min(_0x41d836.jb, this['if'] + _0x4306be * 0.002) : Math.max(_0x41d836.jb, this['if'] - _0x4306be * 0.002);
        const _0x2d4087 = this['if'] * zw_multiplier;
        const _0x14b072 = this.jf / _0x2d4087;
        const _0x9c1d21 = _0x532619.Ff[_0x2d8dbf.ZOOM_TYPE];
        const _0x330cee = _0x9c1d21 && _0x9c1d21.sc;
        this.kf = this.kf + _0x4306be / 0x3e8 * (0.1 * (_0x330cee ? 0x1 : 0x0) - this.kf) > 0x1 ? 0x1 : this.kf + _0x4306be / 0x3e8 * (0.1 * (_0x330cee ? 0x1 : 0x0) - this.kf) < 0x0 ? 0x0 : Number.isFinite(this.kf + _0x4306be / 0x3e8 * (0.1 * (_0x330cee ? 0x1 : 0x0) - this.kf)) ? this.kf + _0x4306be / 0x3e8 * (0.1 * (_0x330cee ? 0x1 : 0x0) - this.kf) : 0.5;
        this.xf.alpha = this.kf;
        this.ff = (this.ff + 0.01 * _0x4306be) % 0x168;
        this.gf = Math.sin(_0x5d5032 / 0x4b0 * TWO_PI);
        const _0x596d64 = _0x532619.Gf();
        const _0x4469a4 = this.yf;
        _0x4469a4.x = _0x596d64.x + (_0x4469a4.x - _0x596d64.x) * Math.pow(0x1 - theoKzObjects.smoothCamera, _0x4306be / 33.333);
        _0x4469a4.y = _0x596d64.y + (_0x4469a4.y - _0x596d64.y) * Math.pow(0.5, _0x4306be / 33.333);
        this.ve.scale.set(_0x14b072);
        this.ve.position.set(_0x1457c8 / 0x2 - _0x4469a4.x * _0x14b072, _0x4417fb / 0x2 - _0x4469a4.y * _0x14b072);
        const _0x891699 = _0x1457c8 / (0x2 * _0x14b072);
        const _0x4d304a = _0x4417fb / (0x2 * _0x14b072);
        _0x41d836.yb(_0x4469a4.x - 1.3 * _0x891699, _0x4469a4.x + 1.3 * _0x891699, _0x4469a4.y - 1.3 * _0x4d304a, _0x4469a4.y + 1.3 * _0x4d304a);
        this.lf.Te(_0x4469a4.x, _0x4469a4.y, 0x2 * _0x891699, 0x2 * _0x4d304a);
        const _0x47b695 = _0x41d836.fb.ub;
        wriseData.playerX = _0x5d0e9f.Jf.position.x;
        wriseData.playerY = _0x5d0e9f.Jf.position.y;
        ctxHeadshotLine.clear();
        const _0x28e987 = Math.hypot(_0x596d64.x, _0x596d64.y);
        if (_0x28e987 > _0x47b695 - 0xa) {
          this.hf = 0x1 + (_0x28e987 - _0x47b695) / 0xa > 0x1 ? 0x1 : 0x1 + (_0x28e987 - _0x47b695) / 0xa < 0x0 ? 0x0 : Number.isFinite(0x1 + (_0x28e987 - _0x47b695) / 0xa) ? 0x1 + (_0x28e987 - _0x47b695) / 0xa : 0.5;
          const _0x31cdc7 = this.ff * TWO_PI / 0x168;
          const _0x50b7fa = Math.cos(_0x31cdc7);
          const _0x288839 = Math.sin(_0x31cdc7);
          const _0x13f1c4 = _0x50b7fa * (0x1 - this.hf) + 0x1 * this.hf;
          const _0x51f9a2 = _0x288839 * (0x1 - this.hf);
          const _0x375651 = (Math.atan2(_0x51f9a2, _0x13f1c4) + TWO_PI) % TWO_PI * (0x168 / TWO_PI);
          const _0x39a04a = this.hf * (0.5 + 0.5 * this.gf);
          const _0xbab596 = _0x10f410(Math.floor(_0x375651), 0x1, 0.75 - 0.25 * this.hf);
          this.lf.Hf(_0xbab596[0x0], _0xbab596[0x1], _0xbab596[0x2], 0.1 + 0.2 * _0x39a04a);
        } else {
          this.hf = 0x0;
          const _0xeb20c = _0x10f410(Math.floor(this.ff), 0x1, 0.75);
          this.lf.Hf(_0xeb20c[0x0], _0xeb20c[0x1], _0xeb20c[0x2], 0.1);
        }
        const _0xeab0aa = this.sf.children;
        const _0x516e41 = _0xeab0aa.length;
        for (let _0x2cc885 = 0x0; _0x2cc885 < _0x516e41; _0x2cc885++) {
          const _0x4d774b = _0xeab0aa[_0x2cc885];
          if (_0x4d774b.If) {
            _0x4d774b.position.x = _0x1457c8 / 0x2 - (_0x4469a4.x - _0x4d774b.If.x) * _0x14b072;
            _0x4d774b.position.y = _0x4417fb / 0x2 - (_0x4469a4.y - _0x4d774b.If.y) * _0x14b072;
          }
        }
        _0x5d0e9f.Jf.position.x = _0x596d64.x / _0x47b695 * _0x5d0e9f.Kf;
        _0x5d0e9f.Jf.position.y = _0x596d64.y / _0x47b695 * _0x5d0e9f.Kf;
        _0x5d0e9f.WLp.text = parseInt(zw_hscount);
        _0x5d0e9f.WLp.position.x = -0x19 - _0x5d0e9f.WLp.width / 0x2;
        _0x5d0e9f.MLb.text = parseInt(zw_killcount);
        _0x5d0e9f.MLb.position.x = 0x19 - _0x5d0e9f.MLb.width / 0x2;
        if ("FFFFFF" !== lastHsTextColor) {
          _0x5d0e9f.WLp.style.fill = "0xFFFFFF";
          hstext.style.fill = "0xFFFFFF";
          lastHsTextColor = "FFFFFF";
        }
        if ("FFFFFF" !== lastKillTextColor) {
          _0x5d0e9f.MLb.style.fill = "0xFFFFFF";
          killtext.style.fill = "0xFFFFFF";
          lastKillTextColor = "FFFFFF";
        }
        if ("FFFFFF" !== lastMinimapBorderColor) {
          circle.tint = "0xFFFFFF";
          lastMinimapBorderColor = "FFFFFF";
        }
        this.uf.Qa(_0x5d5032);
        this.wf.Te(_0x5d5032, _0x4306be);
        this.ue.render(this.ve, null, true);
        this.ue.render(this.rf, null, false);
        const _0x43d052 = performance.now();
        totalFPSTime += _0x43d052 - lastFrameTime;
        lastFrameTime = _0x43d052;
        frameCount++;
        if (frameCount >= 0x14) {
          const _0x3f74d4 = Math.round(0x3e8 / (totalFPSTime / frameCount));
          zw_serverfps.text = _0x3f74d4 + " FPS";
          zw_serverfps.style.fill = getFPSColor(_0x3f74d4);
          frameCount = 0x0;
          totalFPSTime = 0x0;
        }
      };
      _0x7e8a91.prototype.Lf = function (_0x1bb504, _0x5aff58) {
        _0x5aff58.Of.Nf.Mf().zIndex = (_0x1bb504 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x5aff58.Of.Pf.Mf());
        this.pf.addChild(_0x5aff58.Of.Nf.Mf());
      };
      _0x7e8a91.prototype.Qf = function (_0x3677aa, _0x1581bf, _0x1d1ee0, _0x173b38, _0x24b258) {
        $(".Worm_cerca").text(" : " + _0x1d1ee0.text);
        _0x1581bf.Rf.zIndex = (window.anApp = _0x1ff066).o.fb.bf ? 0x0 : 0xa + (_0x3677aa + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x1581bf.Rf);
        if (_0x3677aa != (window.anApp = _0x1ff066).o.fb.bf) {
          this.sf.addChild(_0x1d1ee0);
          this.sf.addChild(_0x173b38);
          this.sf.addChild(_0x24b258);
        }
        if (_0x1d1ee0.text === (window.anApp = _0x1ff066).o.N.Mb.ad) {
          _0x1d1ee0.text = 'ㅤ';
        }
        this.sf.addChild(_0x1d1ee0);
        this.sf.addChild(_0x173b38);
        this.sf.addChild(_0x24b258);
      };
      var _0x4bb664 = function () {
        return _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x53055c.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x53055c.bc();
          circle = new _0x53055c.bc();
          circle.beginFill("black", 0.4);
          circle.drawCircle(0x0, 0x0, this.Kf);
          circle.endFill();
          circle.lineStyle(0x2, 0xe3d2d2);
          circle.drawCircle(0x0, 0x0, this.Kf);
          circle.moveTo(0x0, -this.Kf);
          circle.lineTo(0x0, +this.Kf);
          circle.moveTo(-this.Kf, 0x0);
          circle.lineTo(+this.Kf, 0x0);
          circle.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(wriseData.teamColor);
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, "black");
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.addChild(circle);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          zw_MinimapSombra = new _0x53055c.ec();
          zw_MinimapSombra.anchor.set(0.5);
          zw_MinimapSombra.alpha = 0.5;
          zw_MinimapTeamCode = new _0x53055c.bc();
          zw_MinimapTeamCode.beginFill("black", 0.4);
          zw_MinimapTeamCode.drawCircle(0x0, 0x0, 0x28);
          zw_MinimapTeamCode.endFill();
          zw_MinimapTeamCode.lineStyle(0x2, 0xe3d2d2);
          zw_MinimapTeamCode.drawCircle(0x0, 0x0, 0x28);
          zw_MinimapTeamCode.moveTo(0x0, -0x28);
          zw_MinimapTeamCode.lineTo(0x0, 40);
          zw_MinimapTeamCode.moveTo(-0x28, 0x0);
          zw_MinimapTeamCode.lineTo(40, 0x0);
          zw_MinimapTeamCode.endFill();
          zw_MinimapTeamCode.y = 0xdc;
          zw_MinimapTeamCode.x = 0x96;
          zw_MinimapTeamCode.addChild(zw_MinimapSombra);
          console.log(this.Kf);
          hstext = new _0x53055c.fc('HS', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0x10,
            'fill': "0xFFFFFF",
            'align': 'center'
          });
          hstext.position.y = 0x32;
          hstext.position.x = -0x23;
          killtext = new _0x53055c.fc("KILL", {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0x10,
            'fill': "0xFFFFFF",
            'align': "center"
          });
          killtext.position.y = 0x32;
          killtext.position.x = 0xa;
          this.addChild(hstext);
          this.addChild(killtext);
          zw_killcount = 0x0;
          zw_hscount = 0x0;
          this.WLp = new _0x53055c.fc('', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0xe,
            'fill': "#FFFFFF",
            'align': 'center'
          });
          this.WLp.position.y = 0x43;
          this.WLp.position.x = -0x2d;
          this.MLb = new _0x53055c.fc('', {
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0xe,
            'fill': "#FFFFFF",
            'align': "center"
          });
          this.MLb.position.y = 0x43;
          this.MLb.position.x = 0x14;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let _0x1969de = new _0x53055c._b(_0x53055c.$b.from("https://i.imgur.com/VPkrI9l.png"));
          let _0x43972f = new _0x53055c.ec();
          _0x43972f.texture = _0x1969de;
          _0x43972f.width = 0x64;
          _0x43972f.height = 0x64;
          _0x43972f.x = -0x32;
          _0x43972f.y = -0x32;
          this.addChild(_0x43972f);
          let _0x30629d = new _0x53055c.ec();
          _0x30629d.texture = _0x1969de;
          _0x30629d.width = 0x64;
          _0x30629d.height = 0x64;
          _0x30629d.x = -0x32;
          _0x30629d.y = -0x32;
          zw_MinimapTeamCode.addChild(_0x30629d);
          if (zw_mobilecheck()) {
            var _0x25e1ab = document.getElementById('game-cont');
            zw_mobilecontrol = 0x0;
            zw_mobilecontrol2 = -0x1;
            zw_mobileprediction = 0x0;
            zw_mobilecontroltextures = [];
            zw_mobilepredictiontextures = [];
            zw_mobilecontroltextures[0x0] = new _0x53055c.ec.from("https://i.imgur.com/aOyOob6.png");
            zw_mobilecontroltextures[0x0].width = 0x50;
            zw_mobilecontroltextures[0x0].height = 0x28;
            zw_mobilecontroltextures[0x0].x = -0x64 + _0x25e1ab.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x0].y = -0x3c;
            zw_mobilecontroltextures[0x0].on('tap', () => {
              zw_mobilecontrol++;
              zw_joystick = 0x0;
              zw_mobileprediction = -0x1;
              for (let _0x2d36c1 = 0x0; _0x2d36c1 < zw_mobilepredictiontextures.length; _0x2d36c1++) {
                zw_mobilepredictiontextures[_0x2d36c1].visible = false;
              }
              for (let _0x329db4 = 0x0; _0x329db4 < zw_mobilecontroltextures.length; _0x329db4++) {
                zw_mobilecontroltextures[_0x329db4].visible = zw_mobilecontrol === _0x329db4;
              }
            });
            zw_mobilecontroltextures[0x1] = new _0x53055c.ec.from("https://i.imgur.com/9ui2KwE.png");
            zw_mobilecontroltextures[0x1].width = 0x50;
            zw_mobilecontroltextures[0x1].height = 0x28;
            zw_mobilecontroltextures[0x1].x = -0x64 + _0x25e1ab.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x1].y = -0x3c;
            zw_mobilecontroltextures[0x1].visible = false;
            zw_mobilecontroltextures[0x1].on("tap", () => {
              if (zw_mobilecontrol2 !== 0x1) {
                zw_mobilecontrol2++;
                if (zw_mobilecontrol2 === 0x0) {
                  zw_mobilearrowtexture.x = 0xf;
                  zw_mobilepeedtexture.x = -0xfa + _0x25e1ab.offsetWidth;
                  zw_mobilearrowtexture.visible = true;
                  zw_mobilepeedtexture.visible = true;
                }
                if (zw_mobilecontrol2 === 0x1) {
                  zw_mobilearrowtexture.x = -0xfa + _0x25e1ab.offsetWidth;
                  zw_mobilepeedtexture.x = 0xf;
                }
                zw_mobileprediction = 0x1;
                zw_joystick = -0x1;
                for (let _0x133df1 = 0x0; _0x133df1 < zw_mobilepredictiontextures.length; _0x133df1++) {
                  zw_mobilepredictiontextures[_0x133df1].visible = zw_mobileprediction === _0x133df1;
                }
                return;
              }
              zw_mobilearrowtexture.visible = false;
              zw_mobilepeedtexture.visible = false;
              zw_joystick = 0x1;
              zw_mobilecontrol++;
              for (let _0x3d6885 = 0x0; _0x3d6885 < zw_mobilecontroltextures.length; _0x3d6885++) {
                zw_mobilecontroltextures[_0x3d6885].visible = zw_mobilecontrol === _0x3d6885;
              }
            });
            zw_mobilecontroltextures[0x2] = new _0x53055c.ec.from("https://i.imgur.com/NKAyYa8.png");
            zw_mobilecontroltextures[0x2].width = 0x50;
            zw_mobilecontroltextures[0x2].height = 0x28;
            zw_mobilecontroltextures[0x2].x = -0x64 + _0x25e1ab.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x2].y = -0x3c;
            zw_mobilecontroltextures[0x2].visible = false;
            zw_mobilecontroltextures[0x2].on("tap", () => {
              zw_mobilecontrol++;
              zw_mobileprediction = 0x2;
              zw_joystick = 0x2;
              for (let _0x68b4fb = 0x0; _0x68b4fb < zw_mobilepredictiontextures.length; _0x68b4fb++) {
                zw_mobilepredictiontextures[_0x68b4fb].visible = zw_mobileprediction === _0x68b4fb;
              }
              for (let _0x4509d4 = 0x0; _0x4509d4 < zw_mobilecontroltextures.length; _0x4509d4++) {
                zw_mobilecontroltextures[_0x4509d4].visible = zw_mobilecontrol === _0x4509d4;
              }
            });
            zw_mobilecontroltextures[0x3] = new _0x53055c.ec.from("https://i.imgur.com/n1jVrwm.png");
            zw_mobilecontroltextures[0x3].width = 0x50;
            zw_mobilecontroltextures[0x3].height = 0x28;
            zw_mobilecontroltextures[0x3].x = -0x64 + _0x25e1ab.offsetWidth * 0.5;
            zw_mobilecontroltextures[0x3].y = -0x3c;
            zw_mobilecontroltextures[0x3].visible = false;
            zw_mobilecontroltextures[0x3].on("tap", () => {
              zw_mobilecontrol = 0x0;
              zw_mobilecontrol2 = -0x1;
              zw_mobileprediction = 0x0;
              zw_joystick = -0x1;
              for (let _0x58ab37 = 0x0; _0x58ab37 < zw_mobilepredictiontextures.length; _0x58ab37++) {
                zw_mobilepredictiontextures[_0x58ab37].visible = zw_mobileprediction === _0x58ab37;
              }
              for (let _0x51e3c5 = 0x0; _0x51e3c5 < zw_mobilecontroltextures.length; _0x51e3c5++) {
                zw_mobilecontroltextures[_0x51e3c5].visible = zw_mobilecontrol === _0x51e3c5;
              }
            });
            zw_mobilepredictiontextures[0x0] = new _0x53055c.ec.from("https://i.imgur.com/4ccZ556.png");
            zw_mobilepredictiontextures[0x0].width = 0x10;
            zw_mobilepredictiontextures[0x0].height = 0x10;
            zw_mobilepredictiontextures[0x0].x = 0x0;
            zw_mobilepredictiontextures[0x0].y = 0x0;
            zw_mobilepredictiontextures[0x0].alpha = 0x0;
            zw_mobilepredictiontextures[0x1] = new _0x53055c.ec.from('https://i.imgur.com/hUVCdUv.png');
            zw_mobilepredictiontextures[0x1].width = 0x10;
            zw_mobilepredictiontextures[0x1].height = 0x10;
            zw_mobilepredictiontextures[0x1].x = 0x0;
            zw_mobilepredictiontextures[0x1].y = 0x0;
            zw_mobilepredictiontextures[0x1].visible = false;
            zw_mobilepredictiontextures[0x2] = new _0x53055c.ec.from("https://i.imgur.com/WqWsDfi.png");
            zw_mobilepredictiontextures[0x2].width = 0x10;
            zw_mobilepredictiontextures[0x2].height = 0x10;
            zw_mobilepredictiontextures[0x2].x = 0x0;
            zw_mobilepredictiontextures[0x2].y = 0x0;
            zw_mobilepredictiontextures[0x2].visible = false;
            zw_mobilearrowtexture = new _0x53055c.ec.from("https://i.imgur.com/mHp0ozi.png");
            zw_mobilearrowtexture.width = 0x64;
            zw_mobilearrowtexture.height = 0x64;
            zw_mobilearrowtexture.x = 0xf;
            zw_mobilearrowtexture.y = -0xd2 + _0x25e1ab.offsetHeight;
            zw_mobilearrowtexture.visible = false;
            zw_mobilepeedtexture = new _0x53055c.ec.from("https://i.imgur.com/0G8cFtP.png");
            zw_mobilepeedtexture.width = 0x50;
            zw_mobilepeedtexture.height = 0x50;
            zw_mobilepeedtexture.x = -0xfa + _0x25e1ab.offsetWidth;
            zw_mobilepeedtexture.y = -0xc8 + _0x25e1ab.offsetHeight;
            zw_mobilepeedtexture.visible = false;
            zw_mobilepeedtexture.alpha = 0.5;
            this.addChild(zw_mobilearrowtexture);
            this.addChild(zw_mobilepeedtexture);
            for (let _0x1716ee = 0x0; _0x1716ee < zw_mobilecontroltextures.length; _0x1716ee++) {
              this.addChild(zw_mobilecontroltextures[_0x1716ee]);
            }
            for (let _0x42c107 = 0x0; _0x42c107 < zw_mobilepredictiontextures.length; _0x42c107++) {
              this.addChild(zw_mobilepredictiontextures[_0x42c107]);
            }
          }
        });
      }();
      var _0x408fdc = function () {
        var _0x47f90f = _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb.call(this);
          this.Tf = {};
        });
        _0x47f90f.prototype.Qa = function (_0x229390) {
          var _0x4ba270 = 0.5 + 0.5 * Math.cos(_0x1d3753 * (_0x229390 / 0x3e8 / 1.6));
          var _0x3cdb20;
          for (_0x3cdb20 in this.Tf) {
            var _0x1c6e07 = this.Tf[_0x3cdb20];
            var _0x16a02b = _0x1c6e07.Uf;
            _0x1c6e07.alpha = 0x1 - _0x16a02b + _0x16a02b * _0x4ba270;
          }
        };
        _0x47f90f.prototype.Te = function (_0x7d6700) {
          var _0x38ea5c;
          for (_0x38ea5c in this.Tf) {
            if (!(null != _0x7d6700[_0x38ea5c] && _0x7d6700[_0x38ea5c].sc)) {
              _0x31c7b2(this.Tf[_0x38ea5c]);
              delete this.Tf[_0x38ea5c];
            }
          }
          var _0x4d77bc = 0x0;
          var _0x5d954e;
          for (_0x5d954e in _0x7d6700) {
            var _0x59a7b1 = _0x7d6700[_0x5d954e];
            if (_0x59a7b1.sc) {
              var _0x1d3e1f = this.Tf[_0x5d954e];
              if (!_0x1d3e1f) {
                var _0x5bc121 = (window.anApp = _0x1ff066).p.Dc().ld(_0x59a7b1.rc).Zc;
                _0x1d3e1f = new _0x643023();
                _0x1d3e1f.texture = _0x5bc121.Hc;
                _0x1d3e1f.width = 0x28;
                _0x1d3e1f.height = 0x28;
                this.Tf[_0x5d954e] = _0x1d3e1f;
                this.addChild(_0x1d3e1f);
              }
              assignPtcValues(this, _0x5d954e, _0x59a7b1.tc);
              _0x1d3e1f.Uf = _0x59a7b1.tc;
              _0x1d3e1f.position.x = _0x4d77bc;
              _0x4d77bc = _0x4d77bc + 0x28;
            }
          }
        };
        var _0x643023 = function () {
          return _0x22ee20(_0x53055c.ec, function () {
            _0x53055c.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0x47f90f;
      }();
      var _0x2b4dd1 = function () {
        var _0x184b1d = _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb.call(this);
          this.Ef = true;
          this.Vf = 0xc;
          this.Wf = 0x9;
          this.Pe = [];
          var _0x2520bf = 0x0;
          for (; _0x2520bf < 0xe; _0x2520bf++) {
            this.Xf();
          }
        });
        _0x184b1d.prototype.Te = function (_0x21e713) {
          if (zw_zoomplustexture) {
            this.addChild(zw_zoomplustexture);
          }
          if (zw_zoomsubtracttexture) {
            this.addChild(zw_zoomsubtracttexture);
          }
          if (zw_girosubtracttexture) {
            this.addChild(zw_girosubtracttexture);
          }
          if (zw_explotWubtracttexture) {
            this.addChild(zw_explotWubtracttexture);
          }
          if (zw_servertext.text !== '') {
            this.addChild(zw_servertext);
            this.removeChild(zw_TopFriends_list);
          }
          if (wriseData && gameState.players.size > 0x0) {
            sendPlayerUpdate(0x0, 0x0);
          } else {}
          var _0x306ba4 = window.anApp = _0x1ff066;
          var _0x742ad5 = _0x306ba4.o.fb.af == 0x10;
          var _0x3d4d57 = 0x0;
          var _0x3063e4 = 0x0;
          if (_0x3063e4 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x3063e4].Yf(0x1, "white");
          this.Pe[_0x3063e4].Zf('', zw_servertext.text === '' ? "Top " + zw_toplist : '', '('.concat(_0x306ba4.o.tb, " 🌎)"));
          this.Pe[_0x3063e4].position.y = _0x3d4d57;
          _0x3d4d57 = _0x3d4d57 + this.Vf;
          _0x3063e4 = _0x3063e4 + 0x1;
          if (_0x21e713.$f.length > 0x0) {
            _0x3d4d57 = _0x3d4d57 + this.Wf;
          }
          var _0x306d4b = 0x0;
          for (; _0x306d4b < _0x21e713.$f.length; _0x306d4b++) {
            var _0x8861d0 = _0x21e713.$f[_0x306d4b];
            var _0x3634b7 = _0x306ba4.p.Dc().ed(_0x8861d0._f);
            if (_0x3063e4 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x3063e4].Yf(0.8, _0x3634b7.bd._c);
            console.log(_0x3634b7);
            this.Pe[_0x3063e4].Zf('' + (_0x306d4b + 0x1), "Equipos / Teams", '' + Math.floor(_0x8861d0.M));
            this.Pe[_0x3063e4].position.y = _0x3d4d57;
            _0x3d4d57 = _0x3d4d57 + this.Vf;
            _0x3063e4 = _0x3063e4 + 0x1;
          }
          if (_0x21e713.ag.length > 0x0) {
            _0x3d4d57 = _0x3d4d57 + this.Wf;
          }
          var _0x3bcb83 = 0x0;
          for (; _0x3bcb83 < _0x21e713.ag.length; _0x3bcb83++) {
            var _0x457e5a = _0x21e713.ag[_0x3bcb83];
            var _0x785d0f = _0x306ba4.o.fb.bf == _0x457e5a.bg;
            var _0x94d1c0 = undefined;
            var _0x5e13e1 = undefined;
            if (_0x785d0f) {
              _0x94d1c0 = "white";
              _0x5e13e1 = _0x306ba4.o.N.Mb.ad;
            } else {
              var _0x1d31ab = _0x306ba4.o.hb[_0x457e5a.bg];
              if (null != _0x1d31ab) {
                _0x94d1c0 = _0x742ad5 ? _0x306ba4.p.Dc().ed(_0x1d31ab.Mb.cg).bd._c : _0x306ba4.p.Dc().dd(_0x1d31ab.Mb.dg)._c;
                _0x5e13e1 = this.Ef ? _0x1d31ab.Mb.ad : '---';
              } else {
                _0x94d1c0 = "gray";
                _0x5e13e1 = '?';
              }
            }
            if (_0x785d0f) {
              _0x3d4d57 = _0x3d4d57 + this.Wf;
            }
            if (_0x3063e4 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x3063e4].Yf(_0x785d0f ? 0x1 : 0.8, _0x94d1c0);
            if (_0x306ba4.o.O === _0x3063e4) {
              this.Pe[_0x3063e4].Yf(0x1, "white");
            }
            var _0x526f1f = Math.floor(_0x457e5a.M);
            _0x526f1f.customFormat();
            this.Pe[_0x3063e4].Zf('' + (_0x3bcb83 + 0x1), _0x5e13e1, '' + _0x526f1f.customFormat());
            this.Pe[_0x3063e4].position.y = _0x3d4d57;
            _0x3d4d57 = _0x3d4d57 + this.Vf;
            _0x3063e4 = _0x3063e4 + 0x1;
            if (_0x785d0f) {
              _0x3d4d57 = _0x3d4d57 + this.Wf;
            }
          }
          if (_0x306ba4.o.O > _0x21e713.ag.length) {
            _0x3d4d57 = _0x3d4d57 + this.Wf;
            if (_0x3063e4 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x3063e4].Yf(0x1, "#FFFFFF");
            window.tuNewScore = Math.floor(_0x306ba4.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[_0x3063e4].Zf('' + _0x306ba4.o.O, _0x306ba4.o.N.Mb.ad, '' + window.tuNewScore.customFormat());
            this.Pe[_0x3063e4].position.y = _0x3d4d57;
            _0x3d4d57 = _0x3d4d57 + this.Vf;
            _0x3063e4 = _0x3063e4 + 0x1;
            _0x3d4d57 = _0x3d4d57 + this.Wf;
          }
          for (; this.Pe.length > _0x3063e4;) {
            _0x31c7b2(this.Pe.pop());
          }
        };
        _0x184b1d.prototype.Xf = function () {
          var _0x2eb017 = new _0x349ced();
          _0x2eb017.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x2eb017.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x2eb017);
          this.addChild(_0x2eb017);
        };
        var _0x349ced = function () {
          var _0x419420 = _0x22ee20(_0x53055c.Zb, function () {
            _0x53055c.Zb.call(this);
            this.eg = new _0x53055c.fc('', {
              'dropShadow': false,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': fonts[currentFontIndex],
              'fontSize': 0xc,
              'fill': "white"
            });
            this.eg.anchor.x = 0x1;
            this.eg.position.x = 0x1e;
            this.addChild(this.eg);
            this.fg = new _0x53055c.fc('', {
              'dropShadow': false,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': fonts[currentFontIndex],
              'fontSize': 0xc,
              'fill': "white"
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x23;
            this.addChild(this.fg);
            this.gg = new _0x53055c.fc('', {
              'dropShadow': false,
              'dropShadowBlur': 0x5,
              'dropShadowColor': '#707070',
              'dropShadowDistance': 0x3,
              'fontFamily': fonts[currentFontIndex],
              'fontSize': 0xc,
              'fill': "white"
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xdc;
            this.addChild(this.gg);
          });
          _0x419420.prototype.Zf = function (_0x1e56d7, _0x5d8b71, _0x36b1ac) {
            this.eg.text = _0x1e56d7;
            this.gg.text = _0x36b1ac;
            var _0x39aeed = _0x5d8b71;
            this.fg.text = _0x39aeed;
            for (; this.fg.width > 0x64;) {
              _0x39aeed = _0x39aeed.substring(0x0, _0x39aeed.length - 0x1);
              this.fg.text = _0x39aeed + '..';
            }
          };
          _0x419420.prototype.Yf = function (_0x548d5b, _0xf7f81) {
            this.eg.alpha = _0x548d5b;
            this.eg.style.fill = _0xf7f81;
            this.fg.alpha = _0x548d5b;
            this.fg.style.fill = _0xf7f81;
            this.gg.alpha = _0x548d5b;
            this.gg.style.fill = _0xf7f81;
          };
          return _0x419420;
        }();
        return _0x184b1d;
      }();
      return _0x7e8a91;
    }();
    var _0x57bcab = function () {
      function _0xcff7d3(_0x1c5998) {
        this.o = _0x1c5998;
        this.hg = [];
        this.ig = 0x0;
      }
      _0xcff7d3.prototype.Xb = function (_0x2c497b) {
        this.hg.push(new DataView(_0x2c497b));
      };
      _0xcff7d3.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0xcff7d3.prototype.Bb = function () {
        if (this.hg.length === 0x0) {
          return;
        }
        let _0x340e1c = navigator.hardwareConcurrency ? Math.max(0x5, navigator.hardwareConcurrency) : 0xa;
        const _0x125bf9 = () => {
          let _0x567ab7 = 0x0;
          const _0x1cb712 = performance.now();
          while (_0x567ab7 < _0x340e1c && this.hg.length > 0x0) {
            const _0x3a0d90 = this.hg.shift();
            try {
              this.jg(_0x3a0d90);
            } catch (_0x14a154) {
              console.log("DataReader error: " + _0x14a154);
            }
            _0x567ab7++;
            if (performance.now() - _0x1cb712 > 0x6) {
              break;
            }
          }
          if (this.hg.length > 0x0) {
            setTimeout(_0x125bf9, 0x0);
          }
        };
        _0x125bf9();
      };
      _0xcff7d3.prototype.jg = function (_0x1d6fd0) {
        switch (0xff & _0x1d6fd0.mc(0x0)) {
          case 0x0:
            return void this.kg(_0x1d6fd0, 0x1);
          case 0x1:
            return void this.lg(_0x1d6fd0, 0x1);
          case 0x2:
            return void this.mg(_0x1d6fd0, 0x1);
          case 0x3:
            return void this.ng(_0x1d6fd0, 0x1);
          case 0x4:
            return void this.og(_0x1d6fd0, 0x1);
          case 0x5:
            return void this.pg(_0x1d6fd0, 0x1);
        }
      };
      _0xcff7d3.prototype.kg = function (_0x52c077, _0x485f14) {
        console.log("sgp1");
        this.o.fb.af = _0x52c077.mc(_0x485f14);
        _0x485f14 = _0x485f14 + 0x1;
        var _0x111276 = _0x52c077.nc(_0x485f14);
        _0x485f14 = _0x485f14 + 0x2;
        this.o.fb.bf = _0x111276;
        this.o.N.Mb.Lb = _0x111276;
        this.o.fb.ub = _0x52c077.pc(_0x485f14);
        _0x485f14 = _0x485f14 + 0x4;
        this.o.fb.cf = _0x52c077.pc(_0x485f14);
        _0x485f14 = _0x485f14 + 0x4;
        this.o.fb.df = _0x52c077.pc(_0x485f14);
        _0x485f14 = _0x485f14 + 0x4;
        (window.anApp = _0x1ff066).s.H.wb.Te(this.o.fb, (window.anApp = _0x1ff066).s.xa.wa());
        console.log("sgp2");
        return _0x485f14;
      };
      _0xcff7d3.prototype.lg = function (_0x1521f9, _0x522195) {
        var _0x193b16 = this.ig++;
        var _0x424bd1 = _0x1521f9.nc(_0x522195);
        _0x522195 += 0x2;
        var _0x29a5cb = undefined;
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x42d870 = 0x0; _0x42d870 < _0x29a5cb; _0x42d870++) {
          _0x522195 = this.sg(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x1350d9 = 0x0; _0x1350d9 < _0x29a5cb; _0x1350d9++) {
          _0x522195 = this.tg(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x279d1f = 0x0; _0x279d1f < _0x29a5cb; _0x279d1f++) {
          _0x522195 = this.ug(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x5ab85d = 0x0; _0x5ab85d < _0x29a5cb; _0x5ab85d++) {
          _0x522195 = this.vg(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x3c543c = 0x0; _0x3c543c < _0x29a5cb; _0x3c543c++) {
          _0x522195 = this.wg(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x13bf79 = 0x0; _0x13bf79 < _0x29a5cb; _0x13bf79++) {
          _0x522195 = this.xg(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0xcd5e04 = 0x0; _0xcd5e04 < _0x29a5cb; _0xcd5e04++) {
          _0x522195 = this.yg(_0x1521f9, _0x522195);
        }
        _0x29a5cb = this.qg(_0x1521f9, _0x522195);
        _0x522195 += this.rg(_0x29a5cb);
        for (var _0x536f47 = 0x0; _0x536f47 < _0x29a5cb; _0x536f47++) {
          _0x522195 = this.zg(_0x1521f9, _0x522195);
        }
        if (_0x193b16 > 0x0) {
          _0x522195 = this.Ag(_0x1521f9, _0x522195);
        }
        this.o.Qb(_0x193b16, _0x424bd1);
        return _0x522195;
      };
      _0xcff7d3.prototype.vg = function (_0x19438e, _0x5dfba2) {
        var _0x261721 = new _0x241e41.Config();
        _0x261721.Lb = _0x19438e.nc(_0x5dfba2);
        _0x5dfba2 = _0x5dfba2 + 0x2;
        _0x261721.cg = this.o.fb.af == 0x10 ? _0x19438e.mc(_0x5dfba2++) : _0x38582a.TEAM_DEFAULT;
        _0x261721.dg = _0x19438e.nc(_0x5dfba2);
        let _0x47418f = _0x5dfba2;
        _0x5dfba2 = _0x5dfba2 + 0x2;
        _0x261721.Bg = _0x19438e.nc(_0x5dfba2);
        let _0x199ee9 = _0x5dfba2;
        _0x5dfba2 = _0x5dfba2 + 0x2;
        _0x261721.Cg = _0x19438e.nc(_0x5dfba2);
        let _0x37cd2c = _0x5dfba2;
        _0x5dfba2 = _0x5dfba2 + 0x2;
        _0x261721.Dg = _0x19438e.nc(_0x5dfba2);
        let _0x57219f = _0x5dfba2;
        _0x5dfba2 = _0x5dfba2 + 0x2;
        _0x261721.Eg = _0x19438e.nc(_0x5dfba2);
        let _0x586a16 = _0x5dfba2;
        _0x5dfba2 = _0x5dfba2 + 0x2;
        var _0x1e6abc = _0x19438e.mc(_0x5dfba2);
        _0x5dfba2 = _0x5dfba2 + 0x1;
        var _0x40b516 = '';
        var _0x1f6bc6 = 0x0;
        for (; _0x1f6bc6 < _0x1e6abc; _0x1f6bc6++) {
          _0x40b516 = _0x40b516 + String.fromCharCode(_0x19438e.nc(_0x5dfba2));
          _0x5dfba2 = _0x5dfba2 + 0x2;
        }
        if (0xd2 < _0x5dfba2) {
          for (let _0x273a85 in this.o.hb) {
            if (/^(.{16})(ZW_\d{9})$/.test(this.o.hb[_0x273a85].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x273a85].Mb.ad);
              var _0x5bfbfe = this.o.hb[_0x273a85].Mb.ad.substr(-0xa);
              let _0xb5dd37 = _0x5bfbfe.substr(0x1, 0x4);
              console.log("skinId_A: " + _0xb5dd37);
              let _0x5829b6 = _0x5bfbfe.substr(0x5, 0x5);
              let _0x437634 = _0x5bfbfe.substr(0x6, 0x3);
              let _0x381aab = _0x5bfbfe.substr(0x9, 0x3);
              if ("0000" !== _0xb5dd37 && -0x1 !== theoKzObjects.visibleSkin.indexOf(parseInt(_0xb5dd37))) {
                this.o.hb[_0x273a85].Mb.dg = parseInt(_0xb5dd37);
              }
              if ("00000" !== _0x5829b6) {
                this.o.hb[_0x273a85].Mb.Eg = parseInt(_0x5829b6);
              }
              if ('000' !== _0x437634) {
                this.o.hb[_0x273a85].Mb.Bg = parseInt(_0x437634);
              }
              if ("000" !== _0x381aab) {
                this.o.hb[_0x273a85].Mb.Cg = parseInt(_0x381aab);
              }
            }
          }
        }
        if ((window.anApp = _0x1ff066).o.N.Mb.Lb === _0x261721.Lb) {
          _0x261721.dg = theoKzObjects?.["PropertyManager"]?.['rh'] ?? 0x0;
          _0x261721.Bg = theoKzObjects?.["PropertyManager"]?.['sh'] ?? 0x0;
          _0x261721.Cg = theoKzObjects?.["PropertyManager"]?.['th'] ?? 0x0;
          _0x261721.Dg = theoKzObjects?.["PropertyManager"]?.['uh'] ?? 0x0;
          _0x261721.Eg = theoKzObjects?.['PropertyManager']?.['vh'] ?? 0x0;
          _0x19438e.setInt16(_0x47418f, _0x261721.dg);
          _0x19438e.setInt16(_0x199ee9, _0x261721.Bg);
          _0x19438e.setInt16(_0x37cd2c, _0x261721.Cg);
          _0x19438e.setInt16(_0x57219f, _0x261721.Dg);
          _0x19438e.setInt16(_0x586a16, _0x261721.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x47418f;
        }
        _0x261721.ad = _0x40b516;
        if (this.o.fb.bf === _0x261721.Lb) {
          this.o.N.Fg(_0x261721);
          _0x261721.Mb = _0x261721.Lb;
          _0x261721.bd = _0x261721.ad;
        } else {
          var _0x4fda6e = this.o.hb[_0x261721.Lb];
          if (null != _0x4fda6e) {
            _0x4fda6e.Kb();
          }
          var _0x20d1e8 = new _0x241e41(this.o.fb);
          _0x20d1e8.vb((window.anApp = _0x1ff066).s.H.wb);
          this.o.hb[_0x261721.Lb] = _0x20d1e8;
          _0x20d1e8.Fg(_0x261721);
        }
        return _0x5dfba2;
      };
      _0xcff7d3.prototype.wg = function (_0x45c10a, _0xb2418b) {
        var _0x47ddf0 = _0x45c10a.nc(_0xb2418b);
        _0xb2418b += 0x2;
        var _0xc3fb0e = _0x45c10a.mc(_0xb2418b);
        _0xb2418b++;
        var _0x42734d = !!(0x1 & _0xc3fb0e);
        var _0x2c366d = !!(0x2 & _0xc3fb0e);
        var _0x458070 = 0x0;
        if (_0x42734d) {
          _0x458070 = _0x45c10a.nc(_0xb2418b);
          _0xb2418b += 0x2;
        }
        var _0x4542a7 = this.Gg(_0x47ddf0);
        if (undefined === _0x4542a7) {
          return _0xb2418b;
        }
        _0x4542a7.Ib = false;
        if (!_0x4542a7.Hb) {
          return _0xb2418b;
        }
        var _0x48bec1 = this.Gg(_0x47ddf0);
        if (_0x42734d && undefined !== _0x48bec1 && _0x48bec1.Hb) {
          if (_0x458070 === this.o.fb.bf) {
            var _0x427fcd = this.o.N.Gf();
            var _0xd954 = _0x4542a7.Hg(_0x427fcd.x, _0x427fcd.y);
            if (_0x2c366d === true) {
              wriseData.enemyNameHs = _0x4542a7.Mb.ad;
            }
            Math.max(0x0, 0x1 - _0xd954.distance / (0.5 * this.o.jb));
            if (_0xd954.distance < 0.5 * this.o.jb) {
              (window.anApp = _0x1ff066).s.H.wb.wf.Se(_0x2c366d);
            }
          } else {
            if (_0x47ddf0 === this.o.fb.bf) {} else {
              var _0x457d4b = this.o.N.Gf();
              var _0x14d5c6 = _0x4542a7.Hg(_0x457d4b.x, _0x457d4b.y);
              Math.max(0x0, 0x1 - _0x14d5c6.distance / (0.5 * this.o.jb));
            }
          }
        } else {
          if (_0x47ddf0 === this.o.fb.bf) {} else {
            var _0x44dc93 = this.o.N.Gf();
            var _0x4100b4 = _0x4542a7.Hg(_0x44dc93.x, _0x44dc93.y);
            Math.max(0x0, 0x1 - _0x4100b4.distance / (0.5 * this.o.jb));
          }
        }
        return _0xb2418b;
      };
      _0xcff7d3.prototype.zg = function (_0x1dd631, _0x5ea2ad) {
        var _0x1add25 = _0x1dd631.nc(_0x5ea2ad);
        _0x5ea2ad += 0x2;
        var _0x785f34 = _0x1add25 === this.o.fb.bf ? null : this.o.hb[_0x1add25];
        var _0x71f87a = _0x1dd631.mc(_0x5ea2ad);
        _0x5ea2ad += 0x1;
        var _0x3c8577 = !!(0x1 & _0x71f87a);
        if (!!(0x2 & _0x71f87a)) {
          var _0x5cdf5c = _0x1dd631.pc(_0x5ea2ad);
          _0x5ea2ad += 0x4;
          if (_0x785f34) {
            _0x785f34.Ig(_0x5cdf5c);
          }
        }
        var _0xcbb2a1 = this.Jg(_0x1dd631.mc(_0x5ea2ad++), _0x1dd631.mc(_0x5ea2ad++), _0x1dd631.mc(_0x5ea2ad++));
        var _0x112a83 = this.Jg(_0x1dd631.mc(_0x5ea2ad++), _0x1dd631.mc(_0x5ea2ad++), _0x1dd631.mc(_0x5ea2ad++));
        if (_0x785f34) {
          _0x785f34.Kg(_0xcbb2a1, _0x112a83, _0x3c8577);
          var _0x5b4bf7 = this.o.N.Gf();
          var _0xcdd9c8 = _0x785f34.Gf();
          var _0x10067c = Math.max(0x0, 0x1 - Math.hypot(_0x5b4bf7.x - _0xcdd9c8.x, _0x5b4bf7.y - _0xcdd9c8.y) / (0.5 * this.o.jb));
          (window.anApp = _0x1ff066).r.Zd(_0x10067c, _0x1add25, _0x3c8577);
        }
        var _0x1230f1 = this.qg(_0x1dd631, _0x5ea2ad);
        _0x5ea2ad += this.rg(_0x1230f1);
        if (_0x785f34) {
          var _0x1a40af;
          for (_0x1a40af in _0x785f34.Ff) {
            var _0x47cfdd = _0x785f34.Ff[_0x1a40af];
            if (_0x47cfdd) {
              _0x47cfdd.sc = false;
            }
          }
        }
        var _0x31c378 = 0x0;
        for (; _0x31c378 < _0x1230f1; _0x31c378++) {
          var _0x9eb8cb = _0x1dd631.mc(_0x5ea2ad);
          _0x5ea2ad++;
          var _0x1f86e7 = _0x1dd631.mc(_0x5ea2ad);
          _0x5ea2ad++;
          if (_0x785f34) {
            var _0x3460e7 = _0x785f34.Ff[_0x9eb8cb];
            if (!_0x3460e7) {
              _0x3460e7 = _0x785f34.Ff[_0x9eb8cb] = new _0x2d8dbf(_0x9eb8cb);
            }
            _0x3460e7.sc = true;
            _0x3460e7.tc = Math.min(0x1, Math.max(0x0, _0x1f86e7 / 0x64));
          }
        }
        return _0x5ea2ad;
      };
      _0xcff7d3.prototype.Ag = function (_0x1a2a68, _0x5c458b) {
        var _0x569945 = this.o.N;
        var _0xf7e7bc = _0x1a2a68.mc(_0x5c458b);
        _0x5c458b += 0x1;
        var _0x593205 = !!(0x1 & _0xf7e7bc);
        var _0x513bd1 = !!(0x2 & _0xf7e7bc);
        var _0x11d903 = !!(0x4 & _0xf7e7bc);
        if (_0x513bd1) {
          var _0x3a22a7 = _0x569945.M;
          _0x569945.Ig(_0x1a2a68.pc(_0x5c458b));
          _0x5c458b += 0x4;
          _0x3a22a7 = _0x569945.M - _0x3a22a7;
          if (_0x3a22a7 > 0x0) {
            (window.anApp = _0x1ff066).s.H.wb.wf.Re(_0x3a22a7);
          }
        }
        if (_0x11d903) {
          this.o.ib = _0x1a2a68.pc(_0x5c458b);
          _0x5c458b += 0x4;
        }
        var _0xe6c287 = this.Jg(_0x1a2a68.mc(_0x5c458b++), _0x1a2a68.mc(_0x5c458b++), _0x1a2a68.mc(_0x5c458b++));
        var _0x358b0c = this.Jg(_0x1a2a68.mc(_0x5c458b++), _0x1a2a68.mc(_0x5c458b++), _0x1a2a68.mc(_0x5c458b++));
        _0x569945.Kg(_0xe6c287, _0x358b0c, _0x593205);
        (window.anApp = _0x1ff066).r.Zd(0.5, this.o.fb.bf, _0x593205);
        var _0x5109df = this.qg(_0x1a2a68, _0x5c458b);
        _0x5c458b += this.rg(_0x5109df);
        for (var _0x103b3d in _0x569945.Ff) {
          var _0x505fa0 = _0x569945.Ff[_0x103b3d];
          if (_0x505fa0) {
            _0x505fa0.sc = false;
          }
        }
        for (var _0x35ed1e = 0x0; _0x35ed1e < _0x5109df; _0x35ed1e++) {
          var _0x25acf7 = _0x1a2a68.mc(_0x5c458b);
          _0x5c458b++;
          var _0x26f29d = _0x1a2a68.mc(_0x5c458b);
          _0x5c458b++;
          var _0xaa2ac7 = _0x569945.Ff[_0x25acf7];
          if (!_0xaa2ac7) {
            _0xaa2ac7 = new _0x2d8dbf(_0x25acf7);
            _0x569945.Ff[_0x25acf7] = _0xaa2ac7;
          }
          _0xaa2ac7.sc = true;
          _0xaa2ac7.tc = Math.min(0x1, Math.max(0x0, _0x26f29d / 0x64));
        }
        (window.anApp = _0x1ff066).s.H.wb.uf.Te(_0x569945.Ff);
      };
      _0xcff7d3.prototype.xg = function (_0x609d5b, _0x5dcff6) {
        var _0x294dae = this;
        var _0xfde3d3 = _0x609d5b.nc(_0x5dcff6);
        _0x5dcff6 += 0x2;
        var _0x3349ed = this.Gg(_0xfde3d3);
        var _0x524abe = _0x609d5b.pc(_0x5dcff6);
        _0x5dcff6 += 0x4;
        var _0x6254a1 = [];
        for (var _0x12d764 in _0x3349ed.Ff) {
          if (0x0 == _0x12d764) {
            _0x6254a1.push("velocidad");
            $(".v0").fadeIn();
          } else {
            if (0x1 == _0x12d764) {
              _0x6254a1.push("movimiento");
              $(".v1").fadeIn();
            } else {
              if (0x2 == _0x12d764) {
                _0x6254a1.push("iman");
                $(".v2").fadeIn();
              } else {
                if (0x3 == _0x12d764) {
                  _0x6254a1.push("comidax2");
                  $(".v3").fadeIn();
                } else {
                  if (0x4 == _0x12d764) {
                    _0x6254a1.push('comidax5');
                    $(".v4").fadeIn();
                  } else {
                    if (0x5 == _0x12d764) {
                      _0x6254a1.push('comidax10');
                      $(".v5").fadeIn();
                    } else if (0x6 == _0x12d764) {
                      _0x6254a1.push('zoom');
                      $(".v6").fadeIn();
                    } else {
                      console.log("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0x6254a1;
        if (_0x3349ed.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x332079 = this.qg(_0x609d5b, _0x5dcff6);
        _0x5dcff6 += this.rg(_0x332079);
        if (_0x3349ed) {
          _0x3349ed.Ig(_0x524abe);
          _0x3349ed.Lg(function () {
            return _0x294dae.Jg(_0x609d5b.mc(_0x5dcff6++), _0x609d5b.mc(_0x5dcff6++), _0x609d5b.mc(_0x5dcff6++));
          }, _0x332079);
          _0x3349ed.Mg(true);
          var _0x2725b8 = this.o.N.Gf();
          var _0x53a751 = _0x3349ed.Gf();
          var _0x4ef98e = Math.max(0x0, 0x1 - Math.hypot(_0x2725b8.x - _0x53a751.x, _0x2725b8.y - _0x53a751.y) / (0.5 * this.o.jb));
          (window.anApp = _0x1ff066).r.Xd(_0x4ef98e, _0xfde3d3);
        } else {
          _0x5dcff6 += 0x6 * _0x332079;
        }
        return _0x5dcff6;
      };
      _0xcff7d3.prototype.yg = function (_0xaeb7ec, _0x5e4a9c) {
        var _0x4b3cf4 = _0xaeb7ec.nc(_0x5e4a9c);
        _0x5e4a9c += 0x2;
        var _0x4e7d89 = this.o.hb[_0x4b3cf4];
        if (_0x4e7d89 && _0x4e7d89.Ib) {
          _0x4e7d89.Mg(false);
        }
        (window.anApp = _0x1ff066).r.Yd(_0x4b3cf4);
        return _0x5e4a9c;
      };
      _0xcff7d3.prototype.sg = function (_0x1921e0, _0x12092e) {
        var _0x155f14 = new _0x34eeeb.Config();
        _0x155f14.Lb = _0x1921e0.oc(_0x12092e);
        _0x12092e += 0x4;
        _0x155f14.cg = this.o.fb.af === 0x10 ? _0x1921e0.mc(_0x12092e++) : _0x38582a.TEAM_DEFAULT;
        _0x155f14.Ng = this.Jg(_0x1921e0.mc(_0x12092e++), _0x1921e0.mc(_0x12092e++), _0x1921e0.mc(_0x12092e++));
        _0x155f14.dg = _0x1921e0.mc(_0x12092e++);
        var _0x5f3821 = this.o.gb[_0x155f14.Lb];
        if (null != _0x5f3821) {
          _0x5f3821.Kb();
        }
        var _0x8564d3 = new _0x34eeeb(_0x155f14, (window.anApp = _0x1ff066).s.H.wb);
        _0x8564d3.Og(this.Pg(_0x155f14.Lb), this.Qg(_0x155f14.Lb), true);
        this.o.gb[_0x155f14.Lb] = _0x8564d3;
        return _0x12092e;
      };
      _0xcff7d3.prototype.tg = function (_0xfb4a0f, _0x55f231) {
        var _0x1018ff = _0xfb4a0f.oc(_0x55f231);
        _0x55f231 += 0x4;
        var _0x5c7fc9 = this.o.gb[_0x1018ff];
        if (_0x5c7fc9) {
          _0x5c7fc9.Rg = 0x0;
          _0x5c7fc9.Sg = 1.5 * _0x5c7fc9.Sg;
          _0x5c7fc9.Nb = true;
        }
        return _0x55f231;
      };
      _0xcff7d3.prototype.ug = function (_0xfe0095, _0x1f572f) {
        var _0x1166ba = _0xfe0095.oc(_0x1f572f);
        _0x1f572f += 0x4;
        var _0x319fd5 = _0xfe0095.nc(_0x1f572f);
        _0x1f572f += 0x2;
        var _0x1eb1e5 = this.o.gb[_0x1166ba];
        if (_0x1eb1e5) {
          _0x1eb1e5.Rg = 0x0;
          _0x1eb1e5.Sg = 0.1 * _0x1eb1e5.Sg;
          _0x1eb1e5.Nb = true;
          var _0x1a731d = this.Gg(_0x319fd5);
          if (_0x1a731d && _0x1a731d.Hb) {
            this.o.fb.bf;
            var _0x4a52a6 = _0x1a731d.Gf();
            _0x1eb1e5.Og(_0x4a52a6.x, _0x4a52a6.y, false);
          }
        }
        return _0x1f572f;
      };
      var _0x105227 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0xcff7d3.prototype.mg = function (_0xe532ec) {
        var _0x37f3af = (window.anApp = _0x1ff066).q.Ug.Tg;
        var _0x1e934f = _0x37f3af.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x5a14c3 = _0x105227[0x0];
        var _0x382f82 = 0x50 - _0x5a14c3;
        var _0x5890d4 = 0x0;
        for (var _0x48dc89 = 0x0; _0x48dc89 < 0x274; _0x48dc89++) {
          var _0x4992a5 = _0xe532ec.mc(0x1 + _0x48dc89);
          for (var _0x2c04c4 = 0x0; _0x2c04c4 < 0x8; _0x2c04c4++) {
            var _0x51af29 = 0x0 != (_0x4992a5 >> _0x2c04c4 & 0x1);
            var _0x3a9a6a = 0x4 * (_0x5a14c3 + 0x50 * _0x5890d4);
            if (_0x51af29) {
              _0x1e934f.data[_0x3a9a6a] = 0xff;
              _0x1e934f.data[_0x3a9a6a + 0x1] = 0xff;
              _0x1e934f.data[_0x3a9a6a + 0x2] = 0xff;
              _0x1e934f.data[_0x3a9a6a + 0x3] = 0xff;
            } else {
              _0x1e934f.data[_0x3a9a6a + 0x3] = 0x0;
            }
            if (++_0x5a14c3 >= _0x382f82 && ++_0x5890d4 < 0x50) {
              _0x5a14c3 = _0x105227[_0x5890d4];
              _0x382f82 = 0x50 - _0x5a14c3;
            }
          }
        }
        _0x37f3af.putImageData(_0x1e934f, 0x0, 0x0);
        var _0x3da6b4 = (window.anApp = _0x1ff066).s.H.wb.tf.Sf;
        _0x3da6b4.texture = (window.anApp = _0x1ff066).q.Ug.Hc;
        _0x3da6b4.texture.update();
      };
      _0xcff7d3.prototype.og = function (_0x7af6a8, _0x592d91) {
        var _0x2e7a57 = _0x7af6a8.oc(_0x592d91);
        _0x592d91 += 0x4;
        console.log("Wormy Error: " + _0x2e7a57);
      };
      _0xcff7d3.prototype.pg = function (_0x35859a, _0x343a7e) {
        if (zw_joystick !== -0x1) {
          zw_joysticks[zw_joystick].visible = false;
        }
        theoKzObjects.emoji = false;
        theoKzObjects.dead = true;
        createCircle();
        wriseData.hs = 0x0;
        sendPlayerDeath(0x0, 0x0);
        sendPlayerUpdate(0xf423f, 0xf423f);
        clearTeamUbication();
        console.log('g.o');
      };
      _0xcff7d3.prototype.ng = function (_0x5c69aa, _0x3005e7) {
        this.o.tb = _0x5c69aa.nc(_0x3005e7);
        _0x3005e7 += 0x2;
        this.o.O = _0x5c69aa.nc(_0x3005e7);
        _0x3005e7 += 0x2;
        var _0x3df160 = new _0x5f4b22();
        _0x3df160.ag = [];
        var _0x1622fe = _0x5c69aa.mc(_0x3005e7++);
        for (var _0x470f3f = 0x0; _0x470f3f < _0x1622fe; _0x470f3f++) {
          var _0x11e2a4 = _0x5c69aa.nc(_0x3005e7);
          _0x3005e7 += 0x2;
          var _0x287f12 = _0x5c69aa.pc(_0x3005e7);
          _0x3005e7 += 0x4;
          _0x3df160.ag.push(_0x5f4b22.Vg(_0x11e2a4, _0x287f12));
        }
        _0x3df160.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x452263 = _0x5c69aa.mc(_0x3005e7++);
          for (var _0x5999eb = 0x0; _0x5999eb < _0x452263; _0x5999eb++) {
            var _0x678baa = _0x5c69aa.mc(_0x3005e7);
            _0x3005e7 += 0x1;
            var _0x350a93 = _0x5c69aa.pc(_0x3005e7);
            _0x3005e7 += 0x4;
            _0x3df160.$f.push(_0x5f4b22.Wg(_0x678baa, _0x350a93));
          }
        }
        (window.anApp = _0x1ff066).s.H.wb.vf.Te(_0x3df160);
      };
      _0xcff7d3.prototype.Gg = function (_0x3f0989) {
        return _0x3f0989 === this.o.fb.bf ? this.o.N : this.o.hb[_0x3f0989];
      };
      _0xcff7d3.prototype.Jg = function (_0x2b3854, _0x393c93, _0xd94ce4) {
        return 0x2710 * ((0xffffff & (0xff & _0xd94ce4 | _0x393c93 << 0x8 & 0xff00 | _0x2b3854 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
      };
      _0xcff7d3.prototype.Pg = function (_0x6ba252) {
        return ((0xffff & _0x6ba252) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0xcff7d3.prototype.Qg = function (_0x1b83df) {
        return ((_0x1b83df >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0xcff7d3.prototype.qg = function (_0x4027cf, _0x32ff1e) {
        var _0xff568f = _0x4027cf.mc(_0x32ff1e);
        if (0x0 == (0x80 & _0xff568f)) {
          return _0xff568f;
        }
        var _0x1090f6 = _0x4027cf.mc(_0x32ff1e + 0x1);
        if (0x0 == (0x80 & _0x1090f6)) {
          return _0x1090f6 | _0xff568f << 0x7 & 0x3f80;
        }
        var _0x5990a0 = _0x4027cf.mc(_0x32ff1e + 0x2);
        if (0x0 == (0x80 & _0x5990a0)) {
          return _0x5990a0 | _0x1090f6 << 0x7 & 0x3f80 | _0xff568f << 0xe & 0x1fc000;
        }
        var _0x1f850a = _0x4027cf.mc(_0x32ff1e + 0x3);
        return 0x0 == (0x80 & _0x1f850a) ? _0x1f850a | _0x5990a0 << 0x7 & 0x3f80 | _0x1090f6 << 0xe & 0x1fc000 | _0xff568f << 0x15 & 0xfe00000 : undefined;
      };
      _0xcff7d3.prototype.rg = function (_0x44ca5d) {
        return _0x44ca5d < 0x80 ? 0x1 : _0x44ca5d < 0x4000 ? 0x2 : _0x44ca5d < 0x200000 ? 0x3 : _0x44ca5d < 0x10000000 ? 0x4 : undefined;
      };
      return _0xcff7d3;
    }();
    var _0x3a0a9b = function () {
      function _0x37a89f(_0x23431a) {
        this.Xg = _0x23431a;
      }
      _0x37a89f.Yg = function () {
        return new _0x3a0a9b(null);
      };
      _0x37a89f.Zg = function (_0x1ac3a2) {
        return new _0x3a0a9b(_0x1ac3a2);
      };
      _0x37a89f.prototype.$g = function () {
        return this.Xg;
      };
      _0x37a89f.prototype._g = function () {
        return null != this.Xg;
      };
      _0x37a89f.prototype.ah = function (_0x30db4d) {
        if (null != this.Xg) {
          _0x30db4d(this.Xg);
        }
      };
      return _0x37a89f;
    }();
    var _0x34eeeb = function () {
      function _0x25eb0a(_0x596753, _0x8d80b) {
        this.Mb = _0x596753;
        this.bh = _0x596753.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x596753.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = 0x2 * Math.PI * Math.random();
        this.gh = new _0x3fa7f2();
        this.gh.hh((window.anApp = _0x1ff066).o.fb.af, this.Mb.cg === _0x38582a.TEAM_DEFAULT ? null : (window.anApp = _0x1ff066).p.Dc().ed(this.Mb.cg), (window.anApp = _0x1ff066).p.Dc().kd(this.Mb.dg));
        _0x8d80b.Lf(_0x596753.Lb, this.gh);
      }
      _0x25eb0a.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x25eb0a.prototype.Og = function (_0x4a1c8f, _0x40748f, _0x12fb6d) {
        this.Ob = _0x4a1c8f;
        this.Pb = _0x40748f;
        if (_0x12fb6d) {
          this.ch = _0x4a1c8f;
          this.dh = _0x40748f;
        }
      };
      _0x25eb0a.prototype.Fb = function (_0x121a08, _0x386d6f) {
        var _0x3716a3 = Math.min(0.5, 0x1 * this.Sg);
        var _0xcf2a0b = Math.min(2.5, 1.5 * this.Sg);
        this.eh = _0x3716a3 > this.eh ? Math.min(_0x3716a3, this.eh + _0x386d6f * 0.0025) : Math.max(_0x3716a3, this.eh - _0x386d6f * 0.0025);
        this.fh = _0xcf2a0b > this.fh ? Math.min(_0xcf2a0b, this.fh + _0x386d6f * 0.0025) : Math.max(_0xcf2a0b, this.fh - _0x386d6f * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x386d6f * 0.0025) : Math.max(this.Rg, this.Jb - _0x386d6f * 0.0025);
      };
      _0x25eb0a.prototype.Gb = function (_0x186a44, _0x52f06b, _0x3d3a6f) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x52f06b * 0.0025) : Math.max(this.Ob, this.ch - _0x52f06b * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x52f06b * 0.0025) : Math.max(this.Pb, this.dh - _0x52f06b * 0.0025);
        this.gh.Te(this, _0x186a44, _0x52f06b, _0x3d3a6f);
      };
      _0x25eb0a.Config = function () {
        function _0x2bf068() {
          this.Lb = 0x0;
          this.cg = _0x38582a.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x2bf068;
      }();
      return _0x25eb0a;
    }();
    var _0x3fa7f2 = function () {
      function _0x25497c() {
        this.Of = new _0x2312f7(new _0x3c90b5(), new _0x3c90b5());
        this.Of.Pf.jh.blendMode = _0x53055c.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x25497c.prototype.hh = function (_0x45d38a, _0x37c188, _0x374a8e) {
        var _0x5c5d69 = _0x374a8e.Zc;
        if (null != _0x5c5d69) {
          this.Of.Nf.kh(_0x5c5d69);
        }
        var _0x1d2b10 = _0x45d38a == 0x10 && null != _0x37c188 ? _0x37c188.cd.$c : _0x374a8e.$c;
        if (null != _0x1d2b10) {
          this.Of.Pf.kh(_0x1d2b10);
        }
      };
      _0x25497c.prototype.Te = function (_0x4a6990, _0x4e51db, _0x3c8c71, _0x115f0e) {
        if (!_0x115f0e(_0x4a6990.ch, _0x4a6990.dh)) {
          return void this.Of.lh();
        }
        var _0x45d691 = _0x4a6990.fh * (0x1 + 0.3 * Math.cos(_0x4a6990.Ae + _0x4e51db / 0xc8));
        if (_0x4a6990.bh) {
          this.Of.mh(_0x4a6990.ch, _0x4a6990.dh, theoKzObjects.PotenciadorSize * _0x4a6990.eh, 0x1 * _0x4a6990.Jb, theoKzObjects.PotenciadorAura * _0x45d691, 0.8 * _0x4a6990.Jb);
        } else {
          this.Of.mh(_0x4a6990.ch, _0x4a6990.dh, theoKzObjects.ComidaSize * _0x4a6990.eh, 0x1 * _0x4a6990.Jb, theoKzObjects.ComidaShadow * _0x45d691, 0.3 * _0x4a6990.Jb);
        }
      };
      var _0x2312f7 = function () {
        function _0x51294d(_0x5a7d3b, _0x42cf3d) {
          this.Nf = _0x5a7d3b;
          this.Pf = _0x42cf3d;
        }
        _0x51294d.prototype.mh = function (_0x50a747, _0x33aeaf, _0x2e5fef, _0x4b277a, _0x316748, _0x300c42) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x50a747, _0x33aeaf);
          this.Nf.oh(_0x2e5fef);
          this.Nf.qh(_0x4b277a);
          this.Pf.Mg(true);
          this.Pf.nh(_0x50a747, _0x33aeaf);
          this.Pf.oh(_0x316748);
          this.Pf.qh(_0x300c42);
        };
        _0x51294d.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x51294d;
      }();
      return _0x25497c;
    }();
    var _0x57902d = function () {
      function _0x1d1a88() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0xbfe35a(_0x330cf7, _0x3edbba) {
        if (!(window.anApp = _0x1ff066).p.W()) {
          return null;
        }
        var _0xa57d82 = (window.anApp = _0x1ff066).p.Ac();
        if (_0x3edbba === _0x4e8d86.ia) {
          var _0x3229bc = _0x19e512(_0xa57d82.skinArrayDict, _0x330cf7);
          return _0x3229bc < 0x0 ? null : (console.log(_0xa57d82.skinArrayDict[_0x3229bc]), _0xa57d82.skinArrayDict[_0x3229bc]);
        }
        switch (_0x3edbba) {
          case _0x4e8d86.ja:
            return _0xa57d82.eyesDict[_0x330cf7];
          case _0x4e8d86.ka:
            return _0xa57d82.mouthDict[_0x330cf7];
          case _0x4e8d86.la:
            return _0xa57d82.glassesDict[_0x330cf7];
          case _0x4e8d86.ma:
            return _0xa57d82.hatDict[_0x330cf7];
        }
        return null;
      }
      function _0x19e512(_0x43a138, _0x521617) {
        for (var _0x26ef9c = 0x0; _0x26ef9c < _0x43a138.length; _0x26ef9c++) {
          if (_0x43a138[_0x26ef9c].id == _0x521617) {
            return _0x26ef9c;
          }
        }
        return -0x1;
      }
      _0x1d1a88.prototype.a = function () {};
      _0x1d1a88.prototype.ha = function (_0x10a685) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        switch (_0x10a685) {
          case _0x4e8d86.ia:
            return this.rh;
          case _0x4e8d86.ja:
            return this.sh;
          case _0x4e8d86.ka:
            return this.th;
          case _0x4e8d86.la:
            return this.uh;
          case _0x4e8d86.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x1d1a88.prototype.xh = function (_0x2614b7) {
        this.wh.push(_0x2614b7);
        this.yh();
      };
      _0x1d1a88.prototype.Ia = function () {
        if (!(window.anApp = _0x1ff066).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x114293 = (window.anApp = _0x1ff066).p.Ac();
        var _0x1f4044 = [];
        for (var _0x2f6650 = 0x0; _0x2f6650 < _0x114293.skinArrayDict.length; _0x2f6650++) {
          var _0x2a0783 = _0x114293.skinArrayDict[_0x2f6650];
          if (this.Ja(_0x2a0783.id, _0x4e8d86.ia)) {
            _0x1f4044.push(_0x2a0783);
          }
        }
        return 0x0 === _0x1f4044.length ? 0x0 : _0x1f4044[parseInt(_0x1f4044.length * Math.random())].id;
      };
      _0x1d1a88.prototype.zh = function () {
        if ((window.anApp = _0x1ff066).p.W) {
          var _0x14a8af = (window.anApp = _0x1ff066).p.Ac().skinArrayDict;
          var _0x41268e = _0x19e512(_0x14a8af, this.rh);
          if (!(_0x41268e < 0x0)) {
            for (var _0x32f3ba = _0x41268e + 0x1; _0x32f3ba < _0x14a8af.length; _0x32f3ba++) {
              if (this.Ja(_0x14a8af[_0x32f3ba].id, _0x4e8d86.ia)) {
                this.rh = _0x14a8af[_0x32f3ba].id;
                return void this.yh();
              }
            }
            for (var _0x44486d = 0x0; _0x44486d < _0x41268e; _0x44486d++) {
              if (this.Ja(_0x14a8af[_0x44486d].id, _0x4e8d86.ia)) {
                this.rh = _0x14a8af[_0x44486d].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x1d1a88.prototype.Ah = function () {
        if ((window.anApp = _0x1ff066).p.W) {
          var _0x5477a8 = (window.anApp = _0x1ff066).p.Ac().skinArrayDict;
          var _0x466091 = _0x19e512(_0x5477a8, this.rh);
          if (!(_0x466091 < 0x0)) {
            for (var _0x29cdb7 = _0x466091 - 0x1; _0x29cdb7 >= 0x0; _0x29cdb7--) {
              if (this.Ja(_0x5477a8[_0x29cdb7].id, _0x4e8d86.ia)) {
                this.rh = _0x5477a8[_0x29cdb7].id;
                return void this.yh();
              }
            }
            for (var _0x3d0a78 = _0x5477a8.length - 0x1; _0x3d0a78 > _0x466091; _0x3d0a78--) {
              if (this.Ja(_0x5477a8[_0x3d0a78].id, _0x4e8d86.ia)) {
                this.rh = _0x5477a8[_0x3d0a78].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x1d1a88.prototype.Bh = function (_0x2f0c0d, _0x3b5e4f) {
        if (!(window.anApp = _0x1ff066).p.W() || this.Ja(_0x2f0c0d, _0x3b5e4f)) {
          switch (_0x3b5e4f) {
            case _0x4e8d86.ia:
              return void (this.rh != _0x2f0c0d && (this.rh = _0x2f0c0d, this.yh()));
            case _0x4e8d86.ja:
              return void (this.sh != _0x2f0c0d && (this.sh = _0x2f0c0d, this.yh()));
            case _0x4e8d86.ka:
              return void (this.th != _0x2f0c0d && (this.th = _0x2f0c0d, this.yh()));
            case _0x4e8d86.la:
              return void (this.uh != _0x2f0c0d && (this.uh = _0x2f0c0d, this.yh()));
            case _0x4e8d86.ma:
              return void (this.vh != _0x2f0c0d && (this.vh = _0x2f0c0d, this.yh()));
          }
        }
      };
      _0x1d1a88.prototype.Ja = function (_0x20d712, _0x20b369) {
        var _0x139636 = _0xbfe35a(_0x20d712, _0x20b369);
        return null != _0x139636 && ((window.anApp = _0x1ff066).u.P() ? 0x0 == _0x139636.price && !_0x139636.nonbuyable || (window.anApp = _0x1ff066).u.Ch(_0x20d712, _0x20b369) : _0x139636.guest);
      };
      _0x1d1a88.prototype.yh = function () {
        for (var _0xa1d545 = 0x0; _0xa1d545 < this.wh.length; _0xa1d545++) {
          this.wh[_0xa1d545]();
        }
      };
      return _0x1d1a88;
    }();
    var _0x4e8d86 = function () {
      function _0x4f3a8d() {}
      _0x4f3a8d.ia = 'SKIN';
      _0x4f3a8d.ja = "EYES";
      _0x4f3a8d.ka = "MOUTH";
      _0x4f3a8d.la = 'GLASSES';
      _0x4f3a8d.ma = "HAT";
      return _0x4f3a8d;
    }();
    var _0x4cf055 = function () {
      function _0x50be21(_0x52f362, _0x236ac6, _0x5b1041, _0x486b92, _0x487fab, _0x479696, _0x1868e0, _0x6ce2c3, _0x9593b2) {
        this.Hc = new _0x53055c._b(_0x52f362, new _0x53055c.dc(_0x236ac6, _0x5b1041, _0x486b92, _0x487fab));
        this.Dh = _0x236ac6;
        this.Eh = _0x5b1041;
        this.Fh = _0x486b92;
        this.Gh = _0x487fab;
        this.Hh = _0x479696 || (_0x6ce2c3 || _0x486b92) / 0x2;
        this.Ih = _0x1868e0 || (_0x9593b2 || _0x487fab) / 0x2;
        this.Jh = _0x6ce2c3 || _0x486b92;
        this.Kh = _0x9593b2 || _0x487fab;
        this.Lh = 0.5 - (this.Hh - 0.5 * this.Jh) / this.Fh;
        this.Mh = 0.5 - (this.Ih - 0.5 * this.Kh) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x50be21;
    }();
    var _0x388025 = function () {
      function _0x321831() {
        this.fn_o = _0x4b106f;
        this.Fe = new _0x53055c._b(_0x53055c.$b.from('/images/bg-obstacle.png'));
        var _0x428b5b = _0x53055c.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80)), new _0x53055c._b(_0x428b5b, new _0x53055c.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x53055c._b(_0x4b106f());
        this.Df = new _0x53055c._b(function () {
          var _0x172e5d = _0x53055c.$b.from('/images/bg-pattern-pow2-TEAM2.png');
          _0x172e5d.wrapMode = _0x53055c.kc.lc;
          return _0x172e5d;
        }());
        this.Af = new _0x53055c._b(_0x53055c.$b.from('/images/lens.png'));
        var _0xd57a80 = _0x53055c.$b.from('https://i.imgur.com/VPh6J5u.png');
        this.Ph = new _0x4cf055(_0xd57a80, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x4cf055(_0xd57a80, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        var _0x235ef8 = _0x53055c.$b.from("https://i.imgur.com/LvJ1RxC.png");
        var _0x4a6b96 = _0x53055c.$b.from("https://i.imgur.com/iqKabEA.png");
        this.emoji = new _0x4cf055(_0x4a6b96, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Rh = new _0x4cf055(_0x235ef8, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80);
        this.X_x5 = new _0x4cf055(_0x235ef8, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x2 = new _0x4cf055(_0x235ef8, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.X_x10 = new _0x4cf055(_0x235ef8, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x4cf055(_0x235ef8, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Ug = function () {
          var _0x2e3af4 = window.document.createElement("canvas");
          _0x2e3af4.width = 0x50;
          _0x2e3af4.height = 0x50;
          return {
            'te': _0x2e3af4,
            'Tg': _0x2e3af4.getContext('2d'),
            'Hc': new _0x53055c._b(_0x53055c.$b.from(_0x2e3af4))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      var _0x4b106f = function (_0x3af51d) {
        var _0xc4e57e = _0x53055c.$b.from(_0x3af51d || '/images/bg-pattern-pow2-ARENA.png');
        _0xc4e57e.wrapMode = _0x53055c.kc.lc;
        return _0xc4e57e;
      };
      _0x321831.prototype.a = function (_0x286c3c) {
        function _0x4a47f5() {
          if (0x0 == --_0x984e22) {
            _0x286c3c();
          }
        }
        var _0x984e22 = 0x4;
        this.Bd = {};
        _0x4a47f5();
        this.yd = {};
        _0x4a47f5();
        this.Sh = [];
        _0x4a47f5();
        this.Th = null;
        _0x4a47f5();
      };
      return _0x321831;
    }();
    var _0x5a0a49 = function () {
      function _0x55cd94() {
        this.H = new _0x4d8a7a();
        this.F = new _0x40ae79();
        this.Uh = new _0x327500();
        this.Vh = new _0x98c748();
        this.Wh = new _0x300010();
        this.Xh = new _0x231071();
        this.Yh = new _0xdf162f();
        this.Zh = new _0x7681ca();
        this.xa = new _0x271c07();
        this.zwset = new _0x5d82ca();
        this.$h = new _0x2c583a();
        this._h = new _0x2535ea();
        this.ai = new _0x394d89();
        this.aa = new _0x480301();
        this.ua = new _0x147449();
        this.pa = new _0x4c4d1d();
        this.bi = [];
        this.ci = null;
      }
      function _0x2c5e40(_0x5a5cbb, _0x5d45c8) {
        if (0x0 != _0x5d45c8) {
          var _0x3825e5 = _0x5a5cbb[_0x5d45c8];
          _0x46bcc8(_0x5a5cbb, 0x0, 0x1, _0x5d45c8);
          _0x5a5cbb[0x0] = _0x3825e5;
        }
      }
      function _0x1ed8ff(_0x175463, _0x1639de) {
        if (_0x1639de != _0x175463.length + 0x1) {
          var _0x3b8dd9 = _0x175463[_0x1639de];
          _0x46bcc8(_0x175463, _0x1639de + 0x1, _0x1639de, _0x175463.length - _0x1639de - 0x1);
          _0x175463[_0x175463.length - 0x1] = _0x3b8dd9;
        }
      }
      function _0x5c36ea(_0x4b906a, _0x281de3) {
        for (var _0x12d1de = 0x0; _0x12d1de < _0x4b906a.length; _0x12d1de++) {
          if (_0x4b906a[_0x12d1de] == _0x281de3) {
            return _0x12d1de;
          }
        }
        return -0x1;
      }
      _0x55cd94.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.zwset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x462a9b = 0x0; _0x462a9b < this.bi.length; _0x462a9b++) {
          this.bi[_0x462a9b].a();
        }
        this.ci = new _0x3606ae(_0x501845.di);
      };
      _0x55cd94.prototype.Qa = function (_0x508020, _0x50d538) {
        for (var _0x5be7d5 = this.bi.length - 0x1; _0x5be7d5 >= 0x0; _0x5be7d5--) {
          this.bi[_0x5be7d5].Pa(_0x508020, _0x50d538);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && null != this.ci) {
          this.ci.Pa(_0x508020, _0x50d538);
        }
      };
      _0x55cd94.prototype.Ra = function () {
        for (var _0x33df53 = this.bi.length - 0x1; _0x33df53 >= 0x0; _0x33df53--) {
          this.bi[_0x33df53].Ra();
        }
        if (null != this.ci) {
          this.ci.Ra();
        }
      };
      _0x55cd94.prototype.I = function (_0x535fc6) {
        var _0x4d1062 = _0x5c36ea(this.bi, _0x535fc6);
        if (!(_0x4d1062 < 0x0)) {
          this.bi[0x0].ei();
          _0x2c5e40(this.bi, _0x4d1062);
          this.fi();
        }
      };
      _0x55cd94.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x1ed8ff(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x55cd94.prototype.fi = function () {
        var _0x3279f3 = this.bi[0x0];
        _0x3279f3.ii();
        _0x3279f3.ji();
        this.ki();
      };
      _0x55cd94.prototype.li = function () {
        return 0x0 != this.bi.length && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x55cd94.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x55cd94;
    }();
    var _0x5f4b22 = function () {
      function _0x1abebe() {
        this.ag = [];
        this.$f = [];
      }
      _0x1abebe.Vg = function (_0x408034, _0x31ce66) {
        return {
          'bg': _0x408034,
          'M': _0x31ce66
        };
      };
      _0x1abebe.Wg = function (_0x23c9e1, _0x36d2e9) {
        return {
          '_f': _0x23c9e1,
          'M': _0x36d2e9
        };
      };
      return _0x1abebe;
    }();
    var _0x212a4d = function () {
      function _0x516d66() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
      }
      _0x516d66.prototype.a = function () {
        this.vi();
      };
      _0x516d66.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x516d66.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x516d66.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x516d66.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png";
      };
      _0x516d66.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x516d66.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x516d66.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x516d66.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x516d66.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x516d66.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x516d66.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x516d66.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x516d66.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x516d66.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x516d66.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x516d66.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x516d66.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x516d66.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x516d66.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x516d66.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x516d66.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x516d66.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x516d66.prototype.V = function (_0x17db8d) {
        this.ni.push(_0x17db8d);
        _0x17db8d();
      };
      _0x516d66.prototype.Pi = function (_0x2bd543) {
        this.oi.push(_0x2bd543);
        _0x2bd543();
      };
      _0x516d66.prototype.Qi = function (_0xe83533) {
        this.pi.push(_0xe83533);
      };
      _0x516d66.prototype.Ch = function (_0x4d2090, _0xa3d93c) {
        var _0x408ede = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x408ede) {
          return false;
        }
        for (var _0x3978ce = 0x0; _0x3978ce < _0x408ede.length; _0x3978ce++) {
          var _0x533399 = _0x408ede[_0x3978ce];
          if (_0x533399.id == _0x4d2090 && _0x533399.type === _0xa3d93c) {
            return true;
          }
        }
        return false;
      };
      _0x516d66.prototype.P = function () {
        return this.qi;
      };
      _0x516d66.prototype.ea = function () {
        return this.ri;
      };
      _0x516d66.prototype.Q = function (_0x29df61) {
        var _0x197e08 = this;
        if (this.qi) {
          this.Ri(function (_0x517478) {
            if (_0x517478) {
              var _0x4a7f45 = _0x197e08.zi();
              var _0x5c92a4 = _0x197e08.Ai();
              _0x197e08.si = _0x517478;
              _0xf72104(_0x197e08.si);
              _0x197e08.Si();
              var _0x477dc8 = _0x197e08.zi();
              var _0x4b6420 = _0x197e08.Ai();
              if (_0x4b6420 > 0x1 && _0x4b6420 != _0x5c92a4) {
                (window.anApp = _0x1ff066).s.aa.Ti(new _0x5605b5(_0x4b6420));
              }
              var _0x43be28 = _0x477dc8 - _0x4a7f45;
              if (_0x43be28 >= 0x14) {
                (window.anApp = _0x1ff066).s.aa.Ti(new _0x16627a(_0x43be28));
              }
            }
            if (_0x29df61) {
              _0x29df61();
            }
          });
        }
      };
      _0x516d66.prototype.Ri = function (_0x5db84a) {
        $.get(_0x7fa75 + '/pub/wuid/' + this.ri + "/getUserData", function (_0xcb3e98) {
          _0x5db84a(_0xcb3e98.user_data);
        });
      };
      _0x516d66.prototype.Ui = function (_0x53fbd8, _0x3dffe0, _0x21b6fb) {
        var _0x11c620 = this;
        $.get(_0x7fa75 + "/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x53fbd8 + '&type=' + _0x3dffe0, function (_0x3032d6) {
          if (0x4b0 == _0x3032d6.code) {
            _0x11c620.Q(_0x21b6fb);
          } else {
            _0x21b6fb();
          }
        }).fail(function () {
          _0x21b6fb();
        });
      };
      _0x516d66.prototype.Vi = function () {
        var _0x5f4fd2 = this;
        this.Wi();
        if ("undefined" == typeof FB) {
          return void this.Xi();
        }
        FB.getLoginStatus(function (_0x182605) {
          if ("connected" === _0x182605.status) {
            return void (_0x182605.authResponse && _0x182605.authResponse.accessToken ? _0x5f4fd2.Yi("facebook", "fb_" + _0x182605.authResponse.accessToken) : _0x5f4fd2.Xi());
          }
          FB.login(function (_0xeb641f) {
            if ("connected" === _0xeb641f.status && _0xeb641f.authResponse && _0xeb641f.authResponse.accessToken) {
              _0x5f4fd2.Yi('facebook', 'fb_' + _0xeb641f.authResponse.accessToken);
            } else {
              _0x5f4fd2.Xi();
            }
          });
        });
      };
      _0x516d66.prototype.Zi = function () {
        var _0x17ac37 = this;
        this.Wi();
        if (typeof GoogleAuth === 'undefined') {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log('gsi:sil');
            var _0x2a716e = GoogleAuth.currentUser.get();
            _0x17ac37.Yi("google", "gg_" + _0x2a716e.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x2371e3) {
            if (typeof _0x2371e3.error !== "undefined") {
              console.log("gsi:e: " + _0x2371e3.error);
              _0x17ac37.Xi();
              return;
            }
            if (_0x2371e3.isSignedIn()) {
              console.log("gsi:s");
              _0x17ac37.Yi('google', "gg_" + _0x2371e3.getAuthResponse().id_token);
            } else {
              console.log("gsi:c");
              _0x17ac37.Xi();
            }
          });
        });
      };
      _0x516d66.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x1c6251 = this.ri;
        var _0x282a84 = this.ti;
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
        _0x350985(_0x166161.Oe, '', 0x3c);
        switch (_0x282a84) {
          case "facebook":
            this.$i();
            break;
          case 'google':
            this._i();
        }
        if (_0x1c6251 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x516d66.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get(_0x7fa75 + "/pub/wuid/" + this.ri + '/deleteAccount', function (_0x3caac5) {
            if (0x4b0 === _0x3caac5.code) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x516d66.prototype.vi = function () {
        console.log('rs');
        var _0x41f899 = _0x4961dc(_0x166161.Oe);
        var _0x47b7d4 = this;
        if ("facebook" == _0x41f899) {
          console.log("rs:fb");
          (function _0x30df4c() {
            if ("undefined" != typeof FB) {
              _0x47b7d4.Vi();
            } else {
              setTimeout(_0x30df4c, 0x64);
            }
          })();
        } else if ("google" == _0x41f899) {
          console.log("rs:gg");
          (function _0x99967a() {
            if (undefined !== GoogleAuth) {
              _0x47b7d4.Zi();
            } else {
              setTimeout(_0x99967a, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x516d66.prototype.aj = function () {
        var _0x1730a6 = 0x0;
        for (; _0x1730a6 < this.ni.length; _0x1730a6++) {
          this.ni[_0x1730a6]();
        }
        this.Si();
      };
      _0x516d66.prototype.Si = function () {
        var _0xceb963 = 0x0;
        for (; _0xceb963 < this.oi.length; _0xceb963++) {
          this.oi[_0xceb963]();
        }
        var _0x2ad60a = this.pi;
        this.pi = [];
        var _0x3e98fa = 0x0;
        for (; _0x3e98fa < _0x2ad60a.length; _0x3e98fa++) {
          _0x2ad60a[_0x3e98fa]();
        }
      };
      _0x516d66.prototype.Yi = function (_0x516603, _0x58a574) {
        var _0x58361e = this;
        $.get(_0x7fa75 + "/pub/wuid/" + _0x58a574 + '/login', function (_0x20d5e7) {
          if (_0x20d5e7 && _0x20d5e7.user_data) {
            checkSubscriptionExpired(_0x20d5e7.user_data.userId);
            registerUpdatePlayer(_0x20d5e7.user_data);
            _0xf72104(_0x20d5e7.user_data);
            var _0x2bf6f3 = this.ri;
            _0x58361e.qi = true;
            _0x58361e.ri = _0x58a574;
            _0x58361e.si = _0x20d5e7.user_data;
            _0x58361e.ti = _0x516603;
            _0x350985(_0x166161.Oe, _0x58361e.ti, 0x3c);
            console.log(_0x58361e);
            showServer2(_0x1ff066);
            showVersionPays(_0x20d5e7);
            zw_userId = _0x20d5e7.user_data.userId;
            $("#userid").text(zw_userId);
            $("#avatarUrl").attr('src', _0x20d5e7.user_data.avatarUrl);
            $("#zw-settings-id").text("ID: " + zw_userId);
            theoKzObjects.loading = false;
            if (_0x2bf6f3 !== _0x58a574) {
              _0x58361e.aj();
            } else {
              _0x58361e.Si();
            }
          } else {
            _0x58361e.Xi();
          }
        }).fail(function () {
          _0x58361e.Xi();
        });
      };
      _0x516d66.prototype.Xi = function () {
        this.Wi();
      };
      _0x516d66.prototype.$i = function () {
        console.log('lo:fb');
        FB.logout(function () {});
      };
      _0x516d66.prototype._i = function () {
        console.log('lo:gg');
        GoogleAuth.signOut();
      };
      return _0x516d66;
    }();
    var _0x1f9450 = function () {
      function _0x453947() {
        this.cj = {};
        this.cj[_0x327e61] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x51ffe5] = _0x53055c._b.WHITE;
        this.cj[_0x35e25d] = [0x0, 0x0];
        this.cj[_0x29d93d] = [0x0, 0x0];
        var _0x31b172 = _0x53055c.cc.from(_0x42c5eb, _0x49f688, this.cj);
        this.zf = new _0x53055c.hc(_0x305ba4, _0x31b172);
      }
      var _0x4dd48e = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0xd79c09 = "a2_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x433910 = atob('dHJhbnNsYXRpb25NYXRyaXg=');
      var _0x94ff88 = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var _0x327e61 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x51ffe5 = "u4_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x35e25d = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x29d93d = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x151d9e = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x305ba4 = new _0x53055c.gc().addAttribute(_0x4dd48e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0xd79c09, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x42c5eb = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + _0x4dd48e + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + _0xd79c09 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x433910 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x94ff88 + atob("O3ZhcnlpbmcgdmVjMiA=") + _0x151d9e + atob('O3ZvaWQgbWFpbigpew==') + _0x151d9e + atob('PQ==') + _0xd79c09 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + _0x94ff88 + atob('Kg==') + _0x433910 + atob('KnZlYzMo') + _0x4dd48e + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var _0x49f688 = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + _0x151d9e + atob("O3VuaWZvcm0gdmVjNCA=") + _0x327e61 + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + _0x51ffe5 + atob("O3VuaWZvcm0gdmVjMiA=") + _0x35e25d + atob("O3VuaWZvcm0gdmVjMiA=") + _0x29d93d + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + _0x151d9e + atob("Kg==") + _0x35e25d + atob("Kw==") + _0x29d93d + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + _0x327e61 + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + _0x51ffe5 + atob('LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=');
      _0x453947.prototype.Hf = function (_0x8c51e3, _0x1a635e, _0x14a0a1, _0x502578) {
        var _0x3844d1 = this.cj[_0x327e61];
        _0x3844d1[0x0] = _0x8c51e3;
        _0x3844d1[0x1] = _0x1a635e;
        _0x3844d1[0x2] = _0x14a0a1;
        _0x3844d1[0x3] = _0x502578;
      };
      _0x453947.prototype.Bf = function (_0x426581) {
        this.cj[_0x51ffe5] = _0x426581;
      };
      _0x453947.prototype.Te = function (_0x671815, _0xff4189, _0x533913, _0x5c60b2) {
        this.zf.position.x = _0x671815;
        this.zf.position.y = _0xff4189;
        this.zf.scale.x = _0x533913;
        this.zf.scale.y = _0x5c60b2;
        var _0x3d9763 = this.cj[_0x35e25d];
        _0x3d9763[0x0] = 0.2520615384615385 * _0x533913;
        _0x3d9763[0x1] = 0.4357063736263738 * _0x5c60b2;
        var _0x3dc287 = this.cj[_0x29d93d];
        _0x3dc287[0x0] = 0.2520615384615385 * _0x671815;
        _0x3dc287[0x1] = 0.4357063736263738 * _0xff4189;
      };
      return _0x453947;
    }();
    var _0x3c90b5 = function () {
      function _0x54574a() {
        this.jh = new _0x53055c.ec();
        this.dj = 0x0;
        this.ej = 0x0;
        this.cachedTexture = null;
        this.cachedScaleX = 0x0;
        this.cachedScaleY = 0x0;
      }
      _0x54574a.prototype.kh = function (_0x4c7f55) {
        if (this.cachedTexture !== _0x4c7f55.Hc) {
          this.cachedTexture = _0x4c7f55.Hc;
          this.jh.texture = _0x4c7f55.Hc;
          this.jh.anchor.set(_0x4c7f55.Lh, _0x4c7f55.Mh);
          const _0x5201d0 = _0x4c7f55.Hc.width;
          const _0x57596b = _0x4c7f55.Hc.height;
          const _0x14c798 = _0x4c7f55.Nh / _0x5201d0;
          const _0x497f33 = _0x4c7f55.Oh / _0x57596b;
          if (this.cachedScaleX !== _0x14c798 || this.cachedScaleY !== _0x497f33) {
            this.dj = _0x14c798;
            this.ej = _0x497f33;
            this.jh.scale.set(_0x14c798, _0x497f33);
            this.cachedScaleX = _0x14c798;
            this.cachedScaleY = _0x497f33;
          }
        }
      };
      _0x54574a.prototype.oh = function (_0x44809b) {
        const _0x1b114a = this.dj * _0x44809b;
        const _0x45402e = this.ej * _0x44809b;
        if (this.jh.scale.x !== _0x1b114a || this.jh.scale.y !== _0x45402e) {
          this.jh.scale.set(_0x1b114a, _0x45402e);
        }
      };
      _0x54574a.prototype.fj = function (_0x4276e4) {
        this.jh.rotation = _0x4276e4;
      };
      _0x54574a.prototype.nh = function (_0x4748d0, _0x386c12) {
        this.jh.position.set(_0x4748d0, _0x386c12);
      };
      _0x54574a.prototype.Mg = function (_0x222ccf) {
        this.jh.visible = _0x222ccf;
      };
      _0x54574a.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x54574a.prototype.qh = function (_0x2ca53b) {
        this.jh.alpha = _0x2ca53b;
      };
      _0x54574a.prototype.Mf = function () {
        return this.jh;
      };
      _0x54574a.prototype.ih = function () {
        _0x31c7b2(this.jh);
      };
      return _0x54574a;
    }();
    var _0x241e41 = function () {
      function _0x8d7c8(_0x298a9d) {
        this.fb = _0x298a9d;
        this.Mb = new _0x241e41.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.b = null;
        this.zw_msg = null;
        this.Tb();
      }
      _0x8d7c8.prototype.Kb = function () {
        if (null != this.pj) {
          _0x31c7b2(this.pj.Rf);
        }
        if (null != this.qj) {
          _0x31c7b2(this.qj);
        }
        if (this.b != null) {
          _0x31c7b2(this.b);
        }
        if (this.zw_msg != null) {
          _0x31c7b2(this.zw_msg);
        }
      };
      _0x8d7c8.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x8d7c8.prototype.Fg = function (_0x11d0e8) {
        this.Mb = _0x11d0e8;
        this.rj(this.Hb);
      };
      _0x8d7c8.prototype.Mg = function (_0x2714dd) {
        var _0x3abf0b = this.Hb;
        this.Hb = _0x2714dd;
        this.rj(_0x3abf0b);
      };
      _0x8d7c8.prototype.Ig = function (_0x3a0567) {
        this.M = 0x32 * _0x3a0567;
        var _0x9c61d7 = _0x3a0567;
        if (_0x3a0567 > this.fb.cf) {
          _0x9c61d7 = Math.atan((_0x3a0567 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x129b86 = Math.sqrt(0x4 * Math.pow(0x5 * _0x9c61d7, 0.707106781186548) + 0x19);
        var _0x137077 = Math.min(0xc8, Math.max(0x3, 0x5 * (_0x129b86 - 0x5) + 0x1));
        var _0x34d2f4 = this.kj;
        this.Db = 0.025 * (0x5 + 0.9 * _0x129b86);
        this.kj = Math.floor(_0x137077);
        this.ij = _0x137077 - this.kj;
        if (_0x34d2f4 > 0x0 && _0x34d2f4 < this.kj) {
          var _0x27027a = this.lj[0x2 * _0x34d2f4 - 0x2];
          var _0x57ae72 = this.lj[0x2 * _0x34d2f4 - 0x1];
          var _0x258905 = this.mj[0x2 * _0x34d2f4 - 0x2];
          var _0x38cdee = this.mj[0x2 * _0x34d2f4 - 0x1];
          var _0x4fcef2 = this.nj[0x2 * _0x34d2f4 - 0x2];
          var _0x55262b = this.nj[0x2 * _0x34d2f4 - 0x1];
          for (var _0x4aef9d = _0x34d2f4; _0x4aef9d < this.kj; _0x4aef9d++) {
            this.lj[0x2 * _0x4aef9d] = _0x27027a;
            this.lj[0x2 * _0x4aef9d + 0x1] = _0x57ae72;
            this.mj[0x2 * _0x4aef9d] = _0x258905;
            this.mj[0x2 * _0x4aef9d + 0x1] = _0x38cdee;
            this.nj[0x2 * _0x4aef9d] = _0x4fcef2;
            this.nj[0x2 * _0x4aef9d + 0x1] = _0x55262b;
          }
        }
      };
      _0x8d7c8.prototype.Lg = function (_0x41f0a8, _0x311507) {
        this.kj = _0x311507;
        for (var _0x2fa7ad = 0x0; _0x2fa7ad < this.kj; _0x2fa7ad++) {
          this.lj[0x2 * _0x2fa7ad] = this.mj[0x2 * _0x2fa7ad] = this.nj[0x2 * _0x2fa7ad] = _0x41f0a8();
          this.lj[0x2 * _0x2fa7ad + 0x1] = this.mj[0x2 * _0x2fa7ad + 0x1] = this.nj[0x2 * _0x2fa7ad + 0x1] = _0x41f0a8();
        }
      };
      _0x8d7c8.prototype.Kg = function (_0x4b7410, _0x35fce9, _0x17f3d5) {
        this.hj = _0x17f3d5;
        for (var _0x4b17a2 = 0x0; _0x4b17a2 < this.kj; _0x4b17a2++) {
          this.lj[0x2 * _0x4b17a2] = this.mj[0x2 * _0x4b17a2];
          this.lj[0x2 * _0x4b17a2 + 0x1] = this.mj[0x2 * _0x4b17a2 + 0x1];
        }
        var _0x565b89 = _0x4b7410 - this.mj[0x0];
        var _0x47797e = _0x35fce9 - this.mj[0x1];
        this.sj(_0x565b89, _0x47797e, this.kj, this.mj);
      };
      _0x8d7c8.prototype.sj = function (_0x3a0e61, _0x2c39eb, _0x4e6453, _0x164b9a) {
        var _0x5ce757 = Math.hypot(_0x3a0e61, _0x2c39eb);
        if (!(_0x5ce757 <= 0x0)) {
          var _0x1d5606 = _0x164b9a[0x0];
          var _0x4bbce8 = undefined;
          _0x164b9a[0x0] += _0x3a0e61;
          var _0x52d7c3 = _0x164b9a[0x1];
          var _0x256fbc = undefined;
          _0x164b9a[0x1] += _0x2c39eb;
          var _0x32088f = this.Db / (this.Db + _0x5ce757);
          var _0x1a8b5f = 0x1 - 0x2 * _0x32088f;
          var _0x5cd11c = 0x1;
          for (var _0x5f3b97 = _0x4e6453 - 0x1; _0x5cd11c < _0x5f3b97; _0x5cd11c++) {
            _0x4bbce8 = _0x164b9a[0x2 * _0x5cd11c];
            _0x164b9a[0x2 * _0x5cd11c] = _0x164b9a[0x2 * _0x5cd11c - 0x2] * _0x1a8b5f + (_0x4bbce8 + _0x1d5606) * _0x32088f;
            _0x1d5606 = _0x4bbce8;
            _0x256fbc = _0x164b9a[0x2 * _0x5cd11c + 0x1];
            _0x164b9a[0x2 * _0x5cd11c + 0x1] = _0x164b9a[0x2 * _0x5cd11c - 0x1] * _0x1a8b5f + (_0x256fbc + _0x52d7c3) * _0x32088f;
            _0x52d7c3 = _0x256fbc;
          }
          _0x32088f = this.ij * this.Db / (this.ij * this.Db + _0x5ce757);
          _0x1a8b5f = 0x1 - 0x2 * _0x32088f;
          _0x164b9a[0x2 * _0x4e6453 - 0x2] = _0x164b9a[0x2 * _0x4e6453 - 0x4] * _0x1a8b5f + (_0x164b9a[0x2 * _0x4e6453 - 0x2] + _0x1d5606) * _0x32088f;
          _0x164b9a[0x2 * _0x4e6453 - 0x1] = _0x164b9a[0x2 * _0x4e6453 - 0x3] * _0x1a8b5f + (_0x164b9a[0x2 * _0x4e6453 - 0x1] + _0x52d7c3) * _0x32088f;
        }
      };
      _0x8d7c8.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x8d7c8.prototype.Hg = function (_0xc1224b, _0xcaa2e4) {
        var _0xe42d7a = 0xf4240;
        var _0x17a9a8 = _0xc1224b;
        var _0xfffcf6 = _0xcaa2e4;
        for (var _0x484667 = 0x0; _0x484667 < this.kj; _0x484667++) {
          var _0x5ae95f = this.nj[0x2 * _0x484667];
          var _0x8087ad = this.nj[0x2 * _0x484667 + 0x1];
          var _0xf43da7 = Math.hypot(_0xc1224b - _0x5ae95f, _0xcaa2e4 - _0x8087ad);
          if (_0xf43da7 < _0xe42d7a) {
            _0xe42d7a = _0xf43da7;
            _0x17a9a8 = _0x5ae95f;
            _0xfffcf6 = _0x8087ad;
          }
        }
        return {
          'x': _0x17a9a8,
          'y': _0xfffcf6,
          'distance': _0xe42d7a
        };
      };
      _0x8d7c8.prototype.vb = function (_0x45eaac) {
        this.oj = _0x45eaac;
      };
      _0x8d7c8.prototype.Fb = function (_0x4fab62, _0x131b94) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x4fab62 / 0x190 * Math.PI) : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x4fab62 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb + _0x131b94 * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x4fab62 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb - _0x131b94 * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x131b94 * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x131b94 * 0.0025);
        if (null != this.pj) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (null != this.qj) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x8d7c8.prototype.Gb = function (_0x500f16, _0x4ee49c, _0x51e8b7, _0x394aa3) {
        if (this.Hb && this.Ib) {
          var _0x4db8aa = Math.pow(0.11112, _0x4ee49c / 0x5f);
          var _0x1f57f1 = 0x0;
          for (; _0x1f57f1 < this.kj; _0x1f57f1++) {
            var _0x4dcae3 = this.lj[0x2 * _0x1f57f1] * (0x1 - _0x51e8b7) + this.mj[0x2 * _0x1f57f1] * _0x51e8b7;
            var _0x18208b = this.lj[0x2 * _0x1f57f1 + 0x1] * (0x1 - _0x51e8b7) + this.mj[0x2 * _0x1f57f1 + 0x1] * _0x51e8b7;
            this.nj[0x2 * _0x1f57f1] = _0x4dcae3 * (0x1 - _0x4db8aa) + this.nj[0x2 * _0x1f57f1] * _0x4db8aa;
            this.nj[0x2 * _0x1f57f1 + 0x1] = _0x18208b * (0x1 - _0x4db8aa) + this.nj[0x2 * _0x1f57f1 + 0x1] * _0x4db8aa;
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0x500f16, _0x4ee49c, _0x394aa3);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - 0x3 * this.Db;
        }
        if (this.b != null) {
          var _0x307b83;
          this.b.x = this.qj.position.x;
          this.b.y = this.qj.position.y + 0x1;
          for (_0x307b83 in this.b.he) {
            if (!(this.Ff[_0x307b83] != null && this.Ff[_0x307b83].sc)) {
              this.b.removeChild(this.b.he[_0x307b83]);
              delete this.b.he[_0x307b83];
            }
          }
          var _0x38ffb0;
          var _0x352ce1 = 0x0;
          c = 0x0;
          for (_0x38ffb0 in this.Ff) {
            if (_0x38ffb0 !== '0' && _0x38ffb0 !== '1') {
              continue;
            }
            if (_0x4ee49c = this.Ff[_0x38ffb0]) {
              if (_0x4ee49c.sc && false) {
                var _0x131331 = this.b.he[_0x38ffb0];
                if (!_0x131331) {
                  const _0x2eb9e9 = portionTimes[_0x38ffb0];
                  const _0x52e923 = timeFontColors2[_0x38ffb0];
                  let _0x896ddc = _0x4ee49c.tc;
                  if (_0x896ddc === 0.99) {
                    _0x896ddc = 0x1;
                  }
                  let _0xcb1391 = _0x2eb9e9 - parseInt(_0x896ddc * _0x2eb9e9);
                  _0x131331 = new PIXI.Text(_0xcb1391, {
                    'align': "center",
                    'fill': _0x52e923,
                    'fontSize': 0x14,
                    'lineJoin': 'round',
                    'whiteSpace': 'normal',
                    'wordWrap': true,
                    'dropShadow': true,
                    'dropShadowBlur': 0x6,
                    'fontWeight': "bold"
                  });
                  this.b.he[_0x38ffb0] = _0x131331;
                  this.b.addChild(_0x131331);
                }
                const _0x243bc8 = portionTimes[_0x38ffb0];
                let _0x4937d9 = _0x4ee49c.tc;
                if (_0x4937d9 === 0.99) {
                  _0x4937d9 = 0x1;
                }
                let _0x1b3be0 = _0x243bc8 - parseInt(_0x4937d9 * _0x243bc8);
                _0x131331.text = _0x1b3be0;
                _0x131331.x = _0x352ce1;
                _0x131331.y = 0x0;
                _0x352ce1 += _0x131331.width + 0xa;
              }
            }
          }
          this.b.pivot.x = 0.5 * this.b.width;
          this.b.pivot.y = this.b.height;
        }
      };
      _0x8d7c8.prototype.rj = function (_0x5257a3) {
        if (this.Hb) {
          if (!_0x5257a3) {
            this.uj();
          }
        } else {
          if (null != this.pj) {
            _0x31c7b2(this.pj.Rf);
          }
          if (null != this.qj) {
            _0x31c7b2(this.qj);
          }
          if (this.b != null) {
            _0x31c7b2(this.b);
          }
          if (this.zw_msg != null) {
            _0x31c7b2(this.zw_msg);
          }
        }
      };
      _0x8d7c8.prototype.uj = function () {
        var _0x1100c2 = window.anApp = _0x1ff066;
        if (null == this.pj) {
          this.pj = new _0x4437d9();
        } else {
          _0x31c7b2(this.pj.Rf);
        }
        this.pj.hh(_0x1100c2.o.fb.af, _0x1100c2.p.Dc().ed(this.Mb.cg), _0x1100c2.p.Dc().dd(this.Mb.dg), _0x1100c2.p.Dc().fd(this.Mb.Bg), _0x1100c2.p.Dc().gd(this.Mb.Cg), _0x1100c2.p.Dc().hd(this.Mb.Dg), _0x1100c2.p.Dc().jd(this.Mb.Eg));
        if (null == this.qj) {
          this.qj = new _0x1f99c2('');
          this.qj.style.fontFamily = fonts[currentFontIndex];
          this.qj.anchor.set(0.5);
        } else {
          _0x31c7b2(this.qj);
        }
        if (this.b == null) {
          this.b = new _0x53055c.Zb();
          this.b.he = {};
        } else {
          _0x31c7b2(this.b);
        }
        if (this.zw_msg == null) {
          this.zw_msg = new _0x53055c.Zb();
        } else {
          _0x31c7b2(this.zw_msg);
        }
        this.qj.style.fontSize = 0xe;
        this.qj.style.fill = _0x1100c2.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj, this.b, this.zw_msg);
      };
      _0x8d7c8.Config = function () {
        function _0x460955() {
          this.Lb = 0x0;
          this.cg = _0x38582a.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x460955;
      }();
      return _0x8d7c8;
    }();
    var _0x1f99c2 = function () {
      return _0x22ee20(_0x53055c.fc, function (_0x444652, _0x155c90, _0x457e77) {
        _0x53055c.fc.call(this, _0x444652, _0x155c90, _0x457e77);
        this.If = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x4437d9 = function () {
      function _0x2f8d6d() {
        this.Rf = new _0x53055c.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x117124();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x3c90b5(), new _0x3c90b5());
        for (let _0x3b3ef3 = 0x0; _0x3b3ef3 < 0x31d; _0x3b3ef3++) {
          this.xj[_0x3b3ef3] = this.yj(_0x3b3ef3, new _0x3c90b5(), new _0x3c90b5());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x3726fb = 0.1 * Math.PI;
      var _0xc4ea42 = -0.06640625;
      var _0x23043c = -0.03515625;
      var _0x2f13ff = -0.0625;
      var _0x7fe931 = 0x3 * _0xc4ea42 + 0.84375;
      var _0x3c7a60 = 0.2578125 - 0x3 * _0xc4ea42;
      var _0x2ba2b3 = _0xc4ea42 + _0x23043c;
      var _0x32109c = _0x2f13ff + _0x2f13ff;
      var _0x3919a1 = 0x3 * _0x23043c + 0.2578125;
      var _0x3ba81c = 0.84375 - 0x3 * _0x23043c;
      var _0x22609a = _0x23043c + _0xc4ea42;
      _0x2f8d6d.prototype.yj = function (_0xadc472, _0x5d44e0, _0x5496db) {
        var _0x4682d3 = new _0x3a6898(_0x5d44e0, _0x5496db);
        const _0xfd65ae = 0.001 * (0x2 * (0x31d - _0xadc472) + 0x1 + 0x3);
        const _0x4bf269 = 0.001 * (0x2 * (0x31d - _0xadc472) - 0x2 + 0x3);
        _0x5d44e0.jh.zIndex = _0xfd65ae;
        _0x5496db.jh.zIndex = _0x4bf269;
        return _0x4682d3;
      };
      _0x2f8d6d.prototype.hh = function (_0x329ad9, _0x3ef27c, _0x4c888d, _0x2fa3bc, _0xa303d4, _0x3c0489, _0x21c712) {
        var _0x31f6f0 = _0x4c888d.Zc;
        var _0x3cdb7a = _0x329ad9 == 0x10 ? _0x3ef27c.bd.$c : _0x4c888d.$c;
        if (_0x31f6f0.length && _0x3cdb7a.length) {
          this.xj.forEach((_0x110491, _0xb45073) => {
            _0x110491.Nf.kh(_0x31f6f0[_0xb45073 % _0x31f6f0.length]);
            _0x110491.Pf.kh(_0x3cdb7a[_0xb45073 % _0x3cdb7a.length]);
          });
        }
        this.vj.hh(_0x2fa3bc, _0xa303d4, _0x3c0489, _0x21c712);
      };
      var _0x117124 = function () {
        var _0x14bdf4 = _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x53055c.Zb();
          this.Hj = [];
          for (var _0x35c9e7 = 0x0; _0x35c9e7 < 0x4; _0x35c9e7++) {
            var _0x86b9c5 = new _0x3c90b5();
            _0x86b9c5.kh((window.anApp = _0x1ff066).q.Ph);
            this.Gj.addChild(_0x86b9c5.jh);
            this.Hj.push(_0x86b9c5);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x3c90b5();
          this.Jj.kh((window.anApp = _0x1ff066).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new _0x3c90b5();
          this.flx.kh((window.anApp = _0x1ff066).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x3c90b5();
          this.xxx5.kh((window.anApp = _0x1ff066).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x3c90b5();
          this.xxx2.kh((window.anApp = _0x1ff066).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x3c90b5();
          this.xxx10.kh((window.anApp = _0x1ff066).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x3c90b5();
          this.xxxLupatype.kh((window.anApp = _0x1ff066).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
          this.xxxEmojiType = new _0x3c90b5();
          this.xxxEmojiType.kh((window.anApp = _0x1ff066).q.emoji);
          this.xxxEmojiType.jh.zIndex = 0.001;
          this.addChild(this.xxxEmojiType.jh);
          this.x_emoji();
        });
        _0x14bdf4.prototype.hh = function (_0x21eab3, _0x46b368, _0x32689c, _0xb6baeb) {
          this.Lj(0.002, this.Cj, _0x21eab3.Zc);
          this.Lj(0.003, this.Dj, _0x46b368.Zc);
          this.Lj(0.004, this.Fj, _0xb6baeb.Zc);
          this.Lj(0.005, this.Ej, _0x32689c.Zc);
        };
        _0x14bdf4.prototype.Lj = function (_0x44efb8, _0x516230, _0x4a781f) {
          const _0x50cdde = _0x4a781f.length;
          const _0x48c1ed = _0x516230.length;
          for (let _0x56fb85 = _0x48c1ed; _0x56fb85 < _0x50cdde; _0x56fb85++) {
            const _0x4a6aa4 = new _0x3c90b5();
            _0x516230.push(_0x4a6aa4);
            this.addChild(_0x4a6aa4.Mf());
          }
          for (let _0x262389 = _0x48c1ed; _0x262389 > _0x50cdde; _0x262389--) {
            _0x516230.pop().ih();
          }
          let _0x2ea5f2 = _0x44efb8;
          for (let _0xdbb4b4 = 0x0; _0xdbb4b4 < _0x50cdde; _0xdbb4b4++) {
            _0x2ea5f2 += 0.0001;
            const _0x5c21a1 = _0x516230[_0xdbb4b4];
            _0x5c21a1.kh(_0x4a781f[_0xdbb4b4]);
            _0x5c21a1.jh.zIndex = _0x2ea5f2;
          }
        };
        _0x14bdf4.prototype.mh = function (_0x47b088, _0x2c9238, _0x31fac5, _0x55610a) {
          this.visible = true;
          this.position.set(_0x47b088, _0x2c9238);
          this.rotation = _0x55610a;
          [this.Cj, this.Dj, this.Ej, this.Fj].forEach((_0xb622f9, _0x456fbe) => {
            _0xb622f9.forEach(_0x4627db => _0x4627db.oh(_0x31fac5));
          });
        };
        _0x14bdf4.prototype.lh = function () {
          this.visible = false;
        };
        _0x14bdf4.prototype.Mj = function (_0x3bf62c, _0x255722, _0x33350c, _0x55af0a) {
          this.Gj.visible = true;
          var _0x18687b = _0x33350c / 0x3e8;
          var _0x59cb13 = 0x1 / this.Hj.length;
          for (var _0x3c5118 = 0x0; _0x3c5118 < this.Hj.length; _0x3c5118++) {
            var _0xe54968 = 0x1 - (_0x18687b + _0x59cb13 * _0x3c5118) % 0x1;
            this.Hj[_0x3c5118].jh.alpha = 0x1 - _0xe54968;
            this.Hj[_0x3c5118].oh(_0x255722 * (0.5 + 4.5 * _0xe54968));
          }
        };
        _0x14bdf4.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x14bdf4.prototype.Nj = function (_0x643898, _0x3ebcbb, _0x2f0207, _0x5e2f7d) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0x643898.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x643898.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x5e2f7d * 0.0025) : Math.max(_0x643898.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x5e2f7d * 0.0025);
          this.Jj.oh(_0x3ebcbb);
        };
        _0x14bdf4.prototype.Nflex = function (_0x455da1, _0x2a69ba, _0x4449a1, _0x26ceb0) {
          this.flx.jh.visible = true;
          this.flx.oh(_0x2a69ba);
        };
        _0x14bdf4.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0x14bdf4.prototype.ActiveX5 = function (_0x318868, _0x24ef0c, _0x4657e9, _0x3d2323) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0x318868.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x318868.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x3d2323 * 0.0025) : Math.max(_0x318868.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x3d2323 * 0.0025);
          this.xxx5.oh(_0x24ef0c);
        };
        _0x14bdf4.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0x14bdf4.prototype.ActiveEmoji = function (_0xe5a676, _0x298a65, _0x56208a, _0x3e69fb) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(_0x298a65);
        };
        _0x14bdf4.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
        };
        _0x14bdf4.prototype.ActiveX2 = function (_0x5a8ff6, _0x11d269, _0x5b2a6d, _0x5e2bee) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x5a8ff6.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x5a8ff6.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x5e2bee * 0.0025) : Math.max(_0x5a8ff6.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x5e2bee * 0.0025);
          this.xxx2.oh(_0x11d269);
        };
        _0x14bdf4.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0x14bdf4.prototype.ActiveX10 = function (_0x3171d5, _0x40066c, _0x43ec10, _0x44cf60) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x3171d5.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x3171d5.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x44cf60 * 0.0025) : Math.max(_0x3171d5.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x44cf60 * 0.0025);
          this.xxx10.oh(_0x40066c);
        };
        _0x14bdf4.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0x14bdf4.prototype.ActiveZlupa = function (_0x2f3388, _0x500443, _0x2c79d2, _0x526721) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0x2f3388.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x2f3388.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x526721 * 0.0025) : Math.max(_0x2f3388.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x526721 * 0.0025);
          this.xxxLupatype.oh(_0x500443);
        };
        _0x14bdf4.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0x14bdf4.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        return _0x14bdf4;
      }();
      _0x2f8d6d.prototype.Oj = function (_0x26cebb) {
        return this.Aj + this.Bj * Math.sin(_0x26cebb * _0x3726fb - this.zj);
      };
      _0x2f8d6d.prototype.tj = function (_0x200f01, _0x32c08d, _0x534f27, _0x9eb208) {
        const _0x4e37ba = 0x2 * _0x200f01.Db;
        const _0x588877 = _0x200f01.nj;
        const _0x911c75 = _0x200f01.kj;
        const _0xd51659 = 0x4 * _0x911c75 - 0x3;
        this.zj = _0x32c08d / 0x190 * Math.PI;
        this.Aj = 1.5 * _0x4e37ba;
        this.Bj = 0.1 * _0x4e37ba * _0x200f01.jj;
        let _0x1b7054 = _0x588877[0x0];
        let _0x4be62c = _0x588877[0x1];
        let _0x48ff31;
        let _0x4505dd;
        let _0x46762d;
        let _0x233f3f;
        if (_0x9eb208(_0x1b7054, _0x4be62c)) {
          _0x48ff31 = _0x588877[0x2];
          _0x4505dd = _0x588877[0x3];
          _0x46762d = _0x588877[0x4];
          _0x233f3f = _0x588877[0x5];
          const _0x18fdb2 = Math.atan2(_0x233f3f + 0x2 * _0x4be62c - 0x3 * _0x4505dd, _0x46762d + 0x2 * _0x1b7054 - 0x3 * _0x48ff31);
          const _0x3f404d = _0x3a6898.angleBetween;
          this.vj.mh(_0x1b7054, _0x4be62c, _0x4e37ba, _0x18fdb2);
          this.xj[0x0].mh(_0x1b7054, _0x4be62c, _0x4e37ba, this.Oj(0x0), _0x18fdb2);
          this.xj[0x1].mh(_0x7fe931 * _0x1b7054 + _0x3c7a60 * _0x48ff31 + _0x2ba2b3 * _0x46762d, _0x7fe931 * _0x4be62c + _0x3c7a60 * _0x4505dd + _0x2ba2b3 * _0x233f3f, _0x4e37ba, this.Oj(0x1), _0x3f404d(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x1b7054 + 0.75 * _0x48ff31 + _0x32109c * _0x46762d, 0.375 * _0x4be62c + 0.75 * _0x4505dd + _0x32109c * _0x233f3f, _0x4e37ba, this.Oj(0x2), _0x3f404d(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x3919a1 * _0x1b7054 + _0x3ba81c * _0x48ff31 + _0x22609a * _0x46762d, _0x3919a1 * _0x4be62c + _0x3ba81c * _0x4505dd + _0x22609a * _0x233f3f, _0x4e37ba, this.Oj(0x3), _0x3f404d(this.xj[0x2], this.xj[0x4]));
        } else {
          for (let _0x491c76 = 0x0; _0x491c76 < 0x4; _0x491c76++) {
            this.xj[_0x491c76].lh();
          }
          this.vj.lh();
        }
        let _0x16e56d = 0x4;
        const _0x38a4cf = 0x2 * _0x911c75 - 0x4;
        for (let _0x7360f2 = 0x2; _0x7360f2 < _0x38a4cf; _0x7360f2 += 0x2) {
          _0x1b7054 = _0x588877[_0x7360f2];
          _0x4be62c = _0x588877[_0x7360f2 + 0x1];
          const _0x49b132 = _0x9eb208(_0x1b7054, _0x4be62c);
          if (_0x49b132) {
            const _0x32389d = _0x588877[_0x7360f2 - 0x2];
            const _0x478a12 = _0x588877[_0x7360f2 - 0x1];
            _0x48ff31 = _0x588877[_0x7360f2 + 0x2];
            _0x4505dd = _0x588877[_0x7360f2 + 0x3];
            _0x46762d = _0x588877[_0x7360f2 + 0x4];
            _0x233f3f = _0x588877[_0x7360f2 + 0x5];
            this.xj[_0x16e56d].mh(_0x1b7054, _0x4be62c, _0x4e37ba, this.Oj(_0x16e56d), _0x3a6898.angleBetween(this.xj[_0x16e56d - 0x1], this.xj[_0x16e56d + 0x1]));
            _0x16e56d++;
            this.xj[_0x16e56d].mh(_0xc4ea42 * _0x32389d + 0.84375 * _0x1b7054 + 0.2578125 * _0x48ff31 + _0x23043c * _0x46762d, _0xc4ea42 * _0x478a12 + 0.84375 * _0x4be62c + 0.2578125 * _0x4505dd + _0x23043c * _0x233f3f, _0x4e37ba, this.Oj(_0x16e56d), _0x3a6898.angleBetween(this.xj[_0x16e56d - 0x1], this.xj[_0x16e56d + 0x1]));
            _0x16e56d++;
            this.xj[_0x16e56d].mh(_0x2f13ff * _0x32389d + 0.5625 * _0x1b7054 + 0.5625 * _0x48ff31 + _0x2f13ff * _0x46762d, _0x2f13ff * _0x478a12 + 0.5625 * _0x4be62c + 0.5625 * _0x4505dd + _0x2f13ff * _0x233f3f, _0x4e37ba, this.Oj(_0x16e56d), _0x3a6898.angleBetween(this.xj[_0x16e56d - 0x1], this.xj[_0x16e56d + 0x1]));
            _0x16e56d++;
            this.xj[_0x16e56d].mh(_0x23043c * _0x32389d + 0.2578125 * _0x1b7054 + 0.84375 * _0x48ff31 + _0xc4ea42 * _0x46762d, _0x23043c * _0x478a12 + 0.2578125 * _0x4be62c + 0.84375 * _0x4505dd + _0xc4ea42 * _0x233f3f, _0x4e37ba, this.Oj(_0x16e56d), _0x3a6898.angleBetween(this.xj[_0x16e56d - 0x1], this.xj[_0x16e56d + 0x1]));
            _0x16e56d++;
          } else {
            for (let _0x35ad82 = 0x0; _0x35ad82 < 0x4; _0x35ad82++) {
              this.xj[_0x16e56d++].lh();
            }
          }
        }
        const _0x523774 = 0x2 * _0x911c75 - 0x4;
        _0x1b7054 = _0x588877[_0x523774];
        _0x4be62c = _0x588877[_0x523774 + 0x1];
        if (_0x9eb208(_0x1b7054, _0x4be62c)) {
          const _0x4d9903 = _0x588877[_0x523774 - 0x2];
          const _0x19215b = _0x588877[_0x523774 - 0x1];
          _0x48ff31 = _0x588877[_0x523774 + 0x2];
          _0x4505dd = _0x588877[_0x523774 + 0x3];
          const _0x243e9a = this.Oj.bind(this);
          const _0x4ca77e = _0x3a6898.angleBetween;
          this.xj[_0xd51659 - 0x5].mh(_0x1b7054, _0x4be62c, _0x4e37ba, _0x243e9a(_0xd51659 - 0x5), _0x4ca77e(this.xj[_0xd51659 - 0x6], this.xj[_0xd51659 - 0x4]));
          this.xj[_0xd51659 - 0x4].mh(_0x22609a * _0x4d9903 + _0x3ba81c * _0x1b7054 + _0x3919a1 * _0x48ff31, _0x22609a * _0x19215b + _0x3ba81c * _0x4be62c + _0x3919a1 * _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x4), _0x4ca77e(this.xj[_0xd51659 - 0x5], this.xj[_0xd51659 - 0x3]));
          this.xj[_0xd51659 - 0x3].mh(_0x32109c * _0x4d9903 + 0.75 * _0x1b7054 + 0.375 * _0x48ff31, _0x32109c * _0x19215b + 0.75 * _0x4be62c + 0.375 * _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x3), _0x4ca77e(this.xj[_0xd51659 - 0x4], this.xj[_0xd51659 - 0x2]));
          this.xj[_0xd51659 - 0x2].mh(_0x2ba2b3 * _0x4d9903 + _0x3c7a60 * _0x1b7054 + _0x7fe931 * _0x48ff31, _0x2ba2b3 * _0x19215b + _0x3c7a60 * _0x4be62c + _0x7fe931 * _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x2), _0x4ca77e(this.xj[_0xd51659 - 0x3], this.xj[_0xd51659 - 0x1]));
          this.xj[_0xd51659 - 0x1].mh(_0x48ff31, _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x1), _0x4ca77e(this.xj[_0xd51659 - 0x2], this.xj[_0xd51659 - 0x1]));
        } else {
          for (let _0x506cf8 = _0xd51659 - 0x5; _0x506cf8 <= _0xd51659 - 0x1; _0x506cf8++) {
            this.xj[_0x506cf8].lh();
          }
        }
        if (this.wj === 0x0 && _0xd51659 > 0x0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0x0 && _0xd51659 === 0x0) {
          _0x31c7b2(this.vj);
        }
        while (this.wj < _0xd51659) {
          const _0xc26c2e = this.xj[this.wj];
          this.Rf.addChild(_0xc26c2e.Nf.Mf());
          this.Rf.addChild(_0xc26c2e.Pf.Mf());
          this.wj++;
        }
        while (this.wj > _0xd51659) {
          this.wj--;
          const _0x2e9d4c = this.xj[this.wj];
          _0x2e9d4c.Pf.ih();
          _0x2e9d4c.Nf.ih();
        }
        const _0xa5434b = theoKzObjects.emoji && _0x200f01?.['Mb']?.['Mb'];
        if (_0xa5434b) {
          this.vj.ActiveEmoji(_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27);
        } else {
          this.vj.x_emoji();
        }
        const _0x5c6d51 = this.xj[0x0].gj();
        if (!_0x5c6d51) {
          this.vj.Ij();
          this.vj.Kj();
          this.vj.flexx();
          this.vj.xXx2();
          this.vj.xXx5();
          this.vj.xXx10();
          this.vj.xXxLupaZ();
          return;
        }
        const _0x3c97cc = _0x200f01.Ff;
        const _0x254e9d = _0x3c97cc[_0x2d8dbf.MAGNETIC_TYPE];
        const _0x29da00 = _0x3c97cc[_0x2d8dbf.VELOCITY_TYPE];
        const _0x38bb7e = _0x3c97cc[_0x2d8dbf.FLEXIBLE_TYPE];
        if (_0x254e9d?.['sc']) {
          this.vj.Mj(_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27);
        } else {
          this.vj.Ij();
        }
        if (_0x29da00?.['sc']) {
          this.vj.Nj(_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27);
        } else {
          this.vj.Kj();
        }
        if (true && _0x38bb7e?.['sc']) {
          this.vj.Nflex(_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27);
        } else {
          this.vj.flexx();
        }
        this.vj.xXx2();
        this.vj.xXx5();
        this.vj.xXx10();
        this.vj.xXxLupaZ();
      };
      var _0x3a6898 = function () {
        function _0x465f46(_0x1ae32a, _0x500e08) {
          this.Nf = _0x1ae32a;
          this.Nf.Mg(false);
          this.Pf = _0x500e08;
          this.Pf.Mg(false);
        }
        _0x465f46.prototype.mh = function (_0x36944c, _0x320fe5, _0x1cae1a, _0x54b23d, _0x207657) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x36944c, _0x320fe5);
          this.Nf.oh(_0x1cae1a);
          this.Nf.fj(_0x207657);
          this.Pf.Mg(true);
          this.Pf.nh(_0x36944c, _0x320fe5);
          this.Pf.oh(_0x54b23d);
          this.Pf.fj(_0x207657);
        };
        _0x465f46.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x465f46.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x465f46.angleBetween = function (_0x7288a4, _0x24e736) {
          return Math.atan2(_0x7288a4.Nf.jh.position.y - _0x24e736.Nf.jh.position.y, _0x7288a4.Nf.jh.position.x - _0x24e736.Nf.jh.position.x);
        };
        return _0x465f46;
      }();
      return _0x2f8d6d;
    }();
    var _0x418bed = function () {
      function _0x1b613b(_0x56154f) {
        this.se = _0x56154f;
        this.te = _0x56154f.get()[0x0];
        this.ue = new _0x53055c.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x4437d9();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x1572b5 = this;
        (window.anApp = _0x1ff066).p.ca(function () {
          if ((window.anApp = _0x1ff066).p.W()) {
            _0x1572b5.Fb();
          }
        });
      }
      _0x1b613b.prototype.Fb = function () {
        var _0x323630 = window.anApp = _0x1ff066;
        this.Pj.hh(0x0, null, _0x323630.p.Dc().dd(this.rh), _0x323630.p.Dc().fd(this.sh), _0x323630.p.Dc().gd(this.th), _0x323630.p.Dc().hd(this.uh), _0x323630.p.Dc().jd(this.vh));
      };
      _0x1b613b.prototype.Le = function (_0x130448) {
        this.sc = _0x130448;
      };
      _0x1b613b.prototype.ak = function (_0x472a8a, _0x18c300, _0x3ce1a9) {
        this.rh = _0x472a8a;
        this.Sj = _0x18c300;
        this.Xj = _0x3ce1a9;
        this.Fb();
      };
      _0x1b613b.prototype.bk = function (_0x3b8a12, _0x3dbfd3, _0x5835da) {
        this.sh = _0x3b8a12;
        this.Tj = _0x3dbfd3;
        this.Yj = _0x5835da;
        this.Fb();
      };
      _0x1b613b.prototype.ck = function (_0x599422, _0x41e23b, _0xb3f502) {
        this.th = _0x599422;
        this.Uj = _0x41e23b;
        this.Zj = _0xb3f502;
        this.Fb();
      };
      _0x1b613b.prototype.dk = function (_0x5191ad, _0x51f015, _0x1eb243) {
        this.uh = _0x5191ad;
        this.Vj = _0x51f015;
        this.$j = _0x1eb243;
        this.Fb();
      };
      _0x1b613b.prototype.ek = function (_0x56d8ed, _0x539772, _0x1f48d9) {
        this.vh = _0x56d8ed;
        this.Wj = _0x539772;
        this._j = _0x1f48d9;
        this.Fb();
      };
      _0x1b613b.prototype.Ra = function () {
        var _0x47616a = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x47616a;
        this.te.width = _0x47616a * this.Qj;
        this.te.height = _0x47616a * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x3664e4 = 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 > this.Pj.xj.length ? this.Pj.xj.length : 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 < 0x1 ? 0x1 : Number.isFinite(0x2 * Math.floor(this.Qj / this.Ng) - 0x5) ? 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 : 0.5 * (0x1 + this.Pj.xj.length);
        if (this.Pj.wj != _0x3664e4) {
          for (var _0x44b5cb = _0x3664e4; _0x44b5cb < this.Pj.xj.length; _0x44b5cb++) {
            this.Pj.xj[_0x44b5cb].lh();
          }
          for (; this.Pj.wj < _0x3664e4;) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          for (; this.Pj.wj > _0x3664e4;) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x1b613b.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x1ff066).p.W) {
            var _0x59b1b1 = Date.now();
            var _0x10afb1 = _0x59b1b1 / 0xc8;
            var _0x29e266 = Math.sin(_0x10afb1);
            var _0x3e19e6 = this.Ng;
            var _0x538950 = 1.5 * this.Ng;
            var _0x303047 = this.Qj - 0.5 * (this.Qj - 0.5 * _0x3e19e6 * (this.Pj.wj - 0x1));
            var _0x567fa0 = 0.5 * this.Rj;
            var _0x527b1e = 0x0;
            var _0x194440 = 0x0;
            for (var _0x25d62d = -0x1; _0x25d62d < this.Pj.wj; _0x25d62d++) {
              var _0x33d05f = _0x25d62d;
              var _0x30485d = Math.cos(0x1 * _0x33d05f / 0xc * Math.PI - _0x10afb1) * (0x1 - Math.pow(0x10, -0x1 * _0x33d05f / 0xc));
              if (_0x25d62d >= 0x0) {
                var _0x1bd63f = _0x303047 + -0.5 * _0x3e19e6 * _0x33d05f;
                var _0x452a88 = _0x567fa0 + 0.5 * _0x3e19e6 * _0x30485d;
                var _0x4b78c7 = 0x2 * _0x3e19e6;
                var _0x216059 = 0x2 * _0x538950;
                var _0x48f532 = Math.atan2(_0x194440 - _0x30485d, _0x33d05f - _0x527b1e);
                if (0x0 == _0x25d62d) {
                  this.Pj.vj.mh(_0x1bd63f, _0x452a88, _0x4b78c7, _0x48f532);
                }
                this.Pj.xj[_0x25d62d].mh(_0x1bd63f, _0x452a88, _0x4b78c7, _0x216059, _0x48f532);
                var _0x105a35 = this.Sj ? this.Xj ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x25d62d].Nf.qh(_0x105a35);
                this.Pj.xj[_0x25d62d].Pf.qh(_0x105a35);
              }
              _0x527b1e = _0x33d05f;
              _0x194440 = _0x30485d;
            }
            for (var _0x1db263 = 0x0; _0x1db263 < this.Pj.vj.Cj.length; _0x1db263++) {
              var _0x878cbe = this.Tj ? this.Yj ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x1db263].qh(_0x878cbe);
            }
            for (var _0x55503b = 0x0; _0x55503b < this.Pj.vj.Dj.length; _0x55503b++) {
              var _0x29591c = this.Uj ? this.Zj ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x55503b].qh(_0x29591c);
            }
            for (var _0x25d4b1 = 0x0; _0x25d4b1 < this.Pj.vj.Ej.length; _0x25d4b1++) {
              var _0x50abd5 = this.Vj ? this.$j ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x25d4b1].qh(_0x50abd5);
            }
            for (var _0x46af13 = 0x0; _0x46af13 < this.Pj.vj.Fj.length; _0x46af13++) {
              var _0x50a391 = this.Wj ? this._j ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x46af13].qh(_0x50a391);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x1b613b;
    }();
    var _0x501845 = function () {
      function _0x2fa9d2(_0x187f9e) {
        this.rc = _0x187f9e;
      }
      _0x2fa9d2.fk = $("#game-view");
      _0x2fa9d2.gk = $("#results-view");
      _0x2fa9d2.hk = $("#main-menu-view");
      _0x2fa9d2.ik = $("#popup-view");
      _0x2fa9d2.jk = $("#toaster-view");
      _0x2fa9d2.kk = $("#loading-view");
      _0x2fa9d2.lk = $("#stretch-box");
      _0x2fa9d2.mk = $('#game-canvas');
      _0x2fa9d2.di = $('#background-canvas');
      _0x2fa9d2.nk = $("#social-buttons");
      _0x2fa9d2.ok = $("#markup-wrap");
      _0x2fa9d2.prototype.a = function () {};
      _0x2fa9d2.prototype.ii = function () {};
      _0x2fa9d2.prototype.ji = function () {};
      _0x2fa9d2.prototype.ei = function () {};
      _0x2fa9d2.prototype.Ra = function () {};
      _0x2fa9d2.prototype.Pa = function (_0xd2d84a, _0x296aa3) {};
      return _0x2fa9d2;
    }();
    var _0x4d8a7a = function () {
      function _0x578f1a(_0x29f0fd, _0x21ddcc, _0x16e2c7, _0x4d0069, _0x4986ec, _0x370bc2) {
        var _0x4f660f = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x29f0fd + "</span></div>";
        var _0x3b297e = $(_0x4f660f);
        _0x3b297e.click(function () {
          if ('undefined' != typeof FB && undefined !== FB.ui) {
            FB.ui({
              'method': "feed",
              'display': "popup",
              'link': _0x21ddcc,
              'name': _0x16e2c7,
              'caption': _0x4d0069,
              'description': _0x4986ec,
              'picture': _0x370bc2
            }, function () {});
          }
        });
        return _0x3b297e;
      }
      var _0x2ee987 = $('#final-caption');
      var _0x2d862b = $("#final-continue");
      var _0x3e9179 = $("#congrats-bg");
      var _0x55a5ac = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0xff7dd = $("#final-share-fb");
      var _0x1a8d0d = $('#final-message');
      var _0x501f62 = $('#final-score');
      var _0xe1d160 = $("#final-place");
      var _0x101adb = $('#final-board');
      var _0x424bd9 = _0x22ee20(_0x501845, function () {
        _0x501845.call(this, 0x0);
        var _0x1130dd = this;
        var _0x3794f4 = window.anApp = _0x1ff066;
        var _0x5f2664 = _0x501845.mk.get()[0x0];
        console.log('sSE=' + _0x25fccb.qk);
        _0x2ee987.text(window.I18N_MESSAGES["index.game.result.title"]);
        _0x2d862b.text(window.I18N_MESSAGES['index.game.result.continue']);
        _0x2d862b.click(function () {
          _0x3794f4.r.Cd();
          _0x3794f4.r.G(_0xdbe872.AudioState.F);
          _0x3794f4.s.I(_0x3794f4.s.F);
        });
        $('#game-canvas').attr("tabindex", 0x0).focus();
        $("#game-canvas").click();
        $('#game-canvas').keypress(function (_0x3cc02d) {
          console.log(_0x3cc02d);
          if (_0x3cc02d.target.type === "text") {
            return;
          }
          if (_0x3cc02d.key.toLowerCase() === 'z') {
            zw_updatezoom(0x1);
          }
          if (_0x3cc02d.key.toLowerCase() === 'r') {
            let _0x22ad4b = zw_lastserver;
            $(".overlay-2").css("position", "static");
            if (_0x22ad4b) {
              anApp.r.Hd();
              anApp.sa(_0x22ad4b);
            }
          }
          if (_0x3cc02d.key.toLowerCase() === 'x') {
            const _0x1020b8 = new Uint8Array([NaN, NaN]);
            anApp.o.Wb(_0x1020b8);
            setTimeout(() => {
              let _0x1d98be = zw_lastserver;
              $(".overlay-2").css("position", "static");
              if (_0x1d98be) {
                anApp.r.Hd();
                anApp.sa(_0x1d98be);
              }
            }, 0x3e8);
          }
          if (_0x3cc02d.key.toLowerCase() === 'l') {
            $(".option.toggle[data-option='laserHS'] .box").click();
          }
          if (_0x3cc02d.key.toLowerCase() === 'q') {
            $(".option.toggle[data-option='sectores'] .box").click();
            setSectorsGame();
          }
          if (_0x3cc02d.key.toLowerCase() === 'c') {
            $(".option.toggle[data-option='backgroundSolid'] .box").click();
            setSectorsGame();
          }
          if (_0x3cc02d.key.toLowerCase() === 'f') {
            theoKzObjects.noSkin = false;
          }
          if (_0x3cc02d.key.toLowerCase() === 'g') {
            theoKzObjects.noAuras = false;
          }
          if (_0x3cc02d.key.toLowerCase() === 's') {
            if (isRunning) {
              isRunning = false;
              initialInterval = 0x37;
              cycleCounter = 0x1;
              isIncrementing = true;
              clearInterval(intervalID);
              intervalID = null;
              zw_girosubtracttexture.texture = ungirotexture;
              zw_girosubtracttexture.alpha = 0.25;
            } else {
              zw_girosubtracttexture.alpha = 0.75;
              startInterval();
              isRunning = true;
            }
          }
        });
        $("#game-canvas").keydown(function (_0x514485) {
          if (_0x514485.key === 'Enter') {
            _0x15f71d();
          }
          if (0x20 == _0x514485.keyCode) {
            _0x1130dd.rk = true;
          }
          if (0x31 == _0x514485.keyCode) {
            theoKzObjects.emoji = true;
            setTimeout(() => {
              theoKzObjects.emoji = false;
            }, 0x7d0);
          }
          if (0x36 == _0x514485.keyCode) {}
        }).keyup(function (_0xaf6ede) {
          if (0x20 == _0xaf6ede.keyCode) {
            _0x1130dd.rk = false;
          }
        });
        var _0x15f71d = function () {
          $("#chatInput").css("display", "block").focus();
        };
        _0x5f2664.addEventListener('touchstart', function (_0x2258f4) {
          if (_0x2258f4 = _0x2258f4 || window.event) {
            _0x1130dd.rk = _0x2258f4.touches.length >= 0x2;
          }
          _0x2258f4.preventDefault();
        }, true);
        _0x5f2664.addEventListener('touchend', function (_0xfb7e0b) {
          if (_0xfb7e0b = _0xfb7e0b || window.event) {
            _0x1130dd.rk = _0xfb7e0b.touches.length >= 0x2;
          }
        }, true);
        _0x5f2664.addEventListener("mousemove", function (_0x1d4044) {
          _0x1d4044 = _0x1d4044 || window.event && typeof _0x1d4044.clientX !== 'undefined';
          if (_0x1d4044 && !isRunning) {
            var _0x514b7f = _0x1d4044.clientX;
            var _0x46640a = _0x1d4044.clientY;
            window.mouseX = _0x514b7f;
            window.mouseY = _0x46640a;
            _0x1130dd.sk = Math.atan2(_0x46640a - 0.5 * _0x5f2664.offsetHeight, _0x514b7f - 0.5 * _0x5f2664.offsetWidth);
          }
        }, true);
        _0x5f2664.addEventListener("mousedown", function (_0x2a9b0a) {
          _0x1130dd.rk = true;
        }, true);
        _0x5f2664.addEventListener("mouseup", function (_0x4810da) {
          _0x1130dd.rk = false;
        }, true);
        if (zw_mobilecheck()) {
          var _0x5ba4d7;
          var _0x3409b4 = -0x1;
          _0x5f2664.addEventListener('touchmove', function (_0x3ae15e) {
            if (_0x3ae15e = _0x3ae15e || window.event) {
              _0x3ae15e = _0x3ae15e.touches[0x0];
              var _0x421116 = 0.5 * _0x5f2664.offsetWidth;
              var _0x46e5b3 = 0.5 * _0x5f2664.offsetHeight;
              if (zw_mobilearrowtexture.visible) {
                _0x421116 = zw_mobilearrowtexture.x + 0x6e;
                _0x46e5b3 = zw_mobilearrowtexture.y + 0x6e;
              }
              if (zw_joystick === -0x1) {
                _0x1130dd.sk = Math.atan2(_0x3ae15e.pageY - _0x46e5b3, _0x3ae15e.pageX - _0x421116);
              }
              if (zw_mobileprediction != -0x1) {
                var _0x5aca69 = Math.sqrt((_0x421116 - _0x3ae15e.pageX) * (_0x421116 - _0x3ae15e.pageX) + (_0x46e5b3 - _0x3ae15e.pageY) * (_0x46e5b3 - _0x3ae15e.pageY));
                zw_mobilepredictiontextures[zw_mobileprediction].x = 0.5 * _0x5f2664.offsetWidth + (_0x5aca69 < 0x6e ? _0x5aca69 : 0x6e) * Math.cos(_0x1130dd.sk) - 0x44;
                zw_mobilepredictiontextures[zw_mobileprediction].y = 0.5 * _0x5f2664.offsetHeight + (_0x5aca69 < 0x6e ? _0x5aca69 : 0x6e) * Math.sin(_0x1130dd.sk) - 0x44;
                zw_mobilepredictiontextures[zw_mobileprediction].alpha = 0x1;
              }
            }
          }, true);
          _0x5f2664.addEventListener('touchend', function (_0x4432b2) {
            if (zw_mobileprediction != -0x1) {
              zw_mobilepredictiontextures[zw_mobileprediction].alpha = 0.25;
            }
            if (_0x4432b2 && _0x3409b4 === -0x1) {
              _0x1130dd.rk = _0x4432b2.touches.length >= 0x2;
            }
          }, true);
          _0x5f2664.addEventListener("pointerdown", function (_0x27c912) {
            let _0xc63c6 = zw_zoomplustexture.getGlobalPosition();
            let _0x5e5235 = zw_zoomsubtracttexture.getGlobalPosition();
            let _0x10743d;
            let _0x52fd0d;
            if (zw_girosubtracttexture !== undefined && zw_explotWubtracttexture !== undefined) {
              _0x10743d = zw_girosubtracttexture.getGlobalPosition();
              _0x52fd0d = zw_explotWubtracttexture.getGlobalPosition();
            }
            let _0x2f14a8 = zw_mobilecontroltextures[zw_mobilecontrol].getGlobalPosition();
            let _0xd2714e = zw_mobilepeedtexture.getGlobalPosition();
            if (_0x52fd0d !== undefined && _0x10743d !== undefined) {
              if (_0x27c912.clientX > _0x52fd0d.x && _0x27c912.clientX <= _0x52fd0d.x + zw_explotWubtracttexture.width && _0x27c912.clientY > _0x52fd0d.y && _0x27c912.clientY <= _0x52fd0d.y + zw_explotWubtracttexture.height) {
                zw_explotWubtracttexture.emit('mouseup');
                return;
              }
              if (_0x27c912.clientX > _0x10743d.x && _0x27c912.clientX <= _0x10743d.x + zw_girosubtracttexture.width && _0x27c912.clientY > _0x10743d.y && _0x27c912.clientY <= _0x10743d.y + zw_girosubtracttexture.height) {
                zw_girosubtracttexture.emit("mouseup");
                return;
              }
            }
            if (_0x27c912.clientX > _0xc63c6.x && _0x27c912.clientX <= _0xc63c6.x + zw_zoomplustexture.width && _0x27c912.clientY > _0xc63c6.y && _0x27c912.clientY <= _0xc63c6.y + zw_zoomplustexture.height) {
              zw_zoomplustexture.emit('mouseup');
              return;
            }
            if (_0x27c912.clientX > _0x5e5235.x && _0x27c912.clientX <= _0x5e5235.x + zw_zoomsubtracttexture.width && _0x27c912.clientY > _0x5e5235.y && _0x27c912.clientY <= _0x5e5235.y + zw_zoomsubtracttexture.height) {
              zw_zoomsubtracttexture.emit('mouseup');
              return;
            }
            if (_0x27c912.clientX > _0x2f14a8.x && _0x27c912.clientX <= _0x2f14a8.x + zw_mobilecontroltextures[zw_mobilecontrol].width && _0x27c912.clientY > _0x2f14a8.y && _0x27c912.clientY <= _0x2f14a8.y + zw_mobilecontroltextures[zw_mobilecontrol].height) {
              zw_mobilecontroltextures[zw_mobilecontrol].emit("tap");
              return;
            }
            if (zw_mobilepeedtexture.visible && _0x27c912.clientX > _0xd2714e.x && _0x27c912.clientX <= _0xd2714e.x + zw_mobilepeedtexture.width && _0x27c912.clientY > _0xd2714e.y && _0x27c912.clientY <= _0xd2714e.y + zw_mobilepeedtexture.height) {
              _0x3409b4 = _0x27c912.pointerId;
              _0x1130dd.rk = true;
              zw_mobilepeedtexture.alpha = 0x1;
              return;
            }
            if (zw_joystick !== -0x1) {
              if (!zw_joysticks[zw_joystick].visible) {
                _0x5ba4d7 = _0x27c912.pointerId;
                zw_joysticks[zw_joystick].x = _0x27c912.clientX;
                zw_joysticks[zw_joystick].y = _0x27c912.clientY;
                zw_joysticks[zw_joystick].visible = true;
                zw_joysticks[zw_joystick].onDragStart(_0x27c912);
              }
            }
          }, true);
          _0x5f2664.addEventListener("pointerup", function (_0x5a4ca7) {
            if (_0x5a4ca7.pointerId == _0x3409b4) {
              _0x1130dd.rk = false;
              _0x3409b4 = -0x1;
              zw_mobilepeedtexture.alpha = 0.5;
            }
            if (_0x5a4ca7.pointerId == _0x5ba4d7) {
              if (zw_joystick !== -0x1) {
                zw_joysticks[zw_joystick].visible = false;
                zw_joysticks[zw_joystick].onDragEnd(_0x5a4ca7);
              }
            }
          }, true);
          _0x5f2664.addEventListener("pointermove", function (_0x5aaa1c) {
            if (_0x5aaa1c.pointerId == _0x5ba4d7) {
              if (zw_joystick !== -0x1) {
                zw_joysticks[zw_joystick].onDragMove(_0x5aaa1c);
              }
            }
          }, true);
        }
        this.wb = new _0x2daed0(_0x501845.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x1130dd;
      });
      _0x424bd9.prototype.a = function () {};
      _0x424bd9.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0x501845.fk.stop();
          _0x501845.fk.fadeIn(0x1f4);
          _0x501845.gk.stop();
          _0x501845.gk.fadeOut(0x1);
          _0x501845.hk.stop();
          _0x501845.hk.fadeOut(0x32);
          _0x501845.ik.stop();
          _0x501845.ik.fadeOut(0x32);
          _0x501845.jk.stop();
          _0x501845.jk.fadeOut(0x32);
          _0x501845.kk.stop();
          _0x501845.kk.fadeOut(0x32);
          _0x501845.lk.stop();
          _0x501845.lk.fadeOut(0x1);
          _0x501845.di.stop();
          _0x501845.di.fadeOut(0x32);
          _0x3606ae.Le(false);
          _0x501845.nk.stop();
          _0x501845.nk.fadeOut(0x32);
          _0x501845.ok.stop();
          _0x501845.ok.fadeOut(0x32);
        } else {
          _0x501845.fk.stop();
          _0x501845.fk.fadeIn(0x1f4);
          _0x501845.gk.stop();
          _0x501845.gk.fadeIn(0x1f4);
          _0x501845.hk.stop();
          _0x501845.hk.fadeOut(0x32);
          _0x501845.ik.stop();
          _0x501845.ik.fadeOut(0x32);
          _0x501845.jk.stop();
          _0x501845.jk.fadeOut(0x32);
          _0x501845.kk.stop();
          _0x501845.kk.fadeOut(0x32);
          _0x501845.lk.stop();
          _0x501845.lk.fadeOut(0x1);
          _0x501845.di.stop();
          _0x501845.di.fadeOut(0x32);
          _0x3606ae.Le(false);
          _0x501845.nk.stop();
          _0x501845.nk.fadeOut(0x32);
          _0x501845.ok.stop();
          _0x501845.ok.fadeOut(0x32);
        }
      };
      _0x424bd9.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x424bd9.prototype.Fa = function () {
        console.log('re');
        _0x3e9179.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x3e9179.fadeIn(0x64);
        }, 0x64);
        _0x55a5ac.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0x55a5ac.fadeIn(0x64);
        }, 0x64);
        this.cb = 0x1;
        return this;
      };
      _0x424bd9.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x1ff066).r.Gd();
        }
      };
      _0x424bd9.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x424bd9.prototype.Pa = function (_0x10c77b, _0x96f091) {
        this.wb.Pa(_0x10c77b, _0x96f091);
      };
      _0x424bd9.prototype.Da = function (_0xdb4c00, _0x29f576, _0x41bdc7) {
        var _0x5c32c7 = undefined;
        var _0x1c7dbd = undefined;
        var _0x29baed = undefined;
        if (_0x29f576 >= 0x1 && _0x29f576 <= 0xa) {
          _0x5c32c7 = window.I18N_MESSAGES['index.game.result.place.i' + _0x29f576];
          _0x1c7dbd = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x29baed = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x41bdc7).replace("{1}", _0xdb4c00).replace("{2}", _0x5c32c7);
        } else {
          _0x5c32c7 = '';
          _0x1c7dbd = window.I18N_MESSAGES['index.game.result.tryHit'];
          _0x29baed = window.I18N_MESSAGES['index.game.social.shareResult.messNorm'].replace('{0}', _0x41bdc7).replace("{1}", _0xdb4c00);
        }
        _0x1a8d0d.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x501f62.html(_0xdb4c00);
        _0xe1d160.html(_0x5c32c7);
        _0x101adb.html(_0x1c7dbd);
        if (_0x25fccb.qk) {
          var _0x283711 = window.I18N_MESSAGES['index.game.result.share'];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0xff7dd.empty().append(_0x578f1a(_0x283711, "https://wormate.io", "wormate.io", _0x29baed, _0x29baed, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x424bd9.prototype.T = function () {
        return this.sk;
      };
      _0x424bd9.prototype.U = function () {
        return this.rk;
      };
      return _0x424bd9;
    }();
    var _0x147449 = function () {
      var _0x212361 = $("#loading-worm-a");
      var _0x53a144 = $("#loading-worm-b");
      var _0xa5e5c7 = $('#loading-worm-c');
      var _0x1ccbcb = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x1a3189 = _0x22ee20(_0x501845, function () {
        _0x501845.call(this, 0x0);
      });
      _0x1a3189.prototype.a = function () {};
      _0x1a3189.prototype.ii = function () {
        _0x501845.fk.stop();
        _0x501845.fk.fadeOut(0x32);
        _0x501845.gk.stop();
        _0x501845.gk.fadeOut(0x32);
        _0x501845.hk.stop();
        _0x501845.hk.fadeOut(0x32);
        _0x501845.ik.stop();
        _0x501845.ik.fadeOut(0x32);
        _0x501845.jk.stop();
        _0x501845.jk.fadeOut(0x32);
        _0x501845.kk.stop();
        _0x501845.kk.fadeIn(0x1f4);
        _0x501845.lk.stop();
        _0x501845.lk.fadeIn(0x1);
        _0x501845.di.stop();
        _0x501845.di.fadeIn(0x1f4);
        _0x3606ae.Le(true);
        _0x501845.nk.stop();
        _0x501845.nk.fadeOut(0x32);
        _0x501845.ok.stop();
        _0x501845.ok.fadeOut(0x32);
      };
      _0x1a3189.prototype.ji = function () {
        this.tk();
      };
      _0x1a3189.prototype.tk = function () {
        _0x212361.css("background-position", "100% 200%");
        for (var _0x2b9a47 = 0x0; _0x2b9a47 < _0x1ccbcb.length; _0x2b9a47++) {
          var _0x2fb1fd = Math.floor(Math.random() * _0x1ccbcb.length);
          var _0x184af8 = _0x1ccbcb[_0x2b9a47];
          _0x1ccbcb[_0x2b9a47] = _0x1ccbcb[_0x2fb1fd];
          _0x1ccbcb[_0x2fb1fd] = _0x184af8;
        }
        _0x212361.css("background-position", _0x1ccbcb[0x0]);
        _0x53a144.css("background-position", _0x1ccbcb[0x1]);
        _0xa5e5c7.css("background-position", _0x1ccbcb[0x2]);
      };
      return _0x1a3189;
    }();
    var _0x40ae79 = function () {
      $("#mm-event-text");
      var _0x43c227 = $("#mm-skin-canv");
      var _0x1eaa63 = $('#mm-skin-prev');
      var _0x2766fa = $("#mm-skin-next");
      var _0x2bbd25 = $("#mm-skin-over");
      var _0x3d70f1 = $("#mm-skin-over-button-list");
      var _0x49ae3d = $("#mm-params-nickname");
      var _0x2fec6b = $("#mm-params-game-mode");
      var _0x3c700c = $("#mm-action-buttons");
      var _0x3570ac = $("#mm-action-play");
      var _0xbc6cfd = $('#mm-action-guest');
      var _0x2924a1 = $("#mm-action-login");
      var _0x382689 = $("#mm-player-info");
      var _0x551f2e = $('#mm-store');
      var _0x4d358d = $("#mm-leaders");
      var _0xbb92a0 = $("#mm-settings");
      var _0x7854e8 = $("#mm-coins-box");
      var _0x207536 = $("#mm-player-avatar");
      var _0x3c3ee5 = $("#mm-player-username");
      var _0x1129c0 = $('#mm-coins-val');
      var _0x308830 = $("#mm-player-exp-bar");
      var _0x15ce5a = $("#mm-player-exp-val");
      var _0x14e5ce = $("#mm-player-level");
      var _0x3b58a2 = _0x22ee20(_0x501845, function () {
        _0x501845.call(this, 0x1);
        var _0x353f8a = window.anApp = _0x1ff066;
        this.uk = new _0x418bed(_0x43c227);
        _0x2fec6b.click(function () {
          _0x353f8a.r.Cd();
        });
        _0x43c227.click(function () {
          if (_0x353f8a.u.P()) {
            _0x353f8a.r.Cd();
            _0x353f8a.s.I(_0x353f8a.s.$h);
          }
        });
        _0x1eaa63.click(function () {
          _0x353f8a.r.Cd();
          _0x353f8a.t.Ah();
        });
        _0x2766fa.click(function () {
          _0x353f8a.r.Cd();
          _0x353f8a.t.zh();
        });
        _0x49ae3d.keypress(function (_0x4dcd69) {
          if (0xd == _0x4dcd69.keyCode) {
            _0x353f8a.na();
          }
        });
        _0x3570ac.click(function () {
          _0x353f8a.r.Cd();
          _0x353f8a.na();
        });
        _0xbc6cfd.click(function () {
          _0x353f8a.r.Cd();
          _0x353f8a.na();
        });
        _0x2924a1.click(function () {
          _0x353f8a.r.Cd();
          _0x353f8a.s.I(_0x353f8a.s.Zh);
        });
        _0xbb92a0.click(function () {
          _0x353f8a.r.Cd();
          _0x353f8a.s.I(_0x353f8a.s.xa);
        });
        _0x382689.click(function () {
          if (_0x353f8a.u.P()) {
            _0x353f8a.r.Cd();
            _0x353f8a.s.I(_0x353f8a.s.Yh);
          }
        });
        _0x4d358d.click(function () {
          if (_0x353f8a.u.P()) {
            _0x353f8a.r.Cd();
            _0x353f8a.s.I(_0x353f8a.s.Xh);
          }
        });
        _0x551f2e.click(function () {
          if (_0x353f8a.u.P()) {
            _0x353f8a.r.Cd();
            _0x353f8a.s.I(_0x353f8a.s._h);
          }
        });
        _0x7854e8.click(function () {
          if (_0x353f8a.u.P()) {
            _0x353f8a.r.Cd();
            _0x353f8a.s.I(_0x353f8a.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let _0x41da49 = zw_lastserver;
          if (_0x41da49) {
            anApp.r.Hd();
            anApp.sa(_0x41da49);
          }
        });
        _0x551f2e.after("<div id=\"mm-zw-settings\" style=\"\">Settings</div>");
        let _0x24950a = $("#mm-advice-cont");
        _0x24950a.html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">FULL SCREEN</button><button value=\"Replay\" id=\"zwplayagain\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">REPLAY</button></div>");
        $("#zwplayagain").click(function () {
          let _0x39bc65 = zw_lastserver;
          if (_0x39bc65) {
            anApp.r.Hd();
            anApp.sa(_0x39bc65);
          }
        });
        $("#fullscreen").click(function () {
          if (zw_mobilefullscreenstatus) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else {
              if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else {
                if (document.msExitFullscreen) {
                  document.msExitFullscreen();
                } else if (document.body.webkitExitFullscreen) {
                  document.body.webkitExitFullscreen();
                }
              }
            }
            zw_mobilefullscreenstatus = false;
          } else {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else {
              if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              } else {
                if (document.documentElement.msRequestFullscreen) {
                  document.documentElement.msRequestFullscreen();
                } else if (document.body.webkitRequestFullscreen) {
                  document.body.webkitRequestFullscreen();
                }
              }
            }
            zw_mobilefullscreenstatus = true;
          }
        });
        $("#mm-zw-settings").click(function () {
          if (_0x353f8a.u.P()) {
            _0x353f8a.r.Cd();
            _0x353f8a.s.I(_0x353f8a.s.zwset);
          }
        });
        var _0xf6f9cc = _0x4961dc(_0x166161.va);
        if ("ARENA" != _0xf6f9cc && "TEAM2" != _0xf6f9cc) {
          _0xf6f9cc = "ARENA";
        }
        _0x2fec6b.val(_0xf6f9cc);
        console.log("Load GM: " + _0xf6f9cc);
      });
      _0x3b58a2.prototype.a = function () {
        var _0x1db277 = window.anApp = _0x1ff066;
        var _0x18ae4e = this;
        _0x1db277.u.V(function () {
          _0x1db277.s.F.xk();
        });
        _0x1db277.u.Pi(function () {
          if (_0x1db277.u.P()) {
            _0x1db277.t.Bh(_0x1db277.u.Di(), _0x4e8d86.ia);
            _0x1db277.t.Bh(_0x1db277.u.Ei(), _0x4e8d86.ja);
            _0x1db277.t.Bh(_0x1db277.u.Fi(), _0x4e8d86.ka);
            _0x1db277.t.Bh(_0x1db277.u.Gi(), _0x4e8d86.la);
            _0x1db277.t.Bh(_0x1db277.u.Hi(), _0x4e8d86.ma);
          } else {
            _0x1db277.t.Bh(_0x1db277.Ga(), _0x4e8d86.ia);
            _0x1db277.t.Bh(0x0, _0x4e8d86.ja);
            _0x1db277.t.Bh(0x0, _0x4e8d86.ka);
            _0x1db277.t.Bh(0x0, _0x4e8d86.la);
            _0x1db277.t.Bh(0x0, _0x4e8d86.ma);
          }
        });
        _0x1db277.u.Pi(function () {
          _0x3570ac.toggle(_0x1db277.u.P());
          _0x2924a1.toggle(!_0x1db277.u.P());
          _0xbc6cfd.toggle(!_0x1db277.u.P());
          _0x4d358d.toggle(_0x1db277.u.P());
          _0x551f2e.toggle(_0x1db277.u.P());
          _0x7854e8.toggle(_0x1db277.u.P());
          if (_0x1db277.u.P()) {
            _0x2bbd25.hide();
            _0x3c3ee5.html(_0x1db277.u.wi());
            _0x207536.attr('src', _0x1db277.u.xi());
            _0x1129c0.html(_0x1db277.u.zi());
            _0x308830.width(0x64 * _0x1db277.u.Bi() / _0x1db277.u.Ci() + '%');
            _0x15ce5a.html(_0x1db277.u.Bi() + " / " + _0x1db277.u.Ci());
            _0x14e5ce.html(_0x1db277.u.Ai());
            _0x49ae3d.val(_0x1db277.u.ga());
          } else {
            _0x2bbd25.toggle(_0x25fccb.qk && !_0x1db277.Ha());
            _0x3c3ee5.html(_0x3c3ee5.data("guest"));
            _0x207536.attr("src", "/images/guest-avatar-xmas2022.png");
            _0x1129c0.html('10');
            _0x308830.width('0');
            _0x15ce5a.html('');
            _0x14e5ce.html(0x1);
            _0x49ae3d.val(_0x4961dc(_0x166161.Aa));
          }
        });
        _0x1db277.t.xh(function () {
          _0x18ae4e.uk.ak(_0x1db277.t.ha(_0x4e8d86.ia), false, false);
          _0x18ae4e.uk.bk(_0x1db277.t.ha(_0x4e8d86.ja), false, false);
          _0x18ae4e.uk.ck(_0x1db277.t.ha(_0x4e8d86.ka), false, false);
          _0x18ae4e.uk.dk(_0x1db277.t.ha(_0x4e8d86.la), false, false);
          _0x18ae4e.uk.ek(_0x1db277.t.ha(_0x4e8d86.ma), false, false);
        });
      };
      _0x3b58a2.prototype.ii = function () {
        _0x501845.fk.stop();
        _0x501845.fk.fadeOut(0x32);
        _0x501845.gk.stop();
        _0x501845.gk.fadeOut(0x32);
        _0x501845.hk.stop();
        _0x501845.hk.fadeIn(0x1f4);
        _0x501845.ik.stop();
        _0x501845.ik.fadeOut(0x32);
        _0x501845.jk.stop();
        _0x501845.jk.fadeOut(0x32);
        _0x501845.kk.stop();
        _0x501845.kk.fadeOut(0x32);
        _0x501845.lk.stop();
        _0x501845.lk.fadeIn(0x1);
        _0x501845.di.stop();
        _0x501845.di.fadeIn(0x1f4);
        _0x3606ae.Le(true);
        _0x501845.nk.stop();
        _0x501845.nk.fadeIn(0x1f4);
        _0x501845.ok.stop();
        _0x501845.ok.fadeIn(0x1f4);
      };
      _0x3b58a2.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
        this.uk.Le(true);
      };
      _0x3b58a2.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x3b58a2.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x3b58a2.prototype.Pa = function (_0x5a8bab, _0x3f8474) {
        this.uk.Pa();
      };
      _0x3b58a2.prototype.ga = function () {
        return _0x49ae3d.val();
      };
      _0x3b58a2.prototype.D = function () {
        return _0x2fec6b.val();
      };
      _0x3b58a2.prototype.xk = function () {
        _0x3c700c.show();
      };
      _0x3b58a2.prototype.vk = function () {
        var _0x53722f = $('#mm-advice-cont').children();
        var _0x301491 = 0x0;
        setInterval(function () {
          _0x53722f.eq(_0x301491).fadeOut(0x1f4, function () {
            if (++_0x301491 >= _0x53722f.length) {
              _0x301491 = 0x0;
            }
            _0x53722f.eq(_0x301491).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x3b58a2.prototype.wk = function () {
        function _0x544f8d() {
          _0x4b7f88.Ka(true);
          setTimeout(function () {
            _0x2bbd25.hide();
          }, 0xbb8);
        }
        var _0x4b7f88 = window.anApp = _0x1ff066;
        if (_0x25fccb.qk && !_0x4b7f88.Ha()) {
          _0x2bbd25.show();
          var _0x3b4fe4 = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
          var _0x550ebe = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
          var _0x52c382 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          _0x3d70f1.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x550ebe + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x3b4fe4 + "</span></a>").click(_0x544f8d));
          _0x3d70f1.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x52c382 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x3b4fe4 + '</span></a>').click(_0x544f8d));
        }
      };
      return _0x3b58a2;
    }();
    var _0x4c4d1d = function () {
      var _0xfcfa10 = _0x22ee20(_0x501845, function () {
        _0x501845.call(this, 0x0);
      });
      _0xfcfa10.prototype.a = function () {};
      _0xfcfa10.prototype.ii = function () {
        _0x501845.fk.stop();
        _0x501845.fk.fadeOut(0x32);
        _0x501845.gk.stop();
        _0x501845.gk.fadeOut(0x32);
        _0x501845.hk.stop();
        _0x501845.hk.fadeOut(0x32);
        _0x501845.ik.stop();
        _0x501845.ik.fadeOut(0x32);
        _0x501845.jk.stop();
        _0x501845.jk.fadeOut(0x32);
        _0x501845.kk.stop();
        _0x501845.kk.fadeOut(0x32);
        _0x501845.lk.stop();
        _0x501845.lk.fadeOut(0x1);
        _0x501845.di.stop();
        _0x501845.di.fadeOut(0x32);
        _0x3606ae.Le(false);
        _0x501845.nk.stop();
        _0x501845.nk.fadeOut(0x32);
        _0x501845.ok.stop();
        _0x501845.ok.fadeOut(0x32);
      };
      return _0xfcfa10;
    }();
    var _0x480301 = function () {
      var _0x1576e2 = $('#toaster-stack');
      var _0x1a2f3b = _0x22ee20(_0x501845, function () {
        _0x501845.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x1a2f3b.prototype.a = function () {};
      _0x1a2f3b.prototype.ii = function () {
        _0x501845.fk.stop();
        _0x501845.fk.fadeOut(0x32);
        _0x501845.gk.stop();
        _0x501845.gk.fadeOut(0x32);
        _0x501845.hk.stop();
        _0x501845.hk.fadeOut(0x32);
        _0x501845.ik.stop();
        _0x501845.ik.fadeOut(0x32);
        _0x501845.jk.stop();
        _0x501845.jk.fadeIn(0x1f4);
        _0x501845.kk.stop();
        _0x501845.kk.fadeOut(0x32);
        _0x501845.lk.stop();
        _0x501845.lk.fadeIn(0x1);
        _0x501845.di.stop();
        _0x501845.di.fadeIn(0x1f4);
        _0x3606ae.Le(true);
        _0x501845.nk.stop();
        _0x501845.nk.fadeOut(0x32);
        _0x501845.ok.stop();
        _0x501845.ok.fadeIn(0x1f4);
      };
      _0x1a2f3b.prototype.ji = function () {
        this.Ak();
      };
      _0x1a2f3b.prototype.mi = function () {
        return null != this.zk || this.yk.length > 0x0;
      };
      _0x1a2f3b.prototype._ = function (_0x1f36a4) {
        this.yk.unshift(_0x1f36a4);
        setTimeout(function () {
          (window.anApp = _0x1ff066).s.ki();
        }, 0x0);
      };
      _0x1a2f3b.prototype.Ti = function (_0x3b9ae4) {
        this.yk.push(_0x3b9ae4);
        setTimeout(function () {
          (window.anApp = _0x1ff066).s.ki();
        }, 0x0);
      };
      _0x1a2f3b.prototype.Ak = function () {
        var _0x30c8f8 = this;
        if (null == this.zk) {
          if (0x0 == this.yk.length) {
            return void (window.anApp = _0x1ff066).s.gi();
          }
          var _0x2d8549 = this.yk.shift();
          this.zk = _0x2d8549;
          var _0x3eb0f2 = _0x2d8549.Bk();
          _0x3eb0f2.hide();
          _0x3eb0f2.fadeIn(0x12c);
          _0x1576e2.append(_0x3eb0f2);
          _0x2d8549.Ck = function () {
            _0x3eb0f2.fadeOut(0x12c);
            setTimeout(function () {
              _0x3eb0f2.remove();
            }, 0x12c);
            if (_0x30c8f8.zk == _0x2d8549) {
              _0x30c8f8.zk = null;
            }
            _0x30c8f8.Ak();
          };
          _0x2d8549.ji();
        }
      };
      return _0x1a2f3b;
    }();
    var _0x3987d2 = function () {
      var _0x4ab1f6 = $("#popup-menu-label");
      var _0x28cff0 = $('#popup-menu-coins-box');
      var _0x46fd08 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x39eaa0 = window.anApp = _0x1ff066;
        _0x39eaa0.r.Cd();
        _0x39eaa0.s.gi();
      });
      _0x28cff0.click(function () {
        var _0x1df67a = window.anApp = _0x1ff066;
        if (_0x1df67a.u.P()) {
          _0x1df67a.r.Cd();
          _0x1df67a.s.I(_0x1df67a.s.Wh);
        }
      });
      var _0x4386cf = _0x22ee20(_0x501845, function (_0x174597, _0x53da04) {
        _0x501845.call(this, 0x1);
        this.ad = _0x174597;
        this.Dk = _0x53da04;
      });
      var _0x4c45ea = "\n                        <div id=\"settings-menu\" style=\"display: flex; opacity: 0; z-index: 2;\">\n                            <div class=\"navigation\">\n                                <div class=\"tab material-button active\" category=\"profile\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">person</i>\n                                    <span>Profile</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"game\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">games</i>\n                                    <span>Game</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"theme\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">palette</i>\n                                    <span>Theme</span>\n                                </div>\n                                <div class=\"tab material-button\" id=\"button-inputs\" data-toggle=\"modal\" data-target=\"#hotkeysModal\" category=\"controls\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">keyboard</i>\n                                    <span>Controls</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"cursor\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">mouse</i>\n                                    <span>Cursor</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"sound\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">volume_up</i>\n                                    <span>Sound</span>\n                                </div>\n                                 <!-- 🏆 Nueva pestaña: Equipos -->\n                                <div class=\"tab material-button\" category=\"teams\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">group</i>\n                                    <span>Teams</span>\n                                </div>\n                                <!-- 🎨 Nueva pestaña: Skins -->\n                                <div class=\"tab material-button\" category=\"skins\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">brush</i>\n                                    <span>Skins</span>\n                                </div>\n                                 <!-- 🎨 Nueva pestaña: Stremers  -->\n                                <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">live_tv</i>\n                                    <span>Live</span>\n                                </div>\n                            </div>\n\n                            <div class=\"options-list ps\">\n                                <div category=\"game\" class=\"\">\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT BACKGROUND</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">❮</button>\n                                                <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                                                <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">❯</button>\n                                            </div>\n                                    </div>\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT FONT IN GAME</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">❮</button>\n                                                <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                                                <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">❯</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"theme\" class=\"\">\n\n                                </div>\n                                <div category=\"controls\" class=\"\">\n                                    <div class=\"hotkey-container\"></div>\n                                </div>\n                                <div category=\"profile\" class=\"active\">\n                                    <div class=\"profile-card\">\n                                        <!-- Imagen de perfil -->\n                                        <div class=\"profile-picture\">\n                                            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n                                        </div>\n                                        \n                                        <!-- Datos del usuario -->\n                                        <div class=\"profile-info\">\n                                            <h2>User Profile</h2>\n                                            <!--p><strong>Nombre:</strong> <span id=\"username\">Usuario</span></p>\n                                            <p><strong>Email:</strong> <span id=\"useremail\">usuario@email.com</span></p-->\n                                            \n                                            <!-- Contenedor del ID con botón para copiar -->\n                                            <div class=\"profile-id-container\">\n                                                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                                                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n                                            </div>\n                                            <button id=\"resetScript\" class=\"reset-button\">Change Version</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"cursor\" class=\"\"></div>\n                                <div category=\"sound\" class=\"\">\n                                 <!-- Contenedor de enlaces con botones -->\n                                <div class=\"sound-inputs\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto1 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto2 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto3 + ":</div>\n                                        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto4 + ":</div>\n                                        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                                    </div>\n                                     <!-- Botón para activar/desactivar el sonido de headshots -->\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">Headshot Sound:</div>\n                                        <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                                    </div>\n\n\n                                </div>\n                                </div>\n                                  <!-- 🏆 Nueva sección: Equipos -->\n                                <div category=\"teams\" class=\"\">\n                                    \n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">TEAM CODE:</div>\n                                        <input type=\"text\" id=\"teamCodeInput\"  class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n                                    </div>\n                                </div>\n                                <!-- 🎨 Nueva sección: Skins -->\n                                <div category=\"skins\" class=\"\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">Skin Original:</div>\n                                        <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\"  class=\"sounds-input\"  id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n                                    </div>\n                                </div>\n                                <div category=\"streamers\" class=\"\">\n                                    <div class=\"input-container\">\n                                      <div id=\"streamers-section\" style=\"display: none; padding: 10px;\">\n    <h2>Lista de Streamers</h2>\n    <div id=\"streamers-grid\">\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 1</span>\n                <span class=\"streamer-platform\">Twitch</span>\n            </div>\n        </div>\n        <div class=\"streamer\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 2</span>\n                <span class=\"streamer-platform\">YouTube</span>\n            </div>\n        </div>\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 3</span>\n                <span class=\"streamer-platform\">Facebook</span>\n            </div>\n        </div>\n    </div>\n</div>\n                                    </div>\n                                </div>\n                                <!-- Sección de Streamers -->\n                                </div>\n                            </div>\n\n\n                        </div>\n                    ";
      $("#settings-view").after(_0x4c45ea);
      $(".tab.material-button").on("click", function () {
        var _0xb8732 = $(this).attr("category");
        if ($(this).hasClass("active")) {
          return;
        }
        $(".tab.material-button, .options-list > div").removeClass("active");
        $(this).addClass('active');
        $("div[category='" + _0xb8732 + "']").addClass('active');
      });
      document.getElementById('resetScript').addEventListener('click', async function () {
        localStorage.clear();
        sessionStorage.clear();
        if (window.indexedDB) {
          const _0x41e601 = await indexedDB.databases();
          _0x41e601.forEach(_0x1aad24 => indexedDB.deleteDatabase(_0x1aad24.name));
        }
        if (window.openDatabase) {
          console.warn("Web SQL no se puede eliminar automáticamente desde JavaScript.");
        }
        document.cookie.split(';').forEach(function (_0x381083) {
          document.cookie = _0x381083.replace(/^ +/, '').replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        if ("caches" in window) {
          caches.keys().then(function (_0x40e682) {
            for (let _0x62ed94 of _0x40e682) caches['delete'](_0x62ed94);
          });
        }
        if ("serviceWorker" in navigator) {
          const _0x3d4033 = await navigator.serviceWorker.getRegistrations();
          for (let _0x2d25f3 of _0x3d4033) {
            await _0x2d25f3.unregister();
          }
        }
        localStorage.removeItem("scriptSeleccionado");
        location.reload();
      });
      soundEnabled = true;
      $('#toggle-sound').click(function () {
        soundEnabled = !soundEnabled;
        $(this).text(soundEnabled ? "Disable Sound" : "Enable Sound");
      });
      $("#idcopiar").click(function () {
        navigator.clipboard.writeText(zw_userId);
        alert("ID copiado: " + zw_userId);
      });
      window.changeBackground = function (_0x10ff0b) {
        let _0x2d88a9 = localStorage.getItem("selectedBackground");
        currentIndex = _0x2d88a9 !== null ? parseInt(_0x2d88a9) : 0x0;
        currentIndex = (currentIndex + _0x10ff0b + backgrounds.length) % backgrounds.length;
        updateBackground(currentIndex);
      };
      window.changeFont = function (_0x587ee4) {
        currentFontIndex = (currentFontIndex + _0x587ee4 + fonts.length) % fonts.length;
        updateFont();
      };
      updateFont();
      const _0x19fffc = [{
        'id': "ping",
        'label': "SHOW FPS",
        'category': "game",
        'tooltip': ''
      }, {
        'id': "fps",
        'label': "SHOW PING",
        'category': "game",
        'tooltip': ''
      }, {
        'id': "chngBotSkins",
        'label': "CHANGE BOT & PEOPLE TO BASIC SKINS",
        'category': 'game',
        'tooltip': ''
      }, {
        'id': "chngPersonsSkins",
        'label': "CHANGE SKINS TO Z WORM",
        'category': "game",
        'tooltip': ''
      }, {
        'id': "top8",
        'label': "SHOW TOP HS",
        'category': "game",
        'tooltip': "If you enable this option, you will see the list of the top 8 players."
      }, {
        'id': 'killFeed',
        'label': "SHOW KILL FEED",
        'category': 'game',
        'tooltip': "If you enable this option, you will see the list of kills in real time."
      }, {
        'id': "minimapTeamcod",
        'label': "SHOW TEAM LIST",
        'category': "teams",
        'tooltip': ''
      }];
      const _0x1f8489 = [{
        'name': "ZOOM SPEED",
        'id': "zoomSpeed",
        'min': 0.1,
        'max': 0xf,
        'step': 0.1,
        'category': "game",
        'tooltip': ''
      }];
      const _0xce4ace = {
        'game': document.querySelector(".options-list > div[category=\"game\"]"),
        'teams': document.querySelector(".options-list > div[category=\"teams\"]"),
        'theme': document.querySelector(".options-list > div[category=\"theme\"]"),
        'controls': document.querySelector(".options-list > div[category=\"controls\"]")
      };
      if (isPremiumUser) {
        _0x19fffc.push({
          'id': "Incognito",
          'label': 'INCOGNITO',
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "laserHS",
          'label': "LASER HS",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "backgroundSolid",
          'label': "BACKGROUND SOLID",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "sectores",
          'label': "SECTORS",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "speed_zigzag",
          'label': "VISIBLE SPEED AND ZIGZAG",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "timerSpZg",
          'label': "TIMER SPEED AND ZIGZAG",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': 'visiblePowersAll',
          'label': "VISIBLE ALL POWER UPS",
          'category': 'game',
          'tooltip': "Premium Feature"
        }, {
          'id': 'hideYouNameInMinimap',
          'label': "SHOW YOUR NAME FOR TEAM LIST",
          'category': "teams",
          'tooltip': "Premium Feature"
        });
        _0xce4ace.teams.insertAdjacentHTML("beforeend", "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;\">PUT YOUR NAME FOR TEAM LIST:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"ENTER YOUR NAME FOR FRIENDS\" />\n                            </div>\n                        ");
        _0x1f8489.push({
          'name': "BOOSTER SIZE",
          'id': "PotenciadorSize",
          'min': 0x1,
          'max': 0x6,
          'step': 0x1,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "AURA THE BOOSTER",
          'id': "PotenciadorAura",
          'min': 1.2,
          'max': 3.2,
          'step': 0.2,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "FOOD SHADOW",
          'id': "ComidaShadow",
          'min': 0.5,
          'max': 0x3,
          'step': 0.5,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "SIZE FOOD",
          'id': 'ComidaSize',
          'min': 0.5,
          'max': 0x3,
          'step': 0.5,
          'category': 'game',
          'tooltip': "Premium Feature"
        }, {
          'name': "MOUSE DELAY",
          'id': 'mouseDelay',
          'min': 0xa,
          'max': 0x14,
          'step': 0x1,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "SMOOTH CAMERA",
          'id': "smoothCamera",
          'min': 0.1,
          'max': 0.9,
          'step': 0.1,
          'category': "game",
          'tooltip': "Premium Feature"
        });
      }
      _0x1f8489.forEach(_0x491beb => {
        const _0x3f2086 = parseFloat(theoKzObjects[_0x491beb.id]);
        const _0x2ecbf1 = document.createElement("div");
        _0x2ecbf1.className = "option range";
        _0x2ecbf1.innerHTML = "\n        <div class=\"name\" style=\"" + (_0x491beb.tooltip.includes('Premium') ? "color: yellow;" : '') + "\">" + _0x491beb.name + "</div>\n        <div class=\"value\">" + _0x3f2086 + "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: " + (_0x3f2086 - _0x491beb.min) / (_0x491beb.max - _0x491beb.min) * 0x64 + "%;\"></div>\n            </div>\n            <input type=\"range\" id=\"" + _0x491beb.id + "\" min=\"" + _0x491beb.min + "\" max=\"" + _0x491beb.max + "\" step=\"" + _0x491beb.step + "\" value=\"" + _0x3f2086 + "\">\n        </div>\n    ";
        const _0x1c51a7 = _0x2ecbf1.querySelector("input");
        const _0x59a5fe = _0x2ecbf1.querySelector(".value");
        const _0x5007f1 = _0x2ecbf1.querySelector('.fill');
        _0x1c51a7.addEventListener("input", () => {
          _0x59a5fe.textContent = _0x1c51a7.value;
          _0x5007f1.style.width = (_0x1c51a7.value - _0x491beb.min) / (_0x491beb.max - _0x491beb.min) * 0x64 + '%';
          theoKzObjects[_0x491beb.id] = _0x1c51a7.value;
          localStorage.setItem(_0x491beb.id, _0x1c51a7.value);
          if (_0x491beb.id === "mouseDelay") {
            anApp.o.updatePacketInterval(parseInt(_0x1c51a7.value));
          }
        });
        _0xce4ace[_0x491beb.category].appendChild(_0x2ecbf1);
      });
      _0x19fffc.forEach(_0xa69520 => {
        const _0x2f7cdc = localStorage.getItem(_0xa69520.id) === "true";
        const _0x36662d = "\n                            <div class=\"option toggle " + (_0x2f7cdc ? 'on' : '') + "\" data-option=\"" + _0xa69520.id + "\">\n                                <div class=\"name\" style=\"" + (_0xa69520.tooltip.includes("Premium") ? "color: yellow;" : '') + "\">" + _0xa69520.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (_0xa69520.tooltip ? "<span class=\"tooltip\">" + _0xa69520.tooltip + "</span>" : '') + "\n                            </div>\n                        ";
        _0xce4ace[_0xa69520.category].insertAdjacentHTML("beforeend", _0x36662d);
      });
      document.querySelectorAll(".box").forEach(_0x541c0f => {
        _0x541c0f.addEventListener("click", function (_0x5608a4) {
          _0x5608a4.stopPropagation();
          const _0x17eb4d = this.parentElement;
          const _0x42fa59 = _0x17eb4d.getAttribute("data-option");
          const _0x7b236a = !_0x17eb4d.classList.contains('on');
          _0x17eb4d.classList.toggle('on', _0x7b236a);
          theoKzObjects[_0x42fa59] = _0x7b236a;
          localStorage.setItem(_0x42fa59, _0x7b236a);
          const _0xb9a6aa = _0x17eb4d.querySelector(".tooltip");
          if (_0xb9a6aa) {
            _0xb9a6aa.style.display = _0x7b236a ? "block" : "none";
          }
          console.log(_0x42fa59 + " changed to", _0x7b236a);
        });
      });
      var _0x4c96bc = $("div[category='theme']");
      addMinicolor(_0x4c96bc[0x1], 'teamColorGroup', "YOUR COLOR IN MAP", "teamColor", 'FFFFFF');
      $("#teamColor").on('input', function () {
        let _0x2bdfad = $(this).val();
        $("#preview_teamColor").css("background-color", _0x2bdfad);
        localStorage.setItem("teamColor", wriseData.teamColor);
        wriseData.teamColor = '0x' + _0x2bdfad.substring(0x1);
        console.log(wriseData.teamColor);
      });
      let _0x35c0a4 = localStorage.getItem("teamColor");
      if (_0x35c0a4) {
        wriseData.teamColor = _0x35c0a4;
        $('#preview_teamColor').css('background-color', '#' + _0x35c0a4.substring(0x2));
        $('#teamColor').val('#' + _0x35c0a4.substring(0x2));
      }
      let _0x90fc7e = localStorage.getItem('top8') === 'true' ? true : !(localStorage.getItem("top8") === "false");
      let _0x463655 = localStorage.getItem('killFeed') === "true" ? true : (localStorage.getItem('killFeed') === "false", false);
      $("#toggleTop8").prop("checked", _0x90fc7e);
      $('#toggleKillFeed').prop("checked", _0x463655);
      $("#top8List").toggle(_0x90fc7e);
      $('#killFeed').toggle(_0x463655);
      if (localStorage.getItem("top8") === 'true' || localStorage.getItem('top8') === 'false') {
        theoKzObjects.top8 = _0x90fc7e;
        localStorage.setItem("top8", _0x90fc7e);
      }
      if (localStorage.getItem("killFeed") === "true" || localStorage.getItem('killFeed') === "false") {
        theoKzObjects.killFeed = _0x463655;
        localStorage.setItem("killFeed", _0x463655);
      }
      $("#toggleTop8").on('change', function () {
        theoKzObjects.top8 = this.checked;
        $("#top8List").toggle(this.checked);
        localStorage.setItem('top8', true);
      });
      $("#toggleKillFeed").on("change", function () {
        theoKzObjects.killFeed = this.checked;
        $('#killFeed').toggle(this.checked);
        localStorage.setItem("killFeed", false);
      });
      $("#toggleTop8").hover(function () {
        $("#tooltipTop8").fadeIn();
      }, function () {
        $("#tooltipTop8").fadeOut();
      });
      $("#toggleKillFeed").hover(function () {
        $("#tooltipKillFeed").fadeIn();
      }, function () {
        $("#tooltipKillFeed").fadeOut();
      });
      $("#teamCodeInput").on("input", function () {
        wriseData.teamCode = $(this).val();
        localStorage.setItem('teamCode', '');
        console.log("Team Code updated:", '');
      });
      let _0x18a8f8 = localStorage.getItem("teamCode");
      if (_0x18a8f8) {
        wriseData.teamCode = _0x18a8f8;
        $("#teamCodeInput").val(_0x18a8f8);
      }
      zw_selectedbackground = 0x0;
      zw_toplist = 0xa;
      var _0x1d1205 = $('#arkaplan');
      var _0x5cf9fc = $('#zwtop');
      var _0xe2978e = localStorage.getItem("zw-background");
      if (_0xe2978e) {
        var _0x7bd042 = parseInt(_0xe2978e);
        _0x1d1205.val(_0x7bd042);
        zw_selectedbackground = _0x7bd042;
      }
      const _0x1fb49a = localStorage.getItem("zw-toplist");
      if (_0x1fb49a) {
        const _0x148b50 = parseInt(_0x1fb49a);
        zw_toplist = _0x148b50;
      }
      let _0x39d898 = true && true && true && !isNaN(0x23);
      if (_0x39d898) {
        $("#inputReplaceSkin").val(0x23);
      } else {
        let _0x217c8e = $("#inputReplaceSkin").val();
        _0x39d898 = '' !== _0x217c8e && null !== _0x217c8e && undefined !== _0x217c8e && !isNaN(_0x217c8e);
        theoKzObjects.idReplaceSkin = _0x39d898 ? _0x217c8e : 0x23;
      }
      ;
      _0x5cf9fc.val(zw_toplist);
      _0x1d1205.change(function (_0x24e563) {
        zw_selectedbackground = this.value;
        var _0x588f0f = obtenerImagenPorSeleccion(zw_selectedbackground);
        if (_0x588f0f) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x588f0f));
        }
        localStorage.setItem("zw-background", this.value.toString());
      });
      _0x5cf9fc.change(function (_0x32705c) {
        zw_toplist = this.value;
        localStorage.setItem("zw-toplist", this.value.toString());
      });
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(zw_userId);
      });
      _0x4386cf.prototype.a = function () {
        _0x4386cf.parent.prototype.a.call(this);
        if (!_0x4386cf.Ek) {
          _0x4386cf.Ek = true;
          var _0x426595 = window.anApp = _0x1ff066;
          _0x426595.u.Pi(function () {
            if (_0x426595.u.P()) {
              _0x46fd08.html(_0x426595.u.zi());
            } else {
              _0x46fd08.html('0');
            }
          });
        }
      };
      _0x4386cf.Fk = $("#coins-view");
      _0x4386cf.Gk = $('#leaders-view');
      _0x4386cf.Hk = $("#profile-view");
      _0x4386cf.Ik = $('#settings-view');
      _0x4386cf.Jk = $("#login-view");
      _0x4386cf.Kk = $('#skins-view');
      _0x4386cf.Lk = $("#store-view");
      _0x4386cf.zwset = $('#wormtr-settings-view');
      _0x4386cf.Mk = $("#wear-view");
      _0x4386cf.Nk = $("#withdraw-consent-view");
      _0x4386cf.Ok = $("#delete-account-view");
      _0x4386cf.Pk = $("#please-wait-view");
      _0x4386cf.prototype.ii = function () {
        _0x501845.fk.stop();
        _0x501845.fk.fadeOut(0xc8);
        _0x501845.gk.stop();
        _0x501845.gk.fadeOut(0xc8);
        _0x501845.hk.stop();
        _0x501845.hk.fadeOut(0xc8);
        _0x501845.ik.stop();
        _0x501845.ik.fadeIn(0xc8);
        _0x501845.jk.stop();
        _0x501845.jk.fadeOut(0xc8);
        _0x501845.kk.stop();
        _0x501845.kk.fadeOut(0xc8);
        _0x501845.nk.stop();
        _0x501845.nk.fadeIn(0xc8);
        _0x501845.ok.stop();
        _0x501845.ok.fadeIn(0xc8);
        _0x4ab1f6.html(this.ad);
        _0x28cff0.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x4386cf.prototype.Rk = function () {};
      _0x4386cf.prototype.Sk = function () {
        _0x3987d2.Pk.stop();
        _0x3987d2.Pk.fadeIn(0x12c);
      };
      _0x4386cf.prototype.Qk = function () {
        _0x3987d2.Pk.stop();
        _0x3987d2.Pk.fadeOut(0x12c);
      };
      return _0x4386cf;
    }();
    var _0x300010 = function () {
      var _0xe7ebe5 = $("#store-buy-coins_125000");
      var _0x3a628c = $("#store-buy-coins_50000");
      var _0x2548cd = $("#store-buy-coins_16000");
      var _0x3d7d3a = $('#store-buy-coins_7000');
      var _0x42fb3f = $("#store-buy-coins_3250");
      var _0x9a3f57 = $("#store-buy-coins_1250");
      var _0x636b85 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var _0x39d0ec = window.anApp = _0x1ff066;
        var _0x336c43 = this;
        _0xe7ebe5.click(function () {
          _0x39d0ec.r.Cd();
          _0x336c43.Tk("coins_125000");
        });
        _0x3a628c.click(function () {
          _0x39d0ec.r.Cd();
          _0x336c43.Tk("coins_50000");
        });
        _0x2548cd.click(function () {
          _0x39d0ec.r.Cd();
          _0x336c43.Tk('coins_16000');
        });
        _0x3d7d3a.click(function () {
          _0x39d0ec.r.Cd();
          _0x336c43.Tk('coins_7000');
        });
        _0x42fb3f.click(function () {
          _0x39d0ec.r.Cd();
          _0x336c43.Tk("coins_3250");
        });
        _0x9a3f57.click(function () {
          _0x39d0ec.r.Cd();
          _0x336c43.Tk("coins_1250");
        });
      });
      _0x636b85.prototype.a = function () {
        _0x636b85.parent.prototype.a.call(this);
      };
      _0x636b85.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeIn(0xc8);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0x636b85.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
      };
      _0x636b85.prototype.Tk = function (_0x581fd8) {};
      return _0x636b85;
    }();
    var _0x231071 = function () {
      var _0xd70569 = $("#highscore-table");
      var _0x740b1 = $("#leaders-button-level");
      var _0x54c9d0 = $("#leaders-button-highscore");
      var _0x1deb30 = $("#leaders-button-kills");
      var _0xf48613 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var _0x59bc30 = window.anApp = _0x1ff066;
        var _0x10a820 = this;
        this.Uk = {};
        this.Vk = {
          'Wk': {
            'Xk': _0x740b1,
            'Yk': "byLevel"
          },
          'Zk': {
            'Xk': _0x54c9d0,
            'Yk': "byHighScore"
          },
          '$k': {
            'Xk': _0x1deb30,
            'Yk': 'byKillsAndHeadShots'
          }
        };
        _0x740b1.click(function () {
          _0x59bc30.r.Cd();
          _0x10a820._k(_0x10a820.Vk.Wk);
        });
        _0x54c9d0.click(function () {
          _0x59bc30.r.Cd();
          _0x10a820._k(_0x10a820.Vk.Zk);
        });
        _0x1deb30.click(function () {
          _0x59bc30.r.Cd();
          _0x10a820._k(_0x10a820.Vk.$k);
        });
      });
      _0xf48613.prototype.a = function () {
        _0xf48613.parent.prototype.a.call(this);
      };
      _0xf48613.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeIn(0xc8);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0xf48613.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
        var _0x3aefc7 = this;
        this.Sk();
        $.get(_0x7fa75 + "/pub/leaders", function (_0x43129e) {
          _0x3aefc7.Uk = _0x43129e;
          _0x3aefc7._k(null != _0x3aefc7.al ? _0x3aefc7.al : _0x3aefc7.Vk.Wk);
          _0x3aefc7.Qk();
        }).done(function () {
          _0x3aefc7.Qk();
        });
      };
      _0xf48613.prototype._k = function (_0x1ed4df) {
        this.al = _0x1ed4df;
        for (var _0xecc854 in this.Vk) if (this.Vk.hasOwnProperty(_0xecc854)) {
          var _0x207f21 = this.Vk[_0xecc854];
          _0x207f21.Xk.removeClass("pressed");
        }
        this.al.Xk.addClass("pressed");
        var _0xcfe3c7 = this.Uk[this.al.Yk];
        var _0x27ed08 = '';
        for (var _0x442106 = 0x0; _0x442106 < _0xcfe3c7.length; _0x442106++) {
          var _0xae17e4 = _0xcfe3c7[_0x442106];
          _0x27ed08 += "<div class=\"table-row\"><span>" + (_0x442106 + 0x1) + "</span><span><img src=\"" + _0xae17e4.avatarUrl + "\"/></span><span>" + _0xae17e4.username + "</span><span>" + _0xae17e4.level + "</span><span>" + _0xae17e4.highScore + '</span><span>' + _0xae17e4.headShots + " / " + _0xae17e4.kills + "</span></div>";
        }
        _0xd70569.empty();
        _0xd70569.append(_0x27ed08);
      };
      return _0xf48613;
    }();
    var _0x7681ca = function () {
      var _0x41a74a = $("#popup-login-gg");
      var _0x54ff02 = $("#popup-login-fb");
      var _0xa28ceb = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], false);
        var _0x211567 = window.anApp = _0x1ff066;
        var _0x94da5f = this;
        _0x41a74a.click(function () {
          _0x211567.r.Cd();
          _0x94da5f.Sk();
          _0x211567.u.Qi(function () {
            _0x94da5f.Qk();
          });
          setTimeout(function () {
            _0x94da5f.Qk();
          }, 0x2710);
          _0x211567.u.Zi();
        });
        _0x54ff02.click(function () {
          _0x211567.r.Cd();
          _0x94da5f.Sk();
          _0x211567.u.Qi(function () {
            _0x94da5f.Qk();
          });
          setTimeout(function () {
            _0x94da5f.Qk();
          }, 0x2710);
          _0x211567.u.Vi();
        });
      });
      _0xa28ceb.prototype.a = function () {
        _0xa28ceb.parent.prototype.a.call(this);
      };
      _0xa28ceb.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeIn(0xc8);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0xa28ceb.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
      };
      return _0xa28ceb;
    }();
    var _0xdf162f = function () {
      var _0x2d2e21 = $("#profile-avatar");
      var _0x2be406 = $("#profile-username");
      var _0x48a55a = $("#profile-experience-bar");
      var _0x57d28d = $("#profile-experience-val");
      var _0x261ee3 = $('#profile-level');
      var _0x495970 = $('#profile-stat-highScore');
      var _0x3a6e72 = $("#profile-stat-bestSurvivalTime");
      var _0xd1bfa6 = $("#profile-stat-kills");
      var _0x12903d = $("#profile-stat-headshots");
      var _0x5d6fc7 = $("#profile-stat-gamesPlayed");
      var _0x44a931 = $("#profile-stat-totalTimeSpent");
      var _0x1ff050 = $("#profile-stat-registrationDate");
      var _0x1d3509 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES['index.game.popup.menu.profile.tab'], true);
      });
      _0x1d3509.prototype.a = function () {
        _0x1d3509.parent.prototype.a.call(this);
      };
      _0x1d3509.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeIn(0xc8);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0x1d3509.prototype.ji = function () {
        var _0x4ec4cc = window.anApp = _0x1ff066;
        _0x4ec4cc.r.Dd();
        var _0x1997bb = _0x4ec4cc.u.Oi();
        var _0x30de89 = moment([_0x1997bb.year, _0x1997bb.month - 0x1, _0x1997bb.day]).format('LL');
        _0x2be406.html(_0x4ec4cc.u.wi());
        _0x2d2e21.attr('src', _0x4ec4cc.u.xi());
        _0x48a55a.width(0x64 * _0x4ec4cc.u.Bi() / _0x4ec4cc.u.Ci() + '%');
        _0x57d28d.html(_0x4ec4cc.u.Bi() + " / " + _0x4ec4cc.u.Ci());
        _0x261ee3.html(_0x4ec4cc.u.Ai());
        _0x495970.html(_0x4ec4cc.u.Ii());
        _0x3a6e72.html(_0x55a05a(_0x4ec4cc.u.Ji()));
        _0xd1bfa6.html(_0x4ec4cc.u.Ki());
        _0x12903d.html(_0x4ec4cc.u.Li());
        _0x5d6fc7.html(_0x4ec4cc.u.Mi());
        _0x44a931.html(_0x55a05a(_0x4ec4cc.u.Ni()));
        _0x1ff050.html(_0x30de89);
      };
      return _0x1d3509;
    }();
    var _0x271c07 = function () {
      var _0x745e04 = $("#settings-music-enabled-switch");
      var _0x39dc9f = $("#settings-sfx-enabled-switch");
      var _0xd1ef25 = $("#settings-show-names-switch");
      var _0x38b462 = $("#popup-logout");
      var _0x227c82 = $('#popup-logout-container');
      var _0x564793 = $("#popup-delete-account");
      var _0x3fd201 = $("#popup-delete-account-container");
      var _0x1c0e1c = $("#popup-withdraw-consent");
      var _0x5b3fc2 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
        var _0x38be39 = this;
        var _0xeedc0a = window.anApp = _0x1ff066;
        _0x745e04.click(function () {
          var _0x1c2b49 = !!_0x745e04.prop("checked");
          _0x350985(_0x166161.Me, _0x1c2b49, 0x1e);
          _0xeedc0a.r.td(_0x1c2b49);
          _0xeedc0a.r.Cd();
        });
        _0x39dc9f.click(function () {
          var _0xd4ff01 = !!_0x39dc9f.prop("checked");
          _0x350985(_0x166161.Ne, _0xd4ff01, 0x1e);
          _0xeedc0a.r.rd(_0xd4ff01);
          _0xeedc0a.r.Cd();
        });
        _0xd1ef25.click(function () {
          _0xeedc0a.r.Cd();
        });
        _0x38b462.click(function () {
          _0xeedc0a.r.Cd();
          _0x38be39.Sk();
          setTimeout(function () {
            _0x38be39.Qk();
          }, 0x7d0);
          _0xeedc0a.u.Wi();
        });
        _0x564793.click(function () {
          if (_0xeedc0a.u.P()) {
            _0xeedc0a.r.Cd();
            _0xeedc0a.s.I(_0xeedc0a.s.Vh);
          } else {
            _0xeedc0a.r.Hd();
          }
        });
        _0x1c0e1c.click(function () {
          if (_0xeedc0a.Y()) {
            _0xeedc0a.r.Cd();
            _0xeedc0a.s.I(_0xeedc0a.s.Uh);
          } else {
            _0xeedc0a.r.Hd();
          }
        });
      });
      _0x5b3fc2.prototype.a = function () {
        _0x5b3fc2.parent.prototype.a.call(this);
        var _0x227d3c = window.anApp = _0x1ff066;
        var _0x310c0d = undefined;
        switch (_0x4961dc(_0x166161.Me)) {
          case "false":
            _0x310c0d = false;
            break;
          default:
            _0x310c0d = true;
        }
        _0x745e04.prop('checked', _0x310c0d);
        _0x227d3c.r.td(_0x310c0d);
        var _0x201dd7 = undefined;
        switch (_0x4961dc(_0x166161.Ne)) {
          case "false":
            _0x201dd7 = false;
            break;
          default:
            _0x201dd7 = true;
        }
        _0x39dc9f.prop("checked", _0x201dd7);
        _0x227d3c.r.rd(_0x201dd7);
        var _0x14ee0a = undefined;
        switch (_0x4961dc(_0x166161.ya)) {
          case 'false':
            _0x14ee0a = false;
            break;
          default:
            _0x14ee0a = true;
        }
        console.log("Load sPN: " + _0x14ee0a);
        _0xd1ef25.prop('checked', _0x14ee0a);
        _0x227d3c.u.V(function () {
          _0x227c82.toggle(_0x227d3c.u.P());
          _0x3fd201.toggle(_0x227d3c.u.P());
        });
      };
      _0x5b3fc2.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeIn(0xc8);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0x5b3fc2.prototype.ji = function () {
        var _0x17b2fd = window.anApp = _0x1ff066;
        _0x17b2fd.r.Dd();
        if (_0x17b2fd.Y()) {
          _0x1c0e1c.show();
        } else {
          _0x1c0e1c.hide();
        }
      };
      _0x5b3fc2.prototype.wa = function () {
        return _0xd1ef25.prop("checked");
      };
      return _0x5b3fc2;
    }();
    var _0x2c583a = function () {
      var _0x3efdb1 = $("#store-view-canv");
      var _0xf5347a = $('#skin-description-text');
      var _0x29fc82 = $("#skin-group-description-text");
      var _0x1c9115 = $("#store-locked-bar");
      var _0x28a138 = $("#store-locked-bar-text");
      var _0x2e0e3d = $("#store-buy-button");
      var _0xe1bdd1 = $("#store-item-price");
      var _0x2fe238 = $("#store-groups");
      var _0x3e62a1 = $('#store-view-prev');
      var _0x81f94e = $("#store-view-next");
      var _0xc458d2 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES['index.game.popup.menu.skins.tab'], true);
        var _0x6c64db = this;
        var _0xec7901 = window.anApp = _0x1ff066;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x418bed(_0x3efdb1);
        _0x2e0e3d.click(function () {
          _0xec7901.r.Cd();
          _0x6c64db.fl();
        });
        _0x3e62a1.click(function () {
          _0xec7901.r.Cd();
          _0x6c64db.bl.gl();
        });
        _0x81f94e.click(function () {
          _0xec7901.r.Cd();
          _0x6c64db.bl.hl();
        });
      });
      _0xc458d2.prototype.a = function () {
        _0xc458d2.parent.prototype.a.call(this);
        var _0x461a08 = this;
        var _0x349bf5 = window.anApp = _0x1ff066;
        _0x349bf5.p.ca(function () {
          var _0x4c7e75 = _0x349bf5.p.Ac();
          if (null != _0x4c7e75) {
            _0x461a08.cl = [];
            for (var _0x34175e = 0x0; _0x34175e < _0x4c7e75.skinGroupArrayDict.length; _0x34175e++) {
              _0x461a08.cl.push(new _0x369e2e(_0x461a08, _0x4c7e75.skinGroupArrayDict[_0x34175e]));
            }
            _0x461a08.dl = {};
            for (var _0x2e3e86 = 0x0; _0x2e3e86 < _0x4c7e75.skinArrayDict.length; _0x2e3e86++) {
              var _0x10ef95 = _0x4c7e75.skinArrayDict[_0x2e3e86];
              _0x461a08.dl[_0x10ef95.id] = _0x10ef95;
            }
          }
        });
        this.il(false);
        _0x349bf5.t.xh(function () {
          _0x461a08.il(false);
        });
      };
      _0xc458d2.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeIn(0xc8);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0xc458d2.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0xc458d2.prototype.ei = function () {
        this.el.Le(false);
      };
      _0xc458d2.prototype.Ra = function () {
        this.el.Ra();
      };
      _0xc458d2.prototype.Pa = function (_0x335d0a, _0x2f9631) {
        this.el.Pa();
      };
      _0xc458d2.prototype.jl = function () {
        var _0x1dacaa = this;
        var _0x2b4a28 = this;
        var _0x279c84 = window.anApp = _0x1ff066;
        _0x2fe238.empty();
        for (var _0x492c75 = 0x0; _0x492c75 < this.cl.length; _0x492c75++) {
          !function (_0x21c3c7) {
            var _0x1844b7 = _0x1dacaa.cl[_0x21c3c7];
            var _0x3b64de = document.createElement('li');
            _0x2fe238.append(_0x3b64de);
            var _0x568e2c = $(_0x3b64de);
            _0x568e2c.html(_0x1844b7.kl());
            _0x568e2c.click(function () {
              _0x279c84.r.Cd();
              _0x2b4a28.ll(_0x1844b7);
            });
            _0x1844b7.ml = _0x568e2c;
          }(_0x492c75);
        }
        if (this.cl.length > 0x0) {
          var _0x445882 = _0x279c84.t.ha(_0x4e8d86.ia);
          for (var _0x492c75 = 0x0; _0x492c75 < this.cl.length; _0x492c75++) {
            var _0x1e275c = this.cl[_0x492c75];
            var _0x1ac6fa = _0x1e275c.nl.list;
            for (var _0x50ee0b = 0x0; _0x50ee0b < _0x1ac6fa.length; _0x50ee0b++) {
              if (_0x1ac6fa[_0x50ee0b] == _0x445882) {
                _0x1e275c.ol = _0x50ee0b;
                return void this.ll(_0x1e275c);
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0xc458d2.prototype.ll = function (_0x55bd99) {
        if (this.bl != _0x55bd99) {
          var _0x5e6a17 = window.anApp = _0x1ff066;
          this.bl = _0x55bd99;
          _0x2fe238.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x29fc82.html('');
          if (null != _0x55bd99.nl) {
            var _0x46f8bd = _0x5e6a17.p.Ac().textDict[_0x55bd99.nl.description];
            if (null != _0x46f8bd) {
              _0x29fc82.html((_0x46f8bd[_0x581b91] ? _0x46f8bd[_0x581b91] : _0x46f8bd.en ? _0x46f8bd.en : _0x46f8bd.x).includes('href') ? (_0x46f8bd[_0x581b91] ? _0x46f8bd[_0x581b91] : _0x46f8bd.en ? _0x46f8bd.en : _0x46f8bd.x).replaceAll("href", "target=\"_black\" href") : _0x46f8bd[_0x581b91] ? _0x46f8bd[_0x581b91] : _0x46f8bd.en ? _0x46f8bd.en : _0x46f8bd.x);
            }
          }
          this.il(true);
        }
      };
      _0xc458d2.prototype.pl = function () {
        return null == this.bl ? _0x3a0a9b.Yg() : this.bl.ql();
      };
      _0xc458d2.prototype.fl = function () {
        var _0x14f0da = this;
        this.pl().ah(function (_0x1281fc) {
          _0x14f0da.rl(_0x1281fc);
        });
      };
      _0xc458d2.prototype.rl = function (_0x409580) {
        var _0x1d85fc = this;
        var _0x20554f = window.anApp = _0x1ff066;
        var _0x31166e = this.dl[_0x409580].price;
        if (!(_0x20554f.u.zi() < _0x31166e)) {
          this.Sk();
          var _0x54675e = _0x20554f.t.ha(_0x4e8d86.ia);
          var _0x59051d = _0x20554f.t.ha(_0x4e8d86.ja);
          var _0x9b1228 = _0x20554f.t.ha(_0x4e8d86.ka);
          var _0x2cea56 = _0x20554f.t.ha(_0x4e8d86.la);
          var _0x57f5b9 = _0x20554f.t.ha(_0x4e8d86.ma);
          _0x20554f.u.Ui(_0x409580, _0x4e8d86.ia, function () {
            _0x20554f.t.Bh(_0x54675e, _0x4e8d86.ia);
            _0x20554f.t.Bh(_0x59051d, _0x4e8d86.ja);
            _0x20554f.t.Bh(_0x9b1228, _0x4e8d86.ka);
            _0x20554f.t.Bh(_0x2cea56, _0x4e8d86.la);
            _0x20554f.t.Bh(_0x57f5b9, _0x4e8d86.ma);
            if (_0x20554f.u.Ch(_0x409580, _0x4e8d86.ia)) {
              _0x20554f.t.Bh(_0x409580, _0x4e8d86.ia);
            }
            _0x1d85fc.Qk();
          });
        }
      };
      _0xc458d2.prototype.il = function (_0x8b4502) {
        var _0x4b414e = window.anApp = _0x1ff066;
        this.el.bk(_0x4b414e.t.ha(_0x4e8d86.ja), false, false);
        this.el.ck(_0x4b414e.t.ha(_0x4e8d86.ka), false, false);
        this.el.dk(_0x4b414e.t.ha(_0x4e8d86.la), false, false);
        this.el.ek(_0x4b414e.t.ha(_0x4e8d86.ma), false, false);
        var _0x2f8357 = this.pl();
        if (_0x2f8357._g()) {
          var _0x1ef5c0 = _0x2f8357.$g();
          var _0x28f646 = this.dl[_0x1ef5c0];
          var _0x5613c5 = false;
          if (_0x4b414e.t.Ja(_0x1ef5c0, _0x4e8d86.ia)) {
            _0x1c9115.hide();
            _0x2e0e3d.hide();
          } else {
            if (null == _0x28f646 || 0x1 == _0x28f646.nonbuyable) {
              _0x5613c5 = true;
              _0x1c9115.show();
              _0x2e0e3d.hide();
              _0x28a138.text(window.I18N_MESSAGES['index.game.popup.menu.store.locked']);
              if (null != _0x28f646 && _0x28f646.nonbuyable && null != _0x28f646.nonbuyableCause) {
                var _0x599ad9 = _0x4b414e.p.Ac().textDict[_0x28f646.nonbuyableCause];
                if (null != _0x599ad9) {
                  _0x28a138.text(_0x599ad9[_0x581b91] ? _0x599ad9[_0x581b91] : _0x599ad9.en ? _0x599ad9.en : _0x599ad9.x);
                }
              }
            } else {
              _0x1c9115.hide();
              _0x2e0e3d.show();
              _0xe1bdd1.html(_0x28f646.price);
            }
          }
          _0xf5347a.html("ID: " + _0x1ef5c0 + " TYPE: " + _0x4e8d86.ia);
          if (null != _0x28f646 && null != _0x28f646.description) {
            var _0x2f4a1d = _0x4b414e.p.Ac().textDict[_0x28f646.description];
            if (null != _0x2f4a1d) {
              _0xf5347a.html((_0x2f4a1d[_0x581b91] ? _0x2f4a1d[_0x581b91] : _0x2f4a1d.en ? _0x2f4a1d.en : _0x2f4a1d.x).includes('href') ? (_0x2f4a1d[_0x581b91] ? _0x2f4a1d[_0x581b91] : _0x2f4a1d.en ? _0x2f4a1d.en : _0x2f4a1d.x).replaceAll("href", "target=\"_black\" href") : _0x2f4a1d[_0x581b91] ? _0x2f4a1d[_0x581b91] : _0x2f4a1d.en ? _0x2f4a1d.en : _0x2f4a1d.x);
            }
          }
          this.el.ak(_0x1ef5c0, true, _0x5613c5);
          if (_0x8b4502) {
            _0x4b414e.t.Bh(_0x1ef5c0, _0x4e8d86.ia);
          }
        }
      };
      var _0x369e2e = function () {
        function _0x4e245a(_0x3487bf, _0xba7a75) {
          this.sl = _0x3487bf;
          this.ol = 0x0;
          this.nl = _0xba7a75;
        }
        _0x4e245a.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x4e245a.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x4e245a.prototype.kl = function () {
          let _0x534f91 = this.nl.name[_0x581b91] ? this.nl.name[_0x581b91] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
          console.log(this.nl);
          if (this.nl.img) {
            _0x534f91 = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
          }
          return _0x534f91;
        };
        _0x4e245a.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x3a0a9b.Yg() : _0x3a0a9b.Zg(this.nl.list[this.ol]);
        };
        return _0x4e245a;
      }();
      return _0xc458d2;
    }();
    var _0x2535ea = function () {
      var _0x357fdb = $("#store-go-coins-button");
      var _0x468ebb = $('#store-go-skins-button');
      var _0x312c89 = $("#store-go-wear-button");
      var _0x54c61d = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
        var _0x4af22d = window.anApp = _0x1ff066;
        _0x357fdb.click(function () {
          _0x4af22d.r.Cd();
          _0x4af22d.s.I(_0x4af22d.s.Wh);
        });
        _0x468ebb.click(function () {
          _0x4af22d.r.Cd();
          _0x4af22d.s.I(_0x4af22d.s.$h);
        });
        _0x312c89.click(function () {
          _0x4af22d.r.Cd();
          _0x4af22d.s.I(_0x4af22d.s.ai);
        });
      });
      _0x54c61d.prototype.a = function () {
        _0x54c61d.parent.prototype.a.call(this);
      };
      _0x54c61d.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeIn(0xc8);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0x54c61d.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
      };
      return _0x54c61d;
    }();
    var _0x5d82ca = function () {
      var _0x5dfcad = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, "wrise SETTINGS", 0x0);
      });
      _0x5dfcad.prototype.a = function () {
        _0x5dfcad.parent.prototype.a.call(this);
      };
      _0x5dfcad.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeIn(0xc8);
      };
      _0x5dfcad.prototype.ji = function () {
        var _0x270021 = window.anApp = _0x1ff066;
        _0x270021.r.Dd();
      };
      return _0x5dfcad;
    }();
    var _0x394d89 = function () {
      var _0x2c1a17 = $('#wear-view-canv');
      var _0x148f5e = $("#wear-description-text");
      var _0x3031b6 = $("#wear-locked-bar");
      var _0x38f41c = $("#wear-locked-bar-text");
      var _0x1574af = $("#wear-buy-button");
      var _0x4c30b5 = $("#wear-item-price");
      var _0x430ac5 = $("#wear-eyes-button");
      var _0x133eb6 = $("#wear-mouths-button");
      var _0x5682e5 = $('#wear-glasses-button');
      var _0x4a486b = $('#wear-hats-button');
      var _0x2557f4 = $('#wear-tint-chooser');
      var _0x85ed28 = $("#wear-view-prev");
      var _0x1fd246 = $('#wear-view-next');
      var _0x51297b = _0x22ee20(_0x3987d2, function () {
        var _0x4547f9 = this;
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
        var _0x17d9f3 = window.anApp = _0x1ff066;
        var _0x291116 = this;
        this.tl = [];
        this.ja = new _0x230a63(this, _0x4e8d86.ja, _0x430ac5);
        this.ka = new _0x230a63(this, _0x4e8d86.ka, _0x133eb6);
        this.la = new _0x230a63(this, _0x4e8d86.la, _0x5682e5);
        this.ma = new _0x230a63(this, _0x4e8d86.ma, _0x4a486b);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x418bed(_0x2c1a17);
        _0x1574af.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.Bl();
        });
        _0x85ed28.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.ul.Cl();
        });
        _0x1fd246.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.ul.Dl();
        });
        _0x430ac5.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.El(_0x4547f9.ja);
        });
        _0x133eb6.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.El(_0x4547f9.ka);
        });
        _0x5682e5.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.El(_0x4547f9.la);
        });
        _0x4a486b.click(function () {
          _0x17d9f3.r.Cd();
          _0x291116.El(_0x4547f9.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x51297b.prototype.a = function () {
        _0x51297b.parent.prototype.a.call(this);
        var _0x50e8d3 = window.anApp = _0x1ff066;
        var _0x593fc2 = this;
        _0x50e8d3.p.ca(function () {
          var _0x420259 = _0x50e8d3.p.Ac();
          if (null != _0x420259) {
            _0x593fc2.vl = _0x420259.eyesDict;
            _0x593fc2.wl = _0x420259.mouthDict;
            _0x593fc2.xl = _0x420259.glassesDict;
            _0x593fc2.yl = _0x420259.hatDict;
            _0x593fc2.zl = _0x420259.colorDict;
            _0x593fc2.ja.Fl(_0x420259.eyesVariantArray);
            _0x593fc2.ja.Gl(_0x593fc2.vl);
            _0x593fc2.ka.Fl(_0x420259.mouthVariantArray);
            _0x593fc2.ka.Gl(_0x593fc2.wl);
            _0x593fc2.la.Fl(_0x420259.glassesVariantArray);
            _0x593fc2.la.Gl(_0x593fc2.xl);
            _0x593fc2.ma.Fl(_0x420259.hatVariantArray);
            _0x593fc2.ma.Gl(_0x593fc2.yl);
          }
        });
        this.il(false);
        _0x50e8d3.t.xh(function () {
          _0x593fc2.il(false);
        });
      };
      _0x51297b.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeIn(0xc8);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0x51297b.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
        this.El(null != this.ul ? this.ul : this.ja);
        this.Al.Le(true);
      };
      _0x51297b.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x51297b.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x51297b.prototype.Pa = function (_0x59e79f, _0x5e3540) {
        this.Al.Pa();
      };
      _0x51297b.prototype.El = function (_0x1dabb6) {
        this.ul = _0x1dabb6;
        for (var _0x3638e3 = 0x0; _0x3638e3 < this.tl.length; _0x3638e3++) {
          this.tl[_0x3638e3].Xk.removeClass('pressed');
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x51297b.prototype.Hl = function () {
        return null == this.ul ? _0x3a0a9b.Yg() : _0x3a0a9b.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
        });
      };
      _0x51297b.prototype.Bl = function () {
        var _0x25c373 = this;
        this.Hl().ah(function (_0x2ee4cc) {
          _0x25c373.Ui(_0x2ee4cc.Lb, _0x2ee4cc.rc);
        });
      };
      _0x51297b.prototype.Ui = function (_0x4ab824, _0x48822f) {
        var _0xd42071 = this;
        var _0x137022 = window.anApp = _0x1ff066;
        var _0x1bbbc9 = undefined;
        switch (_0x48822f) {
          case _0x4e8d86.ja:
            _0x1bbbc9 = this.vl[_0x4ab824].price;
            break;
          case _0x4e8d86.ka:
            _0x1bbbc9 = this.wl[_0x4ab824].price;
            break;
          case _0x4e8d86.la:
            _0x1bbbc9 = this.xl[_0x4ab824].price;
            break;
          case _0x4e8d86.ma:
            _0x1bbbc9 = this.yl[_0x4ab824].price;
            break;
          default:
            return;
        }
        if (!(_0x137022.u.zi() < _0x1bbbc9)) {
          this.Sk();
          var _0x28ab73 = _0x137022.t.ha(_0x4e8d86.ia);
          var _0xa48200 = _0x137022.t.ha(_0x4e8d86.ja);
          var _0x25b303 = _0x137022.t.ha(_0x4e8d86.ka);
          var _0x3af862 = _0x137022.t.ha(_0x4e8d86.la);
          var _0xf94e20 = _0x137022.t.ha(_0x4e8d86.ma);
          _0x137022.u.Ui(_0x4ab824, _0x48822f, function () {
            _0x137022.t.Bh(_0x28ab73, _0x4e8d86.ia);
            _0x137022.t.Bh(_0xa48200, _0x4e8d86.ja);
            _0x137022.t.Bh(_0x25b303, _0x4e8d86.ka);
            _0x137022.t.Bh(_0x3af862, _0x4e8d86.la);
            _0x137022.t.Bh(_0xf94e20, _0x4e8d86.ma);
            if (_0x137022.u.Ch(_0x4ab824, _0x48822f)) {
              _0x137022.t.Bh(_0x4ab824, _0x48822f);
            }
            _0xd42071.Qk();
          });
        }
      };
      _0x51297b.prototype.Il = function (_0xd061ae, _0x4b5eaa) {
        switch (_0x4b5eaa) {
          case _0x4e8d86.ja:
            return this.vl[_0xd061ae];
          case _0x4e8d86.ka:
            return this.wl[_0xd061ae];
          case _0x4e8d86.la:
            return this.xl[_0xd061ae];
          case _0x4e8d86.ma:
            return this.yl[_0xd061ae];
        }
        return null;
      };
      _0x51297b.prototype.il = function (_0x58bf9b) {
        var _0x108aeb = window.anApp = _0x1ff066;
        this.Al.ak(_0x108aeb.t.ha(_0x4e8d86.ia), false, false);
        this.Al.bk(_0x108aeb.t.ha(_0x4e8d86.ja), false, false);
        this.Al.ck(_0x108aeb.t.ha(_0x4e8d86.ka), false, false);
        this.Al.dk(_0x108aeb.t.ha(_0x4e8d86.la), false, false);
        this.Al.ek(_0x108aeb.t.ha(_0x4e8d86.ma), false, false);
        var _0x39a72c = this.Hl();
        if (_0x39a72c._g()) {
          var _0x5199dd = _0x39a72c.$g();
          var _0x177685 = this.Il(_0x5199dd.Lb, _0x5199dd.rc);
          var _0x3070b4 = false;
          if (_0x108aeb.t.Ja(_0x5199dd.Lb, _0x5199dd.rc)) {
            _0x3031b6.hide();
            _0x1574af.hide();
          } else {
            if (null == _0x177685 || 0x1 == _0x177685.nonbuyable) {
              _0x3070b4 = true;
              _0x3031b6.show();
              _0x1574af.hide();
              _0x38f41c.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != _0x177685 && _0x177685.nonbuyable && null != _0x177685.nonbuyableCause) {
                var _0x33a2bf = _0x108aeb.p.Ac().textDict[_0x177685.nonbuyableCause];
                if (null != _0x33a2bf) {
                  _0x38f41c.text(_0x33a2bf[_0x581b91] ? _0x33a2bf[_0x581b91] : _0x33a2bf.en ? _0x33a2bf.en : _0x33a2bf.x);
                }
              }
            } else {
              _0x3031b6.hide();
              _0x1574af.show();
              _0x4c30b5.html(_0x177685.price);
            }
          }
          _0x148f5e.html("ID: " + _0x5199dd.Lb);
          if (null != _0x177685 && null != _0x177685.description) {
            var _0x2aa26e = _0x108aeb.p.Ac().textDict[_0x177685.description];
            if (null != _0x2aa26e) {
              _0x148f5e.html((_0x2aa26e[_0x581b91] ? _0x2aa26e[_0x581b91] : _0x2aa26e.en ? _0x2aa26e.en : _0x2aa26e.x).includes('href') ? (_0x2aa26e[_0x581b91] ? _0x2aa26e[_0x581b91] : _0x2aa26e.en ? _0x2aa26e.en : _0x2aa26e.x).replaceAll("href", "target=\"_black\" href") : _0x2aa26e[_0x581b91] ? _0x2aa26e[_0x581b91] : _0x2aa26e.en ? _0x2aa26e.en : _0x2aa26e.x);
            }
          }
          switch (_0x5199dd.rc) {
            case _0x4e8d86.ja:
              this.Al.bk(_0x5199dd.Lb, true, _0x3070b4);
              break;
            case _0x4e8d86.ka:
              this.Al.ck(_0x5199dd.Lb, true, _0x3070b4);
              break;
            case _0x4e8d86.la:
              this.Al.dk(_0x5199dd.Lb, true, _0x3070b4);
              break;
            case _0x4e8d86.ma:
              this.Al.ek(_0x5199dd.Lb, true, _0x3070b4);
              break;
          }
          if (_0x58bf9b) {
            _0x108aeb.t.Bh(_0x5199dd.Lb, _0x5199dd.rc);
          }
        }
      };
      var _0x230a63 = function () {
        function _0x3de315(_0x2085b2, _0x5a81f6, _0x8b8eac) {
          this.sl = _0x2085b2;
          this.rc = _0x5a81f6;
          this.Xk = _0x8b8eac;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0x3de315.prototype.Fl = function (_0x1dba48) {
          this.Kl = _0x1dba48;
        };
        _0x3de315.prototype.Gl = function (_0x1657d1) {
          this.Jl = _0x1657d1;
        };
        _0x3de315.prototype.ii = function () {
          var _0x5b3eb5 = window.anApp = _0x1ff066;
          var _0x2a43f8 = _0x5b3eb5.t.ha(this.rc);
          for (var _0x577b6c = 0x0; _0x577b6c < this.Kl.length; _0x577b6c++) {
            for (var _0xb203b8 = 0x0; _0xb203b8 < this.Kl[_0x577b6c].length; _0xb203b8++) {
              if (this.Kl[_0x577b6c][_0xb203b8] == _0x2a43f8) {
                this.Nl(_0x577b6c);
                return void this.Ol(_0xb203b8);
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0x3de315.prototype.Cl = function () {
          var _0x4cb7fe = this.Ll - 0x1;
          if (_0x4cb7fe < 0x0) {
            _0x4cb7fe = this.Kl.length - 0x1;
          }
          this.Nl(_0x4cb7fe);
          this.Ol(this.Ml % this.Kl[_0x4cb7fe].length);
        };
        _0x3de315.prototype.Dl = function () {
          var _0x103a4a = this.Ll + 0x1;
          if (_0x103a4a >= this.Kl.length) {
            _0x103a4a = 0x0;
          }
          this.Nl(_0x103a4a);
          this.Ol(this.Ml % this.Kl[_0x103a4a].length);
        };
        _0x3de315.prototype.Nl = function (_0x3ac648) {
          var _0x5656b1 = this;
          if (!(_0x3ac648 < 0x0 || _0x3ac648 >= this.Kl.length)) {
            this.Ll = _0x3ac648;
            _0x2557f4.empty();
            var _0x431e18 = this.Kl[this.Ll];
            if (_0x431e18.length > 0x1) {
              for (var _0x212dc5 = 0x0; _0x212dc5 < _0x431e18.length; _0x212dc5++) {
                !function (_0x55c19f) {
                  var _0x1aa209 = _0x431e18[_0x55c19f];
                  var _0x57cfa4 = _0x5656b1.Jl[_0x1aa209];
                  var _0x3162df = '#' + _0x5656b1.sl.zl[_0x57cfa4.prime];
                  var _0x3d40f9 = $("<div style=\"border-color:" + _0x3162df + "\"></div>");
                  _0x3d40f9.click(function () {
                    (window.anApp = _0x1ff066).r.Cd();
                    _0x5656b1.Ol(_0x55c19f);
                  });
                  _0x2557f4.append(_0x3d40f9);
                }(_0x212dc5);
              }
            }
          }
        };
        _0x3de315.prototype.Ol = function (_0x520de6) {
          if (!(_0x520de6 < 0x0 || _0x520de6 >= this.Kl[this.Ll].length)) {
            this.Ml = _0x520de6;
            _0x2557f4.children().css("background-color", 'transparent');
            var _0x1db28b = _0x2557f4.children(":nth-child(" + (0x1 + _0x520de6) + ')');
            _0x1db28b.css("background-color", _0x1db28b.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x3de315.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x3de315;
      }();
      return _0x51297b;
    }();
    var _0x327500 = function () {
      var _0x4faccf = $("#withdraw-consent-yes");
      var _0x124eeb = $('#withdraw-consent-no');
      var _0x189a0c = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
        var _0x291994 = window.anApp = _0x1ff066;
        _0x4faccf.click(function () {
          _0x291994.r.Cd();
          if (_0x291994.Y()) {
            _0x291994.s.I(_0x291994.s.F);
            _0x291994.$(false, true);
            _0x291994.s.aa._(new _0xefd538());
          } else {
            _0x291994.s.gi();
          }
        });
        _0x124eeb.click(function () {
          _0x291994.r.Cd();
          _0x291994.s.gi();
        });
      });
      _0x189a0c.prototype.a = function () {
        _0x189a0c.parent.prototype.a.call(this);
      };
      _0x189a0c.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeIn(0xc8);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(0x32);
      };
      _0x189a0c.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Dd();
      };
      return _0x189a0c;
    }();
    var _0x98c748 = function () {
      var _0x4fc439 = $("#delete-account-timer");
      var _0x3d8846 = $("#delete-account-yes");
      var _0x4a88d5 = $('#delete-account-no');
      var _0x1b9e86 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], false);
        var _0x2c6e37 = window.anApp = _0x1ff066;
        _0x3d8846.click(function () {
          _0x2c6e37.r.Cd();
          if (_0x2c6e37.u.P()) {
            _0x2c6e37.u.bj();
            _0x2c6e37.u.Wi();
          } else {
            _0x2c6e37.s.gi();
          }
        });
        _0x4a88d5.click(function () {
          _0x2c6e37.r.Cd();
          _0x2c6e37.s.gi();
        });
        this.Pl = [];
      });
      _0x1b9e86.prototype.a = function () {
        _0x1b9e86.parent.prototype.a.call(this);
      };
      _0x1b9e86.prototype.Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk.fadeOut(0x32);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(0x32);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(0x32);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeOut(0x32);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(0x32);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(0x32);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(0x32);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk.fadeOut(0x32);
        _0x3987d2.zwset.stop();
        _0x3987d2.zwset.fadeOut(0x32);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(0x32);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeIn(0xc8);
      };
      _0x1b9e86.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Hd();
        _0x3d8846.stop();
        _0x3d8846.hide();
        _0x4fc439.stop();
        _0x4fc439.show();
        _0x4fc439.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x4fc439.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x4fc439.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x4fc439.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x4fc439.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x4fc439.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x4fc439.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x4fc439.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x4fc439.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x4fc439.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x4fc439.hide();
          _0x3d8846.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x1b9e86.prototype.Rl = function (_0x418715, _0xbb278c) {
        var _0x22d22b = setTimeout(_0x418715, _0xbb278c);
        this.Pl.push(_0x22d22b);
      };
      _0x1b9e86.prototype.Ql = function () {
        for (var _0x482c6a = 0x0; _0x482c6a < this.Pl.length; _0x482c6a++) {
          clearTimeout(this.Pl[_0x482c6a]);
        }
        this.Pl = [];
      };
      return _0x1b9e86;
    }();
    var _0x297d1e = function () {
      function _0x4676b1() {
        this.Ck = function () {};
      }
      _0x4676b1.prototype.Bk = function () {};
      _0x4676b1.prototype.ji = function () {};
      return _0x4676b1;
    }();
    var _0x16627a = function () {
      var _0x436162 = _0x22ee20(_0x297d1e, function (_0x48804e) {
        _0x297d1e.call(this);
        var _0x1721be = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x1721be + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x48804e + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + '</div></div>');
        var _0xb51a58 = this;
        this.Sl.find('.toaster-coins-close').click(function () {
          (window.anApp = _0x1ff066).r.Cd();
          _0xb51a58.Ck();
        });
      });
      _0x436162.prototype.Bk = function () {
        return this.Sl;
      };
      _0x436162.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Fd();
      };
      return _0x436162;
    }();
    var _0x5605b5 = function () {
      var _0x20b128 = _0x22ee20(_0x297d1e, function (_0x4a8466) {
        _0x297d1e.call(this);
        var _0x23da61 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x23da61 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x4a8466 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES['index.game.toaster.levelup'] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES['index.game.toaster.continue'] + "</div></div>");
        var _0x1332dc = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = _0x1ff066).r.Cd();
          _0x1332dc.Ck();
        });
      });
      _0x20b128.prototype.Bk = function () {
        return this.Sl;
      };
      _0x20b128.prototype.ji = function () {
        (window.anApp = _0x1ff066).r.Ed();
      };
      return _0x20b128;
    }();
    var _0xefd538 = function () {
      var _0x170c74 = _0x22ee20(_0x297d1e, function () {
        _0x297d1e.call(this);
        var _0x144172 = this;
        var _0x57935b = window.anApp = _0x1ff066;
        var _0xfdf100 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0xfdf100 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + '/images/linelogo-xmas2022.png' + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", '&nbsp;').replaceAll("\n", '<br/>') + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x57935b.r.Cd();
          if (_0x57935b.Y()) {
            _0x57935b.$(true, true);
          }
          _0x144172.Ck();
        });
      });
      _0x170c74.prototype.Bk = function () {
        return this.Sl;
      };
      _0x170c74.prototype.ji = function () {
        var _0x15a50d = this;
        var _0x8a07a5 = window.anApp = _0x1ff066;
        if (_0x8a07a5.Y() && !_0x8a07a5.Z()) {
          _0x8a07a5.r.Hd();
          setTimeout(function () {
            _0x15a50d.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x15a50d.Ck();
          }, 0x0);
        }
      };
      return _0x170c74;
    }();
    var _0x1d2a4a = {
      "main": {
        'Ma': _0x341617('aqnvgcpz05orkobh', atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        'K': _0x341617("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': _0x171133(),
        'e': 0x4,
        'oa': false,
        'qk': true
      },
      "miniclip": {
        'Ma': _0x341617("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        'K': _0x341617("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': _0x171133(),
        'e': 0x4,
        'oa': false,
        'qk': false
      }
    };
    var _0x25fccb = _0x1d2a4a[window.ENV];
    if (!_0x25fccb) {
      _0x25fccb = _0x1d2a4a.main;
    }
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x4d601b) {
      _0x4d601b.preventDefault();
      _0x4d601b.stopPropagation();
      return false;
    });
    _0x9024fe("//connect.facebook.net/" + _0x15aa89 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        'appId': atob("ODYxOTI2ODUwNjE5MDUx"),
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': "v8.0"
      });
    });
    _0x9024fe("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': atob('OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t')
        });
      });
    });
    _0x1ff066 = _0x3e4797();
    _0x1ff066.v();
    $('#mm-menu-cont').css("display", "block");
    theoKzObjects.loading = true;
    var _0x929fc9 = obtenerImagenPorSeleccion(localStorage.getItem("zw-background"));
    if (_0x929fc9) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x929fc9));
      console.log("Fondo cargado desde almacenamiento:", _0x929fc9);
    }
    var _0xf72104 = function (_0x39a65) {
      if (theoKzObjects.PropertyManager) {
        _0x39a65.skinId = theoKzObjects.PropertyManager.rh;
        _0x39a65.eyesId = theoKzObjects.PropertyManager.sh;
        _0x39a65.mouthId = theoKzObjects.PropertyManager.th;
        _0x39a65.glassesId = theoKzObjects.PropertyManager.uh;
        _0x39a65.hatId = theoKzObjects.PropertyManager.vh;
      }
    };
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 0xf4240) {
          return (this / 0xf4240).toFixed(0x1) + "M🧁";
        } else {
          return this >= 0x186a0 ? (this / 0x3e8).toFixed(0x0) + "k🍬" : this.dotFormat();
        }
      };
    }
    (() => {
      const _0xbb0e56 = window.anApp = _0x1ff066;
      let _0x243550 = performance.now();
      let _0x5d0ffd = true;
      document.addEventListener("visibilitychange", () => {
        _0x5d0ffd = !document.hidden;
        if (_0x5d0ffd) {
          _0x243550 = performance.now();
        }
      });
      function _0x4a4b66(_0x2c5c53) {
        requestAnimationFrame(_0x4a4b66);
        if (!_0x5d0ffd) {
          return;
        }
        let _0x1865d9 = _0x2c5c53 - _0x243550;
        if (_0x1865d9 > 0x64) {
          _0x1865d9 = 0x64;
        }
        _0x243550 = _0x2c5c53;
        _0xbb0e56.Pa(_0x1865d9);
        if (typeof _0xbb0e56.draw === "function") {
          _0xbb0e56.draw();
        }
      }
      requestAnimationFrame(_0x4a4b66);
    })();
    var _0x3e078d = function () {
      var _0x33b599 = _0x5afe43.width();
      var _0x2e58f4 = _0x5afe43.height();
      var _0x3d138c = _0x40e32a.outerWidth();
      var _0x3f76ec = _0x40e32a.outerHeight();
      var _0x10325f = _0x13ffbe.outerHeight();
      var _0x3058b0 = _0x5fcca1.outerHeight();
      var _0x57f4d7 = Math.min(0x1, Math.min((_0x2e58f4 - _0x3058b0 - _0x10325f) / _0x3f76ec, _0x33b599 / _0x3d138c));
      var _0x514fa1 = "translate(-50%, -50%) scale(" + _0x57f4d7 + ')';
      _0x40e32a.css({
        '-webkit-transform': _0x514fa1,
        '-moz-transform': _0x514fa1,
        '-ms-transform': _0x514fa1,
        '-o-transform': _0x514fa1,
        'transform': _0x514fa1
      });
      (window.anApp = _0x1ff066).Ra();
      window.scrollTo(0x0, 0x1);
    };
    var _0x5afe43 = $("body");
    var _0x40e32a = $("#stretch-box");
    var _0x13ffbe = $("#markup-header");
    var _0x5fcca1 = $("#markup-footer");
    _0x3e078d();
    $(window).resize(_0x3e078d);
  }();
});
function addMinicolor(_0x394a83, _0x31e0e0, _0x27ad93, _0x20f345, _0xeca6ae, _0x298d7b) {
  var _0x49ca8e = localStorage.getItem(_0x20f345);
  if (_0x49ca8e) {
    if (_0x49ca8e.startsWith('0x')) {
      _0x49ca8e = '#' + _0x49ca8e.substring(0x2);
    } else if (!_0x49ca8e.startsWith('#')) {
      _0x49ca8e = '#' + _0x49ca8e;
    }
  }
  theoObjects[_0x20f345] = _0x49ca8e || _0xeca6ae;
  $(_0x394a83).append("<div class=\"option colorpicker\"><div class=\"name\">" + _0x27ad93 + "</div>" + "<input id=\"" + _0x20f345 + "\" type=\"text\" class=\"minicolors form-control\">" + "<div class=\"color-preview\" id=\"preview_" + _0x20f345 + "\" style=\"background-color: " + theoObjects[_0x20f345] + ";\" onclick=\"openColorPanel('" + _0x20f345 + "')\"></div>" + "</div>");
  if (localStorage.getItem(_0x20f345) !== null) {
    theoObjects[_0x20f345] = localStorage.getItem(_0x20f345);
  }
  if (_0x298d7b) {
    _0x298d7b();
  }
  $('#' + _0x20f345).minicolors({
    'control': $(this).attr("data-control") || 'hue',
    'defaultValue': theoObjects[_0x20f345] || _0xeca6ae,
    'format': $(this).attr("data-format") || "hex",
    'inline': $(this).attr("data-inline") === "true",
    'letterCase': $(this).attr("data-letterCase") || "lowercase",
    'opacity': $(this).attr("data-opacity") || true,
    'position': $(this).attr('data-position') || "bottom left",
    'theme': "default",
    'change': function (_0x20aa5a, _0x31064f) {
      var _0x4fb7c1 = _0x20aa5a.replace('#', '');
      theoObjects[_0x20f345] = _0x4fb7c1;
      localStorage.setItem(_0x20f345, _0x4fb7c1);
      if (_0x298d7b) {
        _0x298d7b();
      }
      $("#preview_" + _0x20f345).css("background-color", _0x20aa5a);
    }
  });
}
function openColorPanel(_0x478e03) {
  $('#' + _0x478e03).minicolors('show');
}
function updateBackground(_0x779cfb = null) {
  var _0x233c0a = document.getElementById('backgroundPreview');
  let _0xcd768c = localStorage.getItem("selectedBackground");
  if (_0x779cfb === null && _0xcd768c !== null) {
    _0x779cfb = parseInt(_0xcd768c);
  }
  if (_0x779cfb === null || _0x779cfb < 0x0 || _0x779cfb >= backgrounds.length) {
    _0x779cfb = 0x0;
  }
  var _0x591c9a = backgrounds[_0x779cfb];
  _0x233c0a.style.backgroundImage = "url(" + _0x591c9a + ')';
  if (typeof anApp !== 'undefined' && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x591c9a));
  }
  localStorage.setItem("selectedBackground", _0x779cfb);
}
function updateFont() {
  var _0x50885b = document.getElementById("fontPreview");
  const _0x28ba54 = fonts[currentFontIndex];
  _0x50885b.style.fontFamily = _0x28ba54;
  localStorage.setItem("selectedFont", currentFontIndex);
}
const servers = ['sao-a.wormate.io', "mum-a.wormate.io", "dxb-a.wormate.io", 'fra-e.wormate.io', "fra-d.wormate.io", 'fra-c.wormate.io', "fra-b.wormate.io", "waw-a.wormate.io", 'dal-b.wormate.io', "vin-a.wormate.io", "dal-a.wormate.io", 'sao-c.wormate.io', "bhs-a.wormate.io", "sao-b.wormate.io", 'hil-a.wormate.io', "syd-a.wormate.io", 'sin-g.wormate.io', "gra-a.wormate.io", 'sin-i.wormate.io', "sin-h.wormate.io", "sin-f.wormate.io", "sin-c.wormate.io", "sin-b.wormate.io", 'sin-a.wormate.io', 'tok-b.wormate.io', "sin-d.wormate.io", "sin-e.wormate.io"];
async function testPortOnServers(_0x4f9b74) {
  console.log("\n🔍 Probando servidores Wormate.io (puerto " + _0x4f9b74 + ")...\n");
  const _0x3a6f75 = [];
  const _0x326bdf = $('<ul></ul>');
  $("#resultadoPuertas").html('');
  $("#resultadoPuertas").append(_0x326bdf);
  for (const _0x4632a9 of servers) {
    const _0x404b6f = "wss://" + _0x4632a9 + ':' + _0x4f9b74 + "/wormy";
    const _0xef4f63 = performance.now();
    let _0x169b3e = false;
    const _0xa1981b = await new Promise(_0x389e03 => {
      const _0x329ee = new WebSocket(_0x404b6f);
      const _0x75c4f0 = (_0x30d78b, _0x3d0931 = null) => {
        if (_0x169b3e) {
          return;
        }
        _0x169b3e = true;
        _0x329ee.close();
        _0x389e03({
          'host': _0x4632a9,
          'status': _0x30d78b,
          'latency': _0x3d0931
        });
      };
      _0x329ee.onerror = () => _0x75c4f0("❌ Cerrado");
      _0x329ee.onclose = () => _0x75c4f0("❌ Cerrado");
      _0x329ee.onopen = () => {
        const _0x5a5978 = Math.round(performance.now() - _0xef4f63);
        _0x75c4f0("✅ ", _0x5a5978);
      };
      setTimeout(() => _0x75c4f0("⏱️ Timeout"), 0x2710);
    });
    if (_0xa1981b.status === "✅ ") {
      _0x3a6f75.push(_0xa1981b);
      const _0x230e1e = _0xa1981b.latency !== null ? " - Ping: " + _0xa1981b.latency + " ms" : '';
      const _0x11a74f = "wss://" + _0xa1981b.host + ':' + _0x4f9b74 + "/wormy";
      const _0x366c0b = $("\n                <li>\n                    " + _0xa1981b.status + _0x230e1e + "\n                    <button class=\"connect-button\" data-server=\"" + _0x11a74f + "\" style=\"margin-left: 10px;\">Connect</button>\n                </li>\n            ");
      _0x326bdf.append(_0x366c0b);
    }
    await new Promise(_0x419561 => setTimeout(_0x419561, 0xc8));
  }
  if (_0x3a6f75.length > 0x0) {
    _0x3a6f75.sort((_0x4b888e, _0x5e6e95) => _0x4b888e.latency - _0x5e6e95.latency);
    const _0x5c7a3f = _0x3a6f75[0x0];
    const _0x23726c = "<strong>🏆 Best server: " + _0x5c7a3f.host + " - Ping: " + _0x5c7a3f.latency + " ms</strong>";
    _0x326bdf.append("<li style=\"margin-top:10px;\">" + _0x23726c + "</li>");
  } else {
    _0x326bdf.append("<li><strong>❌ No se encontraron puertas abiertas.</strong></li>");
  }
  $(document).off("click", ".connect-button").on("click", ".connect-button", function () {
    const _0x4ea0a9 = $(this).data("server");
    anApp.sa(_0x4ea0a9);
    console.log("Conectando a:", _0x4ea0a9);
  });
}
console.log("GAME JS 2023 BY SWYKZ");