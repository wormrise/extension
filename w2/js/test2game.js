
function loadScript4(_0x3ab5d7, _0x20be3b, _0x5a9a31) {
  if (document.getElementById(_0x20be3b)) {
    _0x5a9a31();
    return;
  }
  var _0x1e86f1 = document.createElement('script');
  _0x1e86f1.type = 'text/javascript';
  _0x1e86f1.src = _0x3ab5d7;
  _0x1e86f1.id = _0x20be3b;
  _0x1e86f1.onload = _0x5a9a31;
  document.head.appendChild(_0x1e86f1);
}
var __extends = this && this.__extends || function () {
  var _0x5e8e1a = function (_0x1026e9, _0xe6361f) {
    _0x5e8e1a = Object.setPrototypeOf || {
      '__proto__': []
    } instanceof Array && function (_0x8e1a84, _0x5b378d) {
      _0x8e1a84.__proto__ = _0x5b378d;
    } || function (_0x4125b0, _0x4f0b7d) {
      for (var _0x3c99e0 in _0x4f0b7d) if (Object.prototype.hasOwnProperty.call(_0x4f0b7d, _0x3c99e0)) {
        _0x4125b0[_0x3c99e0] = _0x4f0b7d[_0x3c99e0];
      }
    };
    return _0x5e8e1a(_0x1026e9, _0xe6361f);
  };
  return function (_0x113414, _0x3de381) {
    if (typeof _0x3de381 !== "function" && _0x3de381 !== null) {
      throw new TypeError("Class extends value " + String(_0x3de381) + " is not a constructor or null");
    }
    _0x5e8e1a(_0x113414, _0x3de381);
    function _0x41fdb1() {
      this.constructor = _0x113414;
    }
    _0x113414.prototype = _0x3de381 === null ? Object.create(_0x3de381) : (_0x41fdb1.prototype = _0x3de381.prototype, new _0x41fdb1());
  };
}();
var Direction;
(function (_0x58ba48) {
  _0x58ba48.LEFT = 'left';
  _0x58ba48.TOP = "top";
  _0x58ba48.BOTTOM = "bottom";
  _0x58ba48.RIGHT = 'right';
  _0x58ba48.TOP_LEFT = 'top_left';
  _0x58ba48.TOP_RIGHT = "top_right";
  _0x58ba48.BOTTOM_LEFT = "bottom_left";
  _0x58ba48.BOTTOM_RIGHT = "bottom_right";
})(Direction = {});
var Joystick = function (_0x43a48d) {
  __extends(_0xb39f5f, _0x43a48d);
  function _0xb39f5f(_0x5e41b3) {
    var _0x35f28c = _0x43a48d.call(this) || this;
    _0x35f28c.outerRadius = 0x0;
    _0x35f28c.innerRadius = 0x0;
    _0x35f28c.innerAlphaStandby = 0.5;
    _0x35f28c.settings = Object.assign({
      'outerScale': {
        'x': 0x1,
        'y': 0x1
      },
      'innerScale': {
        'x': 0x1,
        'y': 0x1
      }
    }, _0x5e41b3);
    if (!_0x35f28c.settings.outer) {
      var _0x23ebed = new PIXI.Graphics();
      _0x23ebed.beginFill(0xff0000);
      _0x23ebed.drawCircle(0x0, 0x0, 0x3c);
      _0x23ebed.alpha = 0.5;
      _0x35f28c.settings.outer = _0x23ebed;
    }
    if (!_0x35f28c.settings.inner) {
      var _0x50878b = new PIXI.Graphics();
      _0x50878b.beginFill(0xff0000);
      _0x50878b.drawCircle(0x0, 0x0, 0x23);
      _0x50878b.alpha = _0x35f28c.innerAlphaStandby;
      _0x35f28c.settings.inner = _0x50878b;
    }
    _0x35f28c.initialize();
    return _0x35f28c;
  }
  _0xb39f5f.prototype.initialize = function () {
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
  _0xb39f5f.prototype.bindEvents = function () {
    var _0x5779d2 = this;
    this.interactive = true;
    var _0x210294 = false;
    var _0x3cc643;
    var _0x18906f;
    var _0x1c8844;
    this.onDragStart = function (_0x54707e) {
      var _0x346ff9;
      var _0x38015f;
      _0x3cc643 = _0x54707e;
      _0x1c8844 = this.toLocal(_0x3cc643);
      _0x210294 = true;
      _0x5779d2.inner.alpha = 0x1;
      if ((_0x38015f = (_0x346ff9 = _0x5779d2.settings).onStart) === null || _0x38015f === undefined) {
        undefined;
      } else {
        _0x38015f.call(_0x346ff9);
      }
    };
    this.onDragEnd = function (_0x435da7) {
      var _0x3bcd9e;
      var _0x573aef;
      if (_0x210294 == false) {
        return;
      }
      _0x5779d2.inner.position.set(0x0, 0x0);
      _0x210294 = false;
      _0x5779d2.inner.alpha = _0x5779d2.innerAlphaStandby;
      if ((_0x573aef = (_0x3bcd9e = _0x5779d2.settings).onEnd) === null || _0x573aef === undefined) {
        undefined;
      } else {
        _0x573aef.call(_0x3bcd9e);
      }
    };
    this.onDragMove = function (_0x4051ea) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 0x2;
      var _0x5cbf3c;
      var _0x575152;
      var _0x3749b2;
      var _0x36d4b0;
      var _0x3e0c9c;
      var _0x319219;
      if (_0x210294 == false) {
        return;
      }
      var _0x1f67ad = this.toLocal(_0x4051ea);
      var _0x1bf80e = _0x1f67ad.x - _0x1c8844.x;
      var _0x572634 = _0x1f67ad.y - _0x1c8844.y;
      var _0x1a3b57 = new PIXI.Point(0x0, 0x0);
      var _0x52e74c = 0x0;
      if (_0x1bf80e == 0x0 && _0x572634 == 0x0) {
        return;
      }
      var _0x5441fb = 0x0;
      if (_0x1bf80e * _0x1bf80e + _0x572634 * _0x572634 >= _0x5779d2.outerRadius * _0x5779d2.outerRadius) {
        _0x5441fb = _0x5779d2.outerRadius;
      } else {
        _0x5441fb = _0x5779d2.outerRadius - _0x5779d2.innerRadius;
      }
      var _0x5f02da = Direction.LEFT;
      if (_0x1bf80e == 0x0) {
        if (_0x572634 > 0x0) {
          _0x1a3b57.set(0x0, _0x572634 > _0x5779d2.outerRadius ? _0x5779d2.outerRadius : _0x572634);
          _0x52e74c = 0x10e;
          _0x5f02da = Direction.BOTTOM;
        } else {
          _0x1a3b57.set(0x0, -(Math.abs(_0x572634) > _0x5779d2.outerRadius ? _0x5779d2.outerRadius : Math.abs(_0x572634)));
          _0x52e74c = 0x5a;
          _0x5f02da = Direction.TOP;
        }
        _0x5779d2.inner.position.set(_0x1a3b57.x, _0x1a3b57.y);
        _0x18906f = _0x5779d2.getPower(_0x1a3b57);
        if ((_0x575152 = (_0x5cbf3c = _0x5779d2.settings).onChange) === null || _0x575152 === undefined) {
          undefined;
        } else {
          _0x575152.call(_0x5cbf3c, {
            'angle': _0x52e74c,
            'direction': _0x5f02da,
            'power': _0x18906f
          });
        }
        return;
      }
      if (_0x572634 == 0x0) {
        if (_0x1bf80e > 0x0) {
          _0x1a3b57.set(Math.abs(_0x1bf80e) > _0x5779d2.outerRadius ? _0x5779d2.outerRadius : Math.abs(_0x1bf80e), 0x0);
          _0x52e74c = 0x0;
          _0x5f02da = Direction.LEFT;
        } else {
          _0x1a3b57.set(-(Math.abs(_0x1bf80e) > _0x5779d2.outerRadius ? _0x5779d2.outerRadius : Math.abs(_0x1bf80e)), 0x0);
          _0x52e74c = 0xb4;
          _0x5f02da = Direction.RIGHT;
        }
        _0x5779d2.inner.position.set(_0x1a3b57.x, _0x1a3b57.y);
        _0x18906f = _0x5779d2.getPower(_0x1a3b57);
        if ((_0x36d4b0 = (_0x3749b2 = _0x5779d2.settings).onChange) === null || _0x36d4b0 === undefined) {
          undefined;
        } else {
          _0x36d4b0.call(_0x3749b2, {
            'angle': _0x52e74c,
            'direction': _0x5f02da,
            'power': _0x18906f
          });
        }
        return;
      }
      var _0x419c34 = Math.abs(_0x572634 / _0x1bf80e);
      var _0x214fce = Math.atan(_0x419c34);
      _0x52e74c = _0x214fce * 0xb4 / Math.PI;
      var _0x4d71c6 = 0x0;
      var _0x4cb0ed = 0x0;
      if (_0x1bf80e * _0x1bf80e + _0x572634 * _0x572634 >= _0x5779d2.outerRadius * _0x5779d2.outerRadius) {
        _0x4d71c6 = _0x5779d2.outerRadius * Math.cos(_0x214fce);
        _0x4cb0ed = _0x5779d2.outerRadius * Math.sin(_0x214fce);
      } else {
        _0x4d71c6 = Math.abs(_0x1bf80e) > _0x5779d2.outerRadius ? _0x5779d2.outerRadius : Math.abs(_0x1bf80e);
        _0x4cb0ed = Math.abs(_0x572634) > _0x5779d2.outerRadius ? _0x5779d2.outerRadius : Math.abs(_0x572634);
      }
      if (_0x572634 < 0x0) {
        _0x4cb0ed = -Math.abs(_0x4cb0ed);
      }
      if (_0x1bf80e < 0x0) {
        _0x4d71c6 = -Math.abs(_0x4d71c6);
      }
      if (_0x1bf80e > 0x0 && _0x572634 < 0x0) {} else {
        if (_0x1bf80e < 0x0 && _0x572634 < 0x0) {
          _0x52e74c = 0xb4 - _0x52e74c;
        } else {
          if (_0x1bf80e < 0x0 && _0x572634 > 0x0) {
            _0x52e74c = _0x52e74c + 0xb4;
          } else if (_0x1bf80e > 0x0 && _0x572634 > 0x0) {
            _0x52e74c = 0x168 - _0x52e74c;
          }
        }
      }
      _0x1a3b57.set(_0x4d71c6, _0x4cb0ed);
      _0x18906f = _0x5779d2.getPower(_0x1a3b57);
      _0x5f02da = _0x5779d2.getDirection(_0x1a3b57);
      _0x5779d2.inner.position.set(_0x1a3b57.x, _0x1a3b57.y);
      if ((_0x319219 = (_0x3e0c9c = _0x5779d2.settings).onChange) === null || _0x319219 === undefined) {
        undefined;
      } else {
        _0x319219.call(_0x3e0c9c, {
          'angle': _0x52e74c,
          'direction': _0x5f02da,
          'power': _0x18906f
        });
      }
    };
  };
  _0xb39f5f.prototype.getPower = function (_0x19b025) {
    var _0x167d6a = _0x19b025.x - 0x0;
    var _0x204a78 = _0x19b025.y - 0x0;
    return Math.min(0x1, Math.sqrt(_0x167d6a * _0x167d6a + _0x204a78 * _0x204a78) / this.outerRadius);
  };
  _0xb39f5f.prototype.getDirection = function (_0x27868d) {
    var _0x2e3f75 = Math.atan2(_0x27868d.y, _0x27868d.x);
    if (_0x2e3f75 >= -Math.PI / 0x8 && _0x2e3f75 < 0x0 || _0x2e3f75 >= 0x0 && _0x2e3f75 < Math.PI / 0x8) {
      return Direction.RIGHT;
    } else {
      if (_0x2e3f75 >= Math.PI / 0x8 && _0x2e3f75 < 0x3 * Math.PI / 0x8) {
        return Direction.BOTTOM_RIGHT;
      } else {
        if (_0x2e3f75 >= 0x3 * Math.PI / 0x8 && _0x2e3f75 < 0x5 * Math.PI / 0x8) {
          return Direction.BOTTOM;
        } else {
          if (_0x2e3f75 >= 0x5 * Math.PI / 0x8 && _0x2e3f75 < 0x7 * Math.PI / 0x8) {
            return Direction.BOTTOM_LEFT;
          } else {
            if (_0x2e3f75 >= 0x7 * Math.PI / 0x8 && _0x2e3f75 < Math.PI || _0x2e3f75 >= -Math.PI && _0x2e3f75 < -0x7 * Math.PI / 0x8) {
              return Direction.LEFT;
            } else {
              if (_0x2e3f75 >= -0x7 * Math.PI / 0x8 && _0x2e3f75 < -0x5 * Math.PI / 0x8) {
                return Direction.TOP_LEFT;
              } else {
                return _0x2e3f75 >= -0x5 * Math.PI / 0x8 && _0x2e3f75 < -0x3 * Math.PI / 0x8 ? Direction.TOP : Direction.TOP_RIGHT;
              }
            }
          }
        }
      }
    }
  };
  return _0xb39f5f;
}(PIXI.Container);
function _typeof(_0x47ded9) {
  '@babel/helpers - typeof';

  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x526c0) {
    return typeof _0x526c0;
  } : function (_0x27b523) {
    return _0x27b523 && "function" == typeof Symbol && _0x27b523.constructor === Symbol && _0x27b523 !== Symbol.prototype ? "symbol" : typeof _0x27b523;
  })(_0x47ded9);
}
var zwormData = {
  'id_user': '',
  'nickname': "wormxt",
  'teamCode': '',
  'playerX': 0x0,
  'playerY': 0x0,
  'hs': 0x0,
  'kill': 0x0,
  'message': '',
  'teamColor': "0xffffff",
  'wssServer': ''
};
const socket = new WebSocket("wss://zworm.xyz:9950");
const gameState = {
  'players': new Map()
};
socket.addEventListener("open", _0x451a8c => {
  console.log("Conectado al servidor WebSocket");
});
socket.addEventListener("message", async _0x26d35a => {
  if (_0x26d35a.data instanceof Blob) {
    const _0x1ecfa6 = await _0x26d35a.data.text();
    try {
      const _0x4c433a = JSON.parse(_0x1ecfa6);
      handleMessage(_0x4c433a);
    } catch (_0x5bebfa) {
      console.error("Error al parsear el mensaje:", _0x5bebfa);
    }
  } else {
    try {
      const _0x2fd29c = JSON.parse(_0x26d35a.data);
      handleMessage(_0x2fd29c);
    } catch (_0x2e540c) {
      console.error("Error al parsear el mensaje:", _0x2e540c);
    }
  }
});
socket.addEventListener('close', _0x38d2f7 => {
  console.log("Desconectado del servidor WebSocket");
});
function handleMessage(_0x1b5898) {
  if (_0x1b5898.id_user === 'gg_107164783301809303612' || _0x1b5898.id_user === "gg_107696732696574095850" || _0x1b5898.id_user === "gg_110413852592088957484") {
    createServerMessage("[WormXT OWNER]", _0x1b5898.message);
    console.log("Servidor " + _0x1b5898.id_user + " ha enviado un mensaje a todos los jugadores: " + _0x1b5898.message);
  }
  if (_0x1b5898.wssServer !== '') {
    return;
  }
  switch (_0x1b5898.type) {
    case "initialState":
      handleInitialState(_0x1b5898.players);
      break;
    case "playerUpdate":
      updatePlayer(_0x1b5898);
      updateTop8Hs();
      if (_0x1b5898.teamCode !== '' && _0x1b5898.teamCode === '') {
        createTeamUbication(_0x1b5898.teamCode, _0x1b5898.teamColor);
        createTeamMessage(_0x1b5898.teamCode, _0x1b5898.nickname, _0x1b5898.message);
        console.log("Jugador " + _0x1b5898.id_user + " tiene teamCode, se crea la ubicación del equipo");
      } else {}
      break;
    case "hsKillUpdate":
      updatePlayerHSKill(_0x1b5898);
      updateTop8Hs();
      console.log("Actualización de HS/Kill recibida: Jugador " + _0x1b5898.id_user + " - HS: " + _0x1b5898.hskill.hs + ", Kills: " + _0x1b5898.hskill.kill);
      break;
    case "playerDeath":
      updatePlayerDeath(_0x1b5898);
      break;
    case "playerDisconnect":
      removePlayer(_0x1b5898.id);
      console.log("Jugador " + _0x1b5898.id + " se ha desconectado");
      break;
    default:
      console.log("Mensaje desconocido:", _0x1b5898);
  }
}
function handleInitialState(_0x543e82) {
  _0x543e82.forEach(_0x5509c2 => {
    gameState.players.set(_0x5509c2.id_user, _0x5509c2);
  });
  console.log("Estado inicial recibido:", _0x543e82);
}
function updatePlayerDeath(_0x59df50) {
  if (gameState.players.has(_0x59df50.id_user)) {
    gameState.players["delete"](_0x59df50.id_user);
    console.log("Jugador " + _0x59df50.id_user + " eliminado del juego.");
    console.log("El jugador " + _0x59df50.nickname + " ha muerto.");
  }
  updateTop8Hs();
  clearTeamUbication();
}
function updatePlayer(_0x4c1e36) {
  gameState.players.set(_0x4c1e36.id_user, {
    'id': _0x4c1e36.id,
    'id_user': _0x4c1e36.id_user,
    'nickname': _0x4c1e36.nickname,
    'position': _0x4c1e36.position,
    'hskill': _0x4c1e36.hskill,
    'message': _0x4c1e36.message,
    'teamCode': _0x4c1e36.teamCode,
    'teamColor': _0x4c1e36.teamColor,
    'wssServer': _0x4c1e36.wssServer
  });
}
function updatePlayerHSKill(_0xa74f12) {
  const _0x516345 = gameState.players.get(_0xa74f12.id_user);
  if (_0x516345) {
    _0x516345.hskill = _0xa74f12.hskill;
  } else {
    gameState.players.set(_0xa74f12.id_user, {
      'id': _0xa74f12.id,
      'id_user': _0xa74f12.id_user,
      'nickname': _0xa74f12.nickname,
      'position': {
        'x': 0x0,
        'y': 0x0
      },
      'hskill': _0xa74f12.hskill,
      'teamCode': _0xa74f12.teamCode,
      'teamColor': _0xa74f12.teamColor,
      'wssServer': _0xa74f12.wssServer
    });
  }
}
function removePlayer(_0x5ed022) {
  gameState.players["delete"](_0x5ed022);
}
function updateGameView() {
  console.log("Estado actual del juego:");
  gameState.players.forEach((_0x160e93, _0xfc9f83) => {
    console.log("Jugador " + _0x160e93.id_user + ':');
    console.log("  Name: " + _0x160e93.nickname);
    console.log("  teamColor: " + _0x160e93.teamColor);
    console.log("  Posición: (" + (_0x160e93.position?.['x'] || 0x0) + ", " + (_0x160e93.position?.['y'] || 0x0) + ')');
    console.log("  HS: " + (_0x160e93.hskill?.['hs'] || 0x0) + ", Kills: " + (_0x160e93.hskill?.["kill"] || 0x0));
  });
}
function sendPlayerUpdate(_0x116681, _0x21cc26) {
  const _0x3c8965 = {
    'type': "playerUpdate",
    'id_user': '',
    'nickname': "wormxt",
    'hskill': {
      'hs': 0x0,
      'kill': 0x0
    },
    'position': {
      'x': _0x116681,
      'y': _0x21cc26
    },
    'message': '',
    'teamCode': '',
    'teamColor': "0xffffff",
    'wssServer': ''
  };
  socket.send(JSON.stringify(_0x3c8965));
}
function sendPlayerDeath(_0x447aa6, _0x42e00c) {
  const _0xf36d8e = {
    'type': 'playerDeath',
    'id_user': '',
    'nickname': "wormxt",
    'hskill': {
      'hs': _0x447aa6,
      'kill': _0x42e00c
    },
    'position': {
      'x': 0x0,
      'y': 0x0
    },
    'message': '',
    'teamCode': '',
    'teamColor': "0xffffff",
    'wssServer': ''
  };
  socket.send(JSON.stringify(_0xf36d8e));
  console.log("Enviando actualización del: Jugador  - murio");
}
function sendHSKillUpdate(_0xd3041c, _0x142c30) {
  const _0x2a6cb5 = {
    'type': "hsKillUpdate",
    'id_user': '',
    'nickname': "wormxt",
    'hskill': {
      'hs': _0xd3041c,
      'kill': _0x142c30
    },
    'teamCode': '',
    'teamColor': "0xffffff",
    'wssServer': ''
  };
  socket.send(JSON.stringify(_0x2a6cb5));
  console.log("Enviando actualización de HS/Kill: Jugador  - HS: " + _0xd3041c + ", Kills: " + _0x142c30);
}
const _wrmxt = {
  'isSkinCustom'(_0xebb2d4) {
    var _0x59c40e = /[a-zA-Z]/;
    return "string" === typeof _0xebb2d4 && _0x59c40e.test(_0xebb2d4);
  },
  'testSkinCustom': function (_0x22ae3f) {
    return _wrmxt.isSkinCustom(_0x22ae3f) ? 0x22 || 0x21 : _0x22ae3f;
  },
  'testSkinMod': function (_0x539a5f) {
    return 0x18f <= _0x539a5f && 0x3e7 > _0x539a5f;
  },
  'testWear': function (_0x2876e5) {
    return 0x18f <= _0x2876e5 && 0x3e7 > _0x2876e5;
  },
  'isNumberValid': function (_0x485354) {
    return '' !== _0x485354 && null !== _0x485354 && undefined !== _0x485354 && !isNaN(_0x485354);
  },
  'validInput': function (_0x3f2cc1) {
    if (!(0x18f <= _0x3f2cc1 && 0x3e7 > _0x3f2cc1) && !_wrmxt.isSkinCustom(_0x3f2cc1)) {
      return _0x3f2cc1;
    }
    try {
      let _0x5e25e3 = $('#inputReplaceSkin').val();
      return encodeURI('' !== _0x5e25e3 && null !== _0x5e25e3 && undefined !== _0x5e25e3 && !isNaN(_0x5e25e3) ? _0x5e25e3 : 0x23);
    } catch (_0x2800e7) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
const setIdReplaceSkin = function (_0x3e2baf) {
  theoKzObjects.idReplaceSkin = '' !== _0x3e2baf.value && null !== _0x3e2baf.value && undefined !== _0x3e2baf.value && !isNaN(_0x3e2baf.value) ? _0x3e2baf.value : 0x23;
  localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
};
var intervalID = null;
var isRunning = false;
var initialInterval = 0x37;
var cycleCounter = 0x1;
var isIncrementing = true;
let pixi = new Function("return PIXI;")();
let girotexture = pixi.Texture.from("https://i.imgur.com/0aN5Zek.png");
let ungirotexture = pixi.Texture.from('https://i.imgur.com/12MgJyy.png');
let explotWtexture = pixi.Texture.from("https://i.imgur.com/DbWbUxD.png");
var keys = {
  'zoom': 'z',
  'restart': 'r',
  'giro': 's',
  'wormExplot': 'x',
  'laserHS': 'l',
  'sectores': 'q',
  'background': 'c'
};
function cambiarKey(_0x4a9fc2, _0x103baa) {
  if (keys.hasOwnProperty(_0x4a9fc2)) {
    keys[_0x4a9fc2] = _0x103baa;
  }
}
let lineMap = {};
let lastUpdateTimeMap = {};
var lxpdupdatezoom;
var lxpdmultiplier;
var lxpdzoomtext;
var crearRegion2;
var lxpdservertext;
var lxpdlastserver;
var lxpdtoplist;
var lxpdBackground;
var ctxHeadshotLineContainer;
var lxpdzoomplustexture;
var lxpdzoomsubtracttexture;
var lxpdgiroplustexture;
var lxpdgirosubtracttexture;
var lxpdexplotWubtracttexture;
var lxpdsettingsblockbadwords;
var lxpdselectedbackground;
var lxpdjoystick;
var lxpdmobilecontrol;
var lxpdmobilecontrol2;
var lxpdmobilecontroltextures;
var lxpdmobilepredictiontextures;
var lxpdmobileprediction;
var lxpdjoysticks;
var lxpdmobilearrowtexture;
var lxpdmobilepeedtexture;
var lxpdmobilefullscreenstatus;
var lxpdmobilecheck;
lxpdmultiplier = 0x1;
window.onwheel = _0x319c4c => {
  if (_0x319c4c.deltaY > 0x0) {
    lxpdupdatezoom(Math.max(lxpdmultiplier * 1.25, 0x1));
  } else {
    lxpdupdatezoom(Math.max(lxpdmultiplier * 0.75, 0x1));
  }
};
var lxpdmobilecheck = function () {
  var _0x111ca5 = new Function("return RegExp;")();
  return new _0x111ca5("iPhone|iPad|iPod|Android", 'i').test(navigator.userAgent);
};
var lxpdupdatezoom = function (_0x765eb5) {
  lxpdmultiplier = _0x765eb5;
  lxpdzoomtext.text = Math.floor(lxpdmultiplier).toString() + 'x';
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
      'left': '110px',
      'bottom': "110px"
    },
    'color': "#222",
    'pxy': 0x6e
  }
};
var theoKzObjects = {
  'FB_UserID': '',
  'smoothCamera': 0.5,
  'eat_animation': 0.0025,
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'top8': true,
  'zoomZworm': false,
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
saveGameLocal = localStorage.getItem('SaveGameXT');
if (saveGameLocal && "null" !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects.loading = true;
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
async function loadUsers() {
  await fetch("https://wormrise.github.io/extension/w2/api/users.json").then(_0xcb76cd => _0xcb76cd.json()).then(_0x40e8df => {
    console.log(_0x40e8df);
    if (_0x40e8df.success) {
      let _0xaee5aa = _0x40e8df.users;
      console.log(_0xaee5aa);
      clientes.clientesActivos = _0xaee5aa.filter(_0x53c18a => {
        return _0x53c18a.cliente_STATE == 0x1 || _0x53c18a.cliente_STATE == 0x3;
      });
      clientes.clientesVencidos = _0xaee5aa.filter(_0x22d3d9 => {
        return _0x22d3d9.cliente_STATE == 0x4;
      });
      console.log(clientes);
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
      alert("OcurriÃƒÂ³ un error al cargar los clientes");
    }
  });
}
loadUsers();
var top1Servers = {};
async function extractTopScores() {
  const _0x61fd4e = "https://zworm.xyz:3305/data?v=" + TIME;
  try {
    let _0x12c174 = await fetch(_0x61fd4e);
    if (!_0x12c174.ok) {
      throw new Error("HTTP error! Status: " + _0x12c174.status);
    }
    let _0x4da10a = await _0x12c174.json();
    for (let _0xc5da67 in _0x4da10a) {
      if (_0x4da10a[_0xc5da67].length > 0x0) {
        let _0x33d40d = _0x4da10a[_0xc5da67].reduce((_0x1fd75f, _0x180837) => _0x180837.Score > _0x1fd75f.Score ? _0x180837 : _0x1fd75f, _0x4da10a[_0xc5da67][0x0]);
        let _0x110a92 = formatScore(_0x33d40d.Score);
        let _0x45fe1f = getStatusColor(_0x33d40d.Score);
        top1Servers[_0xc5da67] = {
          'ServerName': _0x33d40d.ServerName,
          'Initials': _0xc5da67,
          'Score': _0x110a92,
          'StatusColor': _0x45fe1f
        };
      }
    }
    console.log(top1Servers);
  } catch (_0x24916c) {
    console.error("Error fetching server data:", _0x24916c);
  }
}
let serverData = [];
async function loadServersWormWorld() {
  const _0x83a874 = Date.now();
  const _0x37daef = "https://wormrise.github.io/extension/w2/api/servers.json?v=" + _0x83a874;
  try {
    const _0x40f4a2 = await fetch(_0x37daef);
    const _0x194773 = await _0x40f4a2.json();
    serverData = _0x194773.map(_0x4baad => ({
      'dataCon': _0x4baad.dataCon,
      'dataRoom': _0x4baad.dataRoom,
      'serverName': _0x4baad.serverName,
      'dataType': _0x4baad.dataType,
      'imgSrc': _0x4baad.imgSrc
    }));
    console.log(serverData);
  } catch (_0xd29b17) {
    console.error("Error al cargar los servidores:", _0xd29b17);
  }
}
async function registerUpdatePlayer(_0x1310a7) {
  await fetch("https://wormrise.github.io/extension/w2/api/register_update_player.php", {
    'method': "POST",
    'body': JSON.stringify({
      'data': _0x1310a7
    })
  }).then(_0x2928f7 => _0x2928f7.json()).then(_0x4e437d => {
    console.log(_0x4e437d);
  });
}
async function checkSubscriptionExpired(_0x4b40a3) {
  await fetch("https://wormrise.github.io/extension/w2/api/checkSubscriptionExpired.php", {
    'method': 'POST',
    'body': JSON.stringify({
      'code': _0x4b40a3
    })
  }).then(_0x5546b4 => _0x5546b4.json()).then(_0x36832a => {
    console.log(_0x36832a);
  });
}
function fetchCustomLogo(_0x3811ea) {
  $.ajax({
    'url': "https://wormrise.github.io/extension/w2/api/streming.php",
    'method': "GET",
    'dataType': "json",
    'success': function (_0x1e2736) {
      var _0x1a2762 = _0x1e2736.allstreamers.streamers.filter(function (_0x599981) {
        return _0x599981.id_game === _0x3811ea;
      });
      if (_0x1a2762.length === 0x0) {
        console.log("No hay streamers online.");
        return;
      }
      var _0x21263b = _0x1a2762[0x0];
      $('.mm-logo').attr("src", _0x21263b.logo);
      $(".loading-logo").attr("src", _0x21263b.logo);
      $('.logo-server').attr("src", _0x21263b.logo);
    },
    'error': function (_0x3e2cd8) {
      console.error("Error al obtener los datos:", _0x3e2cd8);
    }
  });
}
function formatScore(_0x258471) {
  if (_0x258471 >= 0xf4240) {
    return (_0x258471 / 0xf4240).toFixed(0x1) + 'M';
  } else {
    if (_0x258471 >= 0x3e8) {
      return (_0x258471 / 0x3e8).toFixed(0x1) + 'K';
    }
  }
  return _0x258471.toString();
}
function getStatusColor(_0x3c3943) {
  if (_0x3c3943 > 0x989680) {
    return "green";
  } else {
    return _0x3c3943 > 0x1e8480 ? 'orange' : 'red';
  }
}
async function init() {
  await Promise.all([extractTopScores(), loadServersWormWorld()]);
  console.log("Todo listo");
  renderInterface(serverData, top1Servers);
}
function renderInterface(_0x50eb3b, _0x12037b) {
  $(".description-text").empty();
  $(".description-text").append("\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            \n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            \n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let _0x25a658 = $("#optionSelect").val();
    let _0x4f683c = $("#numberInput").val();
    if (!_0x25a658 || _0x4f683c === '') {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
      return;
    }
    zw_lastserver = "wss://" + _0x25a658 + ':' + _0x4f683c + "/wormy";
    anApp.r.Hd();
    anApp.sa(zw_lastserver);
  });
  var _0x2f757c = {
    'sao': 'br',
    'vin': "Virginia - EEUU",
    'dal': "Dallas - EEUU",
    'fra': "Frankfurt - Alemania",
    'sgp': 'sg',
    'tok': 'jp',
    'syd': 'au',
    'lon': 'gb',
    'tor': 'ca',
    'mex': 'mx',
    'sin': 'sg',
    'hil': "Honolulu - Hawái, EEUU",
    'gra': 'de'
  };
  var _0x347454 = [{
    'code': 'br',
    'name': "Peru"
  }, {
    'code': 'mx',
    'name': "Mexico"
  }, {
    'code': 'us',
    'name': 'EEUU'
  }, {
    'code': 'ca',
    'name': "Canada"
  }, {
    'code': 'de',
    'name': "Germania"
  }, {
    'code': 'fr',
    'name': 'Francia'
  }, {
    'code': 'sg',
    'name': 'Singapur'
  }, {
    'code': 'jp',
    'name': "Japon"
  }, {
    'code': 'au',
    'name': 'Australia'
  }, {
    'code': 'gb',
    'name': 'Granbretana'
  }];
  var _0x5e1250 = $("<ul class=\"ui-tabs-nav\"></ul>");
  var _0x3e1023 = $("<div class=\"servers-container\"></div>");
  _0x347454.forEach(function (_0x127bf7, _0x207575) {
    var _0x144259 = $("\n            <li class=\"ui-tabs-tab ui-tab " + (_0x207575 === 0x0 ? "ui-tab-active" : '') + "\" data-country=\"" + _0x127bf7.code + "\">\n                <a><span class=\"flag " + _0x127bf7.code + "\"></span></a>\n            </li>\n        ");
    _0x5e1250.append(_0x144259);
    var _0x344303 = $("\n            <div class=\"servers-" + _0x127bf7.code + "\" style=\"display: " + (_0x207575 === 0x0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th> <!-- Nueva columna -->\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
    _0x3e1023.append(_0x344303);
  });
  $(".description-text").append(_0x5e1250, _0x3e1023);
  $(".ui-tabs-tab").click(function () {
    var _0x5a6070 = $(this).data('country');
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + _0x5a6070).fadeIn(0xc8);
  });
  _0x50eb3b.forEach(function (_0x3f9639) {
    var _0x41a5ec = _0x3f9639.dataRoom.match(/[a-zA-Z]+/g).join('');
    if (_0x41a5ec === 'ae') {
      _0x41a5ec = 'gb';
    }
    var _0x493309 = _0x3f9639.dataCon.match(/wss:\/\/([a-z]+)-/i);
    var _0x51372e = _0x493309 ? _0x493309[0x1] : null;
    var _0x3a0d55 = _0x2f757c[_0x51372e] ? _0x2f757c[_0x51372e].toUpperCase() : 'Desconocido';
    if (!_0x347454.some(_0x3b66da => _0x3b66da.code === _0x41a5ec)) {
      return;
    }
    var _0x98e1ec = _0x3f9639.dataRoom.trim().toLowerCase();
    var _0x3cc36d = _0x12037b[_0x98e1ec] || {
      'Score': '???',
      'StatusColor': "gray"
    };
    var _0x36cc25 = $("\n        <tr class=\"server-row\" data-wss=\"" + _0x3f9639.dataCon + "\" value=\"" + _0x3f9639.dataRoom + "\">\n                <td class=\"server-status\">\n                    <span class=\"status-dot\" style=\"background-color: " + _0x3cc36d.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\" >" + _0x3f9639.serverName + "</td>\n                <td class=\"server-region\">" + _0x3a0d55 + "</td>\n                <td class=\"server-top1\">" + _0x3cc36d.Score + "</td>\n                <td><img src=\"" + _0x3f9639.imgSrc + "\" class=\"streamer-image\"></td>\n                <td>\n                    <button class=\"btn-check-ports\">📡📶</button>\n                </td>  \n            </tr>\n        ");
    $('.servers-' + _0x41a5ec + " tbody").append(_0x36cc25);
  });
  $(document).on("click", ".server-row", function () {
    let _0x574cc9 = $(this).find(".server-name").text();
    let _0x2add60 = $(this).attr('data-wss');
    if (_0x574cc9 && _0x2add60) {
      anApp.r.Hd();
      anApp.sa(_0x2add60);
      console.log("Conectando a:", _0x2add60);
    }
  });
  $(document).on("click", ".btn-check-ports", function (_0x7afb87) {
    _0x7afb87.stopPropagation();
    const _0x2dc395 = $(this).closest(".server-row");
    const _0x3da204 = _0x2dc395.attr("data-wss");
    const _0x9a8e42 = _0x3da204.match(/wss:\/\/[^:]+:(\d+)\//);
    if (!_0x9a8e42) {
      alert("Puerto no válido");
      return;
    }
    const _0x8ee05f = _0x9a8e42[0x1];
    _0x21140e(_0x2dc395, _0x8ee05f);
  });
  function _0x21140e(_0x1f3d91, _0x279912) {
    const _0x116c2a = _0x1f3d91.find('.server-name').text();
    if (!$("#modalPuertas").length) {
      $("body").append("\n                <div id=\"modalPuertas\" style=\"position:fixed; top:20%; left:50%; transform:translateX(-50%);\n                    padding:20px; z-index:9999; display:none; background-color: rgb(78 78 114 / 75%);\n                    border-radius: 5px; border: 2px solid #252535; color: white; font-family: sans-serif;\n                    max-height: 400px; overflow-y: auto; min-width: 300px;\">\n    \n                    <div id=\"modalCloseBtn\" style=\"position: absolute; top: 5px; right: 10px;\n                        font-size: 18px; cursor: pointer; color: #fff;\">✖</div>\n    \n                    <div id=\"modalTitle\" style=\"font-size: 16px; font-weight: bold;\n                        margin-bottom: 10px; text-align: center; margin-top: 20px;\">\n                        🔓 Open doors available for: <span id=\"nombreServidor\"></span>\n                    </div>\n    \n                    <div id=\"resultadoPuertas\"></div>\n                </div>\n            ");
      $(document).off('click', '#modalCloseBtn').on("click", "#modalCloseBtn", function () {
        $('#modalPuertas').fadeOut(0x12c);
      });
      $(document).off("click", ".connect-button").on("click", '.connect-button', function () {
        const _0x3a8a94 = $(this).data("server");
        anApp.sa(_0x3a8a94);
        console.log("Conectando a:", _0x3a8a94);
      });
    }
    $("#nombreServidor").text(_0x116c2a);
    $('#modalPuertas').fadeIn(0xc8);
    $('#resultadoPuertas').html("🔄 Testing ...");
    testPortOnServers(_0x279912);
  }
}
init();
function startInterval() {
  clearInterval(intervalID);
  if (intervalID === null) {
    intervalID = setInterval(function () {
      var _0x16c7f7 = anApp.s.H.sk;
      let _0x3904f8 = Math.PI;
      var _0x4d22ae = _0x16c7f7 + _0x3904f8 / 0x168 * 0x9;
      if (_0x4d22ae >= _0x3904f8) {
        _0x4d22ae = -_0x16c7f7;
      }
      anApp.s.H.sk = _0x4d22ae;
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
    let _0x9cab26 = anApp.s.H.sk;
    let _0x3a12fb = Math.PI;
    let _0x526a95 = _0x9cab26 + _0x3a12fb / 0x168 * 0x9;
    if (_0x526a95 >= _0x3a12fb) {
      _0x526a95 = -_0x9cab26;
    }
    anApp.s.H.sk = _0x526a95;
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
const wormxt_5dlrs_Obj = {
  'visiblePowersAll': false,
  'visiblePowersSpeedZigZag': true
};
var wormxt_Obj = {
  'zoomSpeed': 0x1,
  'PotenciadorSize': localStorage.getItem("PotenciadorSize") || 0x2,
  'PotenciadorAura': localStorage.getItem("PotenciadorAura") || 1.2,
  'ComidaShadow': localStorage.getItem("ComidaShadow") || 0x2,
  'ComidaSize': localStorage.getItem("ComidaSize") || 0x2,
  'laserColor': "FFFFFF",
  'colorFondo': '0D0400',
  'colorBorde': "FF0000",
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': true,
  'sectores': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
const showVersionPays = async function (_0x1a0c73) {
  var _0x1f1962 = clientes.clientesActivos.find(function (_0xed7c21) {
    return _0xed7c21.cliente_ID === _0x1a0c73.user_data.userId && _0xed7c21.cliente_SUBSCRIPTION && (_0xed7c21.cliente_SUBSCRIPTION.description === '5$' || _0xed7c21.cliente_SUBSCRIPTION.description === '3$');
  });
  if (_0x1f1962) {
    console.log("El ID " + _0x1a0c73.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    if (_0x1f1962.cliente_SUBSCRIPTION.description === '5$') {
      settings5dolars(_0x1f1962.cliente_FECHA_EXPIRACION);
    } else if (_0x1f1962.cliente_SUBSCRIPTION.description === '3$') {
      settings3dolars();
    }
  } else {
    console.log("El ID generado no coincide con ningún ID almacenado en la base de datos.");
  }
};
function setSectorsGame() {
  lxpdBackground.removeChildren();
  lxpdBackground.clear();
  lxpdBackground.beginFill("0x0D0400", 0x1);
  lxpdBackground.lineStyle(0x1, "0xFF0000", 0x1);
  lxpdBackground.drawCircle(0x0, 0x0, 0x1f4);
  lxpdBackground.endFill();
}
const settings5dolars = async function (_0x5f3873) {
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + _0x5f3873 + '</span>');
  $("#wtr-settings-version").after("\n        <a href=\"https://www.myinstants.com/en/index/us/\" target=\"_blank\">1: Download sound</a>\n        <br>\n        <a href=\"https://catbox.moe/\" target=\"_blank\">2: Upload sound</a>\n        <br>\n        <label for=\"sound-hs\">Sound link HS: </label>\n        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\"><br>\n        <label for=\"sound-hs\">Sound link 10HS: </label>\n        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\"><br>\n    ");
  $("#sound-hs").val('https://app2.wormateturkiye.com/public/audio/hs.mp3');
  $("#sound-10hs").val('https://app2.wormateturkiye.com/public/audio/laugh.mp3');
  lxpdhssound = new Audio($("#sound-hs").val());
  lxpdlaughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    lxpdhssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    lxpdlaughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\"> : laser headshot</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\"> : Sectors</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : Show All Power-Ups</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-zoomWWC-switch\"><span class=\"names_settings\"> : zoom change - wwc</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\"><span class=\"names_settings\"> : Show Speed&Zigzag</span></div><!--div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-interactive-switch\"><span class=\"names_settings\"> : interactive buttons</span></div--><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"> : Color del juego</span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\"> : Color laserHS</span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\"> : Borde Del juego</span></div>");
  const _0x59aa83 = {
    'color_paletRGB': _0xe5a1c9 => wormxt_Obj.colorFondo = _0xe5a1c9,
    'color_palet': _0x4207c9 => wormxt_Obj.laserColor = _0x4207c9,
    'color_palet2': _0x568976 => wormxt_Obj.colorBorde = _0x568976
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const _0x25261f = $(this).attr('id');
    const _0x1a8838 = $(this).val().replace('#', '');
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + _0x25261f + ": " + _0x1a8838);
    if (_0x59aa83[_0x25261f]) {
      _0x59aa83[_0x25261f](_0x1a8838);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop('checked', false);
  $('#settings-notAbilityAll-switch').on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
    }
  });
  theoKzObjects.zoomZworm = false;
  $("#settings-zoomWWC-switch").prop("checked", false);
  $("#settings-zoomWWC-switch").on("click", function () {
    if (this.checked) {
      theoKzObjects.zoomZworm = true;
    } else {
      theoKzObjects.zoomZworm = false;
    }
  });
  wormxt_5dlrs_Obj.visiblePowersSpeedZigZag = true;
  $("#settings-Speed_ZigZag-switch").prop('checked', true);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersSpeedZigZag = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersSpeedZigZag = false;
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
var linkCSS = "https://wormrise.github.io/extension/w2/css/game.css?v=" + TIME;
const showServer2 = async function (_0x171f48) {
  fetchCustomLogo(_0x171f48.u.si.userId);
  loadStylesheet(linkCSS);
  zwormData.id_user = _0x171f48.u.si.userId;
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  function _0x58325f() {
    $.ajax({
      'url': "https://wormrise.github.io/extension/w2/api/streming.php",
      'method': "GET",
      'dataType': 'json',
      'success': function (_0x5a5ba0) {
        var _0x47b325 = _0x5a5ba0.allstreamers.streamers.filter(function (_0x483426) {
          return _0x483426.status === "online";
        });
        if (_0x47b325.length === 0x0) {
          console.log("No hay streamers online.");
          return;
        }
        function _0x2ad592(_0x270d51) {
          var _0x5eda62 = "\n                        <div>\n                            <span class=\"status-indicator " + (_0x270d51.status === 'online' ? "online" : "offline") + "\"></span>\n                            <img src=\"" + _0x270d51.url_logo + "\" class=\"streamer-logo\" alt=\"" + _0x270d51.nombre + "\">\n                            <a href=\"" + _0x270d51.url_stream + "\" target=\"_blank\">live!!!</a>\n                        </div>\n                    ";
          toastr.options = {
            'closeButton': true,
            'debug': false,
            'newestOnTop': false,
            'progressBar': true,
            'positionClass': "toast-top-right",
            'preventDuplicates': false,
            'showDuration': "300",
            'hideDuration': "1000",
            'timeOut': '5000',
            'extendedTimeOut': "1000",
            'showEasing': 'swing',
            'hideEasing': "linear",
            'showMethod': "fadeIn",
            'hideMethod': "fadeOut"
          };
          toastr.info(_0x5eda62, '' + _0x270d51.nombre);
        }
        _0x47b325.forEach(function (_0x18819e) {
          _0x2ad592(_0x18819e);
        });
      },
      'error': function (_0x594d15) {
        console.error("Error al obtener los datos:", _0x594d15);
      }
    });
  }
  _0x58325f();
  setInterval(_0x58325f, 0xdbba0);
  console.log(_0x171f48, _0x171f48.u.si.userId);
  lxpdhssound = new Audio("https://app2.wormateturkiye.com/public/audio/hs.mp3");
  lxpdlaughsound = new Audio("https://app2.wormateturkiye.com/public/audio/laugh.mp3");
  lxpdexplotWubtracttexture = new pixi.Sprite();
  lxpdexplotWubtracttexture.texture = explotWtexture;
  lxpdexplotWubtracttexture.interactive = true;
  lxpdexplotWubtracttexture.buttonMode = true;
  lxpdexplotWubtracttexture.x = -0x2d;
  lxpdexplotWubtracttexture.y = 0xa;
  lxpdexplotWubtracttexture.alpha = 0.25;
  function _0x4394cf() {
    lxpdexplotWubtracttexture.interactive = false;
    var _0x4915d7 = 0x0;
    var _0x1c3a12 = setInterval(function () {
      var _0x2d8efb = 0x1 - 0.0075 * _0x4915d7;
      lxpdexplotWubtracttexture.alpha = _0x2d8efb;
      _0x4915d7++;
      if (_0x4915d7 > 0x64) {
        clearInterval(_0x1c3a12);
        lxpdexplotWubtracttexture.alpha = 0.25;
        lxpdexplotWubtracttexture.interactive = true;
      }
    }, 100);
  }
  lxpdexplotWubtracttexture.on("mouseup", function () {
    _0x4394cf();
    const _0x1d7424 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(_0x1d7424);
    setTimeout(() => {
      let _0x1e5507 = lxpdlastserver;
      if (_0x1e5507) {
        anApp.r.Hd();
        anApp.sa(_0x1e5507);
      }
    }, 0x3e8);
  });
  lxpdgirosubtracttexture = new pixi.Sprite();
  lxpdgirosubtracttexture.texture = ungirotexture;
  lxpdgirosubtracttexture.interactive = true;
  lxpdgirosubtracttexture.buttonMode = true;
  lxpdgirosubtracttexture.x = -0xa;
  lxpdgirosubtracttexture.y = 0xa;
  lxpdgirosubtracttexture.alpha = 0.25;
  lxpdgirosubtracttexture.on("mouseup", function () {
    _0x17337d();
  });
  let _0x50510c = false;
  function _0x17337d() {
    if (_0x50510c) {
      lxpdgirosubtracttexture.texture = ungirotexture;
      lxpdgirosubtracttexture.alpha = 0.25;
      console.log("Giro deactivated");
      isRunning = false;
      initialInterval = 0x37;
      cycleCounter = 0x1;
      isIncrementing = true;
      clearInterval(intervalID);
      intervalID = null;
    } else {
      lxpdgirosubtracttexture.alpha = 0.75;
      console.log("Giro activated");
      startInterval();
      isRunning = true;
    }
    _0x50510c = !_0x50510c;
  }
  if (lxpdmobilecheck()) {
    lxpdgirosubtracttexture.x = -0x4b;
    lxpdexplotWubtracttexture.x = -0xa;
    lxpdexplotWubtracttexture.y = 0x2d;
    let _0x374ad5 = new Function("return PIXI;")();
    let _0x3f4321 = _0x374ad5.Texture.from('https://i.imgur.com/kGjR9yf.png');
    let _0x5ecbde = _0x374ad5.Texture.from("https://i.imgur.com/4JZUa1u.png");
    lxpdzoomplustexture = new _0x374ad5.Sprite();
    lxpdzoomplustexture.texture = _0x3f4321;
    lxpdzoomplustexture.interactive = true;
    lxpdzoomplustexture.buttonMode = true;
    lxpdzoomplustexture.x = -0xa;
    lxpdzoomplustexture.y = 0xa;
    lxpdzoomplustexture.alpha = 0.25;
    lxpdzoomplustexture.on("mouseup", function () {
      lxpdupdatezoom(Math.min(lxpdmultiplier + 0.25, 0x32));
    });
    lxpdzoomsubtracttexture = new _0x374ad5.Sprite();
    lxpdzoomsubtracttexture.texture = _0x5ecbde;
    lxpdzoomsubtracttexture.interactive = true;
    lxpdzoomsubtracttexture.buttonMode = true;
    lxpdzoomsubtracttexture.x = -0x2b;
    lxpdzoomsubtracttexture.y = 0xa;
    lxpdzoomsubtracttexture.alpha = 0.25;
    lxpdzoomsubtracttexture.on("mouseup", function () {
      lxpdupdatezoom(Math.max(lxpdmultiplier - 0.25, 0.25));
    });
  }
  $('#game-view').append("\n        <button id=\"openVoiceChatPanel\" class=\"open-btn\" style=\"position: absolute;margin-left: 30px;\"><span class=\"material-icons\">volume_up</span> </button>\n        <div id=\"voice-chat-panel\" class=\"hidden\">\n            <button id=\"closeVoiceChatPanel\" class=\"close-btn\"><span class=\"material-icons\">close</span> </button>\n\n            <h3>Voice Chat BETA 0.01</h3>\n            <div id=\"coming-soon-overlay\" style=\"\n        position: absolute;\n        top: 50px;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.7);\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 24px;\n    \">\n        <h1>Coming Soon</h1>\n    </div>\n            \n            <!-- Controles de llamada -->\n            <div class=\"control-buttons\">\n                <button id=\"startCall\"><span class=\"material-icons\">call</span> Start Call</button>\n                <button id=\"endCall\" disabled><span class=\"material-icons\">call_end</span> End Call</button>\n            </div>\n            \n            <!-- Información sobre la llamada -->\n            <div id=\"roomArea\">\n                <button id=\"joinRoom\" style=\"margin-left: 30%;\"><span class=\"material-icons\">group_add</span> Join Room</button>\n                <p id=\"roomInfo\">Join a room to start chatting!</p>\n            </div>\n        </div>\n    ");
  $("#openVoiceChatPanel").click(function () {
    $("#voice-chat-panel").removeClass("hidden");
    _0x17337d();
  });
  $('#closeVoiceChatPanel').click(function () {
    $('#voice-chat-panel').addClass('hidden');
    _0x17337d();
  });
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  var _0x328162 = function () {
    $("#chatInput").css("display", "none").val('');
    $("#game-canvas").focus();
  };
  var _0x37399f = function () {
    let _0x5c078d = $("#chatInput").val();
    if ($.trim(_0x5c078d) !== '') {
      console.log("Mensaje enviado:", _0x5c078d);
      zwormData.message = _0x5c078d;
      setTimeout(() => {
        zwormData.message = '';
      }, 0x5dc);
    }
  };
  $("#chatInput").on("keydown", function (_0x328a93) {
    if (_0x328a93.key === "Enter") {
      _0x37399f();
      _0x328162();
    } else if (_0x328a93.key === "Escape") {
      _0x328162();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $('#mm-settings').html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-wtr-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $('#background-canvas').replaceWith("<canvas id=\"background-canvas\"></canvas>");
  let _0x4d70a8 = $("<div class=\"icon-selector\"></div>");
  for (let _0x117d37 = 0x1; _0x117d37 < 0x2a; _0x117d37++) {
    const _0x4fe19e = 'https://deltav4.gitlab.io/v7/assets/cursors/cursor_' + _0x117d37.toString().padStart(0x2, '0') + ".cur";
    const _0x38faa6 = _0x117d37 === 0x1 ? "active" : '';
    const _0x484058 = $("<img>").attr({
      'src': _0x4fe19e
    });
    const _0x24ff50 = $('<div>').addClass("cursor-box icon-selector__item").addClass(_0x38faa6).append(_0x484058);
    _0x4d70a8.append(_0x24ff50);
  }
  $("#wtr-settings-version").after(_0x4d70a8);
  const _0x2771f8 = ['https://i.imgur.com/aHAHSh1.png', 'https://i.imgur.com/JOXhGUu.png', "https://i.imgur.com/HoS883S.png"];
  let _0x8db672 = 0x0;
  function _0x4f6817() {
    const _0x46398b = $("#aqnvgcpz05orkobh");
    const _0x5dbea7 = (_0x8db672 + 0x1) % _0x2771f8.length;
    const _0x350ec6 = $("<img src=\"" + _0x2771f8[_0x5dbea7] + "\" alt=\"Flyer\" style=\"width: 100%; height: 65%; position: absolute; top: 0; left: 100%;\">");
    _0x46398b.append(_0x350ec6);
    _0x46398b.find("img").eq(0x0).animate({
      'left': "-100%"
    }, 0x3e8, function () {
      $(this).remove();
    });
    _0x350ec6.animate({
      'left': '0%'
    }, 0x3e8);
    _0x8db672 = _0x5dbea7;
  }
  $('#aqnvgcpz05orkobh').css({
    'position': "relative",
    'overflow': "hidden",
    'width': "300px",
    'height': "400px"
  }).html("<img src=\"" + _0x2771f8[0x0] + "\" alt=\"Flyer\" style=\"width: 100%; height: 65%; position: absolute; top: 0; left: 0;\">");
  setInterval(_0x4f6817, 0xbb8);
  $(".cursor-box").on("click", function () {
    var _0x48e219 = $(this).find("img").attr("src");
    $("body").css('cursor', "url(" + _0x48e219 + "), auto");
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#social-buttons").replaceWith('');
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://i.imgur.com/4fFTM4l.png");
  $(".loading-logo").attr("src", 'https://i.imgur.com/4fFTM4l.png');
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #wtrplayagain, #final-replay").click(function () {});
  $('#mm-wtr-settings').click(function () {
    $("#settings-view").css('display', 'none');
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin");
    }, 0x64);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $('#mm-skin-canv').removeClass("cambio-skin2");
    }, 0x64);
  });
  const _0x209aee = ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-wtr-settings"];
  _0x209aee.forEach(function (_0x135143) {
    $(_0x135143).hover(function () {
      $(this).css({
        'box-shadow': "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        'box-shadow': "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $('.mm-merchant-cont').replaceWith('');
  $('#fullscreen').prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#wtrplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $('#user_config').on('click', function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css('display', 'block');
    _0x50510c = false;
    _0x17337d();
  });
  $("#user_config").after("\n        <div id=\"settings-container2\">\n            <button id=\"clossed_Setings\">X</button>\n            <div class=\"label\" id=\"titleSetings\">Settings</div>\n            <div class=\"display_setting\">\n                <div class=\"container\">\n                    <span class=\"names_settings\">Tamaño del potenciador: </span>\n                    <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"" + wormxt_Obj.PotenciadorSize + "\" step=\"1\" oninput=\"rangevalue1.value=value\" />\n                    <output id=\"rangevalue1\">" + wormxt_Obj.PotenciadorSize + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\">Aura del potenciador: </span>\n                    <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"" + wormxt_Obj.PotenciadorAura + "\" step=\"0.2\" oninput=\"PortionAuravalue.value=value\" />\n                    <output id=\"PortionAuravalue\">" + wormxt_Obj.PotenciadorAura + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\">Tamaño de comida: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + wormxt_Obj.ComidaSize + "\" step=\"0.5\" oninput=\"rangevalue2.value=value\" />\n                    <output id=\"rangevalue2\">" + wormxt_Obj.ComidaSize + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\">Brillo de comida: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + wormxt_Obj.ComidaShadow + "\" step=\"0.5\" oninput=\"FoodShadowvalue.value=value\" />\n                    <output id=\"FoodShadowvalue\">" + wormxt_Obj.ComidaShadow + "</output>\n                </div>\n                <div class=\"settings-checkbox\">\n                    <input type=\"checkbox\" id=\"settings-backgroundSolid-switch\">\n                    <span class=\"names_settings\"> : Background Solid </span>\n                </div>\n                <div id=\"settings5dolars\"></div>\n            </div>\n        </div>\n    ");
  $("#settings-backgroundSolid-switch").prop('checked', true);
  $("#settings-backgroundSolid-switch").on('click', function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    _0x50510c = true;
    _0x17337d();
  });
  function _0x4df874(_0x2d5c86, _0x1b38fe, _0x46ca8f) {
    $(_0x2d5c86).on("input", function () {
      wormxt_Obj[_0x1b38fe] = $(this).val();
      localStorage.setItem(_0x46ca8f, $(this).val());
      console.log("Valor guardado en localStorage:", localStorage.getItem(_0x46ca8f));
    });
  }
  _0x4df874("#PortionSize", "PotenciadorSize", "PotenciadorSize");
  _0x4df874("#PortionAura", 'PotenciadorAura', 'PotenciadorAura');
  _0x4df874("#FoodSize", 'ComidaSize', "ComidaSize");
  _0x4df874("#FoodShadow", "ComidaShadow", "ComidaShadow");
  $("#christmas-hat").css({
    'position': 'absolute',
    'top': "-11px",
    'transform': "translateX(-5%)",
    'width': '40px',
    'height': "auto"
  });
  $("#mm-player-info").css("position", 'relative');
};
const ctx = {
  'fontStyle': {
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'wordWrap': true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", '#00B2ED', "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0x0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    'align': "center",
    'fill': color,
    'fontSize': 0x19,
    'lineJoin': "round",
    'whiteSpace': 'normal',
    'wordWrap': true,
    'dropShadow': true,
    'dropShadowBlur': 0x6,
    'fontWeight': 'bold'
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
function assignPtcValues(_0x5ba871, _0x1ed537, _0xddac9d) {
  let _0x19704b = portionTimes[_0x1ed537] - parseInt((0.99 == _0xddac9d ? 0x1 : _0xddac9d) * portionTimes[_0x1ed537] / 0x1);
  let _0x474e07 = "clock_ad" + _0x1ed537;
  _0x5ba871.Tf[_0x1ed537].addChild(ctx.ptc[_0x474e07]);
  if (ctx.ptc[_0x474e07]) {
    ctx.ptc[_0x474e07].x = _0x19704b >= 0x64 ? 0xb : _0x19704b >= 0xa ? 0x12 : 0x1a;
    ctx.ptc[_0x474e07].text = _0x19704b;
  }
}
ctx.teamsContainer = new PIXI.Container();
var createServerMessage = function (_0x6dd698, _0x5828e3) {
  if (_0x5828e3.trim() === '') {
    return;
  }
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': 'toast-top-center',
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
    'toastClass': "server-message-toast"
  };
  toastr.success(_0x5828e3, _0x6dd698, {
    'iconClass': "toast-info"
  });
};
var createTeamMessage = function (_0x37eb71, _0x48cd73, _0x537883) {
  if (_0x537883.trim() === '') {
    return;
  }
  gameState.players.forEach((_0xe799db, _0x71fd85) => {
    if (_0xe799db.teamCode === _0x37eb71 && _0xe799db.nickname !== _0x48cd73) {
      let _0x1e3fa4 = _0xe799db.nickname.length > 0xc ? _0xe799db.nickname.slice(0x0, 0xc) : _0xe799db.nickname;
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
        'extendedTimeOut': '1000',
        'showEasing': 'swing',
        'hideEasing': "linear",
        'showMethod': "fadeIn",
        'hideMethod': "fadeOut"
      };
      toastr.success('' + _0x537883, '' + _0x48cd73, {
        'iconClass': "toast-info"
      });
      console.log("Mensaje enviado por " + _0x48cd73 + " recibido por el jugador " + _0x1e3fa4 + " (" + _0x71fd85 + ") del equipo " + _0x37eb71);
    }
  });
};
ctx.titleRec = new PIXI.Text("Top 8 (👑)", ctx.fontStyle.blanco);
ctx.titleRec.y = -0x5;
ctx.containerHsRec = new PIXI.Container();
ctx.containerHsRec.x = -0x37;
ctx.containerHsRec.y = 0x9b;
const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
const textStyle = {
  'align': "center",
  'fontSize': 0xc,
  'lineJoin': 'round',
  'strokeThickness': 0x1,
  'whiteSpace': "normal",
  'wordWrap': true
};
for (let index = 0x0; index < 0x8; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(wallBounce + '.', ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 0x9 ? -0x5 : 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': colors[index % colors.length],
    ...textStyle
  });
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec.addChild(playerNameText);
  let playerHsText = new PIXI.Text('--', {
    'fill': colors[index % colors.length],
    ...textStyle
  });
  playerHsText.x = 0x64;
  playerHsText.y = 0xd * wallBounce;
  ctx.containerHsRec.addChild(playerHsText);
}
ctx.containerHsRec.addChild(ctx.titleRec);
const updateTop8Hs = function () {
  const _0x106f76 = gameState.players;
  const _0x32b98d = Array.from(_0x106f76.values());
  const _0x1661c1 = _0x32b98d.filter(_0x1436a8 => _0x1436a8.hskill.hs > 0x0 && _0x1436a8.nickname.trim() !== '');
  _0x1661c1.sort((_0x3478a4, _0x2ca5e7) => _0x2ca5e7.hskill.hs - _0x3478a4.hskill.hs);
  console.log(_0x1661c1);
  const _0x48a46f = [];
  for (let _0x11e32d = 0x0; _0x11e32d < 0x8; _0x11e32d++) {
    const _0x4e1148 = _0x1661c1[_0x11e32d];
    if (_0x4e1148) {
      _0x48a46f.push({
        'nombre': _0x4e1148.nickname.substring(0x0, 0xa),
        'nombre2': _0x4e1148.nickname.split('ㅤ')[0x0],
        'enemyNameHs': _0x4e1148.enemyNameHs ? _0x4e1148.enemyNameHs.split('ㅤ')[0x0] : '--',
        'hs': _0x4e1148.hskill.hs,
        'teamCode': _0x4e1148.teamCode,
        'teamColor': _0x4e1148.teamColor,
        'position': _0x4e1148.position
      });
    } else {
      _0x48a46f.push({
        'nombre': '--',
        'nombre2': '--',
        'enemyNameHs': '--',
        'hs': '--',
        'teamCode': '',
        'teamColor': '',
        'position': null
      });
    }
  }
  for (let _0x28b081 = 0x0; _0x28b081 < 0x8; _0x28b081++) {
    if (ctx.containerHsRec.children[0x3 * _0x28b081 + 0x1]) {
      ctx.containerHsRec.children[0x3 * _0x28b081 + 0x1].text = _0x48a46f[_0x28b081].nombre;
    }
    if (ctx.containerHsRec.children[0x3 * _0x28b081 + 0x2]) {
      ctx.containerHsRec.children[0x3 * _0x28b081 + 0x2].text = _0x48a46f[_0x28b081].hs;
    }
  }
};
var createTeamUbication = function (_0x11ba03, _0x203aaa) {
  updatePlayerTable(gameState);
  gameState.players.forEach((_0x2d6460, _0x267158) => {
    if (_0x2d6460.teamCode === _0x11ba03) {
      console.log(_0x2d6460);
      let _0x2cc229 = _0x2d6460.teamColor ? parseInt(_0x2d6460.teamColor) : _0x203aaa;
      if (!ctx[_0x267158]) {
        ctx[_0x267158] = new PIXI.Graphics();
        ctx[_0x267158].zIndex = 0x2;
        ctx[_0x267158].alpha = 0.9;
        if (ctx.teamsContainer) {
          ctx.teamsContainer.addChild(ctx[_0x267158]);
        } else {
          console.error("Error: ctx.teamsContainer is not defined.");
        }
      }
      ctx[_0x267158].clear();
      ctx[_0x267158].beginFill(_0x2cc229);
      ctx[_0x267158].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x267158].endFill();
      ctx[_0x267158].lineStyle(0x1, 0x0);
      ctx[_0x267158].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x267158].endFill();
      ctx[_0x267158].x = _0x2d6460.position.x;
      ctx[_0x267158].y = _0x2d6460.position.y;
    }
  });
};
var clearTeamUbication = function () {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(_0x103c5f => {
      if (ctx[_0x103c5f] instanceof PIXI.Graphics && ctx[_0x103c5f].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x103c5f]);
        ctx[_0x103c5f].destroy(true);
        delete ctx[_0x103c5f];
      }
      if (ctx[_0x103c5f + "_text"] && ctx[_0x103c5f + '_text'].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x103c5f + "_text"]);
        ctx[_0x103c5f + "_text"].destroy(true);
        delete ctx[_0x103c5f + "_text"];
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
  let deltaCoordinate = new PIXI.Text(" ", ctx.fontStyle.blanco);
  deltaCoordinate.x = 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': "#FFFFFF",
    'fontSize': 0xc
  });
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(playerNameText);
  playersTexts.push(playerNameText);
}
ctx.containerHsRec2.addChild(ctx.titleRec2);
function updatePlayerTable(_0x2f67b6) {
  const _0x470b3b = _0x2f67b6.players;
  const _0x121521 = Array.from(_0x470b3b.values());
  const _0x16a4ae = _0x121521.filter(_0x306014 => _0x306014.teamCode === '');
  playersTexts.forEach((_0x14f101, _0x445272) => {
    if (_0x16a4ae[_0x445272]) {
      let _0xf23d9 = _0x16a4ae[_0x445272];
      _0x14f101.text = _0xf23d9.nickname.substring(0x0, 0x14);
      _0x14f101.style.fill = _0xf23d9.teamColor;
    } else {
      _0x14f101.text = '--';
      _0x14f101.style.fill = '#FFFFFF';
    }
  });
}
function account() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var _0x11e3bc = $(this).attr('data-country-name');
    $(".ui-tab").removeClass('ui-tab-active');
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + _0x11e3bc.toLowerCase()).fadeIn(0x1f4);
    $(".servers-container > div").not(".servers-" + _0x11e3bc.toLowerCase()).fadeOut(0x64);
  });
}
function obtieneUSER() {
  var _0x260550 = {};
  window.onclick = function () {
    _0x260550 = window.nodes;
    if (_0x260550 && Object.keys(_0x260550).length > 0x0) {
      console.log(_0x260550);
      if (_0x260550) {
        var _0x52598d = window.mouseX - _0x260550.qj.If.x;
        var _0x2f64f0 = window.mouseY - _0x260550.qj.If.y;
        var _0x561349 = _0x260550.Mb.ad;
        var _0x3356cd = Math.sqrt(_0x52598d * _0x52598d + _0x2f64f0 * _0x2f64f0);
        console.log("Cell:", _0x260550, "nickname: ", _0x561349, "Distance:", _0x3356cd);
      }
    }
  };
}
;
function loadScript2(_0x3c2127, _0x158281 = true) {
  return new Promise((_0x4287fb, _0x4d4bdb) => {
    var _0x5cf074 = document.createElement("script");
    _0x5cf074.type = "text/javascript";
    _0x5cf074.src = _0x3c2127;
    _0x5cf074.defer = _0x158281;
    _0x5cf074.onload = _0x4287fb;
    _0x5cf074.onerror = _0x4d4bdb;
    document.head.appendChild(_0x5cf074);
  });
}
function loadStylesheet(_0x5c6554) {
  return new Promise((_0x256728, _0x1d43bb) => {
    var _0x35b4a9 = document.createElement('link');
    _0x35b4a9.rel = "stylesheet";
    _0x35b4a9.type = "text/css";
    _0x35b4a9.href = _0x5c6554;
    _0x35b4a9.onload = _0x256728;
    _0x35b4a9.onerror = _0x1d43bb;
    document.head.appendChild(_0x35b4a9);
  });
}
loadStylesheet('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css');
"use strict";
var _typeof = 'function' == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x44bed2) {
  return typeof _0x44bed2;
} : function (_0x207377) {
  return _0x207377 && "function" == typeof Symbol && _0x207377.constructor === Symbol && _0x207377 !== Symbol.prototype ? "symbol" : typeof _0x207377;
};
var GoogleAuth;
!function () {
  try {
    console.log(function (_0x32db67, _0x46da0b) {
      for (var _0x5833e4 = 0x0; _0x5833e4 < _0x46da0b.length; _0x5833e4 += 0x2) {
        _0x32db67 = _0x32db67.replaceAll(_0x46da0b[_0x5833e4], _0x46da0b[_0x5833e4 + 0x1]);
      }
      return _0x32db67;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', 'hhhh', 'Q', "ssss", 'M', "mmm", 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0x45866f) {}
}();
window.addEventListener("load", function () {
  function _0xb25d4a() {
    (function (_0x165420, _0x29b1da, _0x702d6) {
      var _0x207966 = [];
      var _0x275985 = [];
      var _0x39341b = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x90ff41, _0x5eaba8) {
          var _0x55486b = this;
          setTimeout(function () {
            _0x5eaba8(_0x55486b[_0x90ff41]);
          }, 0x0);
        },
        'addTest': function (_0x5387ae, _0x3b47b6, _0x41e5a9) {
          _0x275985.push({
            'name': _0x5387ae,
            'fn': _0x3b47b6,
            'options': _0x41e5a9
          });
        },
        'addAsyncTest': function (_0x5f5939) {
          _0x275985.push({
            'name': null,
            'fn': _0x5f5939
          });
        }
      };
      var _0x50677e = function () {};
      _0x50677e.prototype = _0x39341b;
      _0x50677e = new _0x50677e();
      var _0x4eb013 = false;
      try {
        _0x4eb013 = "WebSocket" in _0x165420 && 0x2 === _0x165420.WebSocket.CLOSING;
      } catch (_0x49507c) {}
      _0x50677e.addTest("websockets", _0x4eb013);
      var _0x2e06a2 = _0x29b1da.documentElement;
      var _0x576ac4 = 'svg' === _0x2e06a2.nodeName.toLowerCase();
      _0x50677e.addTest("canvas", function () {
        var _0x1e6bee = "function" != typeof _0x29b1da.createElement ? _0x29b1da.createElement(arguments[0x0]) : _0x576ac4 ? _0x29b1da.createElementNS.call(_0x29b1da, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x29b1da.createElement.apply(_0x29b1da, arguments);
        return !(!_0x1e6bee.getContext || !_0x1e6bee.getContext('2d'));
      });
      _0x50677e.addTest("canvastext", function () {
        return false !== _0x50677e.canvas && "function" == typeof ("function" != typeof _0x29b1da.createElement ? _0x29b1da.createElement(arguments[0x0]) : _0x576ac4 ? _0x29b1da.createElementNS.call(_0x29b1da, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x29b1da.createElement.apply(_0x29b1da, arguments)).getContext('2d').fillText;
      });
      (function () {
        var _0x35893c;
        var _0x3dec02;
        var _0x11dd3f;
        var _0x383697;
        var _0x476b95;
        var _0x273b29;
        var _0x4f8dad;
        for (var _0x4a5005 in _0x275985) if (_0x275985.hasOwnProperty(_0x4a5005)) {
          _0x35893c = [];
          _0x3dec02 = _0x275985[_0x4a5005];
          if (_0x3dec02.name && (_0x35893c.push(_0x3dec02.name.toLowerCase()), _0x3dec02.options && _0x3dec02.options.aliases && _0x3dec02.options.aliases.length)) {
            for (_0x11dd3f = 0x0; _0x11dd3f < _0x3dec02.options.aliases.length; _0x11dd3f++) {
              _0x35893c.push(_0x3dec02.options.aliases[_0x11dd3f].toLowerCase());
            }
          }
          _0x383697 = (undefined === _0x3dec02.fn ? "undefined" : _typeof(_0x3dec02.fn)) === "function" ? _0x3dec02.fn() : _0x3dec02.fn;
          for (_0x476b95 = 0x0; _0x476b95 < _0x35893c.length; _0x476b95++) {
            _0x273b29 = _0x35893c[_0x476b95];
            _0x4f8dad = _0x273b29.split('.');
            if (0x1 === _0x4f8dad.length) {
              _0x50677e[_0x4f8dad[0x0]] = _0x383697;
            } else {
              if (!(!_0x50677e[_0x4f8dad[0x0]] || _0x50677e[_0x4f8dad[0x0]] instanceof Boolean)) {
                _0x50677e[_0x4f8dad[0x0]] = new Boolean(_0x50677e[_0x4f8dad[0x0]]);
              }
              _0x50677e[_0x4f8dad[0x0]][_0x4f8dad[0x1]] = _0x383697;
            }
            _0x207966.push((_0x383697 ? '' : "no-") + _0x4f8dad.join('-'));
          }
        }
      })();
      (function (_0x4ba2c1) {
        var _0x918e94 = _0x2e06a2.className;
        var _0x55fe61 = _0x50677e._config.classPrefix || '';
        if (_0x576ac4) {
          _0x918e94 = _0x918e94.baseVal;
        }
        if (_0x50677e._config.enableJSClass) {
          var _0x47c338 = new RegExp("(^|\\s)" + _0x55fe61 + "no-js(\\s|$)");
          _0x918e94 = _0x918e94.replace(_0x47c338, '$1' + _0x55fe61 + "js$2");
        }
        if (_0x50677e._config.enableClasses) {
          _0x918e94 += " " + _0x55fe61 + _0x4ba2c1.join(" " + _0x55fe61);
          if (_0x576ac4) {
            _0x2e06a2.className.baseVal = _0x918e94;
          } else {
            _0x2e06a2.className = _0x918e94;
          }
        }
      })(_0x207966);
      delete _0x39341b.addTest;
      delete _0x39341b.addAsyncTest;
      for (var _0x5b0c06 = 0x0; _0x5b0c06 < _0x50677e._q.length; _0x5b0c06++) {
        _0x50677e._q[_0x5b0c06]();
      }
      _0x165420.Modernizr = _0x50677e;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById('game-wrap').style.display = "block";
  if (!_0xb25d4a()) {
    return void (document.getElementById('error-view').style.display = "block");
  }
  !function () {
    function _0xd0f967(_0x50aae9) {
      const _0x176a54 = _0x50aae9 + '=';
      const _0xad3c29 = document.cookie.split(';');
      for (let _0x6f8580 = 0x0; _0x6f8580 < _0xad3c29.length; _0x6f8580++) {
        let _0x49681b = _0xad3c29[_0x6f8580];
        while (_0x49681b.charAt(0x0) === " ") {
          _0x49681b = _0x49681b.substring(0x1);
        }
        if (_0x49681b.indexOf(_0x176a54) === 0x0) {
          return _0x49681b.substring(_0x176a54.length, _0x49681b.length);
        }
      }
      return '';
    }
    function _0x2ec3f6(_0x3a1fb7, _0x3696ae, _0x309384) {
      var _0x360659 = new Date();
      _0x360659.setTime(_0x360659.getTime() + 0x5265c00 * _0x309384);
      var _0x34b082 = 'expires=' + _0x360659.toUTCString();
      document.cookie = _0x3a1fb7 + '=' + _0x3696ae + "; " + _0x34b082 + "; path=/";
    }
    function _0x4ed7ee(_0x384c54) {
      var _0x219e5f = (Math.floor(_0x384c54) % 0x3c).toString();
      var _0x2984cc = (Math.floor(_0x384c54 / 0x3c) % 0x3c).toString();
      var _0x6adcbf = (Math.floor(_0x384c54 / 0xe10) % 0x18).toString();
      var _0xe58763 = Math.floor(_0x384c54 / 0x15180).toString();
      var _0xb2c06b = window.I18N_MESSAGES['util.time.days'];
      var _0x260997 = window.I18N_MESSAGES["util.time.hours"];
      var _0xa5aa15 = window.I18N_MESSAGES["util.time.min"];
      var _0x485af0 = window.I18N_MESSAGES["util.time.sec"];
      return _0xe58763 > 0x0 ? _0xe58763 + " " + _0xb2c06b + " " + _0x6adcbf + " " + _0x260997 + " " + _0x2984cc + " " + _0xa5aa15 + " " + _0x219e5f + " " + _0x485af0 : _0x6adcbf > 0x0 ? _0x6adcbf + " " + _0x260997 + " " + _0x2984cc + " " + _0xa5aa15 + " " + _0x219e5f + " " + _0x485af0 : _0x2984cc > 0x0 ? _0x2984cc + " " + _0xa5aa15 + " " + _0x219e5f + " " + _0x485af0 : _0x219e5f + " " + _0x485af0;
    }
    function _0x2962eb(_0x4289d9, _0xc96c04, _0x41adb7) {
      var _0x390d45 = document.createElement("script");
      var _0x115b45 = true;
      if (_0xc96c04) {
        _0x390d45.id = _0xc96c04;
      }
      _0x390d45.async = "async";
      _0x390d45.type = 'text/javascript';
      _0x390d45.src = _0x4289d9;
      if (_0x41adb7) {
        _0x390d45.onload = _0x390d45.onreadystatechange = function () {
          _0x115b45 = false;
          try {
            _0x41adb7();
          } catch (_0x34ffbf) {
            console.log(_0x34ffbf);
          }
          _0x390d45.onload = _0x390d45.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName('head')[0x0]).appendChild(_0x390d45);
    }
    function _0x26c215(_0x284288, _0x471eef) {
      _0x471eef.prototype = Object.create(_0x284288.prototype);
      _0x471eef.prototype.constructor = _0x471eef;
      _0x471eef.parent = _0x284288;
      return _0x471eef;
    }
    function _0x2806ba(_0xdf0bf5) {
      _0xdf0bf5 %= _0x5f0af6;
      return _0xdf0bf5 < 0x0 ? _0xdf0bf5 + _0x5f0af6 : _0xdf0bf5;
    }
    function _0x21695e(_0xa6f488, _0x10ccf7, _0x4b742d, _0x3d2298) {
      var _0x15cda7 = _0x10ccf7 + _0x3d2298;
      if (null == _0xa6f488) {
        throw new TypeError("this is null or not defined");
      }
      var _0x404b19 = _0xa6f488.length >>> 0x0;
      var _0x4481f3 = _0x4b742d >> 0x0;
      var _0x4c5998 = _0x4481f3 < 0x0 ? Math.max(_0x404b19 + _0x4481f3, 0x0) : Math.min(_0x4481f3, _0x404b19);
      var _0x34a5e4 = _0x10ccf7 >> 0x0;
      var _0x5ae588 = _0x34a5e4 < 0x0 ? Math.max(_0x404b19 + _0x34a5e4, 0x0) : Math.min(_0x34a5e4, _0x404b19);
      var _0x36e40e = undefined === _0x15cda7 ? _0x404b19 : _0x15cda7 >> 0x0;
      var _0x3efacd = _0x36e40e < 0x0 ? Math.max(_0x404b19 + _0x36e40e, 0x0) : Math.min(_0x36e40e, _0x404b19);
      var _0x5dd87e = Math.min(_0x3efacd - _0x5ae588, _0x404b19 - _0x4c5998);
      var _0x513a83 = 0x1;
      for (_0x5ae588 < _0x4c5998 && _0x4c5998 < _0x5ae588 + _0x5dd87e && (_0x513a83 = -0x1, _0x5ae588 += _0x5dd87e - 0x1, _0x4c5998 += _0x5dd87e - 0x1); _0x5dd87e > 0x0;) {
        if (_0x5ae588 in _0xa6f488) {
          _0xa6f488[_0x4c5998] = _0xa6f488[_0x5ae588];
        } else {
          delete _0xa6f488[_0x4c5998];
        }
        _0x5ae588 += _0x513a83;
        _0x4c5998 += _0x513a83;
        _0x5dd87e--;
      }
      return _0xa6f488;
    }
    function _0x205297(_0x1d2ca7) {
      if (null != _0x1d2ca7.parent) {
        _0x1d2ca7.parent.removeChild(_0x1d2ca7);
      }
    }
    function _0x8523e1(_0x3848b7, _0x2a1881, _0xef950a) {
      var _0x2a21a6 = (0x1 - Math.abs(0x2 * _0xef950a - 0x1)) * _0x2a1881;
      var _0x22fc45 = _0x2a21a6 * (0x1 - Math.abs(_0x3848b7 / 0x3c % 0x2 - 0x1));
      var _0x4d0cc7 = _0xef950a - _0x2a21a6 / 0x2;
      return 0x0 <= _0x3848b7 && _0x3848b7 < 0x3c ? [_0x4d0cc7 + _0x2a21a6, _0x4d0cc7 + _0x22fc45, _0x4d0cc7 + 0x0] : 0x3c <= _0x3848b7 && _0x3848b7 < 0x78 ? [_0x4d0cc7 + _0x22fc45, _0x4d0cc7 + _0x2a21a6, _0x4d0cc7 + 0x0] : 0x78 <= _0x3848b7 && _0x3848b7 < 0xb4 ? [_0x4d0cc7 + 0x0, _0x4d0cc7 + _0x2a21a6, _0x4d0cc7 + _0x22fc45] : 0xb4 <= _0x3848b7 && _0x3848b7 < 0xf0 ? [_0x4d0cc7 + 0x0, _0x4d0cc7 + _0x22fc45, _0x4d0cc7 + _0x2a21a6] : 0xf0 <= _0x3848b7 && _0x3848b7 < 0x12c ? [_0x4d0cc7 + _0x22fc45, _0x4d0cc7 + 0x0, _0x4d0cc7 + _0x2a21a6] : [_0x4d0cc7 + _0x2a21a6, _0x4d0cc7 + 0x0, _0x4d0cc7 + _0x22fc45];
    }
    function _0x3a21e1() {
      function _0x542235() {
        $('#adbl-1').text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $('#adbl-2').text(window.I18N_MESSAGES["index.game.antiadblocker.msg2"]);
        $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
        $("#adbl-4").text(window.I18N_MESSAGES['index.game.antiadblocker.msg4'].replace("{0}", 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $('#adbl-continue').hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0x4e8144 = 0x5;
        for (var _0xf9acbc = 0x0; _0xf9acbc < 0x5; _0xf9acbc++) {
          setTimeout(function () {
            _0x4e8144--;
            $('#adbl-4').text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", _0x4e8144));
            if (0x0 === _0x4e8144) {
              console.log("aipAABC");
              try {
                ga('send', "event", "antiadblocker", window.runtimeHash + '_complete');
              } catch (_0x4282e5) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, 0x3e8 * (_0xf9acbc + 0x1));
        }
      }
      var _0x14f003 = false;
      var _0x5ad510 = function () {};
      var _0x9a49a = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0x5ad510(false);
      });
      _0x9a49a.a = function (_0x318764) {
        _0x5ad510 = _0x318764;
        if (!_0x14f003) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById('1eaom01c3pxu9wd3');
                },
                'AIP_COMPLETE': function (_0x509b77) {
                  console.log("aipC");
                  _0x5ad510(true);
                  $('#1eaom01c3pxu9wd3').hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga('send', "event", 'preroll', window.runtimeHash + '_complete');
                  } catch (_0x39ae04) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0x14f003 = true;
          } catch (_0x746f1f) {}
        }
      };
      _0x9a49a.b = function () {
        if (undefined !== aiptag.adplayer) {
          console.log("aipS");
          try {
            ga("send", "event", 'preroll', window.runtimeHash + "_request");
          } catch (_0x2cab07) {}
          _0x542235();
        } else {
          console.log("aipAABS");
          try {
            ga('send', "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x5ef77d) {}
          _0x542235();
        }
      };
      return _0x9a49a;
    }
    function _0x5bdcfb(_0x39d61f, _0x248b5a) {
      var _0x871130 = $('#' + _0x39d61f);
      var _0xe7c52d = {};
      var _0x49eb1c = false;
      _0xe7c52d.a = function () {
        if (!_0x49eb1c) {
          _0x871130.empty();
          _0x871130.append("<div id='" + _0x248b5a + "'></div>");
          try {
            try {
              ga('send', "event", "banner", window.runtimeHash + "_display");
            } catch (_0x39e45d) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x248b5a);
            });
            _0x49eb1c = true;
          } catch (_0x46ef35) {}
        }
      };
      _0xe7c52d.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (_0x27890f) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x248b5a);
          });
        } catch (_0x45d669) {}
      };
      return _0xe7c52d;
    }
    function _0x48f082() {
      function _0x22294f(_0x4be187) {
        var _0x2deca0 = _0x4be187 + 0x25 * Math.floor(0xffff * Math.random());
        _0x2ec3f6(_0x240bd8.d, _0x2deca0, 0x1e);
      }
      return function () {
        var _0x5ab958 = parseInt(_0xd0f967(_0x240bd8.d)) % 0x25;
        console.log("init1 pSC: " + _0x5ab958);
        if (!(_0x5ab958 >= 0x0 && _0x5ab958 < _0x5c742c.e)) {
          _0x5ab958 = Math.max(0x0, _0x5c742c.e - 0x2);
          console.log("init2 pSC: " + _0x5ab958);
        }
        var _0xd819de = {};
        _0x4db052 = _0xd819de;
        _0xd819de.f = _0x5c742c;
        _0xd819de.g = false;
        _0xd819de.i = Date.now();
        _0xd819de.j = 0x0;
        _0xd819de.k = 0x0;
        _0xd819de.l = null;
        _0xd819de.m = _0x42f2ea;
        _0xd819de.n = _0x20795c;
        _0xd819de.o = null;
        _0xd819de.p = null;
        _0xd819de.q = null;
        _0xd819de.r = null;
        _0xd819de.s = null;
        _0xd819de.t = null;
        _0xd819de.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0xcffdc3) {
              if (undefined !== _0xcffdc3.coords) {
                var _0x58c229 = _0xcffdc3.coords;
                if (undefined !== _0x58c229.latitude && undefined !== _0x58c229.longitude) {
                  _0xd819de.l = _0xcffdc3;
                }
              }
            }, function (_0x4dcb0e) {});
          }
        } catch (_0x3a0abc) {}
        _0xd819de.v = function () {
          _0xd819de.p = new _0x151fbf();
          _0xd819de.q = new _0x218985();
          _0xd819de.r = new _0x24bfc5();
          _0xd819de.s = new _0x20ba03();
          _0xd819de.t = new _0x1acbac();
          _0xd819de.u = new _0x3a0ecc();
          _0xd819de.o = new _0x1a161b();
          _0xd819de.o.z = new _0x1694c3(_0xd819de.o);
          window.MessageProcessor = new _0x1694c3(_0xd819de.o);
          _0xd819de.a();
        };
        _0xd819de.a = function () {
          try {
            ga('send', 'event', "app", window.runtimeHash + '_init');
          } catch (_0x3e7b91) {}
          _0xd819de.o.A = function () {
            _0xd819de.o.B();
          };
          _0xd819de.o.C = function () {
            var _0x2b7460 = _0xd819de.s.F.D();
            try {
              ga('send', 'event', 'game', window.runtimeHash + "_start", _0x2b7460);
            } catch (_0x1c19e7) {}
            _0xd819de.r.G(_0x24bfc5.AudioState.H);
            _0xd819de.s.I(_0xd819de.s.H.J());
          };
          _0xd819de.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0xa8f0b3) {}
            if ($("body").height() >= 0x1ae) {
              _0xd819de.f.K.c();
            }
            _0xd819de.p.L();
            (function () {
              var _0x2a053c = Math.floor(_0xd819de.o.N.M);
              var _0x476132 = _0xd819de.o.O;
              if (_0xd819de.u.P()) {
                _0xd819de.u.Q(function () {
                  _0xd819de.R(_0x2a053c, _0x476132);
                });
              } else {
                _0xd819de.R(_0x2a053c, _0x476132);
              }
            })();
          };
          _0xd819de.o.S = function (_0x2085d5) {
            _0x2085d5(_0xd819de.s.H.T(), _0xd819de.s.H.U());
          };
          _0xd819de.u.V(function () {
            if (_0xd819de.p.W) {
              _0xd819de.r.G(_0x24bfc5.AudioState.F);
              _0xd819de.s.I(_0xd819de.s.F);
            }
            if (_0xd819de.u.P()) {
              try {
                var _0x58b1e8 = _0xd819de.u.X();
                ga("set", 'userId', _0x58b1e8);
              } catch (_0x4bf16a) {}
            }
            if (_0xd819de.Y() && _0xd819de.u.P() && !_0xd819de.u.Z()) {
              _0xd819de.$(false, false);
              _0xd819de.s.aa._(new _0x1b5772());
            } else {
              _0xd819de.ba(true);
            }
          });
          _0xd819de.p.ca(function () {
            _0xd819de.r.G(_0x24bfc5.AudioState.F);
            _0xd819de.s.I(_0xd819de.s.F);
          });
          _0xd819de.q.a(function () {
            _0xd819de.o.a();
            _0xd819de.r.a();
            _0xd819de.s.a();
            _0xd819de.t.a();
            _0xd819de.p.a();
            _0xd819de.u.a();
            if (_0xd819de.Y() && !_0xd819de.Z()) {
              _0xd819de.s.aa._(new _0x1b5772());
            } else {
              _0xd819de.ba(true);
            }
          });
        };
        _0xd819de.da = function (_0x533e28) {
          if (_0xd819de.u.P()) {
            var _0x4732b7 = _0xd819de.u.ea();
            $.get(_0x330a2d + "/pub/wuid/" + _0x4732b7 + '/consent/change?value=' + encodeURI(_0x533e28), function (_0x354927) {});
          }
        };
        _0xd819de.fa = function (_0x193b61) {
          var _0x1b9b1f = _0xd819de.u.ea();
          var _0x536708 = _0xd819de.s.F.D();
          var _0x2e8186 = _0xd819de.s.F.ga();
          var _0x12cecc = _0xd819de.t.ha(_0x929e6e.ia);
          var _0x2b2fbd = _0xd819de.t.ha(_0x929e6e.ja);
          var _0x44615f = _0xd819de.t.ha(_0x929e6e.ka);
          var _0x342d58 = _0xd819de.t.ha(_0x929e6e.la);
          var _0x1ee1c8 = _0xd819de.t.ha(_0x929e6e.ma);
          var _0x54aefe = 0x0;
          if (null != _0xd819de.l) {
            var _0xe220d1 = _0xd819de.l.coords.latitude;
            var _0x39298d = _0xd819de.l.coords.longitude;
            _0x54aefe = 0x1 | Math.max(0x0, Math.min(0x7fff, (_0xe220d1 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math.min(0xffff, (_0x39298d + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          if (_wrmxt.isSkinCustom(_0x12cecc)) {} else {
            _0x12cecc;
          }
          let _0x2fe584 = "XТ_" + (0x3e7 < _0x12cecc ? '000' : _0x12cecc.toString().padStart(0x3, 0x0)) + (0x3e7 < _0x1ee1c8 ? '000' : _0x1ee1c8.toString().padStart(0x3, 0x0));
          _0x2e8186 = (0x20 <= _0x2e8186.length ? _0x2e8186.substr(0x0, 0x10) : _0x2e8186.substr(0x0, 0x10).padEnd(0x10)) + _0x2fe584;
          _0x2e8186 = _0x2e8186.trim().replace(/\s/g, 'ㅤ');
          console.log(_0x2e8186);
          zwormData.nickname = _0x2e8186;
          var _0x46d3fc = _0x330a2d + '/pub/wuid/' + _0x1b9b1f + "/start?gameMode=" + encodeURI(_0x536708) + '&gh=' + _0x54aefe + "&nickname=" + encodeURI(_0x2e8186) + "&skinId=" + _wrmxt.validInput(_0x12cecc) + "&eyesId=" + encodeURI(_0x2b2fbd) + "&mouthId=" + encodeURI(_0x44615f) + "&glassesId=" + encodeURI(_0x342d58) + "&hatId=" + encodeURI(_0x1ee1c8);
          console.log("urlRequest: " + _0x46d3fc);
          $.get(_0x46d3fc, function (_0x4eea63) {
            var _0x1149d6 = _0x4eea63.server_url;
            _0x193b61(_0x1149d6);
          });
        };
        _0xd819de.na = function () {
          _0x5ab958++;
          console.log("start pSC: " + _0x5ab958);
          if (!_0xd819de.f.oa && _0x5ab958 >= _0xd819de.f.e) {
            _0xd819de.s.I(_0xd819de.s.pa);
            _0xd819de.r.G(_0x24bfc5.AudioState.qa);
            _0xd819de.f.ra.b();
          } else {
            _0x22294f(_0x5ab958);
            _0xd819de.sa();
            lxpdservertext.text = '';
          }
        };
        _0xd819de.sa = function (_0x1770f0) {
          lxpdkillcount = 0x0;
          lxpdhscount = 0x0;
          if (_0xd819de.o.ta()) {
            _0xd819de.s.I(_0xd819de.s.ua);
            _0xd819de.r.G(_0x24bfc5.AudioState.ua);
            var _0x3e0682 = _0xd819de.s.F.D();
            _0x2ec3f6(_0x240bd8.va, _0x3e0682, 0x1e);
            console.log("save gm: " + _0x3e0682);
            var _0x8dc13c = _0xd819de.s.xa.wa();
            _0x2ec3f6(_0x240bd8.ya, _0x8dc13c, 0x1e);
            console.log("save sPN: " + _0x8dc13c);
            if (_0xd819de.u.P()) {
              _0xd819de.fa(function (_0x19451a) {
                lxpdlastserver = _0x1770f0 ? _0x1770f0 : _0x19451a;
                zwormData.wssServer = lxpdlastserver;
                _0xd819de.o.za(_0x1770f0 || _0x19451a, _0xd819de.u.ea());
              });
            } else {
              var _0x2edb67 = _0xd819de.s.F.ga();
              _0x2ec3f6(_0x240bd8.Aa, _0x2edb67, 0x1e);
              var _0x5c11dd = _0xd819de.t.ha(_0x929e6e.ia);
              _0x2ec3f6(_0x240bd8.Ba, _0x5c11dd, 0x1e);
              _0xd819de.fa(function (_0x313fe2) {
                lxpdlastserver = _0x1770f0 ? _0x1770f0 : _0x313fe2;
                zwormData.wssServer = lxpdlastserver;
                _0xd819de.o.Ca(_0x1770f0 || _0x313fe2, _0x2edb67, _0x5c11dd);
              });
            }
          }
        };
        _0xd819de.R = function (_0x116d87, _0x117d7b) {
          var _0x292898 = _0xd819de.s.F.ga();
          _0xd819de.s.H.Da(_0x116d87, _0x117d7b, _0x292898);
          _0xd819de.r.G(_0x24bfc5.AudioState.Ea);
          _0xd819de.s.I(_0xd819de.s.H.Fa());
        };
        _0xd819de.Ga = function () {
          if (!_0xd819de.Ha()) {
            return _0xd819de.t.Ia();
          }
          var _0x371fca = parseInt(_0xd0f967(_0x240bd8.Ba));
          return null != _0x371fca && _0xd819de.t.Ja(_0x371fca, _0x929e6e.ia) ? _0x371fca : _0xd819de.t.Ia();
        };
        _0xd819de.Ka = function (_0x4d4606) {
          _0x2ec3f6(_0x240bd8.La, !!_0x4d4606, 0x708);
        };
        _0xd819de.Ha = function () {
          return "true" === _0xd0f967(_0x240bd8.La);
        };
        _0xd819de.ba = function (_0x269db3) {
          if (_0x269db3 != _0xd819de.g) {
            _0xd819de.g = _0x269db3;
            var _0x4258c4 = _0x4258c4 || {};
            _0x4258c4.consented = _0x269db3;
            _0x4258c4.gdprConsent = _0x269db3;
            _0xd819de.f.Ma.a();
            _0xd819de.f.K.a();
            _0xd819de.f.ra.a(function (_0x13cd38) {
              if (_0x13cd38) {
                _0x22294f(_0x5ab958 = 0x0);
              }
              _0xd819de.sa();
            });
          }
        };
        _0xd819de.$ = function (_0x478321, _0x548652) {
          _0x2ec3f6(_0x240bd8.Na, _0x478321 ? "true" : "false");
          if (_0x548652) {
            _0xd819de.da(_0x478321);
          }
          _0xd819de.ba(_0x478321);
        };
        _0xd819de.Z = function () {
          switch (_0xd0f967(_0x240bd8.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0xd819de.Y = function () {
          try {
            return !!window.isIPInEEA || !(null == _0xd819de.l || !_0x479ce7.Oa(_0xd819de.l.coords.latitude, _0xd819de.l.coords.longitude));
          } catch (_0x5d92ee) {
            return true;
          }
        };
        _0xd819de.Pa = function () {
          _0xd819de.j = Date.now();
          _0xd819de.k = _0xd819de.j - _0xd819de.i;
          _0xd819de.o.Qa(_0xd819de.j, _0xd819de.k);
          _0xd819de.s.Qa(_0xd819de.j, _0xd819de.k);
          _0xd819de.i = _0xd819de.j;
        };
        _0xd819de.Ra = function () {
          _0xd819de.s.Ra();
        };
        return _0xd819de;
      }();
    }
    function _0x1a161b() {
      var _0x3dde2a = {
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
        fb: new _0x5e0b25(),
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
      _0x3dde2a.fb.ub = 0x1f4;
      _0x3dde2a.N = new _0x248911(_0x3dde2a.fb);
      _0x3dde2a.a = function () {
        null.vb((window.anApp = _0x4db052).s.H.wb);
        setInterval(function () {
          _0x3dde2a.S(function (_0x438f7e, _0x571e1a) {
            _0x3dde2a.xb(_0x438f7e, _0x571e1a);
          });
        }, 0x64);
      };
      _0x3dde2a.yb = function (_0x435899, _0x56fbe7, _0x5c83a9, _0x56c918) {
        _0x3dde2a.lb = _0x435899;
        _0x3dde2a.mb = _0x56fbe7;
        _0x3dde2a.nb = _0x5c83a9;
        _0x3dde2a.ob = _0x56c918;
        _0x3dde2a.zb();
      };
      _0x3dde2a.Ab = function (_0x11c078) {
        _0x3dde2a.kb = _0x11c078;
        _0x3dde2a.zb();
      };
      _0x3dde2a.zb = function () {
        _0x3dde2a.pb = _0x3dde2a.lb - 0x1;
        _0x3dde2a.qb = 2;
        _0x3dde2a.rb = 0;
        _0x3dde2a.sb = _0x3dde2a.ob + 0x1;
      };
      _0x3dde2a.Qa = function (_0x1ed538, _0x1bfa76) {
        _0x3dde2a.$a += _0x1bfa76;
        _0x3dde2a.Za -= 0 * _0x1bfa76;
        null.Bb();
        if (!(true || true && true)) {
          _0x3dde2a.Cb(_0x1ed538, _0x1bfa76);
          _0x3dde2a.jb = 0x4 + 12.5 * null.Db;
        }
        var _0x462fac = 0x3e8 / Math.max(0x1, _0x1bfa76);
        var _0x384655 = 0x0;
        var _0x225b3b = 0x0;
        for (; _0x225b3b < _0x3dde2a.Xa.length - 0x1; _0x225b3b++) {
          _0x384655 = _0x384655 + _0x3dde2a.Xa[_0x225b3b];
          _0x3dde2a.Xa[_0x225b3b] = _0x3dde2a.Xa[_0x225b3b + 0x1];
        }
        _0x3dde2a.Xa[_0x3dde2a.Xa.length - 0x1] = _0x462fac;
        _0x3dde2a.Wa = (_0x384655 + _0x462fac) / _0x3dde2a.Xa.length;
      };
      _0x3dde2a.Eb = function (_0x3b0913, _0x25d724) {
        return _0x3b0913 > _0x3dde2a.pb && _0x3b0913 < 0x1 && _0x25d724 > 0x1 && _0x25d724 < _0x3dde2a.sb;
      };
      _0x3dde2a.Cb = function (_0x11c74b, _0x28df01) {
        var _0x5bbde9 = -NaN;
        null.Fb(_0x11c74b, _0x28df01);
        null.Gb(_0x11c74b, _0x28df01, _0x5bbde9, _0x3dde2a.Eb);
        var _0x29fecc = 0x0;
        var _0x4c0e57;
        for (_0x4c0e57 in _0x3dde2a.hb) {
          var _0x3db746 = _0x3dde2a.hb[_0x4c0e57];
          _0x3db746.Fb(_0x11c74b, _0x28df01);
          _0x3db746.Gb(_0x11c74b, _0x28df01, _0x5bbde9, _0x3dde2a.Eb);
          if (_0x3db746.Hb && _0x3db746.Db > _0x29fecc) {
            _0x29fecc = _0x3db746.Db;
          }
          if (!(_0x3db746.Ib || !(_0x3db746.Jb < 0.005) && _0x3db746.Hb)) {
            _0x3db746.Kb();
            delete _0x3dde2a.hb[_0x3db746.Mb.Lb];
          }
        }
        _0x3dde2a.Ab(0x3 * _0x29fecc);
        var _0x339b0b;
        for (_0x339b0b in _0x3dde2a.gb) {
          var _0x402f0e = _0x3dde2a.gb[_0x339b0b];
          _0x402f0e.Fb(_0x11c74b, _0x28df01);
          _0x402f0e.Gb(_0x11c74b, _0x28df01, _0x3dde2a.Eb);
          if (_0x402f0e.Nb && (_0x402f0e.Jb < 0.005 || !_0x3dde2a.Eb(_0x402f0e.Ob, _0x402f0e.Pb))) {
            _0x402f0e.Kb();
            delete _0x3dde2a.gb[_0x402f0e.Mb.Lb];
          }
        }
      };
      _0x3dde2a.Qb = function (_0x532217, _0x10d435) {
        var _0x36bf74 = (window.anApp = _0x4db052).j;
        _0x3dde2a.bb = _0x532217;
        if (0x0 === _0x532217) {
          _0x3dde2a._a = _0x36bf74 - 0x5f;
          _0x3dde2a.ab = _0x36bf74;
          _0x3dde2a.$a = 0x0;
          _0x3dde2a.Za = 0x0;
        } else {
          _0x3dde2a._a = 0x0;
          _0x3dde2a.ab = 0x0 + _0x10d435;
        }
        _0x3dde2a.Ya = -NaN;
      };
      _0x3dde2a.Rb = function () {
        if (false || false) {
          _0x3dde2a.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0x3dde2a.db = null;
            }
          }, 0x1388);
          _0x3dde2a.B();
        }
      };
      _0x3dde2a.ta = function () {
        return true && (_0x3dde2a.cb = 0x1, null.Sb(), _0x3dde2a.gb = {}, _0x3dde2a.hb = {}, null.Tb(), false && (null.close(), _0x3dde2a.db = null), true);
      };
      _0x3dde2a.Ub = function () {
        _0x3dde2a.db = null;
        null.Sb();
        _0x3dde2a.A();
        _0x3dde2a.cb = 0x0;
      };
      _0x3dde2a.za = function (_0x3509d1, _0x3e01c1) {
        _0x3dde2a.Vb(_0x3509d1, function () {
          console.log(_0x3e01c1);
          var _0xe36a9d = Math.min(0x800, _0x3e01c1.length);
          var _0x27fd6d = new ArrayBuffer(0x6 + 0x2 * _0xe36a9d);
          var _0xeb76e8 = new DataView(_0x27fd6d);
          var _0x3176e9 = 0x0;
          _0xeb76e8.setInt8(_0x3176e9, 0x81);
          _0x3176e9 = _0x3176e9 + 0x1;
          _0xeb76e8.setInt16(_0x3176e9, 0xaf0);
          _0x3176e9 = _0x3176e9 + 0x2;
          _0xeb76e8.setInt8(_0x3176e9, 0x1);
          _0x3176e9 = _0x3176e9 + 0x1;
          _0xeb76e8.setInt16(_0x3176e9, _0xe36a9d);
          _0x3176e9 = _0x3176e9 + 0x2;
          var _0x12bfb2 = 0x0;
          for (; _0x12bfb2 < _0xe36a9d; _0x12bfb2++) {
            _0xeb76e8.setInt16(_0x3176e9, _0x3e01c1.charCodeAt(_0x12bfb2));
            _0x3176e9 = _0x3176e9 + 0x2;
          }
          _0x3dde2a.Wb(_0x27fd6d);
        });
      };
      _0x3dde2a.Ca = function (_0x27558b, _0x56f35e, _0x4e698f) {
        _0x3dde2a.Vb(_0x27558b, function () {
          console.log(_0x56f35e);
          var _0x2e313d = Math.min(0x20, _0x56f35e.length);
          var _0x3099dc = new ArrayBuffer(0x7 + 0x2 * _0x2e313d);
          var _0x11d8cf = new DataView(_0x3099dc);
          var _0x142d9a = 0x0;
          _0x11d8cf.setInt8(_0x142d9a, 0x81);
          _0x142d9a = _0x142d9a + 0x1;
          _0x11d8cf.setInt16(_0x142d9a, 0xaf0);
          _0x142d9a = _0x142d9a + 0x2;
          _0x11d8cf.setInt8(_0x142d9a, 0x0);
          _0x142d9a = _0x142d9a + 0x1;
          _0x11d8cf.setInt16(_0x142d9a, _0x4e698f);
          _0x142d9a = _0x142d9a + 0x2;
          _0x11d8cf.setInt8(_0x142d9a, _0x2e313d);
          _0x142d9a++;
          var _0x5cad5f = 0x0;
          for (; _0x5cad5f < _0x2e313d; _0x5cad5f++) {
            _0x11d8cf.setInt16(_0x142d9a, _0x56f35e.charCodeAt(_0x5cad5f));
            _0x142d9a = _0x142d9a + 0x2;
          }
          _0x3dde2a.Wb(_0x3099dc);
          console.log(_0x3099dc);
        });
      };
      _0x3dde2a.Wb = function (_0x3601ed) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x3601ed);
          }
        } catch (_0x47261a) {
          console.log("Socket send error: " + _0x47261a);
          _0x3dde2a.Ub();
        }
      };
      _0x3dde2a.xb = function (_0x3c63ba, _0x3ad549) {
        var _0x3527c7 = _0x3ad549 ? 0x80 : 0x0;
        var _0xc8b902 = _0x2806ba(_0x3c63ba) / _0x5f0af6 * 0x80 & 0x7f;
        var _0x595577 = 0xff & (_0x3527c7 | _0xc8b902);
        var _0x6a6d51 = new ArrayBuffer(0x1);
        new DataView(_0x6a6d51).setInt8(0x0, _0x595577);
        _0x3dde2a.Wb(_0x6a6d51);
        _0x3dde2a.eb = _0x595577;
      };
      _0x3dde2a.Vb = function (_0x198af0, _0xefb62f) {
        var _0x1ad391 = _0x3dde2a.db = new WebSocket(_0x198af0);
        _0x1ad391.binaryType = "arraybuffer";
        window.onOpen = _0x1ad391.onopen = function () {
          _0x400a1e("open");
          if (null === _0x1ad391) {
            console.log("Socket opened");
            _0xefb62f();
          }
          isPlaying = true;
        };
        window.onclose = _0x1ad391.onclose = function () {
          _0x400a1e("closed");
          _wrmxt.aload = false;
          if (null === _0x1ad391) {
            console.log("Socket closed");
            _0x3dde2a.Ub();
          }
          isPlaying = false;
        };
        _0x1ad391.onerror = function (_0x126326) {
          if (null === _0x1ad391) {
            console.log("Socket error");
            _0x3dde2a.Ub();
          }
          isPlaying = false;
        };
        _0x1ad391.onmessage = function (_0x4f40a4) {
          if (null === _0x1ad391) {
            null.Xb(_0x4f40a4.data);
          }
        };
      };
      return _0x3dde2a;
    }
    var _0x330a2d = atob('aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=');
    var _0x522a4f = atob('aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==');
    var _0x20795c = window.I18N_LANG;
    if (!_0x20795c) {
      _0x20795c = 'en';
    }
    var _0x42f2ea = undefined;
    switch (_0x20795c) {
      case 'uk':
        _0x42f2ea = "uk_UA";
        break;
      case 'de':
        _0x42f2ea = "de_DE";
        break;
      case 'fr':
        _0x42f2ea = 'fr_FR';
        break;
      case 'ru':
        _0x42f2ea = 'ru_RU';
        break;
      case 'es':
        _0x42f2ea = "es_ES";
        break;
      default:
        _0x42f2ea = "en_US";
    }
    moment.locale(_0x42f2ea);
    var _0x4db052 = undefined;
    var _0x4b77e7 = function () {
      var _0x18a6ef = {
        'Yb': eval(atob('UElYSQ=='))
      };
      var _0x4c8d29 = _0x18a6ef.Yb[atob("QkxFTkRfTU9ERVM=")];
      var _0x5dfb82 = _0x18a6ef.Yb[atob("V1JBUF9NT0RFUw==")];
      return {
        'Zb': _0x18a6ef.Yb[atob("Q29udGFpbmVy")],
        '$b': _0x18a6ef.Yb[atob("QmFzZVRleHR1cmU=")],
        '_b': _0x18a6ef.Yb[atob("VGV4dHVyZQ==")],
        'ac': _0x18a6ef.Yb[atob("UmVuZGVyZXI=")],
        'bc': _0x18a6ef.Yb[atob("R3JhcGhpY3M=")],
        'cc': _0x18a6ef.Yb[atob("U2hhZGVy")],
        'dc': _0x18a6ef.Yb[atob("UmVjdGFuZ2xl")],
        'ec': _0x18a6ef.Yb[atob('U3ByaXRl')],
        'fc': _0x18a6ef.Yb[atob("VGV4dA==")],
        'gc': _0x18a6ef.Yb[atob("R2VvbWV0cnk=")],
        'hc': _0x18a6ef.Yb[atob("TWVzaA==")],
        'ic': {
          'jc': _0x4c8d29[atob('QURE')]
        },
        'kc': {
          'lc': _0x5dfb82[atob("UkVQRUFU")]
        }
      };
    }();
    var _0x5f0af6 = 0x2 * Math.PI;
    !function () {
      var _0x3ea588 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x136365) {
        return this[_0x3ea588[0x0]](_0x136365);
      };
      DataView.prototype.nc = function (_0x482f2b) {
        return this[_0x3ea588[0x1]](_0x482f2b);
      };
      DataView.prototype.oc = function (_0x22f156) {
        return this[_0x3ea588[0x2]](_0x22f156);
      };
      DataView.prototype.pc = function (_0x2ff716) {
        return this[_0x3ea588[0x3]](_0x2ff716);
      };
      DataView.prototype.qc = function (_0x25b3cd) {
        return this[_0x3ea588[0x4]](_0x25b3cd);
      };
    }();
    var _0x4997d0 = function () {
      function _0x512edd(_0x53518f) {
        this.rc = _0x53518f;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x512edd.VELOCITY_TYPE = 0x0;
      _0x512edd.FLEXIBLE_TYPE = 0x1;
      _0x512edd.MAGNETIC_TYPE = 0x2;
      _0x512edd.ZOOM_TYPE = 0x6;
      _0x512edd.X2_TYPE = 0x3;
      _0x512edd.X5_TYPE = 0x4;
      _0x512edd.X10_TYPE = 0x5;
      return _0x512edd;
    }();
    var _0x151fbf = function () {
      function _0x24ea24() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0xaa213d.yc();
      }
      function _0x47f354(_0x41a769, _0x37b172) {
        for (var _0x279c9f in _0x41a769) if (_0x41a769.hasOwnProperty(_0x279c9f)) {
          _0x37b172(_0x279c9f, _0x41a769[_0x279c9f]);
        }
      }
      _0x24ea24.prototype.a = function () {
        this.L();
      };
      _0x24ea24.prototype.W = function () {
        return null != this.wc;
      };
      _0x24ea24.prototype.zc = function () {
        return null != this.wc ? this.wc.revision : -0x1;
      };
      _0x24ea24.prototype.Ac = function () {
        return this.wc;
      };
      _0x24ea24.prototype.L = function () {
        var _0x5cf03d = this;
        $.get(_0x522a4f + "/dynamic/assets/revision.json", function (_0x371abc) {
          if (_0x371abc > _0x5cf03d.zc()) {
            _0x5cf03d.Bc();
          }
        });
      };
      _0x24ea24.prototype.Bc = function () {
        var _0x37b6a7 = this;
        $.ajax({
          'type': "GET",
          'url': "https://wormrise.github.io/extension/w2/api/skins.json",
          'contentType': "application/json",
          'success': function (_0x584f57) {
            theoKzObjects.visibleSkin = _0x584f57.visibleSkin;
            delete _0x584f57.visibleSkin;
            if (_0x584f57.revision > _0x37b6a7.zc()) {
              _0x37b6a7.Cc(_0x584f57);
            }
          },
          'error': function (_0x11dfce, _0x5d4088, _0x295ea6) {
            console.error("Error al realizar la solicitud GET:", _0x295ea6);
          }
        });
      };
      _0x24ea24.prototype.ca = function (_0x3a8209) {
        this.uc.push(_0x3a8209);
      };
      _0x24ea24.prototype.Dc = function () {
        return this.xc;
      };
      _0x24ea24.prototype.Ec = function () {
        for (var _0x4583b6 = 0x0; _0x4583b6 < this.uc.length; _0x4583b6++) {
          this.uc[_0x4583b6]();
        }
      };
      _0x24ea24.prototype.Fc = function (_0x1cf918, _0x210edb) {
        if (!(_0x1cf918.revision <= this.zc())) {
          _0x47f354(this.vc, function (_0x34d2a1, _0x51aff5) {
            var _0x5e4335 = _0x210edb[_0x34d2a1];
            if (!(null != _0x5e4335 && _0x51aff5.Gc === _0x5e4335.Gc)) {
              print("disposing prev texture: " + _0x34d2a1 + " at " + _0x51aff5.Gc);
              _0x51aff5.Hc.destroy();
            }
          });
          this.vc = _0x210edb;
          this.wc = _0x1cf918;
          this.xc = _0xaa213d.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x24ea24.prototype.Cc = function (_0x2666e4) {
        var _0x2fde0b = {};
        var _0x12f899 = [];
        var _0x3d1d4f = [];
        var _0x343818 = 0x0;
        for (var _0x4db390 in _0x2666e4.textureDict) {
          if (_0x2666e4.textureDict.hasOwnProperty(_0x4db390)) {
            var _0x5e18e5 = _0x2666e4.textureDict[_0x4db390];
            var _0xace6d7 = _0x5e18e5.isCustom;
            var _0x3e7209 = _0xace6d7 ? _0x5e18e5.relativePath : _0x522a4f + _0x5e18e5.relativePath;
            var _0x1326ed = _0x5e18e5.fileSize;
            var _0x4762b5 = _0x5e18e5.sha256;
            var _0x40e2c4 = {
              'id': _0x4db390,
              'path': _0x3e7209,
              'fileSize': _0x1326ed,
              'sha256': _0x4762b5
            };
            _0x12f899.push(_0x40e2c4);
            _0x3d1d4f.push(_0x40e2c4);
            _0x343818 += _0x1326ed;
            var _0x3e7209 = _0x5e18e5.relativePath;
            if (!_0x5e18e5.isCustom) {
              _0x3e7209 = _0x522a4f + _0x5e18e5.relativePath;
            }
            try {
              _0x2fde0b[_0x4db390] = new _0xb3e3e(_0x3e7209, _0x4b77e7.$b.from(_0x5e18e5.file || _0x3e7209));
            } catch (_0x359c8e) {
              console.log(_0x3e7209);
            }
          }
        }
        this.Fc(_0x2666e4, _0x2fde0b);
      };
      return _0x24ea24;
    }();
    var _0xaa213d = function () {
      function _0x2ce02d() {
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
      function _0x5a974a(_0x3d7447, _0x4249bc) {
        for (var _0x1d97ca in _0x3d7447) if (_0x3d7447.hasOwnProperty(_0x1d97ca)) {
          _0x4249bc(_0x1d97ca, _0x3d7447[_0x1d97ca]);
        }
      }
      _0x2ce02d.yc = function () {
        var _0x9ef80f = new _0xaa213d();
        _0x9ef80f.Jc = {};
        _0x9ef80f.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x9ef80f.Lc = {};
        _0x9ef80f.Mc = {
          'Zc': null
        };
        _0x9ef80f.Nc = {};
        _0x9ef80f.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x9ef80f.Pc = {};
        _0x9ef80f.Qc = {
          'ad': {},
          'bd': _0x9ef80f.Oc,
          'cd': _0x9ef80f.Kc
        };
        _0x9ef80f.Rc = {};
        _0x9ef80f.Sc = {
          'Zc': []
        };
        _0x9ef80f.Tc = {};
        _0x9ef80f.Uc = {
          'Zc': []
        };
        _0x9ef80f.Vc = {};
        _0x9ef80f.Wc = {
          'Zc': []
        };
        _0x9ef80f.Xc = {};
        _0x9ef80f.Yc = {
          'Zc': []
        };
        return _0x9ef80f;
      };
      _0x2ce02d.Ic = function (_0x274241, _0x1f470c) {
        var _0x3dceff = new _0xaa213d();
        var _0x4c3a3e = {};
        _0x5a974a(_0x274241.colorDict, function (_0x554d75, _0x525b23) {
          _0x4c3a3e[_0x554d75] = _0x525b23;
        });
        var _0x46beab = {};
        _0x5a974a(_0x274241.regionDict, function (_0x44524e, _0x208b14) {
          _0x46beab[_0x44524e] = new _0x4f3e67(_0x1f470c[_0x208b14.texture].Hc, _0x208b14.x, _0x208b14.y, _0x208b14.w, _0x208b14.h, _0x208b14.px, _0x208b14.py, _0x208b14.pw, _0x208b14.ph);
        });
        _0x3dceff.Nc = {};
        for (var _0x507f95 = 0x0; _0x507f95 < _0x274241.skinArrayDict.length; _0x507f95++) {
          var _0x5e7b17 = _0x274241.skinArrayDict[_0x507f95];
          _0x3dceff.Nc[_0x5e7b17.id] = new _0xaa213d.WormSkinData('#' + _0x4c3a3e[_0x5e7b17.prime], _0x5e7b17.base.map(function (_0x58f780) {
            return _0x46beab[_0x58f780];
          }), _0x5e7b17.glow.map(function (_0x37842b) {
            return _0x46beab[_0x37842b];
          }));
        }
        var _0x5c887e = _0x274241.skinUnknown;
        _0x3dceff.Oc = new _0xaa213d.WormSkinData('#' + _0x4c3a3e[_0x5c887e.prime], _0x5c887e.base.map(function (_0x6fa9e5) {
          return _0x46beab[_0x6fa9e5];
        }), _0x5c887e.glow.map(function (_0x13b944) {
          return _0x46beab[_0x13b944];
        }));
        _0x3dceff.Rc = {};
        _0x5a974a(_0x274241.eyesDict, function (_0x536333, _0x427d37) {
          _0x536333 = parseInt(_0x536333);
          _0x3dceff.Rc[_0x536333] = new _0xaa213d.WearSkinData(_0x427d37.base.map(function (_0x29642c) {
            return _0x46beab[_0x29642c.region];
          }));
        });
        _0x3dceff.Sc = new _0xaa213d.WearSkinData(_0x274241.eyesUnknown.base.map(function (_0x2f8fda) {
          return _0x46beab[_0x2f8fda.region];
        }));
        _0x3dceff.Tc = {};
        _0x5a974a(_0x274241.mouthDict, function (_0x503a59, _0x2fa575) {
          _0x503a59 = parseInt(_0x503a59);
          _0x3dceff.Tc[_0x503a59] = new _0xaa213d.WearSkinData(_0x2fa575.base.map(function (_0xa83d78) {
            return _0x46beab[_0xa83d78.region];
          }));
        });
        _0x3dceff.Uc = new _0xaa213d.WearSkinData(_0x274241.mouthUnknown.base.map(function (_0x1f89da) {
          return _0x46beab[_0x1f89da.region];
        }));
        _0x3dceff.Vc = {};
        _0x5a974a(_0x274241.glassesDict, function (_0x23df31, _0x59d9a4) {
          _0x23df31 = parseInt(_0x23df31);
          _0x3dceff.Vc[_0x23df31] = new _0xaa213d.WearSkinData(_0x59d9a4.base.map(function (_0x2deec4) {
            return _0x46beab[_0x2deec4.region];
          }));
        });
        _0x3dceff.Wc = new _0xaa213d.WearSkinData(_0x274241.glassesUnknown.base.map(function (_0x2646c4) {
          return _0x46beab[_0x2646c4.region];
        }));
        _0x3dceff.Xc = {};
        _0x5a974a(_0x274241.hatDict, function (_0x16966b, _0x3da56d) {
          _0x16966b = parseInt(_0x16966b);
          _0x3dceff.Xc[_0x16966b] = new _0xaa213d.WearSkinData(_0x3da56d.base.map(function (_0x2bef84) {
            return _0x46beab[_0x2bef84.region];
          }));
        });
        _0x3dceff.Yc = new _0xaa213d.WearSkinData(_0x274241.hatUnknown.base.map(function (_0x42d21e) {
          return _0x46beab[_0x42d21e.region];
        }));
        _0x3dceff.Jc = {};
        _0x5a974a(_0x274241.portionDict, function (_0xb2d3c, _0x490ec9) {
          _0xb2d3c = parseInt(_0xb2d3c);
          _0x3dceff.Jc[_0xb2d3c] = new _0xaa213d.PortionSkinData(_0x46beab[_0x490ec9.base], _0x46beab[_0x490ec9.glow]);
        });
        var _0x5e8eea = _0x274241.portionUnknown;
        _0x3dceff.Kc = new _0xaa213d.PortionSkinData(_0x46beab[_0x5e8eea.base], _0x46beab[_0x5e8eea.glow]);
        _0x3dceff.Lc = {};
        _0x5a974a(_0x274241.abilityDict, function (_0x16a00e, _0x3e8c70) {
          _0x16a00e = parseInt(_0x16a00e);
          _0x3dceff.Lc[_0x16a00e] = new _0xaa213d.AbilitySkinData(_0x46beab[_0x3e8c70.base]);
        });
        var _0x259930 = _0x274241.abilityUnknown;
        _0x3dceff.Mc = new _0xaa213d.AbilitySkinData(_0x46beab[_0x259930.base]);
        _0x3dceff.Pc = {};
        _0x5a974a(_0x274241.teamDict, function (_0x40e548, _0x3cb17f) {
          _0x40e548 = parseInt(_0x40e548);
          _0x3dceff.Pc[_0x40e548] = new _0xaa213d.TeamSkinData(_0x3cb17f.name, new _0xaa213d.WormSkinData('#' + _0x4c3a3e[_0x3cb17f.skin.prime], [], _0x3cb17f.skin.glow.map(function (_0x15ab4c) {
            return _0x46beab[_0x15ab4c];
          })), new _0xaa213d.PortionSkinData([], _0x46beab[_0x3cb17f.portion.glow]));
        });
        _0x3dceff.Qc = new _0xaa213d.TeamSkinData({}, _0x3dceff.Oc, _0x3dceff.Kc);
        return _0x3dceff;
      };
      _0x2ce02d.prototype.dd = function (_0x57ce16) {
        var _0x3b57b7 = this.Nc[_0x57ce16];
        return _0x3b57b7 || this.Oc;
      };
      _0x2ce02d.prototype.ed = function (_0xe5368e) {
        var _0x4c372b = this.Pc[_0xe5368e];
        return _0x4c372b || this.Qc;
      };
      _0x2ce02d.prototype.fd = function (_0x10facf) {
        var _0x520a85 = this.Rc[_0x10facf];
        return _0x520a85 || this.Sc;
      };
      _0x2ce02d.prototype.gd = function (_0x294b5e) {
        var _0xb92591 = this.Tc[_0x294b5e];
        return _0xb92591 || this.Uc;
      };
      _0x2ce02d.prototype.hd = function (_0x5c05a2) {
        var _0x54659e = this.Vc[_0x5c05a2];
        return _0x54659e || this.Wc;
      };
      _0x2ce02d.prototype.jd = function (_0x37fda0) {
        var _0x661242 = this.Xc[_0x37fda0];
        return _0x661242 || this.Yc;
      };
      _0x2ce02d.prototype.kd = function (_0x5785f0) {
        var _0x5ec412 = this.Jc[_0x5785f0];
        return _0x5ec412 || this.Kc;
      };
      _0x2ce02d.prototype.ld = function (_0x489963) {
        var _0x59b041 = this.Lc[_0x489963];
        return _0x59b041 || this.Mc;
      };
      _0x2ce02d.TeamSkinData = function () {
        function _0x356003(_0x4bf3ab, _0x2e8dbb, _0x2eff4b) {
          this.ad = _0x4bf3ab;
          this.bd = _0x2e8dbb;
          this.cd = _0x2eff4b;
        }
        return _0x356003;
      }();
      _0x2ce02d.WormSkinData = function () {
        function _0x94ace7(_0x324c24, _0x19e441, _0x498510) {
          this._c = _0x324c24;
          this.Zc = _0x19e441;
          this.$c = _0x498510;
        }
        return _0x94ace7;
      }();
      _0x2ce02d.WearSkinData = function () {
        function _0x1d1808(_0x5dbe9d) {
          this.Zc = _0x5dbe9d;
        }
        return _0x1d1808;
      }();
      _0x2ce02d.PortionSkinData = function () {
        function _0x31a397(_0x4e738e, _0x24ebf4) {
          this.Zc = _0x4e738e;
          this.$c = _0x24ebf4;
        }
        return _0x31a397;
      }();
      _0x2ce02d.AbilitySkinData = function () {
        function _0xe5f198(_0x32b763) {
          this.Zc = _0x32b763;
        }
        return _0xe5f198;
      }();
      return _0x2ce02d;
    }();
    var _0x24bfc5 = function () {
      function _0x1e4289() {
        this.md = _0x24bfc5.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x1e4289.prototype.a = function () {};
      _0x1e4289.prototype.rd = function (_0x415c3c) {
        this.od = _0x415c3c;
      };
      _0x1e4289.prototype.G = function (_0x228784) {
        this.md = _0x228784;
        this.sd();
      };
      _0x1e4289.prototype.td = function (_0x5c5a9c) {
        this.nd = _0x5c5a9c;
        this.sd();
      };
      _0x1e4289.prototype.sd = function () {};
      _0x1e4289.prototype.ud = function (_0x17daca, _0x3dfe0c) {
        if (!(window.anApp = _0x4db052).p.W) {
          return null;
        }
        var _0x47e0d6 = _0x17daca[_0x3dfe0c];
        return null == _0x47e0d6 || 0x0 == _0x47e0d6.length ? null : _0x47e0d6[Math.floor(Math.random() * _0x47e0d6.length)].cloneNode();
      };
      _0x1e4289.prototype.vd = function (_0x4d6790, _0x2b98cf, _0x36d8f3) {
        if (this.od && !(_0x36d8f3 <= 0x0)) {
          var _0x3d518a = this.ud(_0x4d6790, _0x2b98cf);
          if (null != _0x3d518a) {
            _0x3d518a.volume = Math.min(0x1, _0x36d8f3);
            _0x3d518a.play();
          }
        }
      };
      _0x1e4289.prototype.wd = function (_0x441099, _0x4c61da) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x441099, _0x4c61da);
        }
      };
      _0x1e4289.prototype.zd = function (_0x44a001, _0x68516f) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x44a001, _0x68516f);
        }
      };
      _0x1e4289.prototype.Cd = function () {};
      _0x1e4289.prototype.Dd = function () {};
      _0x1e4289.prototype.Ed = function () {};
      _0x1e4289.prototype.Fd = function () {};
      _0x1e4289.prototype.Gd = function () {};
      _0x1e4289.prototype.Hd = function () {};
      _0x1e4289.prototype.Id = function (_0x3890bb, _0x14c3b8, _0x3d2660) {};
      _0x1e4289.prototype.Jd = function (_0x4f850e) {};
      _0x1e4289.prototype.Kd = function (_0x229a4a) {};
      _0x1e4289.prototype.Ld = function (_0x4be1f0) {};
      _0x1e4289.prototype.Md = function (_0x5c8c81) {};
      _0x1e4289.prototype.Nd = function (_0x4cf179) {};
      _0x1e4289.prototype.Od = function (_0x185c01) {};
      _0x1e4289.prototype.Pd = function (_0x220e69) {};
      _0x1e4289.prototype.Qd = function (_0x2cdc17) {};
      _0x1e4289.prototype.Rd = function (_0x17aadf) {};
      _0x1e4289.prototype.Sd = function (_0x2493fa) {};
      _0x1e4289.prototype.Td = function (_0x4f42fb) {};
      _0x1e4289.prototype.Ud = function (_0x2613f7) {};
      _0x1e4289.prototype.Vd = function (_0x4814c3) {};
      _0x1e4289.prototype.Wd = function (_0x275d0a) {};
      _0x1e4289.prototype.Xd = function (_0x5ea933, _0x539505) {};
      _0x1e4289.prototype.Yd = function (_0x1e389d) {};
      _0x1e4289.prototype.Zd = function (_0x4e4957, _0x497e0b, _0x4a1524) {};
      (function () {
        function _0x2a8af6(_0x53050f) {
          this.$d = new _0xe45c06(_0x53050f, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x2a8af6.prototype.be = function (_0x37d5c3) {
          if (_0x37d5c3) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x2a8af6.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x2a8af6.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x19eae5(_0x166506) {
          this.ge = _0x166506.map(function (_0x2038b8) {
            return new _0xe45c06(_0x2038b8, 0.4);
          });
          _0xaae25e(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0xaae25e(_0x27616a, _0x5d4648, _0x4ffc88) {
          for (var _0x475eb4 = _0x4ffc88 - 0x1; _0x475eb4 > _0x5d4648; _0x475eb4--) {
            var _0xae625a = _0x5d4648 + Math.floor(Math.random() * (_0x475eb4 - _0x5d4648 + 0x1));
            var _0x58ca69 = _0x27616a[_0x475eb4];
            _0x27616a[_0x475eb4] = _0x27616a[_0xae625a];
            _0x27616a[_0xae625a] = _0x58ca69;
          }
        }
        _0x19eae5.prototype.be = function (_0x517500) {
          if (_0x517500) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x19eae5.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x19eae5.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (null != this.he) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x19eae5.prototype.ke = function (_0x2d99ac) {
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
            this.he.ee(_0x2d99ac, 0x64);
            var _0x45530b = 0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je;
            var _0x18c7e4 = this;
            var _0x5440bc = setTimeout(function () {
              if (_0x18c7e4.ae && _0x5440bc == _0x18c7e4.ie) {
                _0x18c7e4.he.fe(_0x18c7e4.je, 0x64);
                _0x18c7e4.he = _0x18c7e4.le();
                _0x18c7e4.he._d.currentTime = 0x0;
                _0x18c7e4.ke(_0x18c7e4.je);
              }
            }, _0x45530b);
            this.ie = _0x5440bc;
          }
        };
        _0x19eae5.prototype.le = function () {
          var _0x4e7785 = this.ge[0x0];
          var _0x31b417 = Math.max(0x1, this.ge.length / 0x2);
          _0xaae25e(this.ge, _0x31b417, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x4e7785;
        };
      })();
      var _0xe45c06 = function () {
        function _0x2ebee4(_0x1c0d8a, _0x45a219) {
          this._d = _0x1c0d8a;
          this.me = _0x45a219;
          this.de = 0x0;
          _0x1c0d8a.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x2ebee4.prototype.ee = function (_0x13ad0c, _0x4e5b99) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x13ad0c, _0x4e5b99);
        };
        _0x2ebee4.prototype.fe = function (_0x112f65, _0x3fd87a) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x112f65, _0x3fd87a);
        };
        _0x2ebee4.prototype.pe = function (_0x42ce4e, _0x44ba62, _0x381b71) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x437f7e = this;
          var _0x2ace30 = 0x1 / (_0x44ba62 / _0x381b71);
          var _0x244019 = setInterval(function () {
            if (_0x437f7e.oe && _0x244019 != _0x437f7e.ne) {
              return void clearInterval(_0x244019);
            }
            if (_0x42ce4e) {
              _0x437f7e.de = Math.min(0x1, _0x437f7e.de + _0x2ace30);
              _0x437f7e._d.volume = _0x437f7e.de * _0x437f7e.me;
              if (_0x437f7e.de >= 0x1) {
                _0x437f7e.oe = false;
                clearInterval(_0x244019);
              }
            } else {
              _0x437f7e.de = Math.max(0x0, _0x437f7e.de - _0x2ace30);
              _0x437f7e._d.volume = _0x437f7e.de * _0x437f7e.me;
              if (_0x437f7e.de <= 0x0) {
                _0x437f7e._d.pause();
                _0x437f7e.oe = false;
                clearInterval(_0x244019);
              }
            }
          }, _0x381b71);
          this.oe = true;
          this.ne = _0x244019;
          this._d.play();
        };
        return _0x2ebee4;
      }();
      _0x1e4289.AudioState = {
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
      return _0x1e4289;
    }();
    var _0x7d3722 = function () {
      function _0xe086a8(_0x4882cc) {
        this.se = _0x4882cc;
        this.te = _0x4882cc.get()[0x0];
        this.ue = new _0x4b77e7.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x4b77e7.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x5250d5 = [{
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Ae': 0x0 + Math.random(_0x5f0af6 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0xe086a8.prototype.a = function () {
        var _0x4e82a4 = window.anApp = _0x4db052;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x5250d5.length);
        for (var _0x19ba0d = 0x0; _0x19ba0d < this.we.length; _0x19ba0d++) {
          this.we[_0x19ba0d] = new _0x4b77e7.ec();
          this.we[_0x19ba0d].texture = _0x4e82a4.q.Fe;
          this.we[_0x19ba0d].anchor.set(0.5);
          this.we[_0x19ba0d].zIndex = 0x1;
        }
        this.xe = new Array(_0x4e82a4.q.Ge.length);
        for (var _0x325c9a = 0x0; _0x325c9a < this.xe.length; _0x325c9a++) {
          this.xe[_0x325c9a] = new _0x4b77e7.ec();
          this.xe[_0x325c9a].texture = _0x4e82a4.q.Ge[_0x325c9a];
          this.xe[_0x325c9a].anchor.set(0.5);
          this.xe[_0x325c9a].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x325c9a]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x4ef4e6 = 0x0; _0x4ef4e6 < this.ye.length; _0x4ef4e6++) {
          this.ye[_0x4ef4e6] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0xe086a8.sc = false;
      _0xe086a8.Le = function (_0x5758c1) {
        _0xe086a8.sc = _0x5758c1;
      };
      _0xe086a8.prototype.Ra = function () {
        var _0x4b715a = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x309b23 = this.se.width();
        var _0x3668eb = this.se.height();
        this.ue.resize(_0x309b23, _0x3668eb);
        this.ue.resolution = _0x4b715a;
        this.te.width = _0x4b715a * _0x309b23;
        this.te.height = _0x4b715a * _0x3668eb;
        var _0x17d045 = 0.8 * Math.max(_0x309b23, _0x3668eb);
        for (var _0x5c3494 = 0x0; _0x5c3494 < this.we.length; _0x5c3494++) {
          this.we[_0x5c3494].width = _0x17d045;
          this.we[_0x5c3494].height = _0x17d045;
        }
      };
      _0xe086a8.prototype.Pa = function (_0x3b9cb3, _0x2d783e) {
        if (_0xe086a8.sc) {
          var _0x3db355 = _0x3b9cb3 / 0x3e8;
          var _0x1a5078 = _0x2d783e / 0x3e8;
          var _0x2039c9 = this.se.width();
          var _0x11bc6e = this.se.height();
          for (var _0x37ce11 = 0x0; _0x37ce11 < this.we.length; _0x37ce11++) {
            var _0x19f0ba = _0x5250d5[_0x37ce11 % _0x5250d5.length];
            var _0x46c786 = this.we[_0x37ce11];
            var _0x56a272 = _0x19f0ba.Ce * (0.08 * _0x3db355) + _0x19f0ba.Ae >= 0x0 ? Math.cos((_0x19f0ba.Ce * (0.08 * _0x3db355) + _0x19f0ba.Ae) % _0x5f0af6) : Math.cos((_0x19f0ba.Ce * (0.08 * _0x3db355) + _0x19f0ba.Ae) % _0x5f0af6 + _0x5f0af6);
            var _0x21d8b6 = _0x19f0ba.De * (0.08 * _0x3db355) >= 0x0 ? Math.sin(_0x19f0ba.De * (0.08 * _0x3db355) % _0x5f0af6) : Math.sin(_0x19f0ba.De * (0.08 * _0x3db355) % _0x5f0af6 + _0x5f0af6);
            var _0x28ab6d = 0.2 + 0.2 * (_0x19f0ba.Ae + _0x19f0ba.Be * _0x3db355 >= 0x0 ? Math.cos((_0x19f0ba.Ae + _0x19f0ba.Be * _0x3db355) % _0x5f0af6) : Math.cos((_0x19f0ba.Ae + _0x19f0ba.Be * _0x3db355) % _0x5f0af6 + _0x5f0af6));
            _0x46c786.tint = _0x19f0ba.Ee;
            _0x46c786.alpha = _0x28ab6d;
            _0x46c786.position.set(_0x2039c9 * (0.2 + 0.5 * (_0x56a272 + 0x1) * 0.6), _0x11bc6e * (0.1 + 0.5 * (_0x21d8b6 + 0x1) * 0.8));
          }
          var _0xe38e3f = 0.05 * Math.max(_0x2039c9, _0x11bc6e);
          for (var _0x41959a = 0x0; _0x41959a < this.xe.length; _0x41959a++) {
            var _0x66abdf = this.ye[_0x41959a];
            var _0xf2f379 = this.xe[_0x41959a];
            var _0x18c723 = _0x5f0af6 * _0x41959a / this.xe.length + _0x66abdf.He;
            _0x66abdf.Ke += _0x66abdf.Ie * _0x1a5078;
            if (_0x66abdf.Ke > 1.3) {
              _0x66abdf.He = Math.random() * _0x5f0af6;
              _0x66abdf.Ie = 0.66 * (0.09 + 0.07 * Math.random());
              _0x66abdf.Je = 0.15 + 0.7 * Math.random();
              _0x66abdf.Ke = -0.3;
            }
            var _0x2caf9c = _0x66abdf.Je + 0.03 * Math.sin(0x6 * Math.sin(_0x18c723 + 0.48 * _0x3db355));
            var _0x225ce4 = _0x66abdf.Ke;
            var _0xe61653 = Math.sin(Math.PI * _0x225ce4) > 0x1 ? 0x1 : Math.sin(Math.PI * _0x225ce4) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * _0x225ce4)) ? Math.sin(Math.PI * _0x225ce4) : 0.55;
            var _0x349dfd = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(_0x18c723 + 0.12 * _0x3db355)) * 1.2);
            var _0x522d07 = _0x18c723 + 0x2 * _0x66abdf.Ie * _0x3db355;
            _0xf2f379.alpha = _0xe61653;
            _0xf2f379.position.set(_0x2039c9 * _0x2caf9c, _0x11bc6e * _0x225ce4);
            _0xf2f379.rotation = _0x522d07;
            var _0x25959c = _0xf2f379.texture.width / _0xf2f379.texture.height;
            _0xf2f379.width = _0x349dfd * _0xe38e3f;
            _0xf2f379.height = _0x349dfd * _0xe38e3f * _0x25959c;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0xe086a8;
    }();
    var _0x240bd8 = function () {
      function _0x36d962() {}
      _0x36d962.Na = "consent_state_2";
      _0x36d962.ya = 'showPlayerNames';
      _0x36d962.Me = "musicEnabled";
      _0x36d962.Ne = "sfxEnabled";
      _0x36d962.Oe = "account_type";
      _0x36d962.va = 'gameMode';
      _0x36d962.Aa = "nickname";
      _0x36d962.Ba = "skin";
      _0x36d962.d = "prerollCount";
      _0x36d962.La = "shared";
      return _0x36d962;
    }();
    var _0x479ce7 = function () {
      function _0x14a2f1(_0x4c552d, _0x37ff6e, _0xf11acf) {
        var _0x2c38f4 = false;
        var _0xd77091 = _0xf11acf.length;
        var _0x4a6d53 = 0x0;
        for (var _0x5c1c79 = _0xd77091 - 0x1; _0x4a6d53 < _0xd77091; _0x5c1c79 = _0x4a6d53++) {
          if (_0xf11acf[_0x4a6d53][0x1] > _0x37ff6e != _0xf11acf[_0x5c1c79][0x1] > _0x37ff6e && _0x4c552d < (_0xf11acf[_0x5c1c79][0x0] - _0xf11acf[_0x4a6d53][0x0]) * (_0x37ff6e - _0xf11acf[_0x4a6d53][0x1]) / (_0xf11acf[_0x5c1c79][0x1] - _0xf11acf[_0x4a6d53][0x1]) + _0xf11acf[_0x4a6d53][0x0]) {
            _0x2c38f4 = !_0x2c38f4;
          }
        }
        return _0x2c38f4;
      }
      var _0x41961a = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x301d1f, _0x3003da) {
          return _0x14a2f1(_0x3003da, _0x301d1f, _0x41961a);
        }
      };
    }();
    var _0x2a34f0 = function () {
      function _0x3a92e4(_0x2a401f) {
        var _0x4df7ad = undefined;
        _0x4df7ad = _0x2a401f > 0x0 ? '+' + Math.floor(_0x2a401f) : _0x2a401f < 0x0 ? '-' + Math.floor(_0x2a401f) : '0';
        var _0x515770 = Math.min(1.5, 0.5 + _0x2a401f / 0x258);
        var _0x1d7699 = undefined;
        if (_0x2a401f < 0x1) {
          _0x1d7699 = "0xFFFFFF";
        } else {
          if (_0x2a401f < 0x1e) {
            var _0x4564f0 = (_0x2a401f - 0x1) / 0x1d;
            _0x1d7699 = ((0xff * (0x1 * (0x1 - _0x4564f0) + 0.96 * _0x4564f0) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - _0x4564f0) + 0.82 * _0x4564f0) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - _0x4564f0) + 0x0 * _0x4564f0) & 0xff);
          } else {
            if (_0x2a401f < 0x12c) {
              var _0x504f0e = (_0x2a401f - 0x1e) / 0x10e;
              _0x1d7699 = ((0xff * (0.96 * (0x1 - _0x504f0e) + 0.93 * _0x504f0e) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - _0x504f0e) + 0.34 * _0x504f0e) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - _0x504f0e) + 0.25 * _0x504f0e) & 0xff);
            } else {
              if (_0x2a401f < 0x2bc) {
                var _0x5f315f = (_0x2a401f - 0x12c) / 0x190;
                _0x1d7699 = ((0xff * (0.93 * (0x1 - _0x5f315f) + 0.98 * _0x5f315f) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - _0x5f315f) + 0x0 * _0x5f315f) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - _0x5f315f) + 0.98 * _0x5f315f) & 0xff);
              } else {
                _0x1d7699 = 16318713;
              }
            }
          }
        }
        var _0x1a7678 = Math.random();
        var _0x1afc37 = 0x1 + 0.5 * Math.random();
        return new _0x622e10(_0x4df7ad, _0x1d7699, true, 0.5, _0x515770, _0x1a7678, _0x1afc37);
      }
      function _0x1fe683(_0x1e56fa, _0x3c566e) {
        var _0x307e5c = undefined;
        var _0x3d1074 = undefined;
        if (_0x3c566e) {
          _0x307e5c = 1.3;
          _0x3d1074 = 15554111;
        } else {
          _0x307e5c = 1.1;
          _0x3d1074 = 16044288;
        }
        return new _0x622e10(_0x1e56fa, _0x3d1074, true, 0.5, _0x307e5c, 0.5, 0.7);
      }
      var _0x300eda = _0x26c215(_0x4b77e7.Zb, function () {
        _0x4b77e7.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x300eda.prototype.Re = function (_0x473c9a) {
        this.Qe += _0x473c9a;
        if (this.Qe >= 0x1) {
          var _0x10c0e3 = Math.floor(this.Qe);
          this.Qe -= _0x10c0e3;
          var _0x300a3c = _0x3a92e4(_0x10c0e3);
          this.addChild(_0x300a3c);
          this.Pe.push(_0x300a3c);
        }
      };
      _0x300eda.prototype.Se = function (_0x195ab3) {
        if (_0x195ab3) {
          lxpdhscount += 0x1;
          zwormData.hs = lxpdhscount;
          if (!(lxpdhscount % 0xa)) {
            lxpdlaughsound.play();
          } else {
            lxpdhssound.play();
          }
          var _0x577df4 = _0x1fe683(window.I18N_MESSAGES["index.game.floating.headshot"], true);
          this.addChild(_0x577df4);
          this.Pe.push(_0x577df4);
        } else {
          lxpdkillcount += 0x1;
          var _0x577df4 = _0x1fe683(window.I18N_MESSAGES['index.game.floating.wellDone'], false);
          this.addChild(_0x577df4);
          this.Pe.push(_0x577df4);
        }
      };
      _0x300eda.prototype.Te = function (_0x4f11e6, _0x5336d3) {
        var _0x214d06 = (window.anApp = _0x4db052).s.H.wb;
        var _0x2815d8 = _0x214d06.ue.width / _0x214d06.ue.resolution;
        var _0x2bb0ab = _0x214d06.ue.height / _0x214d06.ue.resolution;
        var _0x30656f = 0x0;
        for (; _0x30656f < this.Pe.length;) {
          var _0x3a5166 = this.Pe[_0x30656f];
          _0x3a5166.Ue = _0x3a5166.Ue + _0x5336d3 / 0x7d0 * _0x3a5166.Ve;
          _0x3a5166.We = _0x3a5166.We + _0x5336d3 / 0x7d0 * _0x3a5166.Xe;
          _0x3a5166.alpha = 0.5 * Math.sin(Math.PI * _0x3a5166.We);
          _0x3a5166.scale.set(_0x3a5166.Ue);
          _0x3a5166.position.x = _0x2815d8 * (0.25 + 0.5 * _0x3a5166.Ye);
          _0x3a5166.position.y = _0x3a5166.Ze ? _0x2bb0ab * (0x1 - 0.5 * (0x1 + _0x3a5166.We)) : _0x2bb0ab * (0x1 - 0.5 * (0x0 + _0x3a5166.We));
          if (_0x3a5166.We > 0x1) {
            _0x205297(_0x3a5166);
            this.Pe.splice(_0x30656f, 0x1);
            _0x30656f--;
          }
          _0x30656f++;
        }
      };
      var _0x622e10 = function () {
        return _0x26c215(_0x4b77e7.fc, function (_0x198793, _0x4caafe, _0x3775eb, _0x59a4b1, _0x312fbe, _0x56d022, _0xe611d) {
          _0x4b77e7.fc.call(this, _0x198793, {
            'fill': _0x4caafe,
            'fontFamily': "PTSans",
            'fontSize': 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x3775eb;
          this.Ue = _0x59a4b1;
          this.Ve = _0x312fbe;
          this.Ye = _0x56d022;
          this.We = 0x0;
          this.Xe = _0xe611d;
        });
      }();
      return _0x300eda;
    }();
    var _0xb3e3e = function () {
      function _0x42c368(_0xc25270, _0x2cb12d) {
        this.Gc = _0xc25270;
        this.Hc = _0x2cb12d;
      }
      return _0x42c368;
    }();
    var _0x5e0b25 = function () {
      function _0x548f79() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x548f79.TEAM_DEFAULT = 0x0;
      _0x548f79.prototype.ef = function () {
        return 1.02 * this.ub;
      };
      return _0x548f79;
    }();
    var _0x51d7ee = function () {
      function _0x21564b(_0xbd0ff9) {
        this.se = _0xbd0ff9;
        this.te = _0xbd0ff9.get()[0x0];
        this.ue = new _0x4b77e7.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x4b77e7.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(0x168 * Math.random());
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x266df8();
        this.mf = new _0x4b77e7.bc();
        this.nf = new _0x4b77e7.Zb();
        this.pf = new _0x4b77e7.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x4b77e7.Zb();
        this.rf = new _0x4b77e7.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x4b77e7.Zb();
        this.tf = new _0x34aaa6();
        this.uf = new _0x25ae75();
        this.vf = new _0x92e6df();
        this.wf = new _0x2a34f0();
        this.xf = new _0x4b77e7.ec();
        this.yf = {
          'x': 0x0,
          'y': 0x0
        };
        this.a();
      }
      _0x21564b.prototype.a = function () {
        lxpdjoysticks = [];
        lxpdjoystick = -0x1;
        lxpdservertext = new _0x4b77e7.fc('', {
          'fontFamily': "Arial",
          'fontSize': 0xc,
          'fill': "#ffffff",
          'align': 'center'
        });
        lxpdservertext.x = 0x19;
        if (lxpdmobilecheck()) {
          lxpdjoysticks[0x0] = new Joystick({
            'onChange': _0x5746d2 => {
              _0x5746d2.aradian = _0x5746d2.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x5746d2.aradian <= Math.PI ? -0x1 * _0x5746d2.aradian : Math.PI - (_0x5746d2.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x0].visible = false;
          lxpdjoysticks[0x1] = new Joystick({
            'outer': _0x4b77e7.ec.from('https://i.imgur.com/UKIZZmr.png'),
            'inner': _0x4b77e7.ec.from("https://i.imgur.com/IqQGK58.png"),
            'onChange': _0x547e37 => {
              _0x547e37.aradian = _0x547e37.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x547e37.aradian <= Math.PI ? -0x1 * _0x547e37.aradian : Math.PI - (_0x547e37.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x1].visible = false;
          lxpdjoysticks[0x2] = new Joystick({
            'outer': _0x4b77e7.ec.from('https://i.imgur.com/Hg3sKn0.png'),
            'inner': _0x4b77e7.ec.from('https://i.imgur.com/ZFifUoX.png'),
            'onChange': _0x3a5dc6 => {
              _0x3a5dc6.aradian = _0x3a5dc6.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x3a5dc6.aradian <= Math.PI ? -0x1 * _0x3a5dc6.aradian : Math.PI - (_0x3a5dc6.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x2].visible = false;
          for (let _0x18363d = 0x0; _0x18363d < lxpdjoysticks.length; _0x18363d++) {
            this.rf.addChild(lxpdjoysticks[_0x18363d]);
          }
        }
        lxpdzoomtext = new _0x4b77e7.fc('', {
          'align': "center",
          'fill': "#fff",
          'fontSize': 0xc,
          'lineJoin': "round",
          'whiteSpace': "normal",
          'wordWrap': true,
          'fontWeight': "bold"
        });
        lxpdzoomtext.x = 0x64;
        lxpdzoomtext.y = 0x5a;
        this.rf.addChild(lxpdzoomtext);
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        lxpdBackground = new _0x4b77e7.bc();
        lxpdBackground.zIndex = 0x14;
        this.ve.addChild(lxpdBackground);
        ctxHeadshotLineContainer = new _0x4b77e7.bc();
        ctxHeadshotLineContainer.zIndex = 0xf423f;
        this.ve.addChild(ctxHeadshotLineContainer);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x4db052).q.Af;
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
      _0x21564b.prototype.Ra = function () {
        var _0x2bafa3 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x26bee2 = this.se.width();
        var _0x36938e = this.se.height();
        this.ue.resize(_0x26bee2, _0x36938e);
        this.ue.resolution = _0x2bafa3;
        this.te.width = _0x2bafa3 * _0x26bee2;
        this.te.height = _0x2bafa3 * _0x36938e;
        this.jf = Math.min(Math.min(_0x26bee2, _0x36938e), 0.625 * Math.max(_0x26bee2, _0x36938e));
        this.xf.position.x = _0x26bee2 / 0x2;
        this.xf.position.y = _0x36938e / 0x2;
        this.xf.width = _0x26bee2;
        this.xf.height = _0x36938e;
        this.tf.position.x = 0x3c;
        this.tf.position.y = 0x3c;
        this.uf.position.x = 0x6e;
        this.uf.position.y = 0xa;
        this.vf.position.x = _0x26bee2 - 0xe1;
        this.vf.position.y = 0x1;
        this.tf.addChild(ctx.teamsContainer);
        this.tf.addChild(ctx.containerHsRec);
      };
      _0x21564b.prototype.Te = function (_0xe3a804, _0x5f0ab6) {
        var _0x39077f = window.anApp = _0x4db052;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0xe3a804.af == 0x0 ? _0x39077f.q.Cf : _0x39077f.q.Df);
        if (wormxt_Obj && true || false) {
          setSectorsGame();
        } else {
          lxpdBackground.removeChildren();
          lxpdBackground.clear();
          lxpdBackground.lineStyle(0x1, 0xff0000, 0x1);
          lxpdBackground.drawCircle(0x0, 0x0, 0x1f4);
          lxpdBackground.endFill();
        }
        this.vf.Ef = _0x5f0ab6;
        this.sf.visible = _0x5f0ab6;
      };
      _0x21564b.prototype.Pa = function (_0x3c697b, _0x4a76ee) {
        if (!(this.ue.width <= 0x5)) {
          var _0x36e367 = window.anApp = _0x4db052;
          var _0x3b6ffe = _0x36e367.o.N;
          var _0x48691a = this.ue.width / this.ue.resolution;
          var _0x5501a6 = this.ue.height / this.ue.resolution;
          this['if'] = _0x36e367.o.jb > this['if'] ? Math.min(_0x36e367.o.jb, this['if'] + _0x4a76ee * 0.002) : Math.max(_0x36e367.o.jb, this['if'] - _0x4a76ee * 0.002);
          var _0x2d02d4 = this.jf / (this['if'] * lxpdmultiplier);
          var _0x2b19b2 = _0x36e367.o.N.Ff[_0x4997d0.ZOOM_TYPE];
          var _0x2610ff = null != _0x2b19b2 && _0x2b19b2.sc;
          this.kf = this.kf + _0x4a76ee / 0x3e8 * (0.1 * (_0x2610ff ? 0x1 : 0x0) - this.kf) > 0x1 ? 0x1 : this.kf + _0x4a76ee / 0x3e8 * (0.1 * (_0x2610ff ? 0x1 : 0x0) - this.kf) < 0x0 ? 0x0 : Number.isFinite(this.kf + _0x4a76ee / 0x3e8 * (0.1 * (_0x2610ff ? 0x1 : 0x0) - this.kf)) ? this.kf + _0x4a76ee / 0x3e8 * (0.1 * (_0x2610ff ? 0x1 : 0x0) - this.kf) : 0.5;
          this.xf.alpha = this.kf;
          this.ff = this.ff + 0.01 * _0x4a76ee;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x3c697b / 0x4b0 * 0x2 * Math.PI);
          var _0x27a03c = _0x3b6ffe.Gf();
          this.yf.x = _0x27a03c.x + (this.yf.x - _0x27a03c.x) * Math.pow(0.5, _0x4a76ee / 33.333);
          this.yf.y = _0x27a03c.y + (this.yf.y - _0x27a03c.y) * Math.pow(0.5, _0x4a76ee / 33.333);
          var _0x2d09d5 = _0x48691a / _0x2d02d4 / 0x2;
          var _0x3011ee = _0x5501a6 / _0x2d02d4 / 0x2;
          _0x36e367.o.yb(this.yf.x - 1.3 * _0x2d09d5, this.yf.x + 1.3 * _0x2d09d5, this.yf.y - 1.3 * _0x3011ee, this.yf.y + 1.3 * _0x3011ee);
          this.lf.Te(this.yf.x, this.yf.y, 0x2 * _0x2d09d5, 0x2 * _0x3011ee);
          var _0x37d524 = _0x36e367.o.fb.ub;
          this.ve.scale.x = _0x2d02d4;
          this.ve.scale.y = _0x2d02d4;
          this.ve.position.x = _0x48691a / 0x2 - this.yf.x * _0x2d02d4;
          this.ve.position.y = _0x5501a6 / 0x2 - this.yf.y * _0x2d02d4;
          if (ctxHeadshotLineContainer.ctxLine2) {
            ctxHeadshotLineContainer.ctxLine2.clear();
          }
          zwormData.playerX = this.tf.Jf.position.x;
          zwormData.playerY = this.tf.Jf.position.y;
          var _0x3ad4b4 = Math.hypot(_0x27a03c.x, _0x27a03c.y);
          if (_0x3ad4b4 > _0x37d524 - 0xa) {
            this.hf = 0x1 + (_0x3ad4b4 - _0x37d524) / 0xa > 0x1 ? 0x1 : 0x1 + (_0x3ad4b4 - _0x37d524) / 0xa < 0x0 ? 0x0 : Number.isFinite(0x1 + (_0x3ad4b4 - _0x37d524) / 0xa) ? 0x1 + (_0x3ad4b4 - _0x37d524) / 0xa : 0.5;
            var _0x142c59 = Math.cos(this.ff * _0x5f0af6 / 0x168) * (0x1 - this.hf) + 0x1 * this.hf;
            var _0x90a633 = Math.sin(this.ff * _0x5f0af6 / 0x168) * (0x1 - this.hf);
            var _0x48ed49 = (Math.atan2(_0x90a633, _0x142c59) + _0x5f0af6) % _0x5f0af6 * 0x168 / _0x5f0af6;
            var _0x24e89d = this.hf * (0.5 + 0.5 * this.gf);
            var _0x3bb573 = _0x8523e1(Math.floor(_0x48ed49), 0x1, 0.75 - 0.25 * this.hf);
            this.lf.Hf(_0x3bb573[0x0], _0x3bb573[0x1], _0x3bb573[0x2], 0.1 + 0.2 * _0x24e89d);
          } else {
            this.hf = 0x0;
            var _0x55c476 = _0x8523e1(Math.floor(this.ff), 0x1, 0.75);
            this.lf.Hf(_0x55c476[0x0], _0x55c476[0x1], _0x55c476[0x2], 0.1);
          }
          var _0x253313 = 0x0;
          for (; _0x253313 < this.sf.children.length; _0x253313++) {
            var _0x49abfd = this.sf.children[_0x253313];
            _0x49abfd.position.x = _0x48691a / 0x2 - (this.yf.x - _0x49abfd.If.x) * _0x2d02d4;
            _0x49abfd.position.y = _0x5501a6 / 0x2 - (this.yf.y - _0x49abfd.If.y) * _0x2d02d4;
          }
          this.tf.Jf.position.x = _0x27a03c.x / _0x37d524 * this.tf.Kf;
          this.tf.Jf.position.y = _0x27a03c.y / _0x37d524 * this.tf.Kf;
          this.tf.WLp.position.x = -0x19 - this.tf.WLp.width / 0x2;
          this.tf.WLp.text = parseInt(lxpdhscount);
          this.tf.MLb.position.x = 0x19 - this.tf.MLb.width / 0x2;
          this.tf.MLb.text = parseInt(lxpdkillcount);
          this.uf.Qa(_0x3c697b);
          this.wf.Te(_0x3c697b, _0x4a76ee);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x21564b.prototype.Lf = function (_0x3d65c5, _0x2d6bc3) {
        _0x2d6bc3.Of.Nf.Mf().zIndex = (_0x3d65c5 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x2d6bc3.Of.Pf.Mf());
        this.pf.addChild(_0x2d6bc3.Of.Nf.Mf());
      };
      _0x21564b.prototype.Qf = function (_0x59cbef, _0x27ba8c, _0x2dadcb) {
        _0x27ba8c.Rf.zIndex = (window.anApp = _0x4db052).o.fb.bf ? 0x0 : 0xa + (_0x59cbef + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x27ba8c.Rf);
        if (_0x59cbef != (window.anApp = _0x4db052).o.fb.bf) {
          this.sf.addChild(_0x2dadcb);
        }
      };
      var _0x34aaa6 = function () {
        return _0x26c215(_0x4b77e7.Zb, function () {
          _0x4b77e7.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x4b77e7.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x4b77e7.bc();
          var _0x5bde3b = new _0x4b77e7.bc();
          _0x5bde3b.beginFill("black", 0.4);
          _0x5bde3b.drawCircle(0x0, 0x0, this.Kf);
          _0x5bde3b.endFill();
          _0x5bde3b.lineStyle(0x2, 0xe3d2d2);
          _0x5bde3b.drawCircle(0x0, 0x0, this.Kf);
          _0x5bde3b.moveTo(0x0, -this.Kf);
          _0x5bde3b.lineTo(0x0, +this.Kf);
          _0x5bde3b.moveTo(-this.Kf, 0x0);
          _0x5bde3b.lineTo(+this.Kf, 0x0);
          _0x5bde3b.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill("0xffffff");
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, 'black');
          this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
          this.Jf.endFill();
          this.addChild(_0x5bde3b);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          var _0x10d466 = new _0x4b77e7.fc('HS', {
            'fontFamily': "Arial",
            'fontSize': 0x10,
            'fill': 'white',
            'align': 'center'
          });
          _0x10d466.position.y = 0x32;
          _0x10d466.position.x = -0x23;
          var _0x181fec = new _0x4b77e7.fc("KILL", {
            'fontFamily': "Arial",
            'fontSize': 0x10,
            'fill': 'white',
            'align': "center"
          });
          _0x181fec.position.y = 0x32;
          _0x181fec.position.x = 0xa;
          this.addChild(_0x10d466);
          this.addChild(_0x181fec);
          lxpdkillcount = 0x0;
          lxpdhscount = 0x0;
          this.WLp = new _0x4b77e7.fc('', {
            'fontFamily': "Arial",
            'fontSize': 0xe,
            'fill': "#FFFFFF",
            'align': 'center'
          });
          this.WLp.position.y = 0x43;
          this.WLp.position.x = -0x2d;
          this.MLb = new _0x4b77e7.fc('', {
            'fontFamily': "Arial",
            'fontSize': 0xe,
            'fill': "#FFFFFF",
            'align': 'center'
          });
          this.MLb.position.y = 0x43;
          this.MLb.position.x = 0x14;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let _0x17ebec = new _0x4b77e7._b(_0x4b77e7.$b.from("https://i.imgur.com/VPkrI9l.png"));
          var _0x4d7a91 = new _0x4b77e7.ec();
          _0x4d7a91.texture = _0x17ebec;
          _0x4d7a91.width = 0x64;
          _0x4d7a91.height = 0x64;
          _0x4d7a91.x = -0x32;
          _0x4d7a91.y = -0x32;
          this.addChild(_0x4d7a91);
          if (lxpdmobilecheck()) {
            var _0x393dd9 = document.getElementById("game-cont");
            lxpdmobilecontrol = 0x0;
            lxpdmobilecontrol2 = -0x1;
            lxpdmobileprediction = 0x0;
            lxpdmobilecontroltextures = [];
            lxpdmobilepredictiontextures = [];
            lxpdmobilecontroltextures[0x0] = new _0x4b77e7.ec.from("https://i.imgur.com/aOyOob6.png");
            lxpdmobilecontroltextures[0x0].width = 0x50;
            lxpdmobilecontroltextures[0x0].height = 0x28;
            lxpdmobilecontroltextures[0x0].x = -0x64 + _0x393dd9.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x0].y = -0x3c;
            lxpdmobilecontroltextures[0x0].on('tap', () => {
              lxpdmobilecontrol++;
              lxpdjoystick = 0x0;
              lxpdmobileprediction = -0x1;
              for (let _0x5bbb58 = 0x0; _0x5bbb58 < lxpdmobilepredictiontextures.length; _0x5bbb58++) {
                lxpdmobilepredictiontextures[_0x5bbb58].visible = false;
              }
              for (let _0x10007e = 0x0; _0x10007e < lxpdmobilecontroltextures.length; _0x10007e++) {
                lxpdmobilecontroltextures[_0x10007e].visible = lxpdmobilecontrol === _0x10007e;
              }
            });
            lxpdmobilecontroltextures[0x1] = new _0x4b77e7.ec.from("https://i.imgur.com/9ui2KwE.png");
            lxpdmobilecontroltextures[0x1].width = 0x50;
            lxpdmobilecontroltextures[0x1].height = 0x28;
            lxpdmobilecontroltextures[0x1].x = -0x64 + _0x393dd9.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x1].y = -0x3c;
            lxpdmobilecontroltextures[0x1].visible = false;
            lxpdmobilecontroltextures[0x1].on("tap", () => {
              if (lxpdmobilecontrol2 !== 0x1) {
                lxpdmobilecontrol2++;
                if (lxpdmobilecontrol2 === 0x0) {
                  lxpdmobilearrowtexture.x = 0xf;
                  lxpdmobilepeedtexture.x = -0xfa + _0x393dd9.offsetWidth;
                  lxpdmobilearrowtexture.visible = true;
                  lxpdmobilepeedtexture.visible = true;
                }
                if (lxpdmobilecontrol2 === 0x1) {
                  lxpdmobilearrowtexture.x = -0xfa + _0x393dd9.offsetWidth;
                  lxpdmobilepeedtexture.x = 0xf;
                }
                lxpdmobileprediction = 0x1;
                lxpdjoystick = -0x1;
                for (let _0x22c0c1 = 0x0; _0x22c0c1 < lxpdmobilepredictiontextures.length; _0x22c0c1++) {
                  lxpdmobilepredictiontextures[_0x22c0c1].visible = lxpdmobileprediction === _0x22c0c1;
                }
                return;
              }
              lxpdmobilearrowtexture.visible = false;
              lxpdmobilepeedtexture.visible = false;
              lxpdjoystick = 0x1;
              lxpdmobilecontrol++;
              for (let _0x2325ef = 0x0; _0x2325ef < lxpdmobilecontroltextures.length; _0x2325ef++) {
                lxpdmobilecontroltextures[_0x2325ef].visible = lxpdmobilecontrol === _0x2325ef;
              }
            });
            lxpdmobilecontroltextures[0x2] = new _0x4b77e7.ec.from('https://i.imgur.com/NKAyYa8.png');
            lxpdmobilecontroltextures[0x2].width = 0x50;
            lxpdmobilecontroltextures[0x2].height = 0x28;
            lxpdmobilecontroltextures[0x2].x = -0x64 + _0x393dd9.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x2].y = -0x3c;
            lxpdmobilecontroltextures[0x2].visible = false;
            lxpdmobilecontroltextures[0x2].on("tap", () => {
              lxpdmobilecontrol++;
              lxpdmobileprediction = 0x2;
              lxpdjoystick = 0x2;
              for (let _0x561efa = 0x0; _0x561efa < lxpdmobilepredictiontextures.length; _0x561efa++) {
                lxpdmobilepredictiontextures[_0x561efa].visible = lxpdmobileprediction === _0x561efa;
              }
              for (let _0x283ff0 = 0x0; _0x283ff0 < lxpdmobilecontroltextures.length; _0x283ff0++) {
                lxpdmobilecontroltextures[_0x283ff0].visible = lxpdmobilecontrol === _0x283ff0;
              }
            });
            lxpdmobilecontroltextures[0x3] = new _0x4b77e7.ec.from("https://i.imgur.com/n1jVrwm.png");
            lxpdmobilecontroltextures[0x3].width = 0x50;
            lxpdmobilecontroltextures[0x3].height = 0x28;
            lxpdmobilecontroltextures[0x3].x = -0x64 + _0x393dd9.offsetWidth * 0.5;
            lxpdmobilecontroltextures[0x3].y = -0x3c;
            lxpdmobilecontroltextures[0x3].visible = false;
            lxpdmobilecontroltextures[0x3].on("tap", () => {
              lxpdmobilecontrol = 0x0;
              lxpdmobilecontrol2 = -0x1;
              lxpdmobileprediction = 0x0;
              lxpdjoystick = -0x1;
              for (let _0x3d93dc = 0x0; _0x3d93dc < lxpdmobilepredictiontextures.length; _0x3d93dc++) {
                lxpdmobilepredictiontextures[_0x3d93dc].visible = lxpdmobileprediction === _0x3d93dc;
              }
              for (let _0x3692b1 = 0x0; _0x3692b1 < lxpdmobilecontroltextures.length; _0x3692b1++) {
                lxpdmobilecontroltextures[_0x3692b1].visible = lxpdmobilecontrol === _0x3692b1;
              }
            });
            lxpdmobilepredictiontextures[0x0] = new _0x4b77e7.ec.from('https://i.imgur.com/4ccZ556.png');
            lxpdmobilepredictiontextures[0x0].width = 0x10;
            lxpdmobilepredictiontextures[0x0].height = 0x10;
            lxpdmobilepredictiontextures[0x0].x = 0x0;
            lxpdmobilepredictiontextures[0x0].y = 0x0;
            lxpdmobilepredictiontextures[0x0].alpha = 0x0;
            lxpdmobilepredictiontextures[0x1] = new _0x4b77e7.ec.from('https://i.imgur.com/hUVCdUv.png');
            lxpdmobilepredictiontextures[0x1].width = 0x10;
            lxpdmobilepredictiontextures[0x1].height = 0x10;
            lxpdmobilepredictiontextures[0x1].x = 0x0;
            lxpdmobilepredictiontextures[0x1].y = 0x0;
            lxpdmobilepredictiontextures[0x1].visible = false;
            lxpdmobilepredictiontextures[0x2] = new _0x4b77e7.ec.from('https://i.imgur.com/WqWsDfi.png');
            lxpdmobilepredictiontextures[0x2].width = 0x10;
            lxpdmobilepredictiontextures[0x2].height = 0x10;
            lxpdmobilepredictiontextures[0x2].x = 0x0;
            lxpdmobilepredictiontextures[0x2].y = 0x0;
            lxpdmobilepredictiontextures[0x2].visible = false;
            lxpdmobilearrowtexture = new _0x4b77e7.ec.from("https://i.imgur.com/mHp0ozi.png");
            lxpdmobilearrowtexture.width = 0x64;
            lxpdmobilearrowtexture.height = 0x64;
            lxpdmobilearrowtexture.x = 0xf;
            lxpdmobilearrowtexture.y = -0xd2 + _0x393dd9.offsetHeight;
            lxpdmobilearrowtexture.visible = false;
            lxpdmobilepeedtexture = new _0x4b77e7.ec.from("https://i.imgur.com/0G8cFtP.png");
            lxpdmobilepeedtexture.width = 0x50;
            lxpdmobilepeedtexture.height = 0x50;
            lxpdmobilepeedtexture.x = -0xfa + _0x393dd9.offsetWidth;
            lxpdmobilepeedtexture.y = -0xc8 + _0x393dd9.offsetHeight;
            lxpdmobilepeedtexture.visible = false;
            lxpdmobilepeedtexture.alpha = 0.5;
            this.addChild(lxpdmobilearrowtexture);
            this.addChild(lxpdmobilepeedtexture);
            for (let _0x31ad80 = 0x0; _0x31ad80 < lxpdmobilecontroltextures.length; _0x31ad80++) {
              this.addChild(lxpdmobilecontroltextures[_0x31ad80]);
            }
            for (let _0x4f3f3e = 0x0; _0x4f3f3e < lxpdmobilepredictiontextures.length; _0x4f3f3e++) {
              this.addChild(lxpdmobilepredictiontextures[_0x4f3f3e]);
            }
          }
        });
      }();
      var _0x25ae75 = function () {
        var _0x467f91 = _0x26c215(_0x4b77e7.Zb, function () {
          _0x4b77e7.Zb.call(this);
          this.Tf = {};
        });
        _0x467f91.prototype.Qa = function (_0x38aff8) {
          var _0x195f86 = 0.5 + 0.5 * Math.cos(_0x5f0af6 * (_0x38aff8 / 0x3e8 / 1.6));
          var _0x1ea0bf;
          for (_0x1ea0bf in this.Tf) {
            var _0x317197 = this.Tf[_0x1ea0bf];
            var _0x29cccd = _0x317197.Uf;
            _0x317197.alpha = 0x1 - _0x29cccd + _0x29cccd * _0x195f86;
          }
        };
        _0x467f91.prototype.Te = function (_0x28ad5c) {
          var _0x55ac44;
          for (_0x55ac44 in this.Tf) {
            if (!(null != _0x28ad5c[_0x55ac44] && _0x28ad5c[_0x55ac44].sc)) {
              _0x205297(this.Tf[_0x55ac44]);
              delete this.Tf[_0x55ac44];
            }
          }
          var _0x385daa = 0x0;
          var _0x583142;
          for (_0x583142 in _0x28ad5c) {
            var _0x33bd60 = _0x28ad5c[_0x583142];
            if (_0x33bd60.sc) {
              var _0x216864 = this.Tf[_0x583142];
              if (!_0x216864) {
                var _0x16529e = (window.anApp = _0x4db052).p.Dc().ld(_0x33bd60.rc).Zc;
                _0x216864 = new _0x14174c();
                _0x216864.texture = _0x16529e.Hc;
                _0x216864.width = 0x28;
                _0x216864.height = 0x28;
                this.Tf[_0x583142] = _0x216864;
                this.addChild(_0x216864);
              }
              assignPtcValues(this, _0x583142, _0x33bd60.tc);
              _0x216864.Uf = _0x33bd60.tc;
              _0x216864.position.x = _0x385daa;
              _0x385daa = _0x385daa + 0x28;
            }
          }
        };
        var _0x14174c = function () {
          return _0x26c215(_0x4b77e7.ec, function () {
            _0x4b77e7.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0x467f91;
      }();
      var _0x92e6df = function () {
        var _0x1d1ee1 = _0x26c215(_0x4b77e7.Zb, function () {
          _0x4b77e7.Zb.call(this);
          this.Ef = true;
          this.Vf = 0xc;
          this.Wf = 0x9;
          this.Pe = [];
          var _0x5aef20 = 0x0;
          for (; _0x5aef20 < 0xe; _0x5aef20++) {
            this.Xf();
          }
        });
        _0x1d1ee1.prototype.Te = function (_0x258171) {
          if (lxpdzoomplustexture) {
            this.addChild(lxpdzoomplustexture);
          }
          if (lxpdzoomsubtracttexture) {
            this.addChild(lxpdzoomsubtracttexture);
          }
          if (lxpdgirosubtracttexture) {
            this.addChild(lxpdgirosubtracttexture);
          }
          if (lxpdexplotWubtracttexture) {
            this.addChild(lxpdexplotWubtracttexture);
          }
          if (lxpdservertext.text !== '') {
            this.addChild(lxpdservertext);
            this.addChild(ctx.containerHsRec2);
          }
          if (zwormData) {
            sendPlayerUpdate(0x0, 0x0);
          } else {
            console.log("Las coordenadas de zwormData no están definidas aún.");
          }
          var _0x830ec3 = window.anApp = _0x4db052;
          var _0xf5c4db = _0x830ec3.o.fb.af == 0x10;
          var _0x5a2199 = 0x0;
          var _0x1d46a8 = 0x0;
          if (_0x1d46a8 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x1d46a8].Yf(0x1, "white");
          this.Pe[_0x1d46a8].Zf('', lxpdservertext.text === '' ? "Top " + lxpdtoplist : '', '('.concat(_0x830ec3.o.tb, " 🌍)"));
          this.Pe[_0x1d46a8].position.y = _0x5a2199;
          _0x5a2199 = _0x5a2199 + this.Vf;
          _0x1d46a8 = _0x1d46a8 + 0x1;
          if (_0x258171.$f.length > 0x0) {
            _0x5a2199 = _0x5a2199 + this.Wf;
          }
          var _0x3de79e = 0x0;
          for (; _0x3de79e < _0x258171.$f.length; _0x3de79e++) {
            var _0x3ffd52 = _0x258171.$f[_0x3de79e];
            var _0x5b2d49 = _0x830ec3.p.Dc().ed(_0x3ffd52._f);
            if (_0x1d46a8 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x1d46a8].Yf(0.8, _0x5b2d49.bd._c);
            this.Pe[_0x1d46a8].Zf('' + (_0x3de79e + 0x1), _0x5b2d49.ad[_0x20795c] ? _0x5b2d49.ad[_0x20795c] : _0x5b2d49.ad.en ? _0x5b2d49.ad.en : _0x5b2d49.ad.x, '' + Math.floor(_0x3ffd52.M));
            this.Pe[_0x1d46a8].position.y = _0x5a2199;
            _0x5a2199 = _0x5a2199 + this.Vf;
            _0x1d46a8 = _0x1d46a8 + 0x1;
          }
          if (_0x258171.ag.length > 0x0) {
            _0x5a2199 = _0x5a2199 + this.Wf;
          }
          var _0x2c4011 = 0x0;
          for (; _0x2c4011 < _0x258171.ag.length; _0x2c4011++) {
            var _0x224721 = _0x258171.ag[_0x2c4011];
            var _0x32544e = _0x830ec3.o.fb.bf == _0x224721.bg;
            var _0x1af119 = undefined;
            var _0x2b4a1c = undefined;
            if (_0x32544e) {
              _0x1af119 = "white";
              _0x2b4a1c = _0x830ec3.o.N.Mb.ad;
            } else {
              var _0x5d1913 = _0x830ec3.o.hb[_0x224721.bg];
              if (null != _0x5d1913) {
                _0x1af119 = _0xf5c4db ? _0x830ec3.p.Dc().ed(_0x5d1913.Mb.cg).bd._c : _0x830ec3.p.Dc().dd(_0x5d1913.Mb.dg)._c;
                _0x2b4a1c = this.Ef ? _0x5d1913.Mb.ad : "---";
              } else {
                _0x1af119 = 'gray';
                _0x2b4a1c = '?';
              }
            }
            if (_0x32544e) {
              _0x5a2199 = _0x5a2199 + this.Wf;
            }
            if (_0x1d46a8 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x1d46a8].Yf(0x1, 'white');
            if (_0x830ec3.o.O === _0x1d46a8) {
              this.Pe[_0x1d46a8].Yf(0x1, "#FFAAAA");
            }
            var _0xa62af0 = Math.floor(_0x224721.M);
            _0xa62af0.customFormat();
            this.Pe[_0x1d46a8].Zf('' + (_0x2c4011 + 0x1), _0x2b4a1c, '' + _0xa62af0.customFormat());
            this.Pe[_0x1d46a8].position.y = _0x5a2199;
            _0x5a2199 = _0x5a2199 + this.Vf;
            _0x1d46a8 = _0x1d46a8 + 0x1;
            if (_0x32544e) {
              _0x5a2199 = _0x5a2199 + this.Wf;
            }
          }
          if (_0x830ec3.o.O > _0x258171.ag.length) {
            _0x5a2199 = _0x5a2199 + this.Wf;
            if (_0x1d46a8 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x1d46a8].Yf(0x1, "#FFAAAA");
            window.tuNewScore = Math.floor(_0x830ec3.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[_0x1d46a8].Zf('' + _0x830ec3.o.O, _0x830ec3.o.N.Mb.ad, '' + window.tuNewScore.customFormat());
            this.Pe[_0x1d46a8].position.y = _0x5a2199;
            _0x5a2199 = _0x5a2199 + this.Vf;
            _0x1d46a8 = _0x1d46a8 + 0x1;
            _0x5a2199 = _0x5a2199 + this.Wf;
          }
          for (; this.Pe.length > _0x1d46a8;) {
            _0x205297(this.Pe.pop());
          }
        };
        _0x1d1ee1.prototype.Xf = function () {
          var _0x1a69ef = new _0x539457();
          _0x1a69ef.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x1a69ef.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x1a69ef);
          this.addChild(_0x1a69ef);
        };
        var _0x539457 = function () {
          var _0x34f541 = _0x26c215(_0x4b77e7.Zb, function () {
            _0x4b77e7.Zb.call(this);
            this.eg = new _0x4b77e7.fc('', {
              'dropShadow': true,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': "PTSans",
              'fontSize': 0xc,
              'fill': "white"
            });
            this.eg.anchor.x = 0x1;
            this.eg.position.x = 0x1e;
            this.addChild(this.eg);
            this.fg = new _0x4b77e7.fc('', {
              'dropShadow': true,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': "PTSans",
              'fontSize': 0xc,
              'fill': "white"
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x23;
            this.addChild(this.fg);
            this.gg = new _0x4b77e7.fc('', {
              'dropShadow': true,
              'dropShadowBlur': 0x5,
              'dropShadowColor': "#707070",
              'dropShadowDistance': 0x3,
              'fontFamily': "PTSans",
              'fontSize': 0xc,
              'fill': "white"
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xdc;
            this.addChild(this.gg);
          });
          _0x34f541.prototype.Zf = function (_0x22e8b8, _0x21e4dc, _0x17d8a3) {
            this.eg.text = _0x22e8b8;
            this.gg.text = _0x17d8a3;
            var _0x124de8 = _0x21e4dc;
            this.fg.text = _0x124de8;
            for (; this.fg.width > 0x64;) {
              _0x124de8 = _0x124de8.substring(0x0, _0x124de8.length - 0x1);
              this.fg.text = _0x124de8 + '..';
            }
          };
          _0x34f541.prototype.Yf = function (_0x2e0ef6, _0x1bc42b) {
            this.eg.alpha = _0x2e0ef6;
            this.eg.style.fill = _0x1bc42b;
            this.fg.alpha = _0x2e0ef6;
            this.fg.style.fill = _0x1bc42b;
            this.gg.alpha = _0x2e0ef6;
            this.gg.style.fill = _0x1bc42b;
          };
          return _0x34f541;
        }();
        return _0x1d1ee1;
      }();
      return _0x21564b;
    }();
    var _0x1694c3 = function () {
      function _0x3fcae2(_0x278dea) {
        this.o = _0x278dea;
        this.hg = [];
        this.ig = 0x0;
      }
      _0x3fcae2.prototype.Xb = function (_0x313b2a) {
        this.hg.push(new DataView(_0x313b2a));
      };
      _0x3fcae2.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0x3fcae2.prototype.Bb = function () {
        for (var _0xc36cdf = 0x0; _0xc36cdf < 0xa; _0xc36cdf++) {
          if (0x0 === this.hg.length) {
            return;
          }
          var _0x5184b6 = this.hg.shift();
          try {
            this.jg(_0x5184b6);
          } catch (_0x341288) {
            console.log("DataReader error: " + _0x341288);
            throw _0x341288;
          }
        }
      };
      _0x3fcae2.prototype.jg = function (_0x178e16) {
        switch (0xff & _0x178e16.mc(0x0)) {
          case 0x0:
            return void this.kg(_0x178e16, 0x1);
          case 0x1:
            return void this.lg(_0x178e16, 0x1);
          case 0x2:
          case 0x3:
          case 0x4:
          case 0x5:
        }
      };
      _0x3fcae2.prototype.kg = function (_0x3f860a, _0x29f960) {
        console.log("%c📦 Decodificando INIT Packet...", "color:orange;font-weight:bold;");
        const _0x2f7820 = _0x3f860a.mc(_0x29f960);
        console.log("af (Int8):", _0x2f7820);
        _0x29f960 += 0x1;
        const _0x868e7a = _0x3f860a.nc(_0x29f960);
        console.log("bf (Int16):", _0x868e7a);
        _0x29f960 += 0x2;
        const _0x532eef = _0x3f860a.pc(_0x29f960);
        console.log("ub (Float32):", _0x532eef);
        _0x29f960 += 0x4;
        const _0x1b8349 = _0x3f860a.pc(_0x29f960);
        console.log("cf (Float32):", _0x1b8349);
        _0x29f960 += 0x4;
        const _0x5c119b = _0x3f860a.pc(_0x29f960);
        console.log("df (Float32):", _0x5c119b);
        _0x29f960 += 0x4;
        this.o.fb.af = _0x2f7820;
        this.o.fb.bf = _0x868e7a;
        this.o.N.Mb.Lb = _0x868e7a;
        this.o.fb.ub = _0x532eef;
        this.o.fb.cf = _0x1b8349;
        this.o.fb.df = _0x5c119b;
        const _0x28b196 = window.anApp = _0x4db052;
        _0x28b196.s.H.wb.Te(this.o.fb, _0x28b196.s.xa.wa());
        console.log("%c✅ INIT packet decodificado correctamente.", "color:lightgreen");
        return _0x29f960;
      };
      _0x3fcae2.prototype.lg = function (_0x5bbf40, _0x33c3fa) {
        console.log("%c📦 Decodificando WORLD Packet...", "color:cyan;font-weight:bold;");
        const _0x296814 = this.ig++;
        const _0x23d09f = _0x5bbf40.nc(_0x33c3fa);
        console.log("Índice paquete:", _0x296814, "| o (Uint16):", _0x23d09f);
        _0x33c3fa += 0x2;
        const _0x5b1103 = [{
          'name': 'sg',
          'fn': this.sg.bind(this)
        }, {
          'name': 'tg',
          'fn': this.tg.bind(this)
        }, {
          'name': 'ug',
          'fn': this.ug.bind(this)
        }, {
          'name': 'vg',
          'fn': this.vg.bind(this)
        }, {
          'name': 'wg',
          'fn': this.wg.bind(this)
        }, {
          'name': 'xg',
          'fn': this.xg.bind(this)
        }, {
          'name': 'yg',
          'fn': this.yg.bind(this)
        }, {
          'name': 'zg',
          'fn': this.zg.bind(this)
        }];
        _0x5b1103.forEach(({
          name: _0x51e6ab,
          fn: _0xd9880c
        }) => {
          const _0xb95c8f = this.qg(_0x5bbf40, _0x33c3fa);
          console.log("Sección " + _0x51e6ab + ": cantidad =", _0xb95c8f);
          const _0x2105f5 = this.rg(_0xb95c8f);
          _0x33c3fa += _0x2105f5;
          console.log("  Offset tras leer cantidad (" + _0x2105f5 + " bytes):", _0x33c3fa);
          for (let _0x5568c8 = 0x0; _0x5568c8 < _0xb95c8f; _0x5568c8++) {
            console.log("  └ Procesando " + _0x51e6ab + '[' + _0x5568c8 + "] a partir de offset", _0x33c3fa);
            const _0x3ddfcf = _0xd9880c(_0x5bbf40, _0x33c3fa);
            console.log("     → Terminó " + _0x51e6ab + '[' + _0x5568c8 + "], nuevo offset =", _0x3ddfcf);
            _0x33c3fa = _0x3ddfcf;
          }
        });
        if (_0x296814 > 0x0) {
          console.log("Aplicando Ag (paquete extra) en offset", _0x33c3fa);
          const _0x59b6dc = this.Ag(_0x5bbf40, _0x33c3fa);
          console.log("  → Offset tras Ag:", _0x59b6dc);
          _0x33c3fa = _0x59b6dc;
        }
        console.log("Llamando a Qb con index y o:", _0x296814, _0x23d09f);
        this.o.Qb(_0x296814, _0x23d09f);
        console.log("%c✅ WORLD packet decodificado completamente.", "color:lightgreen");
        return _0x33c3fa;
      };
      _0x3fcae2.prototype.vg = function (_0x1de0c0, _0xad820a) {
        var _0x5d5ac2 = new _0x248911.Config();
        _0x5d5ac2.Lb = _0x1de0c0.nc(_0xad820a);
        _0xad820a = _0xad820a + 0x2;
        _0x5d5ac2.cg = this.o.fb.af == 0x10 ? _0x1de0c0.mc(_0xad820a++) : _0x5e0b25.TEAM_DEFAULT;
        _0x5d5ac2.dg = _0x1de0c0.nc(_0xad820a);
        let _0x24ac91 = _0xad820a;
        _0xad820a = _0xad820a + 0x2;
        _0x5d5ac2.Bg = _0x1de0c0.nc(_0xad820a);
        let _0x2acb6a = _0xad820a;
        _0xad820a = _0xad820a + 0x2;
        _0x5d5ac2.Cg = _0x1de0c0.nc(_0xad820a);
        let _0x349b3d = _0xad820a;
        _0xad820a = _0xad820a + 0x2;
        _0x5d5ac2.Dg = _0x1de0c0.nc(_0xad820a);
        let _0x4815b1 = _0xad820a;
        _0xad820a = _0xad820a + 0x2;
        _0x5d5ac2.Eg = _0x1de0c0.nc(_0xad820a);
        let _0x558210 = _0xad820a;
        _0xad820a = _0xad820a + 0x2;
        var _0x4fd325 = _0x1de0c0.mc(_0xad820a);
        _0xad820a = _0xad820a + 0x1;
        var _0x307bae = '';
        var _0x3bda7c = 0x0;
        for (; _0x3bda7c < _0x4fd325; _0x3bda7c++) {
          _0x307bae = _0x307bae + String.fromCharCode(_0x1de0c0.nc(_0xad820a));
          _0xad820a = _0xad820a + 0x2;
        }
        if (0xd2 < _0xad820a) {
          for (let _0x2f9fb7 in this.o.hb) {
            if (/^(.+?)@(.+)/.test(this.o.hb[_0x2f9fb7].Mb.ad)) {
              const _0x496a05 = this.o.hb[_0x2f9fb7].Mb.dg;
              if (_0x496a05 >= 0x20 && _0x496a05 <= 0x23) {
                const _0x29778f = Math.floor(Math.random() * 0x15) + 0x258;
                this.o.hb[_0x2f9fb7].Mb.dg = _0x29778f;
              }
            }
            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[_0x2f9fb7].Mb.ad)) {
              const _0xd25cbc = this.o.hb[_0x2f9fb7].Mb.dg;
              if (_0xd25cbc >= 0x20 && _0xd25cbc <= 0x23) {
                const _0x3dd58e = Math.floor(Math.random() * 0x15) + 0x258;
                this.o.hb[_0x2f9fb7].Mb.dg = _0x3dd58e;
              }
            }
            if (/^(.{16})(\X\u0422\_\d{6})$/.test(this.o.hb[_0x2f9fb7].Mb.ad)) {
              var _0x58b7c1 = this.o.hb[_0x2f9fb7].Mb.ad.substr(-0x6);
              let _0x7dbd31 = _0x58b7c1.substr(0x0, 0x3);
              let _0x16e98a = _0x58b7c1.substr(0x3, 0x3);
              let _0x745ebb = _0x58b7c1.substr(0x6, 0x3);
              let _0x349053 = _0x58b7c1.substr(0x9, 0x3);
              if ("000" !== _0x7dbd31 && -0x1 !== theoKzObjects.visibleSkin.indexOf(parseInt(_0x7dbd31))) {
                this.o.hb[_0x2f9fb7].Mb.dg = parseInt(_0x7dbd31);
              }
              if ("000" !== _0x16e98a) {
                this.o.hb[_0x2f9fb7].Mb.Eg = parseInt(_0x16e98a);
              }
              if ("000" !== _0x745ebb) {
                this.o.hb[_0x2f9fb7].Mb.Bg = parseInt(_0x745ebb);
              }
              if ("000" !== _0x349053) {
                this.o.hb[_0x2f9fb7].Mb.Cg = parseInt(_0x349053);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x5d5ac2.Lb) {
          _0x5d5ac2.dg = theoKzObjects.PropertyManager.rh;
          _0x5d5ac2.Bg = theoKzObjects.PropertyManager.sh;
          _0x5d5ac2.Cg = theoKzObjects.PropertyManager.th;
          _0x5d5ac2.Dg = theoKzObjects.PropertyManager.uh;
          _0x5d5ac2.Eg = theoKzObjects.PropertyManager.vh;
          _0x1de0c0.setInt16(_0x24ac91, _0x5d5ac2.dg);
          _0x1de0c0.setInt16(_0x2acb6a, _0x5d5ac2.Bg);
          _0x1de0c0.setInt16(_0x349b3d, _0x5d5ac2.Cg);
          _0x1de0c0.setInt16(_0x4815b1, _0x5d5ac2.Dg);
          _0x1de0c0.setInt16(_0x558210, _0x5d5ac2.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x24ac91;
        }
        _0x5d5ac2.ad = _0x307bae;
        if (this.o.fb.bf === _0x5d5ac2.Lb) {
          this.o.N.Fg(_0x5d5ac2);
        } else {
          var _0x3b4105 = this.o.hb[_0x5d5ac2.Lb];
          if (null != _0x3b4105) {
            _0x3b4105.Kb();
          }
          var _0x5cc98d = new _0x248911(this.o.fb);
          _0x5cc98d.vb((window.anApp = _0x4db052).s.H.wb);
          this.o.hb[_0x5d5ac2.Lb] = _0x5cc98d;
          _0x5cc98d.Fg(_0x5d5ac2);
        }
        return _0xad820a;
      };
      _0x3fcae2.prototype.wg = function (_0x4a9407, _0x5b89af) {
        var _0x3b2741 = _0x4a9407.nc(_0x5b89af);
        _0x5b89af += 0x2;
        var _0x111ac1 = _0x4a9407.mc(_0x5b89af);
        _0x5b89af++;
        var _0x2f063b = !!(0x1 & _0x111ac1);
        var _0x2b6058 = !!(0x2 & _0x111ac1);
        var _0x23a5d1 = 0x0;
        if (_0x2f063b) {
          _0x23a5d1 = _0x4a9407.nc(_0x5b89af);
          _0x5b89af += 0x2;
        }
        var _0x28c8e6 = this.Gg(_0x3b2741);
        if (undefined === _0x28c8e6) {
          return _0x5b89af;
        }
        _0x28c8e6.Ib = false;
        if (!_0x28c8e6.Hb) {
          return _0x5b89af;
        }
        var _0x154187 = this.Gg(_0x3b2741);
        if (_0x2f063b && undefined !== _0x154187 && _0x154187.Hb) {
          if (_0x23a5d1 === this.o.fb.bf) {
            var _0x340be1 = this.o.N.Gf();
            var _0x597fda = _0x28c8e6.Hg(_0x340be1.x, _0x340be1.y);
            Math.max(0x0, 0x1 - _0x597fda.distance / (0.5 * this.o.jb));
            if (_0x597fda.distance < 0.5 * this.o.jb) {
              (window.anApp = _0x4db052).s.H.wb.wf.Se(_0x2b6058);
            }
          } else {
            if (_0x3b2741 === this.o.fb.bf) {} else {
              var _0x3a740d = this.o.N.Gf();
              var _0x23ad64 = _0x28c8e6.Hg(_0x3a740d.x, _0x3a740d.y);
              Math.max(0x0, 0x1 - _0x23ad64.distance / (0.5 * this.o.jb));
            }
          }
        } else {
          if (_0x3b2741 === this.o.fb.bf) {} else {
            var _0x59a63 = this.o.N.Gf();
            var _0x15932b = _0x28c8e6.Hg(_0x59a63.x, _0x59a63.y);
            Math.max(0x0, 0x1 - _0x15932b.distance / (0.5 * this.o.jb));
          }
        }
        return _0x5b89af;
      };
      _0x3fcae2.prototype.zg = function (_0x20a71a, _0x1236f5) {
        var _0xe85cb8 = _0x20a71a.nc(_0x1236f5);
        _0x1236f5 += 0x2;
        var _0x5adc9b = _0xe85cb8 === this.o.fb.bf ? null : this.o.hb[_0xe85cb8];
        var _0x358307 = _0x20a71a.mc(_0x1236f5);
        _0x1236f5 += 0x1;
        var _0x1b8651 = !!(0x1 & _0x358307);
        if (!!(0x2 & _0x358307)) {
          var _0x217ad7 = _0x20a71a.pc(_0x1236f5);
          _0x1236f5 += 0x4;
          if (_0x5adc9b) {
            _0x5adc9b.Ig(_0x217ad7);
          }
        }
        var _0x5576a7 = this.Jg(_0x20a71a.mc(_0x1236f5++), _0x20a71a.mc(_0x1236f5++), _0x20a71a.mc(_0x1236f5++));
        var _0x35f848 = this.Jg(_0x20a71a.mc(_0x1236f5++), _0x20a71a.mc(_0x1236f5++), _0x20a71a.mc(_0x1236f5++));
        if (_0x5adc9b) {
          _0x5adc9b.Kg(_0x5576a7, _0x35f848, _0x1b8651);
          var _0x37541b = this.o.N.Gf();
          var _0x203d88 = _0x5adc9b.Gf();
          var _0x292b86 = Math.max(0x0, 0x1 - Math.hypot(_0x37541b.x - _0x203d88.x, _0x37541b.y - _0x203d88.y) / (0.5 * this.o.jb));
          (window.anApp = _0x4db052).r.Zd(_0x292b86, _0xe85cb8, _0x1b8651);
        }
        var _0x2eeef0 = this.qg(_0x20a71a, _0x1236f5);
        _0x1236f5 += this.rg(_0x2eeef0);
        if (_0x5adc9b) {
          for (var _0x4122d9 in _0x5adc9b.Ff) {
            var _0x59547a = _0x5adc9b.Ff[_0x4122d9];
            if (_0x59547a) {
              _0x59547a.sc = false;
            }
          }
        }
        for (var _0x266ebd = 0x0; _0x266ebd < _0x2eeef0; _0x266ebd++) {
          var _0x152d79 = _0x20a71a.mc(_0x1236f5);
          _0x1236f5++;
          var _0x119d78 = _0x20a71a.mc(_0x1236f5);
          _0x1236f5++;
          if (_0x5adc9b) {
            var _0x55d34d = _0x5adc9b.Ff[_0x152d79];
            if (!_0x55d34d) {
              _0x55d34d = _0x5adc9b.Ff[_0x152d79] = new _0x4997d0(_0x152d79);
            }
            _0x55d34d.sc = true;
            _0x55d34d.tc = Math.min(0x1, Math.max(0x0, _0x119d78 / 0x64));
          }
        }
        return _0x1236f5;
      };
      _0x3fcae2.prototype.Ag = function (_0x3fd1d5, _0x4c775d) {
        console.log("📦 Aplicando sección Ag en offset inicial: " + _0x4c775d);
        var _0x5dd81d = _0x4c775d;
        var _0x5ca502 = this.o.N;
        var _0x44d045 = _0x3fd1d5.mc(_0x4c775d);
        console.log("🧩 Flags Ag (byte): " + _0x44d045.toString(0x2).padStart(0x8, '0'));
        _0x4c775d += 0x1;
        var _0x1c640b = !!(0x1 & _0x44d045);
        var _0xf48134 = !!(0x2 & _0x44d045);
        var _0x3567c7 = !!(0x4 & _0x44d045);
        if (_0xf48134) {
          console.log("🔢 Flag [r]=true (actualizar score), offset: " + _0x4c775d);
          var _0x32d98b = _0x5ca502.M;
          var _0x24df33 = _0x3fd1d5.pc(_0x4c775d);
          console.log("   → Nuevo score: " + _0x24df33);
          _0x5ca502.Ig(_0x24df33);
          _0x4c775d += 0x4;
          _0x32d98b = _0x5ca502.M - _0x32d98b;
          if (_0x32d98b > 0x0) {
            (window.anApp = _0x4db052).s.H.wb.wf.Re(_0x32d98b);
          }
        }
        if (_0x3567c7) {
          console.log("🔢 Flag [s]=true (actualizar ib), offset: " + _0x4c775d);
          this.o.ib = _0x3fd1d5.pc(_0x4c775d);
          console.log("   → Nuevo ib: " + this.o.ib);
          _0x4c775d += 0x4;
        }
        console.log("📍 Leyendo vectores en offset: " + _0x4c775d);
        var _0x3c2f57 = this.Jg(_0x3fd1d5.mc(_0x4c775d++), _0x3fd1d5.mc(_0x4c775d++), _0x3fd1d5.mc(_0x4c775d++));
        var _0xc0bb13 = this.Jg(_0x3fd1d5.mc(_0x4c775d++), _0x3fd1d5.mc(_0x4c775d++), _0x3fd1d5.mc(_0x4c775d++));
        console.log("   → Vector h: " + JSON.stringify(_0x3c2f57) + ", Vector l: " + JSON.stringify(_0xc0bb13));
        _0x5ca502.Kg(_0x3c2f57, _0xc0bb13, _0x1c640b);
        (window.anApp = _0x4db052).r.Zd(0.5, this.o.fb.bf, _0x1c640b);
        var _0x82d273 = this.qg(_0x3fd1d5, _0x4c775d);
        console.log("🎮 Cantidad de habilidades: " + _0x82d273);
        var _0x1e3baa = this.rg(_0x82d273);
        _0x4c775d += _0x1e3baa;
        console.log("   → Offset tras header de habilidades (" + _0x1e3baa + " bytes): " + _0x4c775d);
        for (var _0x105782 in _0x5ca502.Ff) {
          var _0x28b3db = _0x5ca502.Ff[_0x105782];
          if (_0x28b3db) {
            _0x28b3db.sc = false;
          }
        }
        for (var _0x1e3eef = 0x0; _0x1e3eef < _0x82d273; _0x1e3eef++) {
          var _0x12f653 = _0x3fd1d5.mc(_0x4c775d++);
          var _0x22e059 = _0x3fd1d5.mc(_0x4c775d++);
          var _0x232184 = _0x5ca502.Ff[_0x12f653] || new _0x4997d0(_0x12f653);
          _0x5ca502.Ff[_0x12f653] = _0x232184;
          _0x232184.sc = true;
          _0x232184.tc = Math.min(0x1, Math.max(0x0, _0x22e059 / 0x64));
          console.log("   → Habilidad ID: " + _0x12f653 + ", Valor: " + _0x22e059 + ", Normalizado: " + _0x232184.tc);
        }
        (window.anApp = _0x4db052).s.H.wb.uf.Te(_0x5ca502.Ff);
        console.log("✅ Ag procesado. Offset final: " + _0x4c775d + " (usó " + (_0x4c775d - _0x5dd81d) + " bytes)\n");
        return _0x4c775d;
      };
      _0x3fcae2.prototype.xg = function (_0x25a009, _0xf265a5) {
        var _0x21fe01 = this;
        var _0x5ca4ea = _0x25a009.nc(_0xf265a5);
        _0xf265a5 += 0x2;
        var _0x26ded6 = this.Gg(_0x5ca4ea);
        var _0x3ed048 = _0x25a009.pc(_0xf265a5);
        _0xf265a5 += 0x4;
        var _0x586fc2 = [];
        for (var _0x2a5e40 in _0x26ded6.Ff) {
          if (0x0 == _0x2a5e40) {
            _0x586fc2.push('velocidad');
            $('.v0').fadeIn();
          } else {
            if (0x1 == _0x2a5e40) {
              _0x586fc2.push('movimiento');
              $(".v1").fadeIn();
            } else {
              if (0x2 == _0x2a5e40) {
                _0x586fc2.push("iman");
                $(".v2").fadeIn();
              } else {
                if (0x3 == _0x2a5e40) {
                  _0x586fc2.push('comidax2');
                  $(".v3").fadeIn();
                } else {
                  if (0x4 == _0x2a5e40) {
                    _0x586fc2.push("comidax5");
                    $(".v4").fadeIn();
                  } else {
                    if (0x5 == _0x2a5e40) {
                      _0x586fc2.push("comidax10");
                      $('.v5').fadeIn();
                    } else if (0x6 == _0x2a5e40) {
                      _0x586fc2.push("zoom");
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
        window.nombres2 = _0x586fc2;
        $(".Worm_cerca").text(" : " + _0x26ded6.Mb.ad);
        if (_0x26ded6.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x5c3b02 = this.qg(_0x25a009, _0xf265a5);
        _0xf265a5 += this.rg(_0x5c3b02);
        if (_0x26ded6) {
          _0x26ded6.Ig(_0x3ed048);
          _0x26ded6.Lg(function () {
            return _0x21fe01.Jg(_0x25a009.mc(_0xf265a5++), _0x25a009.mc(_0xf265a5++), _0x25a009.mc(_0xf265a5++));
          }, _0x5c3b02);
          _0x26ded6.Mg(true);
          var _0x10df15 = this.o.N.Gf();
          var _0x395254 = _0x26ded6.Gf();
          var _0x2c34dc = Math.max(0x0, 0x1 - Math.hypot(_0x10df15.x - _0x395254.x, _0x10df15.y - _0x395254.y) / (0.5 * this.o.jb));
          (window.anApp = _0x4db052).r.Xd(_0x2c34dc, _0x5ca4ea);
        } else {
          _0xf265a5 += 0x6 * _0x5c3b02;
        }
        return _0xf265a5;
      };
      _0x3fcae2.prototype.yg = function (_0x2b7520, _0x30dda6) {
        var _0x4a9157 = _0x2b7520.nc(_0x30dda6);
        _0x30dda6 += 0x2;
        var _0x299661 = this.o.hb[_0x4a9157];
        if (_0x299661 && _0x299661.Ib) {
          _0x299661.Mg(false);
        }
        (window.anApp = _0x4db052).r.Yd(_0x4a9157);
        return _0x30dda6;
      };
      _0x3fcae2.prototype.sg = function (_0x377d3c, _0x49c89d) {
        var _0x3633ef = new _0x4947d9.Config();
        _0x3633ef.Lb = _0x377d3c.oc(_0x49c89d);
        _0x49c89d += 0x4;
        _0x3633ef.cg = this.o.fb.af === 0x10 ? _0x377d3c.mc(_0x49c89d++) : _0x5e0b25.TEAM_DEFAULT;
        let _0x5ba4e2 = _0x377d3c.mc(_0x49c89d++);
        let _0x30ce3a = _0x377d3c.mc(_0x49c89d++);
        let _0x628fd6 = _0x377d3c.mc(_0x49c89d++);
        _0x3633ef.Ng = this.Jg(_0x5ba4e2, _0x30ce3a, _0x628fd6);
        _0x3633ef.dg = _0x377d3c.mc(_0x49c89d++);
        var _0x1ce910 = this.o.gb[_0x3633ef.Lb];
        if (_0x1ce910 != null) {
          _0x1ce910.Kb();
        }
        var _0x44a199 = new _0x4947d9(_0x3633ef, (window.anApp = _0x4db052).s.H.wb);
        _0x44a199.Og(this.Pg(_0x3633ef.Lb), this.Qg(_0x3633ef.Lb), true);
        this.o.gb[_0x3633ef.Lb] = _0x44a199;
        return _0x49c89d;
      };
      _0x3fcae2.prototype.tg = function (_0x14f844, _0x3f784c) {
        const _0x1cfb3e = _0x14f844.oc(_0x3f784c);
        console.log("[TG] ID worm a escalar (oc): " + _0x1cfb3e);
        _0x3f784c += 0x4;
        const _0x3fd2f1 = this.o.gb[_0x1cfb3e];
        if (_0x3fd2f1) {
          _0x3fd2f1.Rg = 0x0;
          _0x3fd2f1.Sg = 1.5 * _0x3fd2f1.Sg;
          _0x3fd2f1.Nb = true;
          console.log("[TG] Worm " + _0x1cfb3e + " escalado a Sg=" + _0x3fd2f1.Sg);
        } else {
          console.warn("[TG] Worm " + _0x1cfb3e + " no existe en gb");
        }
        return _0x3f784c;
      };
      _0x3fcae2.prototype.ug = function (_0x241751, _0x19c9e0) {
        const _0x5b8ba9 = _0x241751.oc(_0x19c9e0);
        console.log("[UG] ID worm afectado (oc): " + _0x5b8ba9);
        _0x19c9e0 += 0x4;
        const _0xa2dc9e = _0x241751.nc(_0x19c9e0);
        console.log("[UG] Tipo de powerup (nc): " + _0xa2dc9e);
        _0x19c9e0 += 0x2;
        const _0x595e54 = this.o.gb[_0x5b8ba9];
        if (_0x595e54) {
          _0x595e54.Rg = 0x0;
          _0x595e54.Sg = 0.1 * _0x595e54.Sg;
          _0x595e54.Nb = true;
          console.log("[UG] Worm " + _0x5b8ba9 + " escala reducida a Sg=" + _0x595e54.Sg);
          const _0x367256 = this.Gg(_0xa2dc9e);
          if (_0x367256 && _0x367256.Hb) {
            const _0x161f06 = _0x367256.Gf();
            _0x595e54.Og(_0x161f06.x, _0x161f06.y, false);
            console.log("[UG] Worm " + _0x5b8ba9 + " movido a (" + _0x161f06.x + ", " + _0x161f06.y + ')');
          }
        } else {
          console.warn("[UG] Worm " + _0x5b8ba9 + " no existe en gb");
        }
        return _0x19c9e0;
      };
      var _0x43d40a = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x3fcae2.prototype.mg = function (_0x78e7de) {
        var _0x201023 = (window.anApp = _0x4db052).q.Ug.Tg;
        var _0x3394da = _0x201023.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x332df8 = _0x43d40a[0x0];
        var _0x2ec3a4 = 0x50 - _0x332df8;
        var _0x315563 = 0x0;
        for (var _0x237405 = 0x0; _0x237405 < 0x274; _0x237405++) {
          var _0x3f0747 = _0x78e7de.mc(0x1 + _0x237405);
          for (var _0x858c7d = 0x0; _0x858c7d < 0x8; _0x858c7d++) {
            var _0x1355a1 = 0x0 != (_0x3f0747 >> _0x858c7d & 0x1);
            var _0x5ffed3 = 0x4 * (_0x332df8 + 0x50 * _0x315563);
            if (_0x1355a1) {
              _0x3394da.data[_0x5ffed3] = 0xff;
              _0x3394da.data[_0x5ffed3 + 0x1] = 0xff;
              _0x3394da.data[_0x5ffed3 + 0x2] = 0xff;
              _0x3394da.data[_0x5ffed3 + 0x3] = 0xff;
            } else {
              _0x3394da.data[_0x5ffed3 + 0x3] = 0x0;
            }
            if (++_0x332df8 >= _0x2ec3a4 && ++_0x315563 < 0x50) {
              _0x332df8 = _0x43d40a[_0x315563];
              _0x2ec3a4 = 0x50 - _0x332df8;
            }
          }
        }
        _0x201023.putImageData(_0x3394da, 0x0, 0x0);
        var _0x49f174 = (window.anApp = _0x4db052).s.H.wb.tf.Sf;
        _0x49f174.texture = (window.anApp = _0x4db052).q.Ug.Hc;
        _0x49f174.texture.update();
      };
      _0x3fcae2.prototype.og = function (_0x1bfd2f, _0x133a9d) {
        var _0x4d73c4 = _0x1bfd2f.oc(_0x133a9d);
        _0x133a9d += 0x4;
        console.log("Wormy Error: " + _0x4d73c4);
      };
      _0x3fcae2.prototype.pg = function (_0x1811b0, _0x44a1a6) {
        if (lxpdjoystick !== -0x1) {
          lxpdjoysticks[lxpdjoystick].visible = false;
        }
        zwormData.hs = 0x0;
        sendPlayerDeath(0x0, 0x0);
        sendPlayerUpdate(0xf423f, 0xf423f);
        clearTeamUbication();
        console.log("g.o");
        this.o.Rb();
      };
      _0x3fcae2.prototype.ng = function (_0x6dfa14, _0xbe0738) {
        this.o.tb = _0x6dfa14.nc(_0xbe0738);
        _0xbe0738 += 0x2;
        this.o.O = _0x6dfa14.nc(_0xbe0738);
        _0xbe0738 += 0x2;
        var _0xa54e2e = new _0x257108();
        _0xa54e2e.ag = [];
        var _0x29a9e0 = _0x6dfa14.mc(_0xbe0738++);
        for (var _0x4ea6e5 = 0x0; _0x4ea6e5 < _0x29a9e0; _0x4ea6e5++) {
          var _0x31de0a = _0x6dfa14.nc(_0xbe0738);
          _0xbe0738 += 0x2;
          var _0x5783f3 = _0x6dfa14.pc(_0xbe0738);
          _0xbe0738 += 0x4;
          _0xa54e2e.ag.push(_0x257108.Vg(_0x31de0a, _0x5783f3));
        }
        _0xa54e2e.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x3f2170 = _0x6dfa14.mc(_0xbe0738++);
          for (var _0x566a64 = 0x0; _0x566a64 < _0x3f2170; _0x566a64++) {
            var _0x350664 = _0x6dfa14.mc(_0xbe0738);
            _0xbe0738 += 0x1;
            var _0x4b6190 = _0x6dfa14.pc(_0xbe0738);
            _0xbe0738 += 0x4;
            _0xa54e2e.$f.push(_0x257108.Wg(_0x350664, _0x4b6190));
          }
        }
        (window.anApp = _0x4db052).s.H.wb.vf.Te(_0xa54e2e);
      };
      _0x3fcae2.prototype.Gg = function (_0x21cc20) {
        return _0x21cc20 === this.o.fb.bf ? this.o.N : this.o.hb[_0x21cc20];
      };
      _0x3fcae2.prototype.Jg = function (_0x562f24, _0x2108da, _0x2119cd) {
        return 0x2710 * ((0xffffff & (0xff & _0x2119cd | _0x2108da << 0x8 & 0xff00 | _0x562f24 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
      };
      _0x3fcae2.prototype.Pg = function (_0x5cc225) {
        return ((0xffff & _0x5cc225) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x3fcae2.prototype.Qg = function (_0x2e6ff2) {
        return ((_0x2e6ff2 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x3fcae2.prototype.qg = function (_0x5657bd, _0x4753c7) {
        var _0xee74ea = _0x5657bd.mc(_0x4753c7);
        if (0x0 == (0x80 & _0xee74ea)) {
          return _0xee74ea;
        }
        var _0x5c15ce = _0x5657bd.mc(_0x4753c7 + 0x1);
        if (0x0 == (0x80 & _0x5c15ce)) {
          return _0x5c15ce | _0xee74ea << 0x7 & 0x3f80;
        }
        var _0x39e98f = _0x5657bd.mc(_0x4753c7 + 0x2);
        if (0x0 == (0x80 & _0x39e98f)) {
          return _0x39e98f | _0x5c15ce << 0x7 & 0x3f80 | _0xee74ea << 0xe & 0x1fc000;
        }
        var _0x4757d6 = _0x5657bd.mc(_0x4753c7 + 0x3);
        return 0x0 == (0x80 & _0x4757d6) ? _0x4757d6 | _0x39e98f << 0x7 & 0x3f80 | _0x5c15ce << 0xe & 0x1fc000 | _0xee74ea << 0x15 & 0xfe00000 : undefined;
      };
      _0x3fcae2.prototype.rg = function (_0x40ac2a) {
        return _0x40ac2a < 0x80 ? 0x1 : _0x40ac2a < 0x4000 ? 0x2 : _0x40ac2a < 0x200000 ? 0x3 : _0x40ac2a < 0x10000000 ? 0x4 : undefined;
      };
      return _0x3fcae2;
    }();
    var _0x119dfc = function () {
      function _0x1efc4a(_0x1bdf6f) {
        this.Xg = _0x1bdf6f;
      }
      _0x1efc4a.Yg = function () {
        return new _0x119dfc(null);
      };
      _0x1efc4a.Zg = function (_0x414b29) {
        return new _0x119dfc(_0x414b29);
      };
      _0x1efc4a.prototype.$g = function () {
        return this.Xg;
      };
      _0x1efc4a.prototype._g = function () {
        return null != this.Xg;
      };
      _0x1efc4a.prototype.ah = function (_0x3b24b1) {
        if (null != this.Xg) {
          _0x3b24b1(this.Xg);
        }
      };
      return _0x1efc4a;
    }();
    var _0x4947d9 = function () {
      function _0x4151f8(_0x20f8a1, _0x4a25d8) {
        this.Mb = _0x20f8a1;
        this.bh = _0x20f8a1.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x20f8a1.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = 0x2 * Math.PI * Math.random();
        this.gh = new _0x2f38c9();
        this.gh.hh((window.anApp = _0x4db052).o.fb.af, this.Mb.cg === _0x5e0b25.TEAM_DEFAULT ? null : (window.anApp = _0x4db052).p.Dc().ed(this.Mb.cg), (window.anApp = _0x4db052).p.Dc().kd(this.Mb.dg));
        _0x4a25d8.Lf(_0x20f8a1.Lb, this.gh);
      }
      _0x4151f8.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x4151f8.prototype.Og = function (_0x4010fc, _0x39d7e8, _0x385175) {
        this.Ob = _0x4010fc;
        this.Pb = _0x39d7e8;
        if (_0x385175) {
          this.ch = _0x4010fc;
          this.dh = _0x39d7e8;
        }
      };
      _0x4151f8.prototype.Fb = function (_0x3d8d52, _0xb1a59b) {
        var _0x33da7f = Math.min(0.5, 0x1 * this.Sg);
        var _0x3564de = Math.min(2.5, 1.5 * this.Sg);
        this.eh = _0x33da7f > this.eh ? Math.min(_0x33da7f, this.eh + _0xb1a59b * 0.0025) : Math.max(_0x33da7f, this.eh - _0xb1a59b * 0.0025);
        this.fh = _0x3564de > this.fh ? Math.min(_0x3564de, this.fh + _0xb1a59b * 0.0025) : Math.max(_0x3564de, this.fh - _0xb1a59b * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0xb1a59b * 0.0025) : Math.max(this.Rg, this.Jb - _0xb1a59b * 0.0025);
      };
      _0x4151f8.prototype.Gb = function (_0x42b99e, _0x206c8f, _0x31765c) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x206c8f * 0.0025) : Math.max(this.Ob, this.ch - _0x206c8f * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x206c8f * 0.0025) : Math.max(this.Pb, this.dh - _0x206c8f * 0.0025);
        this.gh.Te(this, _0x42b99e, _0x206c8f, _0x31765c);
      };
      _0x4151f8.Config = function () {
        function _0x137cfc() {
          this.Lb = 0x0;
          this.cg = _0x5e0b25.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x137cfc;
      }();
      return _0x4151f8;
    }();
    var _0x2f38c9 = function () {
      function _0x58520c() {
        this.Of = new _0x184553(new _0x47e183(), new _0x47e183());
        this.Of.Pf.jh.blendMode = _0x4b77e7.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x58520c.prototype.hh = function (_0x4bbfbe, _0x24fb3b, _0x332889) {
        var _0x37c156 = _0x332889.Zc;
        if (null != _0x37c156) {
          this.Of.Nf.kh(_0x37c156);
        }
        var _0x48a5e0 = _0x4bbfbe == 0x10 && null != _0x24fb3b ? _0x24fb3b.cd.$c : _0x332889.$c;
        if (null != _0x48a5e0) {
          this.Of.Pf.kh(_0x48a5e0);
        }
      };
      _0x58520c.prototype.Te = function (_0x9c76e3, _0x323b7b, _0x56386c, _0x361ec8) {
        if (!_0x361ec8(_0x9c76e3.ch, _0x9c76e3.dh)) {
          return void this.Of.lh();
        }
        var _0x50beba = _0x9c76e3.fh * (0x1 + 0.3 * Math.cos(_0x9c76e3.Ae + _0x323b7b / 0xc8));
        if (_0x9c76e3.bh) {
          this.Of.mh(_0x9c76e3.ch, _0x9c76e3.dh, wormxt_Obj.PotenciadorSize * _0x9c76e3.eh, 0x1 * _0x9c76e3.Jb, wormxt_Obj.PotenciadorAura * _0x50beba, 0.8 * _0x9c76e3.Jb);
        } else {
          this.Of.mh(_0x9c76e3.ch, _0x9c76e3.dh, wormxt_Obj.ComidaSize * _0x9c76e3.eh, 0x1 * _0x9c76e3.Jb, wormxt_Obj.ComidaShadow * _0x50beba, 0.3 * _0x9c76e3.Jb);
        }
      };
      var _0x184553 = function () {
        function _0x20ba32(_0x6ae68d, _0x463139) {
          this.Nf = _0x6ae68d;
          this.Pf = _0x463139;
        }
        _0x20ba32.prototype.mh = function (_0x1e199b, _0x1786a7, _0x5548eb, _0x11fa53, _0x5bc3f2, _0x3e99a1) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x1e199b, _0x1786a7);
          this.Nf.oh(_0x5548eb);
          this.Nf.qh(_0x11fa53);
          this.Pf.Mg(true);
          this.Pf.nh(_0x1e199b, _0x1786a7);
          this.Pf.oh(_0x5bc3f2);
          this.Pf.qh(_0x3e99a1);
        };
        _0x20ba32.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x20ba32;
      }();
      return _0x58520c;
    }();
    var _0x1acbac = function () {
      function _0x30e1f1() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x173bec(_0x4ff4f3, _0x3ddef6) {
        if (!(window.anApp = _0x4db052).p.W()) {
          return null;
        }
        var _0x5c58b9 = (window.anApp = _0x4db052).p.Ac();
        if (_0x3ddef6 === _0x929e6e.ia) {
          var _0x48562e = _0x4f00e9(_0x5c58b9.skinArrayDict, _0x4ff4f3);
          return _0x48562e < 0x0 ? null : _0x5c58b9.skinArrayDict[_0x48562e];
        }
        switch (_0x3ddef6) {
          case _0x929e6e.ja:
            return _0x5c58b9.eyesDict[_0x4ff4f3];
          case _0x929e6e.ka:
            return _0x5c58b9.mouthDict[_0x4ff4f3];
          case _0x929e6e.la:
            return _0x5c58b9.glassesDict[_0x4ff4f3];
          case _0x929e6e.ma:
            return _0x5c58b9.hatDict[_0x4ff4f3];
        }
        return null;
      }
      function _0x4f00e9(_0x1e122d, _0x438ba1) {
        for (var _0x428af7 = 0x0; _0x428af7 < _0x1e122d.length; _0x428af7++) {
          if (_0x1e122d[_0x428af7].id == _0x438ba1) {
            return _0x428af7;
          }
        }
        return -0x1;
      }
      _0x30e1f1.prototype.a = function () {};
      _0x30e1f1.prototype.ha = function (_0x5148ff) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        switch (_0x5148ff) {
          case _0x929e6e.ia:
            return this.rh;
          case _0x929e6e.ja:
            return this.sh;
          case _0x929e6e.ka:
            return this.th;
          case _0x929e6e.la:
            return this.uh;
          case _0x929e6e.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x30e1f1.prototype.xh = function (_0x25250a) {
        this.wh.push(_0x25250a);
        this.yh();
      };
      _0x30e1f1.prototype.Ia = function () {
        if (!(window.anApp = _0x4db052).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x111329 = (window.anApp = _0x4db052).p.Ac();
        var _0x2ccaf0 = [];
        for (var _0x267227 = 0x0; _0x267227 < _0x111329.skinArrayDict.length; _0x267227++) {
          var _0x9c4e56 = _0x111329.skinArrayDict[_0x267227];
          if (this.Ja(_0x9c4e56.id, _0x929e6e.ia)) {
            _0x2ccaf0.push(_0x9c4e56);
          }
        }
        return 0x0 === _0x2ccaf0.length ? 0x0 : _0x2ccaf0[parseInt(_0x2ccaf0.length * Math.random())].id;
      };
      _0x30e1f1.prototype.zh = function () {
        if ((window.anApp = _0x4db052).p.W) {
          var _0xe8cea1 = (window.anApp = _0x4db052).p.Ac().skinArrayDict;
          var _0x4573cc = _0x4f00e9(_0xe8cea1, this.rh);
          if (!(_0x4573cc < 0x0)) {
            for (var _0x5b164b = _0x4573cc + 0x1; _0x5b164b < _0xe8cea1.length; _0x5b164b++) {
              if (this.Ja(_0xe8cea1[_0x5b164b].id, _0x929e6e.ia)) {
                this.rh = _0xe8cea1[_0x5b164b].id;
                return void this.yh();
              }
            }
            for (var _0x4fd863 = 0x0; _0x4fd863 < _0x4573cc; _0x4fd863++) {
              if (this.Ja(_0xe8cea1[_0x4fd863].id, _0x929e6e.ia)) {
                this.rh = _0xe8cea1[_0x4fd863].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x30e1f1.prototype.Ah = function () {
        if ((window.anApp = _0x4db052).p.W) {
          var _0x4a6173 = (window.anApp = _0x4db052).p.Ac().skinArrayDict;
          var _0x5b2ce5 = _0x4f00e9(_0x4a6173, this.rh);
          if (!(_0x5b2ce5 < 0x0)) {
            for (var _0x64f459 = _0x5b2ce5 - 0x1; _0x64f459 >= 0x0; _0x64f459--) {
              if (this.Ja(_0x4a6173[_0x64f459].id, _0x929e6e.ia)) {
                this.rh = _0x4a6173[_0x64f459].id;
                return void this.yh();
              }
            }
            for (var _0x44449e = _0x4a6173.length - 0x1; _0x44449e > _0x5b2ce5; _0x44449e--) {
              if (this.Ja(_0x4a6173[_0x44449e].id, _0x929e6e.ia)) {
                this.rh = _0x4a6173[_0x44449e].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x30e1f1.prototype.Bh = function (_0x243d52, _0x13c9d4) {
        if (!(window.anApp = _0x4db052).p.W() || this.Ja(_0x243d52, _0x13c9d4)) {
          switch (_0x13c9d4) {
            case _0x929e6e.ia:
              return void (this.rh != _0x243d52 && (this.rh = _0x243d52, this.yh()));
            case _0x929e6e.ja:
              return void (this.sh != _0x243d52 && (this.sh = _0x243d52, this.yh()));
            case _0x929e6e.ka:
              return void (this.th != _0x243d52 && (this.th = _0x243d52, this.yh()));
            case _0x929e6e.la:
              return void (this.uh != _0x243d52 && (this.uh = _0x243d52, this.yh()));
            case _0x929e6e.ma:
              return void (this.vh != _0x243d52 && (this.vh = _0x243d52, this.yh()));
          }
        }
      };
      _0x30e1f1.prototype.Ja = function (_0x28b688, _0x15a2ba) {
        var _0x21b86c = _0x173bec(_0x28b688, _0x15a2ba);
        return null != _0x21b86c && ((window.anApp = _0x4db052).u.P() ? 0x0 == _0x21b86c.price && !_0x21b86c.nonbuyable || (window.anApp = _0x4db052).u.Ch(_0x28b688, _0x15a2ba) : _0x21b86c.guest);
      };
      _0x30e1f1.prototype.yh = function () {
        for (var _0x434a93 = 0x0; _0x434a93 < this.wh.length; _0x434a93++) {
          this.wh[_0x434a93]();
        }
      };
      return _0x30e1f1;
    }();
    var _0x929e6e = function () {
      function _0x415fe8() {}
      _0x415fe8.ia = "SKIN";
      _0x415fe8.ja = "EYES";
      _0x415fe8.ka = "MOUTH";
      _0x415fe8.la = 'GLASSES';
      _0x415fe8.ma = "HAT";
      return _0x415fe8;
    }();
    var _0x4f3e67 = function () {
      function _0x146787(_0x440423, _0x4d03b6, _0x4daa1c, _0x58d915, _0x54721b, _0xf899fa, _0x177a92, _0x356204, _0x50882c) {
        this.Hc = new _0x4b77e7._b(_0x440423, new _0x4b77e7.dc(_0x4d03b6, _0x4daa1c, _0x58d915, _0x54721b));
        this.Dh = _0x4d03b6;
        this.Eh = _0x4daa1c;
        this.Fh = _0x58d915;
        this.Gh = _0x54721b;
        this.Hh = _0xf899fa || (_0x356204 || _0x58d915) / 0x2;
        this.Ih = _0x177a92 || (_0x50882c || _0x54721b) / 0x2;
        this.Jh = _0x356204 || _0x58d915;
        this.Kh = _0x50882c || _0x54721b;
        this.Lh = 0.5 - (this.Hh - 0.5 * this.Jh) / this.Fh;
        this.Mh = 0.5 - (this.Ih - 0.5 * this.Kh) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x146787;
    }();
    var _0x218985 = function () {
      function _0x460740() {
        this.fn_o = _0xd956d1;
        this.Fe = new _0x4b77e7._b(_0x4b77e7.$b.from("/images/bg-obstacle.png"));
        var _0x5930dc = _0x4b77e7.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80)), new _0x4b77e7._b(_0x5930dc, new _0x4b77e7.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x4b77e7._b(_0xd956d1());
        this.Df = new _0x4b77e7._b(function () {
          var _0x42c8a1 = _0x4b77e7.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0x42c8a1.wrapMode = _0x4b77e7.kc.lc;
          return _0x42c8a1;
        }());
        this.Af = new _0x4b77e7._b(_0x4b77e7.$b.from('/images/lens.png'));
        var _0xf99867 = _0x4b77e7.$b.from("/images/wear-ability.png");
        this.Ph = new _0x4f3e67(_0xf99867, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x4f3e67(_0xf99867, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        var _0x5bec43 = _0x4b77e7.$b.from('https://i.imgur.com/n4d2rM7.png');
        this.Rh = new _0x4f3e67(_0x5bec43, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80);
        this.X_x5 = new _0x4f3e67(_0x5bec43, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x2 = new _0x4f3e67(_0x5bec43, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.X_x10 = new _0x4f3e67(_0x5bec43, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x4f3e67(_0x5bec43, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Ug = function () {
          var _0x441ff5 = window.document.createElement("canvas");
          _0x441ff5.width = 0x50;
          _0x441ff5.height = 0x50;
          return {
            'te': _0x441ff5,
            'Tg': _0x441ff5.getContext('2d'),
            'Hc': new _0x4b77e7._b(_0x4b77e7.$b.from(_0x441ff5))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      var _0xd956d1 = function (_0x553a36) {
        var _0x2ff42c = _0x4b77e7.$b.from(_0x553a36 || "/images/bg-pattern-pow2-ARENA.png");
        _0x2ff42c.wrapMode = _0x4b77e7.kc.lc;
        return _0x2ff42c;
      };
      _0x460740.prototype.a = function (_0x1e8401) {
        function _0x3a6b29() {
          if (0x0 == --_0x3008e1) {
            _0x1e8401();
          }
        }
        var _0x3008e1 = 0x4;
        this.Bd = {};
        _0x3a6b29();
        this.yd = {};
        _0x3a6b29();
        this.Sh = [];
        _0x3a6b29();
        this.Th = null;
        _0x3a6b29();
      };
      return _0x460740;
    }();
    var _0x20ba03 = function () {
      function _0x8bde5e() {
        this.H = new _0x2a0396();
        this.F = new _0x4cbaeb();
        this.Uh = new _0x475bda();
        this.Vh = new _0x583f4c();
        this.Wh = new _0xf755bb();
        this.Xh = new _0x53fb99();
        this.Yh = new _0x532cce();
        this.Zh = new _0x452080();
        this.xa = new _0x4148af();
        this.wtrset = new _0x23c028();
        this.$h = new _0x48440a();
        this._h = new _0x1f1228();
        this.ai = new _0x44746b();
        this.aa = new _0x2bffa0();
        this.ua = new _0x272a29();
        this.pa = new _0x35d001();
        this.bi = [];
        this.ci = null;
      }
      function _0x4339b2(_0x34f5ff, _0x1e9175) {
        if (0x0 != _0x1e9175) {
          var _0x24f08a = _0x34f5ff[_0x1e9175];
          _0x21695e(_0x34f5ff, 0x0, 0x1, _0x1e9175);
          _0x34f5ff[0x0] = _0x24f08a;
        }
      }
      function _0x4c8296(_0x501c1f, _0x28800d) {
        if (_0x28800d != _0x501c1f.length + 0x1) {
          var _0x2d64ee = _0x501c1f[_0x28800d];
          _0x21695e(_0x501c1f, _0x28800d + 0x1, _0x28800d, _0x501c1f.length - _0x28800d - 0x1);
          _0x501c1f[_0x501c1f.length - 0x1] = _0x2d64ee;
        }
      }
      function _0x2e36cc(_0x156ff6, _0x2973e1) {
        for (var _0x17c08d = 0x0; _0x17c08d < _0x156ff6.length; _0x17c08d++) {
          if (_0x156ff6[_0x17c08d] == _0x2973e1) {
            return _0x17c08d;
          }
        }
        return -0x1;
      }
      _0x8bde5e.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.wtrset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x33017a = 0x0; _0x33017a < this.bi.length; _0x33017a++) {
          this.bi[_0x33017a].a();
        }
        this.ci = new _0x7d3722(_0x51af60.di);
      };
      _0x8bde5e.prototype.Qa = function (_0x2f5384, _0x4729eb) {
        for (var _0x3b0d1b = this.bi.length - 0x1; _0x3b0d1b >= 0x0; _0x3b0d1b--) {
          this.bi[_0x3b0d1b].Pa(_0x2f5384, _0x4729eb);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && null != this.ci) {
          this.ci.Pa(_0x2f5384, _0x4729eb);
        }
      };
      _0x8bde5e.prototype.Ra = function () {
        for (var _0x949508 = this.bi.length - 0x1; _0x949508 >= 0x0; _0x949508--) {
          this.bi[_0x949508].Ra();
        }
        if (null != this.ci) {
          this.ci.Ra();
        }
      };
      _0x8bde5e.prototype.I = function (_0x3e0af6) {
        var _0x548e6f = _0x2e36cc(this.bi, _0x3e0af6);
        if (!(_0x548e6f < 0x0)) {
          this.bi[0x0].ei();
          _0x4339b2(this.bi, _0x548e6f);
          this.fi();
        }
      };
      _0x8bde5e.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x4c8296(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x8bde5e.prototype.fi = function () {
        var _0x5d33a0 = this.bi[0x0];
        _0x5d33a0.ii();
        _0x5d33a0.ji();
        this.ki();
      };
      _0x8bde5e.prototype.li = function () {
        return 0x0 != this.bi.length && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x8bde5e.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x8bde5e;
    }();
    var _0x257108 = function () {
      function _0x57db25() {
        this.ag = [];
        this.$f = [];
      }
      _0x57db25.Vg = function (_0x53e472, _0x4ac98a) {
        return {
          'bg': _0x53e472,
          'M': _0x4ac98a
        };
      };
      _0x57db25.Wg = function (_0x455a27, _0x2f0e57) {
        return {
          '_f': _0x455a27,
          'M': _0x2f0e57
        };
      };
      return _0x57db25;
    }();
    var _0x3a0ecc = function () {
      function _0x3bbd8f() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
      }
      _0x3bbd8f.prototype.a = function () {
        this.vi();
      };
      _0x3bbd8f.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x3bbd8f.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x3bbd8f.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x3bbd8f.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : '/images/guest-avatar-xmas2022.png';
      };
      _0x3bbd8f.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x3bbd8f.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x3bbd8f.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x3bbd8f.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x3bbd8f.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x3bbd8f.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x3bbd8f.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x3bbd8f.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x3bbd8f.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x3bbd8f.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x3bbd8f.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x3bbd8f.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x3bbd8f.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x3bbd8f.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x3bbd8f.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x3bbd8f.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x3bbd8f.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x3bbd8f.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x3bbd8f.prototype.V = function (_0x361af1) {
        this.ni.push(_0x361af1);
        _0x361af1();
      };
      _0x3bbd8f.prototype.Pi = function (_0x198836) {
        this.oi.push(_0x198836);
        _0x198836();
      };
      _0x3bbd8f.prototype.Qi = function (_0x5eef6c) {
        this.pi.push(_0x5eef6c);
      };
      _0x3bbd8f.prototype.Ch = function (_0xdfa869, _0x395428) {
        var _0x456096 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x456096) {
          return false;
        }
        for (var _0x5ec415 = 0x0; _0x5ec415 < _0x456096.length; _0x5ec415++) {
          var _0x5eb1b2 = _0x456096[_0x5ec415];
          if (_0x5eb1b2.id == _0xdfa869 && _0x5eb1b2.type === _0x395428) {
            return true;
          }
        }
        return false;
      };
      _0x3bbd8f.prototype.P = function () {
        return this.qi;
      };
      _0x3bbd8f.prototype.ea = function () {
        return this.ri;
      };
      _0x3bbd8f.prototype.Q = function (_0x5ccf5d) {
        var _0x2cef49 = this;
        if (this.qi) {
          this.Ri(function (_0x1af343) {
            if (_0x1af343) {
              var _0x22c183 = _0x2cef49.zi();
              var _0x4a3d8d = _0x2cef49.Ai();
              _0x2cef49.si = _0x1af343;
              _0x545f65(_0x2cef49.si);
              _0x2cef49.Si();
              var _0x52a660 = _0x2cef49.zi();
              var _0xa4b736 = _0x2cef49.Ai();
              if (_0xa4b736 > 0x1 && _0xa4b736 != _0x4a3d8d) {
                (window.anApp = _0x4db052).s.aa.Ti(new _0x1d4218(_0xa4b736));
              }
              var _0x385d45 = _0x52a660 - _0x22c183;
              if (_0x385d45 >= 0x14) {
                (window.anApp = _0x4db052).s.aa.Ti(new _0x5b3043(_0x385d45));
              }
            }
            if (_0x5ccf5d) {
              _0x5ccf5d();
            }
          });
        }
      };
      _0x3bbd8f.prototype.Ri = function (_0x2daf95) {
        $.get(_0x330a2d + "/pub/wuid/" + this.ri + "/getUserData", function (_0x12d5ab) {
          _0x2daf95(_0x12d5ab.user_data);
        });
      };
      _0x3bbd8f.prototype.Ui = function (_0x23a997, _0x4d8a52, _0x58d430) {
        var _0x43091a = this;
        $.get(_0x330a2d + "/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x23a997 + '&type=' + _0x4d8a52, function (_0x1c8965) {
          if (0x4b0 == _0x1c8965.code) {
            _0x43091a.Q(_0x58d430);
          } else {
            _0x58d430();
          }
        }).fail(function () {
          _0x58d430();
        });
      };
      _0x3bbd8f.prototype.Vi = function () {
        var _0x2c2a30 = this;
        this.Wi();
        if ("undefined" == typeof FB) {
          return void this.Xi();
        }
        FB.getLoginStatus(function (_0x5beb03) {
          if ('connected' === _0x5beb03.status) {
            return void (_0x5beb03.authResponse && _0x5beb03.authResponse.accessToken ? _0x2c2a30.Yi("facebook", "fb_" + _0x5beb03.authResponse.accessToken) : _0x2c2a30.Xi());
          }
          FB.login(function (_0x3c54da) {
            if ('connected' === _0x3c54da.status && _0x3c54da.authResponse && _0x3c54da.authResponse.accessToken) {
              _0x2c2a30.Yi("facebook", "fb_" + _0x3c54da.authResponse.accessToken);
            } else {
              _0x2c2a30.Xi();
            }
          });
        });
      };
      _0x3bbd8f.prototype.Zi = function () {
        var _0xf717d4 = this;
        this.Wi();
        if (typeof GoogleAuth === "undefined") {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log('gsi:sil');
            var _0x2ee88f = GoogleAuth.currentUser.get();
            _0xf717d4.Yi('google', "gg_" + _0x2ee88f.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x22dfdc) {
            if (typeof _0x22dfdc.error !== "undefined") {
              console.log("gsi:e: " + _0x22dfdc.error);
              _0xf717d4.Xi();
              return;
            }
            if (_0x22dfdc.isSignedIn()) {
              console.log("gsi:s");
              _0xf717d4.Yi("google", 'gg_' + _0x22dfdc.getAuthResponse().id_token);
            } else {
              console.log("gsi:c");
              _0xf717d4.Xi();
            }
          });
        });
      };
      _0x3bbd8f.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x4ac83e = this.ri;
        var _0xfb93ff = this.ti;
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
        _0x2ec3f6(_0x240bd8.Oe, '', 0x3c);
        switch (_0xfb93ff) {
          case "facebook":
            this.$i();
            break;
          case 'google':
            this._i();
        }
        if (_0x4ac83e !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x3bbd8f.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get(_0x330a2d + "/pub/wuid/" + this.ri + "/deleteAccount", function (_0x564402) {
            if (0x4b0 === _0x564402.code) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x3bbd8f.prototype.vi = function () {
        console.log('rs');
        var _0x96613b = _0xd0f967(_0x240bd8.Oe);
        var _0x2bb610 = this;
        if ("facebook" == _0x96613b) {
          console.log("rs:fb");
          (function _0x1816e1() {
            if ('undefined' != typeof FB) {
              _0x2bb610.Vi();
            } else {
              setTimeout(_0x1816e1, 0x64);
            }
          })();
        } else if ("google" == _0x96613b) {
          console.log("rs:gg");
          (function _0x1927af() {
            if (undefined !== GoogleAuth) {
              _0x2bb610.Zi();
            } else {
              setTimeout(_0x1927af, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x3bbd8f.prototype.aj = function () {
        var _0xcdc8e1 = 0x0;
        for (; _0xcdc8e1 < this.ni.length; _0xcdc8e1++) {
          this.ni[_0xcdc8e1]();
        }
        this.Si();
      };
      _0x3bbd8f.prototype.Si = function () {
        var _0x37d6ae = 0x0;
        for (; _0x37d6ae < this.oi.length; _0x37d6ae++) {
          this.oi[_0x37d6ae]();
        }
        var _0x3044d6 = this.pi;
        this.pi = [];
        var _0x202fb6 = 0x0;
        for (; _0x202fb6 < _0x3044d6.length; _0x202fb6++) {
          _0x3044d6[_0x202fb6]();
        }
      };
      _0x3bbd8f.prototype.Yi = function (_0x201a04, _0x59e8da) {
        var _0x2e92d3 = this;
        $.get(_0x330a2d + '/pub/wuid/' + _0x59e8da + "/login", function (_0x4b80ac) {
          if (_0x4b80ac && _0x4b80ac.user_data) {
            checkSubscriptionExpired(_0x4b80ac.user_data.userId);
            registerUpdatePlayer(_0x4b80ac.user_data);
            _0x545f65(_0x4b80ac.user_data);
            var _0x22cae2 = this.ri;
            _0x2e92d3.qi = true;
            _0x2e92d3.ri = _0x59e8da;
            _0x2e92d3.si = _0x4b80ac.user_data;
            _0x2e92d3.ti = _0x201a04;
            _0x2ec3f6(_0x240bd8.Oe, _0x2e92d3.ti, 0x3c);
            showServer2(_0x4db052);
            showVersionPays(_0x4b80ac);
            lxpduserId = _0x4b80ac.user_data.userId;
            $('#wtr-settings-id').text("ID: " + lxpduserId);
            theoKzObjects.loading = false;
            if (_0x22cae2 !== _0x59e8da) {
              _0x2e92d3.aj();
            } else {
              _0x2e92d3.Si();
            }
          } else {
            _0x2e92d3.Xi();
          }
        }).fail(function () {
          _0x2e92d3.Xi();
        });
      };
      _0x3bbd8f.prototype.Xi = function () {
        this.Wi();
      };
      _0x3bbd8f.prototype.$i = function () {
        console.log('lo:fb');
        FB.logout(function () {});
      };
      _0x3bbd8f.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x3bbd8f;
    }();
    var _0x266df8 = function () {
      function _0x17cd50() {
        this.cj = {};
        this.cj[_0x447f16] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x43e80a] = _0x4b77e7._b.WHITE;
        this.cj[_0x5098f9] = [0x0, 0x0];
        this.cj[_0x5c9b86] = [0x0, 0x0];
        var _0x44bccc = _0x4b77e7.cc.from(_0x26bd32, _0x527c4b, this.cj);
        this.zf = new _0x4b77e7.hc(_0x1c3147, _0x44bccc);
      }
      var _0x77771e = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1cd596 = "a2_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x2168ef = atob('dHJhbnNsYXRpb25NYXRyaXg=');
      var _0x16be6b = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var _0x447f16 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x43e80a = 'u4_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x5098f9 = 'u5_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x5c9b86 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x300cfa = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1c3147 = new _0x4b77e7.gc().addAttribute(_0x77771e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x1cd596, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x26bd32 = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + _0x77771e + atob('O2F0dHJpYnV0ZSB2ZWMyIA==') + _0x1cd596 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x2168ef + atob('O3VuaWZvcm0gbWF0MyA=') + _0x16be6b + atob("O3ZhcnlpbmcgdmVjMiA=") + _0x300cfa + atob('O3ZvaWQgbWFpbigpew==') + _0x300cfa + atob('PQ==') + _0x1cd596 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + _0x16be6b + atob('Kg==') + _0x2168ef + atob("KnZlYzMo") + _0x77771e + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var _0x527c4b = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + _0x300cfa + atob("O3VuaWZvcm0gdmVjNCA=") + _0x447f16 + atob('O3VuaWZvcm0gc2FtcGxlcjJEIA==') + _0x43e80a + atob('O3VuaWZvcm0gdmVjMiA=') + _0x5098f9 + atob("O3VuaWZvcm0gdmVjMiA=") + _0x5c9b86 + atob('O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9') + _0x300cfa + atob("Kg==") + _0x5098f9 + atob("Kw==") + _0x5c9b86 + atob('O3ZlYzQgdl9jb2xvcl9taXg9') + _0x447f16 + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + _0x43e80a + atob('LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=');
      _0x17cd50.prototype.Hf = function (_0x2461ce, _0x5870cf, _0x44e782, _0x3823a8) {
        var _0xf4c94d = this.cj[_0x447f16];
        _0xf4c94d[0x0] = _0x2461ce;
        _0xf4c94d[0x1] = _0x5870cf;
        _0xf4c94d[0x2] = _0x44e782;
        _0xf4c94d[0x3] = _0x3823a8;
      };
      _0x17cd50.prototype.Bf = function (_0x3e27f9) {
        this.cj[_0x43e80a] = _0x3e27f9;
      };
      _0x17cd50.prototype.Te = function (_0x4eb67b, _0x2b83e0, _0x19674a, _0x376d6f) {
        this.zf.position.x = _0x4eb67b;
        this.zf.position.y = _0x2b83e0;
        this.zf.scale.x = _0x19674a;
        this.zf.scale.y = _0x376d6f;
        var _0x4b7caf = this.cj[_0x5098f9];
        _0x4b7caf[0x0] = 0.2520615384615385 * _0x19674a;
        _0x4b7caf[0x1] = 0.4357063736263738 * _0x376d6f;
        var _0x22bec6 = this.cj[_0x5c9b86];
        _0x22bec6[0x0] = 0.2520615384615385 * _0x4eb67b;
        _0x22bec6[0x1] = 0.4357063736263738 * _0x2b83e0;
      };
      return _0x17cd50;
    }();
    var _0x47e183 = function () {
      function _0x4d2545() {
        this.jh = new _0x4b77e7.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x4d2545.prototype.kh = function (_0x389ea6) {
        this.jh.texture = _0x389ea6.Hc;
        this.jh.anchor.set(_0x389ea6.Lh, _0x389ea6.Mh);
        this.dj = _0x389ea6.Nh;
        this.ej = _0x389ea6.Oh;
      };
      _0x4d2545.prototype.oh = function (_0x17a8b0) {
        this.jh.width = _0x17a8b0 * this.dj;
        this.jh.height = _0x17a8b0 * this.ej;
      };
      _0x4d2545.prototype.fj = function (_0x22220c) {
        this.jh.rotation = _0x22220c;
      };
      _0x4d2545.prototype.nh = function (_0x33b8e6, _0x2b4ce8) {
        this.jh.position.set(_0x33b8e6, _0x2b4ce8);
      };
      _0x4d2545.prototype.Mg = function (_0x523f1f) {
        this.jh.visible = _0x523f1f;
      };
      _0x4d2545.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x4d2545.prototype.qh = function (_0x3e5a65) {
        this.jh.alpha = _0x3e5a65;
      };
      _0x4d2545.prototype.Mf = function () {
        return this.jh;
      };
      _0x4d2545.prototype.ih = function () {
        _0x205297(this.jh);
      };
      return _0x4d2545;
    }();
    var _0x248911 = function () {
      function _0x57875d(_0x5a0142) {
        this.fb = _0x5a0142;
        this.Mb = new _0x248911.Config();
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
        this.Tb();
      }
      _0x57875d.prototype.Kb = function () {
        if (null != this.pj) {
          _0x205297(this.pj.Rf);
        }
        if (null != this.qj) {
          _0x205297(this.qj);
        }
      };
      _0x57875d.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x57875d.prototype.Fg = function (_0x1c6815) {
        this.Mb = _0x1c6815;
        this.rj(this.Hb);
      };
      _0x57875d.prototype.Mg = function (_0x807e86) {
        var _0x452185 = this.Hb;
        this.Hb = _0x807e86;
        this.rj(_0x452185);
      };
      _0x57875d.prototype.Ig = function (_0x59c804) {
        this.M = 0x32 * _0x59c804;
        var _0x570988 = _0x59c804;
        if (_0x59c804 > this.fb.cf) {
          _0x570988 = Math.atan((_0x59c804 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x583a0d = Math.sqrt(0x4 * Math.pow(0x5 * _0x570988, 0.707106781186548) + 0x19);
        var _0x3ec651 = Math.min(0xc8, Math.max(0x3, 0x5 * (_0x583a0d - 0x5) + 0x1));
        var _0x48a7b6 = this.kj;
        this.Db = 0.025 * (0x5 + 0.9 * _0x583a0d);
        this.kj = Math.floor(_0x3ec651);
        this.ij = _0x3ec651 - this.kj;
        if (_0x48a7b6 > 0x0 && _0x48a7b6 < this.kj) {
          var _0x6f68e6 = this.lj[0x2 * _0x48a7b6 - 0x2];
          var _0x66ebb8 = this.lj[0x2 * _0x48a7b6 - 0x1];
          var _0x58f5c5 = this.mj[0x2 * _0x48a7b6 - 0x2];
          var _0x26cf44 = this.mj[0x2 * _0x48a7b6 - 0x1];
          var _0x2703c3 = this.nj[0x2 * _0x48a7b6 - 0x2];
          var _0x14137e = this.nj[0x2 * _0x48a7b6 - 0x1];
          var _0x20895a = _0x48a7b6;
          for (; _0x20895a < this.kj; _0x20895a++) {
            this.lj[0x2 * _0x20895a] = _0x6f68e6;
            this.lj[0x2 * _0x20895a + 0x1] = _0x66ebb8;
            this.mj[0x2 * _0x20895a] = _0x58f5c5;
            this.mj[0x2 * _0x20895a + 0x1] = _0x26cf44;
            this.nj[0x2 * _0x20895a] = _0x2703c3;
            this.nj[0x2 * _0x20895a + 0x1] = _0x14137e;
          }
        }
      };
      _0x57875d.prototype.Lg = function (_0x7df71b, _0x4578f9) {
        this.kj = _0x4578f9;
        var _0x4d5e4a = 0x0;
        for (; _0x4d5e4a < this.kj; _0x4d5e4a++) {
          this.lj[0x2 * _0x4d5e4a] = this.mj[0x2 * _0x4d5e4a] = this.nj[0x2 * _0x4d5e4a] = _0x7df71b();
          this.lj[0x2 * _0x4d5e4a + 0x1] = this.mj[0x2 * _0x4d5e4a + 0x1] = this.nj[0x2 * _0x4d5e4a + 0x1] = _0x7df71b();
        }
      };
      _0x57875d.prototype.Kg = function (_0x2948a4, _0x412a4d, _0x59fdaa) {
        this.hj = _0x59fdaa;
        var _0x184b1f = 0x0;
        for (; _0x184b1f < this.kj; _0x184b1f++) {
          this.lj[0x2 * _0x184b1f] = this.mj[0x2 * _0x184b1f];
          this.lj[0x2 * _0x184b1f + 0x1] = this.mj[0x2 * _0x184b1f + 0x1];
        }
        var _0x4f239d = _0x2948a4 - this.mj[0x0];
        var _0x30d72a = _0x412a4d - this.mj[0x1];
        this.sj(_0x4f239d, _0x30d72a, this.kj, this.mj);
      };
      _0x57875d.prototype.sj = function (_0xb259e7, _0x40b4cb, _0x30efea, _0x169967) {
        var _0x35509d = Math.hypot(_0xb259e7, _0x40b4cb);
        if (!(_0x35509d <= 0x0)) {
          var _0x53fabb = _0x169967[0x0];
          var _0x17d142 = undefined;
          _0x169967[0x0] += _0xb259e7;
          var _0x56b472 = _0x169967[0x1];
          var _0x5c6c02 = undefined;
          _0x169967[0x1] += _0x40b4cb;
          var _0x5e2df2 = this.Db / (this.Db + _0x35509d);
          var _0x1f4697 = 0x1 - 0x2 * _0x5e2df2;
          var _0x233140 = 0x1;
          var _0x3463b0 = _0x30efea - 0x1;
          for (; _0x233140 < _0x3463b0; _0x233140++) {
            _0x17d142 = _0x169967[0x2 * _0x233140];
            _0x169967[0x2 * _0x233140] = _0x169967[0x2 * _0x233140 - 0x2] * _0x1f4697 + (_0x17d142 + _0x53fabb) * _0x5e2df2;
            _0x53fabb = _0x17d142;
            _0x5c6c02 = _0x169967[0x2 * _0x233140 + 0x1];
            _0x169967[0x2 * _0x233140 + 0x1] = _0x169967[0x2 * _0x233140 - 0x1] * _0x1f4697 + (_0x5c6c02 + _0x56b472) * _0x5e2df2;
            _0x56b472 = _0x5c6c02;
          }
          _0x5e2df2 = this.ij * this.Db / (this.ij * this.Db + _0x35509d);
          _0x1f4697 = 0x1 - 0x2 * _0x5e2df2;
          _0x169967[0x2 * _0x30efea - 0x2] = _0x169967[0x2 * _0x30efea - 0x4] * _0x1f4697 + (_0x169967[0x2 * _0x30efea - 0x2] + _0x53fabb) * _0x5e2df2;
          _0x169967[0x2 * _0x30efea - 0x1] = _0x169967[0x2 * _0x30efea - 0x3] * _0x1f4697 + (_0x169967[0x2 * _0x30efea - 0x1] + _0x56b472) * _0x5e2df2;
        }
      };
      _0x57875d.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x57875d.prototype.Hg = function (_0x5c511a, _0x298302) {
        var _0x4e47bf = 0xf4240;
        var _0x57b7ed = _0x5c511a;
        var _0xec2355 = _0x298302;
        var _0x1843d3 = 0x0;
        for (; _0x1843d3 < this.kj; _0x1843d3++) {
          var _0x24bd06 = this.nj[0x2 * _0x1843d3];
          var _0x353022 = this.nj[0x2 * _0x1843d3 + 0x1];
          var _0x65fea9 = Math.hypot(_0x5c511a - _0x24bd06, _0x298302 - _0x353022);
          if (_0x65fea9 < _0x4e47bf) {
            _0x4e47bf = _0x65fea9;
            _0x57b7ed = _0x24bd06;
            _0xec2355 = _0x353022;
          }
        }
        return {
          'x': _0x57b7ed,
          'y': _0xec2355,
          'distance': _0x4e47bf
        };
      };
      _0x57875d.prototype.vb = function (_0x1ed84a) {
        this.oj = _0x1ed84a;
      };
      _0x57875d.prototype.Fb = function (_0x333706, _0xc92ae4) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x333706 / 0x190 * Math.PI) : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x333706 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb + _0xc92ae4 * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x333706 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb - _0xc92ae4 * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0xc92ae4 * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0xc92ae4 * 0.0025);
        if (null != this.pj) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (null != this.qj) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x57875d.prototype.Gb = function (_0x2c1a2d, _0x585cca, _0xd21894, _0x4a4322) {
        if (this.Hb && this.Ib) {
          var _0x5757fa = Math.pow(0.11112, _0x585cca / 0x5f);
          var _0x27a77d = 0x0;
          for (; _0x27a77d < this.kj; _0x27a77d++) {
            var _0x4383a0 = this.lj[0x2 * _0x27a77d] * (0x1 - _0xd21894) + this.mj[0x2 * _0x27a77d] * _0xd21894;
            var _0x14ff11 = this.lj[0x2 * _0x27a77d + 0x1] * (0x1 - _0xd21894) + this.mj[0x2 * _0x27a77d + 0x1] * _0xd21894;
            this.nj[0x2 * _0x27a77d] = _0x4383a0 * (0x1 - _0x5757fa) + this.nj[0x2 * _0x27a77d] * _0x5757fa;
            this.nj[0x2 * _0x27a77d + 0x1] = _0x14ff11 * (0x1 - _0x5757fa) + this.nj[0x2 * _0x27a77d + 0x1] * _0x5757fa;
          }
        }
        if (null != this.pj) {
          if (this.Hb) {
            this.pj.tj(this, _0x2c1a2d, _0x585cca, _0x4a4322);
          }
        }
        if (null != this.qj) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - 0x3 * this.Db;
        }
      };
      _0x57875d.prototype.rj = function (_0x3b29c2) {
        if (this.Hb) {
          if (!_0x3b29c2) {
            this.uj();
          }
          this.uj();
        } else {
          if (null != this.pj) {
            this.uj();
            _0x205297(this.pj.Rf);
          }
          if (null != this.qj) {
            _0x205297(this.qj);
          }
        }
      };
      _0x57875d.prototype.uj = function () {
        var _0x3f4490 = window.anApp = _0x4db052;
        if (null == this.pj) {
          this.pj = new _0x20eb14();
        } else {
          _0x205297(this.pj.Rf);
        }
        this.pj.hh(_0x3f4490.o.fb.af, _0x3f4490.p.Dc().ed(this.Mb.cg), _0x3f4490.p.Dc().dd(this.Mb.dg), _0x3f4490.p.Dc().fd(this.Mb.Bg), _0x3f4490.p.Dc().gd(this.Mb.Cg), _0x3f4490.p.Dc().hd(this.Mb.Dg), _0x3f4490.p.Dc().jd(this.Mb.Eg));
        if (null == this.qj) {
          this.qj = new _0x48c05e('');
          this.qj.style.fontFamily = "PTSans";
          this.qj.anchor.set(0.5);
        } else {
          _0x205297(this.qj);
        }
        this.qj.style.fontSize = 0xe;
        this.qj.style.fill = _0x3f4490.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x57875d.Config = function () {
        function _0x1fb388() {
          this.Lb = 0x0;
          this.cg = _0x5e0b25.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x1fb388;
      }();
      return _0x57875d;
    }();
    var _0x48c05e = function () {
      return _0x26c215(_0x4b77e7.fc, function (_0x3e2e9b, _0x4211c3, _0x48f216) {
        _0x4b77e7.fc.call(this, _0x3e2e9b, _0x4211c3, _0x48f216);
        this.If = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x20eb14 = function () {
      function _0x36a6c2() {
        this.Rf = new _0x4b77e7.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x1c8ae0();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x47e183(), new _0x47e183());
        for (var _0x2428e2 = 0x1; _0x2428e2 < 0x31d; _0x2428e2++) {
          this.xj[_0x2428e2] = this.yj(_0x2428e2, new _0x47e183(), new _0x47e183());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x2738f6 = 0.1 * Math.PI;
      var _0x133151 = -0.06640625;
      var _0x523039 = -0.03515625;
      var _0x4296e3 = -0.0625;
      var _0x5dbe26 = 0x3 * _0x133151 + 0.84375;
      var _0x57328c = 0.2578125 - 0x3 * _0x133151;
      var _0xa8850f = _0x133151 + _0x523039;
      var _0x3097db = _0x4296e3 + _0x4296e3;
      var _0x10b6bf = 0x3 * _0x523039 + 0.2578125;
      var _0x3bfdee = 0.84375 - 0x3 * _0x523039;
      var _0x3d0979 = _0x523039 + _0x133151;
      _0x36a6c2.prototype.yj = function (_0x56b0cb, _0x4b962, _0x5f0307) {
        var _0x5296ff = new _0x5af237(_0x4b962, _0x5f0307);
        _0x4b962.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x56b0cb) + 0x1 + 0x3);
        _0x5f0307.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x56b0cb) - 0x2 + 0x3);
        return _0x5296ff;
      };
      _0x36a6c2.prototype.hh = function (_0x8e9b62, _0x463a2a, _0x52b81a, _0x4ca213, _0x14ded5, _0x3b740e, _0x2ef48d) {
        var _0x319ff8 = _0x52b81a.Zc;
        var _0x2c3e47 = _0x8e9b62 == 0x10 ? _0x463a2a.bd.$c : _0x52b81a.$c;
        if (_0x319ff8.length > 0x0 && _0x2c3e47.length > 0x0) {
          for (var _0x3e5268 = 0x0; _0x3e5268 < this.xj.length; _0x3e5268++) {
            this.xj[_0x3e5268].Nf.kh(_0x319ff8[_0x3e5268 % _0x319ff8.length]);
            this.xj[_0x3e5268].Pf.kh(_0x2c3e47[_0x3e5268 % _0x2c3e47.length]);
          }
        }
        this.vj.hh(_0x4ca213, _0x14ded5, _0x3b740e, _0x2ef48d);
      };
      var _0x1c8ae0 = function () {
        var _0x370145 = _0x26c215(_0x4b77e7.Zb, function () {
          _0x4b77e7.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x4b77e7.Zb();
          this.Hj = [];
          for (var _0xeafc98 = 0x0; _0xeafc98 < 0x4; _0xeafc98++) {
            var _0x10893d = new _0x47e183();
            _0x10893d.kh((window.anApp = _0x4db052).q.Ph);
            this.Gj.addChild(_0x10893d.jh);
            this.Hj.push(_0x10893d);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x47e183();
          this.Jj.kh((window.anApp = _0x4db052).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new _0x47e183();
          this.flx.kh((window.anApp = _0x4db052).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x47e183();
          this.xxx5.kh((window.anApp = _0x4db052).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x47e183();
          this.xxx2.kh((window.anApp = _0x4db052).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x47e183();
          this.xxx10.kh((window.anApp = _0x4db052).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x47e183();
          this.xxxLupatype.kh((window.anApp = _0x4db052).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        _0x370145.prototype.hh = function (_0x550d83, _0x262af4, _0x26925f, _0x27bc08) {
          this.Lj(0.002, this.Cj, _0x550d83.Zc);
          this.Lj(0.003, this.Dj, _0x262af4.Zc);
          this.Lj(0.004, this.Fj, _0x27bc08.Zc);
          this.Lj(0.005, this.Ej, _0x26925f.Zc);
        };
        _0x370145.prototype.Lj = function (_0x11bcb6, _0x2e7309, _0x4a3066) {
          for (; _0x4a3066.length > _0x2e7309.length;) {
            var _0x34bccd = new _0x47e183();
            _0x2e7309.push(_0x34bccd);
            this.addChild(_0x34bccd.Mf());
          }
          for (; _0x4a3066.length < _0x2e7309.length;) {
            _0x2e7309.pop().ih();
          }
          var _0x2ccac9 = _0x11bcb6;
          for (var _0x13c8b2 = 0x0; _0x13c8b2 < _0x4a3066.length; _0x13c8b2++) {
            _0x2ccac9 += 0.0001;
            var _0x40a070 = _0x2e7309[_0x13c8b2];
            _0x40a070.kh(_0x4a3066[_0x13c8b2]);
            _0x40a070.jh.zIndex = _0x2ccac9;
          }
        };
        _0x370145.prototype.mh = function (_0x5ce3ef, _0x5744d5, _0x45c8fe, _0x16aaee) {
          this.visible = true;
          this.position.set(_0x5ce3ef, _0x5744d5);
          this.rotation = _0x16aaee;
          for (var _0x40175d = 0x0; _0x40175d < this.Cj.length; _0x40175d++) {
            this.Cj[_0x40175d].oh(_0x45c8fe);
          }
          for (var _0x3971ed = 0x0; _0x3971ed < this.Dj.length; _0x3971ed++) {
            this.Dj[_0x3971ed].oh(_0x45c8fe);
          }
          for (var _0x41a780 = 0x0; _0x41a780 < this.Ej.length; _0x41a780++) {
            this.Ej[_0x41a780].oh(_0x45c8fe);
          }
          for (var _0x22f7eb = 0x0; _0x22f7eb < this.Fj.length; _0x22f7eb++) {
            this.Fj[_0x22f7eb].oh(_0x45c8fe);
          }
        };
        _0x370145.prototype.lh = function () {
          this.visible = false;
        };
        _0x370145.prototype.Mj = function (_0x32a365, _0xad5eb5, _0x1c96cf, _0x493087) {
          this.Gj.visible = true;
          var _0x49399d = _0x1c96cf / 0x3e8;
          var _0x2a025c = 0x1 / this.Hj.length;
          for (var _0x63e312 = 0x0; _0x63e312 < this.Hj.length; _0x63e312++) {
            var _0x4e3162 = 0x1 - (_0x49399d + _0x2a025c * _0x63e312) % 0x1;
            this.Hj[_0x63e312].jh.alpha = 0x1 - _0x4e3162;
            this.Hj[_0x63e312].oh(_0xad5eb5 * (0.5 + 4.5 * _0x4e3162));
          }
        };
        _0x370145.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x370145.prototype.Nj = function (_0x38f990, _0x5722ad, _0x51bdca, _0x4b22df) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0x38f990.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x38f990.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x4b22df * 0.0025) : Math.max(_0x38f990.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x4b22df * 0.0025);
          this.Jj.oh(_0x5722ad);
        };
        _0x370145.prototype.Nflex = function (_0x14106f, _0x2e3a09, _0x5f05a2, _0x2d2198) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = (_0x14106f.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x14106f.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x2d2198 * 0.0025) : Math.max(_0x14106f.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x2d2198 * 0.0025);
          this.flx.oh(_0x2e3a09);
        };
        _0x370145.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0x370145.prototype.ActiveX5 = function (_0x33a357, _0x1db18a, _0x51d13d, _0x5a6acd) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0x33a357.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x33a357.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x5a6acd * 0.0025) : Math.max(_0x33a357.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x5a6acd * 0.0025);
          this.xxx5.oh(_0x1db18a);
        };
        _0x370145.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0x370145.prototype.ActiveX2 = function (_0x51d9d5, _0x4cd9d7, _0xb4093d, _0x5a3c24) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x51d9d5.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x51d9d5.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x5a3c24 * 0.0025) : Math.max(_0x51d9d5.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x5a3c24 * 0.0025);
          this.xxx2.oh(_0x4cd9d7);
        };
        _0x370145.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0x370145.prototype.ActiveX10 = function (_0x167c15, _0x4b55e9, _0x5f5072, _0x3f89f2) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x167c15.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x167c15.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x3f89f2 * 0.0025) : Math.max(_0x167c15.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x3f89f2 * 0.0025);
          this.xxx10.oh(_0x4b55e9);
        };
        _0x370145.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0x370145.prototype.ActiveZlupa = function (_0xee7df, _0x2a5254, _0x54597d, _0x45abe2) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0xee7df.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0xee7df.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x45abe2 * 0.0025) : Math.max(_0xee7df.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x45abe2 * 0.0025);
          this.xxxLupatype.oh(_0x2a5254);
        };
        _0x370145.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0x370145.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        return _0x370145;
      }();
      _0x36a6c2.prototype.Oj = function (_0x1b61e8) {
        return this.Aj + this.Bj * Math.sin(_0x1b61e8 * _0x2738f6 - this.zj);
      };
      _0x36a6c2.prototype.tj = function (_0x419e76, _0x492dba, _0x432ab7, _0x3cc30f) {
        var _0x23d10a = 0x2 * _0x419e76.Db;
        var _0x2a2a0e = _0x419e76.nj;
        var _0x370c4f = _0x419e76.kj;
        var _0x4e3e38 = 0x4 * _0x370c4f - 0x3;
        this.zj = _0x492dba / 0x190 * Math.PI;
        this.Aj = 1.5 * _0x23d10a;
        this.Bj = 0.15 * _0x23d10a * _0x419e76.jj;
        var _0x3dac6d = undefined;
        var _0x318fc9 = undefined;
        var _0x309fde = undefined;
        var _0x49bd22 = undefined;
        var _0x2441dc = undefined;
        var _0x336c8d = undefined;
        var _0x4362b2 = undefined;
        var _0x56c6d8 = undefined;
        _0x318fc9 = _0x2a2a0e[0x0];
        _0x336c8d = _0x2a2a0e[0x1];
        if (_0x3cc30f(_0x318fc9, _0x336c8d)) {
          _0x309fde = _0x2a2a0e[0x2];
          _0x4362b2 = _0x2a2a0e[0x3];
          _0x49bd22 = _0x2a2a0e[0x4];
          _0x56c6d8 = _0x2a2a0e[0x5];
          var _0x387413 = Math.atan2(_0x56c6d8 + 0x2 * _0x336c8d - 0x3 * _0x4362b2, _0x49bd22 + 0x2 * _0x318fc9 - 0x3 * _0x309fde);
          this.vj.mh(_0x318fc9, _0x336c8d, _0x23d10a, _0x387413);
          this.xj[0x0].mh(_0x318fc9, _0x336c8d, _0x23d10a, this.Oj(0x0), _0x387413);
          this.xj[0x1].mh(_0x5dbe26 * _0x318fc9 + _0x57328c * _0x309fde + _0xa8850f * _0x49bd22, _0x5dbe26 * _0x336c8d + _0x57328c * _0x4362b2 + _0xa8850f * _0x56c6d8, _0x23d10a, this.Oj(0x1), _0x5af237.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x318fc9 + 0.75 * _0x309fde + _0x3097db * _0x49bd22, 0.375 * _0x336c8d + 0.75 * _0x4362b2 + _0x3097db * _0x56c6d8, _0x23d10a, this.Oj(0x2), _0x5af237.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x10b6bf * _0x318fc9 + _0x3bfdee * _0x309fde + _0x3d0979 * _0x49bd22, _0x10b6bf * _0x336c8d + _0x3bfdee * _0x4362b2 + _0x3d0979 * _0x56c6d8, _0x23d10a, this.Oj(0x3), _0x5af237.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0x585a8d = 0x4;
        var _0x152570 = 0x2;
        for (var _0x1901b6 = 0x2 * _0x370c4f - 0x4; _0x152570 < _0x1901b6; _0x152570 += 0x2) {
          _0x318fc9 = _0x2a2a0e[_0x152570];
          _0x336c8d = _0x2a2a0e[_0x152570 + 0x1];
          if (_0x3cc30f(_0x318fc9, _0x336c8d)) {
            _0x3dac6d = _0x2a2a0e[_0x152570 - 0x2];
            _0x2441dc = _0x2a2a0e[_0x152570 - 0x1];
            _0x309fde = _0x2a2a0e[_0x152570 + 0x2];
            _0x4362b2 = _0x2a2a0e[_0x152570 + 0x3];
            _0x49bd22 = _0x2a2a0e[_0x152570 + 0x4];
            _0x56c6d8 = _0x2a2a0e[_0x152570 + 0x5];
            this.xj[_0x585a8d].mh(_0x318fc9, _0x336c8d, _0x23d10a, this.Oj(_0x585a8d), _0x5af237.angleBetween(this.xj[_0x585a8d - 0x1], this.xj[_0x585a8d + 0x1]));
            _0x585a8d++;
            this.xj[_0x585a8d].mh(_0x133151 * _0x3dac6d + 0.84375 * _0x318fc9 + 0.2578125 * _0x309fde + _0x523039 * _0x49bd22, _0x133151 * _0x2441dc + 0.84375 * _0x336c8d + 0.2578125 * _0x4362b2 + _0x523039 * _0x56c6d8, _0x23d10a, this.Oj(_0x585a8d), _0x5af237.angleBetween(this.xj[_0x585a8d - 0x1], this.xj[_0x585a8d + 0x1]));
            _0x585a8d++;
            this.xj[_0x585a8d].mh(_0x4296e3 * _0x3dac6d + 0.5625 * _0x318fc9 + 0.5625 * _0x309fde + _0x4296e3 * _0x49bd22, _0x4296e3 * _0x2441dc + 0.5625 * _0x336c8d + 0.5625 * _0x4362b2 + _0x4296e3 * _0x56c6d8, _0x23d10a, this.Oj(_0x585a8d), _0x5af237.angleBetween(this.xj[_0x585a8d - 0x1], this.xj[_0x585a8d + 0x1]));
            _0x585a8d++;
            this.xj[_0x585a8d].mh(_0x523039 * _0x3dac6d + 0.2578125 * _0x318fc9 + 0.84375 * _0x309fde + _0x133151 * _0x49bd22, _0x523039 * _0x2441dc + 0.2578125 * _0x336c8d + 0.84375 * _0x4362b2 + _0x133151 * _0x56c6d8, _0x23d10a, this.Oj(_0x585a8d), _0x5af237.angleBetween(this.xj[_0x585a8d - 0x1], this.xj[_0x585a8d + 0x1]));
            _0x585a8d++;
          } else {
            this.xj[_0x585a8d].lh();
            _0x585a8d++;
            this.xj[_0x585a8d].lh();
            _0x585a8d++;
            this.xj[_0x585a8d].lh();
            _0x585a8d++;
            this.xj[_0x585a8d].lh();
            _0x585a8d++;
          }
        }
        _0x318fc9 = _0x2a2a0e[0x2 * _0x370c4f - 0x4];
        _0x336c8d = _0x2a2a0e[0x2 * _0x370c4f - 0x3];
        if (_0x3cc30f(_0x318fc9, _0x336c8d)) {
          _0x3dac6d = _0x2a2a0e[0x2 * _0x370c4f - 0x6];
          _0x2441dc = _0x2a2a0e[0x2 * _0x370c4f - 0x5];
          _0x309fde = _0x2a2a0e[0x2 * _0x370c4f - 0x2];
          _0x4362b2 = _0x2a2a0e[0x2 * _0x370c4f - 0x1];
          this.xj[_0x4e3e38 - 0x5].mh(_0x318fc9, _0x336c8d, _0x23d10a, this.Oj(_0x4e3e38 - 0x5), _0x5af237.angleBetween(this.xj[_0x4e3e38 - 0x6], this.xj[_0x4e3e38 - 0x4]));
          this.xj[_0x4e3e38 - 0x4].mh(_0x3d0979 * _0x3dac6d + _0x3bfdee * _0x318fc9 + _0x10b6bf * _0x309fde, _0x3d0979 * _0x2441dc + _0x3bfdee * _0x336c8d + _0x10b6bf * _0x4362b2, _0x23d10a, this.Oj(_0x4e3e38 - 0x4), _0x5af237.angleBetween(this.xj[_0x4e3e38 - 0x5], this.xj[_0x4e3e38 - 0x3]));
          this.xj[_0x4e3e38 - 0x3].mh(_0x3097db * _0x3dac6d + 0.75 * _0x318fc9 + 0.375 * _0x309fde, _0x3097db * _0x2441dc + 0.75 * _0x336c8d + 0.375 * _0x4362b2, _0x23d10a, this.Oj(_0x4e3e38 - 0x3), _0x5af237.angleBetween(this.xj[_0x4e3e38 - 0x4], this.xj[_0x4e3e38 - 0x2]));
          this.xj[_0x4e3e38 - 0x2].mh(_0xa8850f * _0x3dac6d + _0x57328c * _0x318fc9 + _0x5dbe26 * _0x309fde, _0xa8850f * _0x2441dc + _0x57328c * _0x336c8d + _0x5dbe26 * _0x4362b2, _0x23d10a, this.Oj(_0x4e3e38 - 0x2), _0x5af237.angleBetween(this.xj[_0x4e3e38 - 0x3], this.xj[_0x4e3e38 - 0x1]));
          this.xj[_0x4e3e38 - 0x1].mh(_0x309fde, _0x4362b2, _0x23d10a, this.Oj(_0x4e3e38 - 0x1), _0x5af237.angleBetween(this.xj[_0x4e3e38 - 0x2], this.xj[_0x4e3e38 - 0x1]));
        } else {
          this.xj[_0x4e3e38 - 0x5].lh();
          this.xj[_0x4e3e38 - 0x4].lh();
          this.xj[_0x4e3e38 - 0x3].lh();
          this.xj[_0x4e3e38 - 0x2].lh();
          this.xj[_0x4e3e38 - 0x1].lh();
        }
        if (0x0 == this.wj && _0x4e3e38 > 0x0) {
          this.Rf.addChild(this.vj);
        }
        for (this.wj > 0x0 && 0x0 == _0x4e3e38 && _0x205297(this.vj); this.wj < _0x4e3e38;) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        for (; this.wj > _0x4e3e38;) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        window.playerX = _0x419e76.qj.If.x;
        window.playerY = _0x419e76.qj.If.y;
        var _0x245813 = _0x419e76.Ff[_0x4997d0.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && null != _0x245813 && _0x245813.sc) {
          this.vj.Mj(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.Ij();
        }
        var _0x43620d = _0x419e76.Ff[_0x4997d0.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && null != _0x43620d && _0x43620d.sc) {
          this.vj.Nj(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.Kj();
        }
        var _0x552786 = _0x419e76.Ff[_0x4997d0.FLEXIBLE_TYPE];
        if (true && this.xj[0x0].gj() && null != _0x552786 && _0x552786.sc) {
          this.vj.Nflex(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.flexx();
        }
        var _0x537e99 = _0x419e76.Ff[_0x4997d0.X5_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x537e99 && _0x537e99.sc) {
          this.vj.ActiveX5(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.xXx5();
        }
        var _0xbff505 = _0x419e76.Ff[_0x4997d0.X2_TYPE];
        if (false && this.xj[0x0].gj() && null != _0xbff505 && _0xbff505.sc) {
          this.vj.ActiveX2(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.xXx2();
        }
        var _0x422f18 = _0x419e76.Ff[_0x4997d0.X10_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x422f18 && _0x422f18.sc) {
          this.vj.ActiveX10(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.xXx10();
        }
        var _0x275948 = _0x419e76.Ff[_0x4997d0.ZOOM_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x275948 && _0x275948.sc) {
          this.vj.ActiveZlupa(_0x419e76, _0x23d10a, _0x492dba, _0x432ab7);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0x5af237 = function () {
        function _0x481fc5(_0x12174d, _0x14c2d1) {
          this.Nf = _0x12174d;
          this.Nf.Mg(false);
          this.Pf = _0x14c2d1;
          this.Pf.Mg(false);
        }
        _0x481fc5.prototype.mh = function (_0x5a8ca2, _0x504a43, _0x5d750d, _0x10ba47, _0x306976) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x5a8ca2, _0x504a43);
          this.Nf.oh(_0x5d750d);
          this.Nf.fj(_0x306976);
          this.Pf.Mg(true);
          this.Pf.nh(_0x5a8ca2, _0x504a43);
          this.Pf.oh(_0x10ba47);
          this.Pf.fj(_0x306976);
        };
        _0x481fc5.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x481fc5.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x481fc5.angleBetween = function (_0x11a504, _0x5a581c) {
          return Math.atan2(_0x11a504.Nf.jh.position.y - _0x5a581c.Nf.jh.position.y, _0x11a504.Nf.jh.position.x - _0x5a581c.Nf.jh.position.x);
        };
        return _0x481fc5;
      }();
      return _0x36a6c2;
    }();
    var _0x22492e = function () {
      function _0x24da9d(_0x302b9c) {
        this.se = _0x302b9c;
        this.te = _0x302b9c.get()[0x0];
        this.ue = new _0x4b77e7.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x20eb14();
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
        var _0x1f6831 = this;
        (window.anApp = _0x4db052).p.ca(function () {
          if ((window.anApp = _0x4db052).p.W()) {
            _0x1f6831.Fb();
          }
        });
      }
      _0x24da9d.prototype.Fb = function () {
        var _0x15e10f = window.anApp = _0x4db052;
        this.Pj.hh(0x0, null, _0x15e10f.p.Dc().dd(this.rh), _0x15e10f.p.Dc().fd(this.sh), _0x15e10f.p.Dc().gd(this.th), _0x15e10f.p.Dc().hd(this.uh), _0x15e10f.p.Dc().jd(this.vh));
      };
      _0x24da9d.prototype.Le = function (_0x14d9b3) {
        this.sc = _0x14d9b3;
      };
      _0x24da9d.prototype.ak = function (_0x52a6a5, _0xed179e, _0x5f058c) {
        this.rh = _0x52a6a5;
        this.Sj = _0xed179e;
        this.Xj = _0x5f058c;
        this.Fb();
      };
      _0x24da9d.prototype.bk = function (_0xdf05e6, _0x4e2076, _0x47bb00) {
        this.sh = _0xdf05e6;
        this.Tj = _0x4e2076;
        this.Yj = _0x47bb00;
        this.Fb();
      };
      _0x24da9d.prototype.ck = function (_0x238d8f, _0x40a6cd, _0x3cb0ab) {
        this.th = _0x238d8f;
        this.Uj = _0x40a6cd;
        this.Zj = _0x3cb0ab;
        this.Fb();
      };
      _0x24da9d.prototype.dk = function (_0x203eb3, _0x3f35c6, _0x44f93e) {
        this.uh = _0x203eb3;
        this.Vj = _0x3f35c6;
        this.$j = _0x44f93e;
        this.Fb();
      };
      _0x24da9d.prototype.ek = function (_0xdd7a22, _0x240421, _0x2f1495) {
        this.vh = _0xdd7a22;
        this.Wj = _0x240421;
        this._j = _0x2f1495;
        this.Fb();
      };
      _0x24da9d.prototype.Ra = function () {
        var _0x4e5e8c = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x4e5e8c;
        this.te.width = _0x4e5e8c * this.Qj;
        this.te.height = _0x4e5e8c * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x18875c = 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 > this.Pj.xj.length ? this.Pj.xj.length : 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 < 0x1 ? 0x1 : Number.isFinite(0x2 * Math.floor(this.Qj / this.Ng) - 0x5) ? 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 : 0.5 * (0x1 + this.Pj.xj.length);
        if (this.Pj.wj != _0x18875c) {
          for (var _0x577b30 = _0x18875c; _0x577b30 < this.Pj.xj.length; _0x577b30++) {
            this.Pj.xj[_0x577b30].lh();
          }
          for (; this.Pj.wj < _0x18875c;) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          for (; this.Pj.wj > _0x18875c;) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x24da9d.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x4db052).p.W) {
            var _0x18596d = Date.now();
            var _0x1c2417 = _0x18596d / 0xc8;
            var _0x3bbe5a = Math.sin(_0x1c2417);
            var _0x419ede = this.Ng;
            var _0x115fcd = 1.5 * this.Ng;
            var _0x51b217 = this.Qj - 0.5 * (this.Qj - 0.5 * _0x419ede * (this.Pj.wj - 0x1));
            var _0x31c85b = 0.5 * this.Rj;
            var _0x580903 = 0x0;
            var _0x13ea73 = 0x0;
            for (var _0x3f0577 = -0x1; _0x3f0577 < this.Pj.wj; _0x3f0577++) {
              var _0xf5844e = _0x3f0577;
              var _0x2a2e62 = Math.cos(0x1 * _0xf5844e / 0xc * Math.PI - _0x1c2417) * (0x1 - Math.pow(0x10, -0x1 * _0xf5844e / 0xc));
              if (_0x3f0577 >= 0x0) {
                var _0x46a0e7 = _0x51b217 + -0.5 * _0x419ede * _0xf5844e;
                var _0x419571 = _0x31c85b + 0.5 * _0x419ede * _0x2a2e62;
                var _0x1ea2f0 = 0x2 * _0x419ede;
                var _0x128071 = 0x2 * _0x115fcd;
                var _0x557ca = Math.atan2(_0x13ea73 - _0x2a2e62, _0xf5844e - _0x580903);
                if (0x0 == _0x3f0577) {
                  this.Pj.vj.mh(_0x46a0e7, _0x419571, _0x1ea2f0, _0x557ca);
                }
                this.Pj.xj[_0x3f0577].mh(_0x46a0e7, _0x419571, _0x1ea2f0, _0x128071, _0x557ca);
                var _0x4878c1 = this.Sj ? this.Xj ? 0.4 + 0.2 * _0x3bbe5a : 0.9 + 0.1 * _0x3bbe5a : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x3f0577].Nf.qh(_0x4878c1);
                this.Pj.xj[_0x3f0577].Pf.qh(_0x4878c1);
              }
              _0x580903 = _0xf5844e;
              _0x13ea73 = _0x2a2e62;
            }
            for (var _0x4d06b7 = 0x0; _0x4d06b7 < this.Pj.vj.Cj.length; _0x4d06b7++) {
              var _0x46961e = this.Tj ? this.Yj ? 0.4 + 0.2 * _0x3bbe5a : 0.9 + 0.1 * _0x3bbe5a : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x4d06b7].qh(_0x46961e);
            }
            for (var _0x1a346b = 0x0; _0x1a346b < this.Pj.vj.Dj.length; _0x1a346b++) {
              var _0x13b56a = this.Uj ? this.Zj ? 0.4 + 0.2 * _0x3bbe5a : 0.9 + 0.1 * _0x3bbe5a : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x1a346b].qh(_0x13b56a);
            }
            for (var _0x53b2e0 = 0x0; _0x53b2e0 < this.Pj.vj.Ej.length; _0x53b2e0++) {
              var _0x1662d3 = this.Vj ? this.$j ? 0.4 + 0.2 * _0x3bbe5a : 0.9 + 0.1 * _0x3bbe5a : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x53b2e0].qh(_0x1662d3);
            }
            for (var _0x3c9d1f = 0x0; _0x3c9d1f < this.Pj.vj.Fj.length; _0x3c9d1f++) {
              var _0x39937a = this.Wj ? this._j ? 0.4 + 0.2 * _0x3bbe5a : 0.9 + 0.1 * _0x3bbe5a : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x3c9d1f].qh(_0x39937a);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x24da9d;
    }();
    var _0x51af60 = function () {
      function _0x2be7d4(_0x47aca7) {
        this.rc = _0x47aca7;
      }
      _0x2be7d4.fk = $("#game-view");
      _0x2be7d4.gk = $('#results-view');
      _0x2be7d4.hk = $("#main-menu-view");
      _0x2be7d4.ik = $("#popup-view");
      _0x2be7d4.jk = $('#toaster-view');
      _0x2be7d4.kk = $('#loading-view');
      _0x2be7d4.lk = $('#stretch-box');
      _0x2be7d4.mk = $("#game-canvas");
      _0x2be7d4.di = $("#background-canvas");
      _0x2be7d4.nk = $("#social-buttons");
      _0x2be7d4.ok = $("#markup-wrap");
      _0x2be7d4.prototype.a = function () {};
      _0x2be7d4.prototype.ii = function () {};
      _0x2be7d4.prototype.ji = function () {};
      _0x2be7d4.prototype.ei = function () {};
      _0x2be7d4.prototype.Ra = function () {};
      _0x2be7d4.prototype.Pa = function (_0x55e500, _0x554eff) {};
      return _0x2be7d4;
    }();
    var _0x2a0396 = function () {
      function _0x2faaa5(_0x407a58, _0x118326, _0x47fcbf, _0x58949b, _0x33f8c5, _0x110cf1) {
        var _0x2887c9 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x407a58 + "</span></div>";
        var _0x17eb43 = $(_0x2887c9);
        _0x17eb43.click(function () {
          if ('undefined' != typeof FB && undefined !== FB.ui) {
            FB.ui({
              'method': "feed",
              'display': "popup",
              'link': _0x118326,
              'name': _0x47fcbf,
              'caption': _0x58949b,
              'description': _0x33f8c5,
              'picture': _0x110cf1
            }, function () {});
          }
        });
        return _0x17eb43;
      }
      var _0x77ea5 = $("#final-caption");
      var _0x4ac71f = $("#final-continue");
      var _0x210fa0 = $('#congrats-bg');
      var _0x19f957 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x298959 = $("#final-share-fb");
      var _0x4a9ade = $('#final-message');
      var _0x3239b6 = $("#final-score");
      var _0x53d78d = $("#final-place");
      var _0x5047d9 = $('#final-board');
      var _0x2a2b2d = _0x26c215(_0x51af60, function () {
        _0x51af60.call(this, 0x0);
        var _0x920b5b = this;
        var _0x143330 = window.anApp = _0x4db052;
        var _0xb81e0e = _0x51af60.mk.get()[0x0];
        console.log('sSE=' + _0x5c742c.qk);
        _0x77ea5.text(window.I18N_MESSAGES['index.game.result.title']);
        _0x4ac71f.text(window.I18N_MESSAGES['index.game.result.continue']);
        _0x4ac71f.click(function () {
          _0x143330.r.Cd();
          _0x143330.r.G(_0x24bfc5.AudioState.F);
          _0x143330.s.I(_0x143330.s.F);
        });
        $("#game-canvas").attr("tabindex", 0x0).focus();
        $("#game-canvas").click();
        $("#game-canvas").keypress(function (_0x41faae) {
          console.log(_0x41faae);
          if (_0x41faae.target.type === 'text') {
            return;
          }
          if (_0x41faae.key.toLowerCase() === 'z') {
            lxpdupdatezoom(0x1);
          }
          if (_0x41faae.key.toLowerCase() === 'r') {
            let _0x510de7 = lxpdlastserver;
            if (_0x510de7) {
              anApp.r.Hd();
              anApp.sa(_0x510de7);
              $(".snow-container").css('display', "none");
            }
          }
          if (_0x41faae.key.toLowerCase() === 'x') {
            const _0x46bbb6 = new Uint8Array([NaN, NaN]);
            anApp.o.Wb(_0x46bbb6);
            setTimeout(() => {
              let _0x119bc1 = lxpdlastserver;
              if (_0x119bc1) {
                anApp.r.Hd();
                anApp.sa(_0x119bc1);
                $('.snow-container').css("display", 'none');
              }
            }, 0x3e8);
          }
          if (_0x41faae.key.toLowerCase() === 'l') {
            $("#settings-laserHS-switch").click();
          }
          if (_0x41faae.key.toLowerCase() === 'q') {
            $("#settings-sectores-switch").click();
          }
          if (_0x41faae.key.toLowerCase() === 'c') {
            $("#settings-backgroundSolid-switch").click();
          }
          if (_0x41faae.key.toLowerCase() === 's') {
            if (isRunning) {
              isRunning = false;
              initialInterval = 0x37;
              cycleCounter = 0x1;
              isIncrementing = true;
              clearInterval(intervalID);
              intervalID = null;
              lxpdgirosubtracttexture.texture = ungirotexture;
              lxpdgirosubtracttexture.alpha = 0.25;
            } else {
              lxpdgirosubtracttexture.alpha = 0.75;
              startInterval();
              isRunning = true;
            }
          }
        });
        $("#game-canvas").keydown(function (_0x1310f8) {
          if (_0x1310f8.key === 'Enter') {
            _0x5748bf();
          }
          if (0x20 == _0x1310f8.keyCode) {
            _0x920b5b.rk = true;
          }
        }).keyup(function (_0x259b9f) {
          if (0x20 == _0x259b9f.keyCode) {
            _0x920b5b.rk = false;
          }
        });
        var _0x5748bf = function () {
          $("#chatInput").css('display', "block").focus();
        };
        _0xb81e0e.addEventListener("touchstart", function (_0x19a9e4) {
          if (_0x19a9e4) {
            if (_0x19a9e4.touches.length >= 0x2) {
              _0x920b5b.rk = true;
            }
          }
          _0x19a9e4.preventDefault();
        }, true);
        _0xb81e0e.addEventListener("mousemove", function (_0x4e8c1d) {
          _0x4e8c1d = _0x4e8c1d || window.event && typeof _0x4e8c1d.clientX !== "undefined";
          if (_0x4e8c1d && !isRunning) {
            var _0xb5631f = _0x4e8c1d.clientX;
            var _0x434691 = _0x4e8c1d.clientY;
            window.mouseX = _0xb5631f;
            window.mouseY = _0x434691;
            _0x920b5b.sk = Math.atan2(_0x434691 - 0.5 * _0xb81e0e.offsetHeight, _0xb5631f - 0.5 * _0xb81e0e.offsetWidth);
          }
        }, true);
        _0xb81e0e.addEventListener("mousedown", function (_0xfc7ed5) {
          _0x920b5b.rk = true;
        }, true);
        _0xb81e0e.addEventListener("mouseup", function (_0x5d776e) {
          _0x920b5b.rk = false;
        }, true);
        if (lxpdmobilecheck()) {
          var _0x27d436;
          var _0x3d43ce = -0x1;
          _0xb81e0e.addEventListener("touchmove", function (_0x54dd6e) {
            if (_0x54dd6e = _0x54dd6e || window.event) {
              _0x54dd6e = _0x54dd6e.touches[0x0];
              var _0x296060 = 0.5 * _0xb81e0e.offsetWidth;
              var _0x366ecf = 0.5 * _0xb81e0e.offsetHeight;
              if (lxpdmobilearrowtexture.visible) {
                _0x296060 = lxpdmobilearrowtexture.x + 0x6e;
                _0x366ecf = lxpdmobilearrowtexture.y + 0x6e;
              }
              if (lxpdjoystick === -0x1) {
                _0x920b5b.sk = Math.atan2(_0x54dd6e.pageY - _0x366ecf, _0x54dd6e.pageX - _0x296060);
              }
              if (lxpdmobileprediction != -0x1) {
                var _0x48c320 = Math.sqrt((_0x296060 - _0x54dd6e.pageX) * (_0x296060 - _0x54dd6e.pageX) + (_0x366ecf - _0x54dd6e.pageY) * (_0x366ecf - _0x54dd6e.pageY));
                lxpdmobilepredictiontextures[lxpdmobileprediction].x = 0.5 * _0xb81e0e.offsetWidth + (_0x48c320 < 0x6e ? _0x48c320 : 0x6e) * Math.cos(_0x920b5b.sk) - 0x44;
                lxpdmobilepredictiontextures[lxpdmobileprediction].y = 0.5 * _0xb81e0e.offsetHeight + (_0x48c320 < 0x6e ? _0x48c320 : 0x6e) * Math.sin(_0x920b5b.sk) - 0x44;
                lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0x1;
              }
            }
          }, true);
          _0xb81e0e.addEventListener("touchend", function (_0x5e54e3) {
            if (lxpdmobileprediction != -0x1) {
              lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0.25;
            }
            if (_0x5e54e3 && _0x3d43ce === -0x1) {
              _0x920b5b.rk = _0x5e54e3.touches.length >= 0x2;
            }
          }, true);
          _0xb81e0e.addEventListener("pointerdown", function (_0x147914) {
            let _0x60216c = lxpdzoomplustexture.getGlobalPosition();
            let _0x311c95 = lxpdzoomsubtracttexture.getGlobalPosition();
            let _0x5e5f00 = lxpdgirosubtracttexture.getGlobalPosition();
            let _0x5aa3a3 = lxpdexplotWubtracttexture.getGlobalPosition();
            let _0x47be72 = lxpdmobilecontroltextures[lxpdmobilecontrol].getGlobalPosition();
            let _0x20df4b = lxpdmobilepeedtexture.getGlobalPosition();
            if (_0x147914.clientX > _0x5aa3a3.x && _0x147914.clientX <= _0x5aa3a3.x + lxpdexplotWubtracttexture.width && _0x147914.clientY > _0x5aa3a3.y && _0x147914.clientY <= _0x5aa3a3.y + lxpdexplotWubtracttexture.height) {
              lxpdexplotWubtracttexture.emit("mouseup");
              return;
            }
            if (_0x147914.clientX > _0x5e5f00.x && _0x147914.clientX <= _0x5e5f00.x + lxpdgirosubtracttexture.width && _0x147914.clientY > _0x5e5f00.y && _0x147914.clientY <= _0x5e5f00.y + lxpdgirosubtracttexture.height) {
              lxpdgirosubtracttexture.emit('mouseup');
              return;
            }
            if (_0x147914.clientX > _0x60216c.x && _0x147914.clientX <= _0x60216c.x + lxpdzoomplustexture.width && _0x147914.clientY > _0x60216c.y && _0x147914.clientY <= _0x60216c.y + lxpdzoomplustexture.height) {
              lxpdzoomplustexture.emit("mouseup");
              return;
            }
            if (_0x147914.clientX > _0x311c95.x && _0x147914.clientX <= _0x311c95.x + lxpdzoomsubtracttexture.width && _0x147914.clientY > _0x311c95.y && _0x147914.clientY <= _0x311c95.y + lxpdzoomsubtracttexture.height) {
              lxpdzoomsubtracttexture.emit("mouseup");
              return;
            }
            if (_0x147914.clientX > _0x47be72.x && _0x147914.clientX <= _0x47be72.x + lxpdmobilecontroltextures[lxpdmobilecontrol].width && _0x147914.clientY > _0x47be72.y && _0x147914.clientY <= _0x47be72.y + lxpdmobilecontroltextures[lxpdmobilecontrol].height) {
              lxpdmobilecontroltextures[lxpdmobilecontrol].emit('tap');
              return;
            }
            if (lxpdmobilepeedtexture.visible && _0x147914.clientX > _0x20df4b.x && _0x147914.clientX <= _0x20df4b.x + lxpdmobilepeedtexture.width && _0x147914.clientY > _0x20df4b.y && _0x147914.clientY <= _0x20df4b.y + lxpdmobilepeedtexture.height) {
              _0x3d43ce = _0x147914.pointerId;
              _0x920b5b.rk = true;
              lxpdmobilepeedtexture.alpha = 0x1;
              return;
            }
            if (lxpdjoystick !== -0x1) {
              if (!lxpdjoysticks[lxpdjoystick].visible) {
                _0x27d436 = _0x147914.pointerId;
                lxpdjoysticks[lxpdjoystick].x = _0x147914.clientX;
                lxpdjoysticks[lxpdjoystick].y = _0x147914.clientY;
                lxpdjoysticks[lxpdjoystick].visible = true;
                lxpdjoysticks[lxpdjoystick].onDragStart(_0x147914);
              }
            }
          }, true);
          _0xb81e0e.addEventListener("pointerup", function (_0x452931) {
            if (_0x452931.pointerId == _0x3d43ce) {
              _0x920b5b.rk = false;
              _0x3d43ce = -0x1;
              lxpdmobilepeedtexture.alpha = 0.5;
            }
            if (_0x452931.pointerId == _0x27d436) {
              if (lxpdjoystick !== -0x1) {
                lxpdjoysticks[lxpdjoystick].visible = false;
                lxpdjoysticks[lxpdjoystick].onDragEnd(_0x452931);
              }
            }
          }, true);
          _0xb81e0e.addEventListener('pointermove', function (_0x3a81df) {
            if (_0x3a81df.pointerId == _0x27d436) {
              if (lxpdjoystick !== -0x1) {
                lxpdjoysticks[lxpdjoystick].onDragMove(_0x3a81df);
              }
            }
          }, true);
        }
        this.wb = new _0x51d7ee(_0x51af60.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x920b5b;
      });
      _0x2a2b2d.prototype.a = function () {};
      _0x2a2b2d.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0x51af60.fk.stop();
          _0x51af60.fk.fadeIn(0x1f4);
          _0x51af60.gk.stop();
          _0x51af60.gk.fadeOut(0x1);
          _0x51af60.hk.stop();
          _0x51af60.hk.fadeOut(0x32);
          _0x51af60.ik.stop();
          _0x51af60.ik.fadeOut(0x32);
          _0x51af60.jk.stop();
          _0x51af60.jk.fadeOut(0x32);
          _0x51af60.kk.stop();
          _0x51af60.kk.fadeOut(0x32);
          _0x51af60.lk.stop();
          _0x51af60.lk.fadeOut(0x1);
          _0x51af60.di.stop();
          _0x51af60.di.fadeOut(0x32);
          _0x7d3722.Le(false);
          _0x51af60.nk.stop();
          _0x51af60.nk.fadeOut(0x32);
          _0x51af60.ok.stop();
          _0x51af60.ok.fadeOut(0x32);
        } else {
          _0x51af60.fk.stop();
          _0x51af60.fk.fadeIn(0x1f4);
          _0x51af60.gk.stop();
          _0x51af60.gk.fadeIn(0x1f4);
          _0x51af60.hk.stop();
          _0x51af60.hk.fadeOut(0x32);
          _0x51af60.ik.stop();
          _0x51af60.ik.fadeOut(0x32);
          _0x51af60.jk.stop();
          _0x51af60.jk.fadeOut(0x32);
          _0x51af60.kk.stop();
          _0x51af60.kk.fadeOut(0x32);
          _0x51af60.lk.stop();
          _0x51af60.lk.fadeOut(0x1);
          _0x51af60.di.stop();
          _0x51af60.di.fadeOut(0x32);
          _0x7d3722.Le(false);
          _0x51af60.nk.stop();
          _0x51af60.nk.fadeOut(0x32);
          _0x51af60.ok.stop();
          _0x51af60.ok.fadeOut(0x32);
        }
      };
      _0x2a2b2d.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x2a2b2d.prototype.Fa = function () {
        $(".snow-container").css("display", "block");
        console.log('re');
        _0x210fa0.hide();
        setTimeout(function () {
          console.log('fi_bg');
          _0x210fa0.fadeIn(0x1f4);
        }, 0xbb8);
        _0x19f957.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0x19f957.fadeIn(0x1f4);
        }, 0x1f4);
        this.cb = 0x1;
        return this;
      };
      _0x2a2b2d.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x4db052).r.Gd();
        }
      };
      _0x2a2b2d.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x2a2b2d.prototype.Pa = function (_0x61d358, _0x49dc0a) {
        this.wb.Pa(_0x61d358, _0x49dc0a);
      };
      _0x2a2b2d.prototype.Da = function (_0xd95dd4, _0x4ff36f, _0x48dcb4) {
        var _0x1bb7a2 = undefined;
        var _0x3e4b62 = undefined;
        var _0x3822a4 = undefined;
        if (_0x4ff36f >= 0x1 && _0x4ff36f <= 0xa) {
          _0x1bb7a2 = window.I18N_MESSAGES['index.game.result.place.i' + _0x4ff36f];
          _0x3e4b62 = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x3822a4 = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x48dcb4).replace("{1}", _0xd95dd4).replace("{2}", _0x1bb7a2);
        } else {
          _0x1bb7a2 = '';
          _0x3e4b62 = window.I18N_MESSAGES['index.game.result.tryHit'];
          _0x3822a4 = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{0}", _0x48dcb4).replace("{1}", _0xd95dd4);
        }
        _0x4a9ade.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x3239b6.html(_0xd95dd4);
        _0x53d78d.html(_0x1bb7a2);
        _0x5047d9.html(_0x3e4b62);
        if (_0x5c742c.qk) {
          var _0x3a227f = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0x298959.empty().append(_0x2faaa5(_0x3a227f, "https://wormate.io", "wormate.io", _0x3822a4, _0x3822a4, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x2a2b2d.prototype.T = function () {
        return this.sk;
      };
      _0x2a2b2d.prototype.U = function () {
        return this.rk;
      };
      return _0x2a2b2d;
    }();
    var _0x272a29 = function () {
      var _0x54da3a = $('#loading-worm-a');
      var _0x31e84b = $("#loading-worm-b");
      var _0x11520e = $('#loading-worm-c');
      var _0x81dfda = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x2b894d = _0x26c215(_0x51af60, function () {
        _0x51af60.call(this, 0x0);
      });
      _0x2b894d.prototype.a = function () {};
      _0x2b894d.prototype.ii = function () {
        _0x51af60.fk.stop();
        _0x51af60.fk.fadeOut(0x32);
        _0x51af60.gk.stop();
        _0x51af60.gk.fadeOut(0x32);
        _0x51af60.hk.stop();
        _0x51af60.hk.fadeOut(0x32);
        _0x51af60.ik.stop();
        _0x51af60.ik.fadeOut(0x32);
        _0x51af60.jk.stop();
        _0x51af60.jk.fadeOut(0x32);
        _0x51af60.kk.stop();
        _0x51af60.kk.fadeIn(0x1f4);
        _0x51af60.lk.stop();
        _0x51af60.lk.fadeIn(0x1);
        _0x51af60.di.stop();
        _0x51af60.di.fadeIn(0x1f4);
        _0x7d3722.Le(true);
        _0x51af60.nk.stop();
        _0x51af60.nk.fadeOut(0x32);
        _0x51af60.ok.stop();
        _0x51af60.ok.fadeOut(0x32);
      };
      _0x2b894d.prototype.ji = function () {
        this.tk();
      };
      _0x2b894d.prototype.tk = function () {
        _0x54da3a.css("background-position", "100% 200%");
        for (var _0x301a97 = 0x0; _0x301a97 < _0x81dfda.length; _0x301a97++) {
          var _0x2611f3 = Math.floor(Math.random() * _0x81dfda.length);
          var _0x13196e = _0x81dfda[_0x301a97];
          _0x81dfda[_0x301a97] = _0x81dfda[_0x2611f3];
          _0x81dfda[_0x2611f3] = _0x13196e;
        }
        _0x54da3a.css("background-position", _0x81dfda[0x0]);
        _0x31e84b.css("background-position", _0x81dfda[0x1]);
        _0x11520e.css('background-position', _0x81dfda[0x2]);
      };
      return _0x2b894d;
    }();
    var _0x4cbaeb = function () {
      $("#mm-event-text");
      var _0x36b4f5 = $("#mm-skin-canv");
      var _0x594463 = $("#mm-skin-prev");
      var _0x72ea61 = $("#mm-skin-next");
      var _0x55b6ca = $("#mm-skin-over");
      var _0x4b4f5d = $("#mm-skin-over-button-list");
      var _0x28cdbd = $("#mm-params-nickname");
      var _0x36de31 = $("#mm-params-game-mode");
      var _0x2a7754 = $("#mm-action-buttons");
      var _0x150ac3 = $('#mm-action-play');
      var _0x16b5cf = $("#mm-action-guest");
      var _0x243721 = $("#mm-action-login");
      var _0x558345 = $("#mm-player-info");
      var _0xe94344 = $("#mm-store");
      var _0x3b7eea = $('#mm-leaders');
      var _0x2ea46c = $('#mm-settings');
      var _0x5e2c91 = $("#mm-coins-box");
      var _0x37878d = $("#mm-player-avatar");
      var _0x5e6ba2 = $("#mm-player-username");
      var _0x3012df = $('#mm-coins-val');
      var _0x2858e9 = $('#mm-player-exp-bar');
      var _0x576ee7 = $("#mm-player-exp-val");
      var _0x40417a = $('#mm-player-level');
      var _0x5e89e6 = _0x26c215(_0x51af60, function () {
        _0x51af60.call(this, 0x1);
        var _0x1c38f4 = window.anApp = _0x4db052;
        this.uk = new _0x22492e(_0x36b4f5);
        _0x36de31.click(function () {
          _0x1c38f4.r.Cd();
        });
        _0x36b4f5.click(function () {
          if (_0x1c38f4.u.P()) {
            _0x1c38f4.r.Cd();
            _0x1c38f4.s.I(_0x1c38f4.s.$h);
          }
        });
        _0x594463.click(function () {
          _0x1c38f4.r.Cd();
          _0x1c38f4.t.Ah();
        });
        _0x72ea61.click(function () {
          _0x1c38f4.r.Cd();
          _0x1c38f4.t.zh();
        });
        _0x28cdbd.keypress(function (_0x22da3d) {
          if (0xd == _0x22da3d.keyCode) {
            _0x1c38f4.na();
          }
        });
        _0x150ac3.click(function () {
          _0x1c38f4.r.Cd();
          _0x1c38f4.na();
        });
        _0x16b5cf.click(function () {
          _0x1c38f4.r.Cd();
          _0x1c38f4.na();
        });
        _0x243721.click(function () {
          _0x1c38f4.r.Cd();
          _0x1c38f4.s.I(_0x1c38f4.s.Zh);
        });
        _0x2ea46c.click(function () {
          _0x1c38f4.r.Cd();
          _0x1c38f4.s.I(_0x1c38f4.s.xa);
        });
        _0x558345.click(function () {
          if (_0x1c38f4.u.P()) {
            _0x1c38f4.r.Cd();
            _0x1c38f4.s.I(_0x1c38f4.s.Yh);
          }
        });
        _0x3b7eea.click(function () {
          if (_0x1c38f4.u.P()) {
            _0x1c38f4.r.Cd();
            _0x1c38f4.s.I(_0x1c38f4.s.Xh);
          }
        });
        _0xe94344.click(function () {
          if (_0x1c38f4.u.P()) {
            _0x1c38f4.r.Cd();
            _0x1c38f4.s.I(_0x1c38f4.s._h);
          }
        });
        _0x5e2c91.click(function () {
          if (_0x1c38f4.u.P()) {
            _0x1c38f4.r.Cd();
            _0x1c38f4.s.I(_0x1c38f4.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let _0x195026 = lxpdlastserver;
          if (_0x195026) {
            anApp.r.Hd();
            anApp.sa(_0x195026);
            $(".snow-container").css("display", "none");
          }
        });
        _0xe94344.after("<div id=\"mm-wtr-settings\" style=\"\">Settings</div>");
        let _0x3eb324 = $("#mm-advice-cont");
        _0x3eb324.html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 0 auto;width:50%;height: 45px;\">FULL SCREEN</button><button value=\"Replay\" id=\"wtrplayagain\" style=\"display: inline; margin: 0 auto;width:50%;height: 45px;\">REPLAY</button></div>");
        $("#wtrplayagain").click(function () {
          let _0x38f8ef = lxpdlastserver;
          if (_0x38f8ef) {
            anApp.r.Hd();
            anApp.sa(_0x38f8ef);
            $('.snow-container').css("display", 'none');
          }
        });
        $("#fullscreen").click(function () {
          if (lxpdmobilefullscreenstatus) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
            lxpdmobilefullscreenstatus = false;
          } else {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            }
            lxpdmobilefullscreenstatus = true;
          }
        });
        $('#mm-wtr-settings').click(function () {
          if (_0x1c38f4.u.P()) {
            _0x1c38f4.r.Cd();
            _0x1c38f4.s.I(_0x1c38f4.s.wtrset);
          }
        });
        var _0x386ef3 = _0xd0f967(_0x240bd8.va);
        if ('ARENA' != _0x386ef3 && "TEAM2" != _0x386ef3) {
          _0x386ef3 = "ARENA";
        }
        _0x36de31.val(_0x386ef3);
        console.log("Load GM: " + _0x386ef3);
      });
      _0x5e89e6.prototype.a = function () {
        var _0x389956 = window.anApp = _0x4db052;
        var _0x2d6799 = this;
        _0x389956.u.V(function () {
          _0x389956.s.F.xk();
        });
        _0x389956.u.Pi(function () {
          if (_0x389956.u.P()) {
            _0x389956.t.Bh(_0x389956.u.Di(), _0x929e6e.ia);
            _0x389956.t.Bh(_0x389956.u.Ei(), _0x929e6e.ja);
            _0x389956.t.Bh(_0x389956.u.Fi(), _0x929e6e.ka);
            _0x389956.t.Bh(_0x389956.u.Gi(), _0x929e6e.la);
            _0x389956.t.Bh(_0x389956.u.Hi(), _0x929e6e.ma);
          } else {
            _0x389956.t.Bh(_0x389956.Ga(), _0x929e6e.ia);
            _0x389956.t.Bh(0x0, _0x929e6e.ja);
            _0x389956.t.Bh(0x0, _0x929e6e.ka);
            _0x389956.t.Bh(0x0, _0x929e6e.la);
            _0x389956.t.Bh(0x0, _0x929e6e.ma);
          }
        });
        _0x389956.u.Pi(function () {
          _0x150ac3.toggle(_0x389956.u.P());
          _0x243721.toggle(!_0x389956.u.P());
          _0x16b5cf.toggle(!_0x389956.u.P());
          _0x3b7eea.toggle(_0x389956.u.P());
          _0xe94344.toggle(_0x389956.u.P());
          _0x5e2c91.toggle(_0x389956.u.P());
          if (_0x389956.u.P()) {
            _0x55b6ca.hide();
            _0x5e6ba2.html(_0x389956.u.wi());
            _0x37878d.attr("src", _0x389956.u.xi());
            _0x3012df.html(_0x389956.u.zi());
            _0x2858e9.width(0x64 * _0x389956.u.Bi() / _0x389956.u.Ci() + '%');
            _0x576ee7.html(_0x389956.u.Bi() + " / " + _0x389956.u.Ci());
            _0x40417a.html(_0x389956.u.Ai());
            _0x28cdbd.val(_0x389956.u.ga());
          } else {
            _0x55b6ca.toggle(_0x5c742c.qk && !_0x389956.Ha());
            _0x5e6ba2.html(_0x5e6ba2.data("guest"));
            _0x37878d.attr('src', '/images/guest-avatar-xmas2022.png');
            _0x3012df.html('10');
            _0x2858e9.width('0');
            _0x576ee7.html('');
            _0x40417a.html(0x1);
            _0x28cdbd.val(_0xd0f967(_0x240bd8.Aa));
          }
        });
        _0x389956.t.xh(function () {
          _0x2d6799.uk.ak(_0x389956.t.ha(_0x929e6e.ia), false, false);
          _0x2d6799.uk.bk(_0x389956.t.ha(_0x929e6e.ja), false, false);
          _0x2d6799.uk.ck(_0x389956.t.ha(_0x929e6e.ka), false, false);
          _0x2d6799.uk.dk(_0x389956.t.ha(_0x929e6e.la), false, false);
          _0x2d6799.uk.ek(_0x389956.t.ha(_0x929e6e.ma), false, false);
        });
      };
      _0x5e89e6.prototype.ii = function () {
        _0x51af60.fk.stop();
        _0x51af60.fk.fadeOut(0x32);
        _0x51af60.gk.stop();
        _0x51af60.gk.fadeOut(0x32);
        _0x51af60.hk.stop();
        _0x51af60.hk.fadeIn(0x1f4);
        _0x51af60.ik.stop();
        _0x51af60.ik.fadeOut(0x32);
        _0x51af60.jk.stop();
        _0x51af60.jk.fadeOut(0x32);
        _0x51af60.kk.stop();
        _0x51af60.kk.fadeOut(0x32);
        _0x51af60.lk.stop();
        _0x51af60.lk.fadeIn(0x1);
        _0x51af60.di.stop();
        _0x51af60.di.fadeIn(0x1f4);
        _0x7d3722.Le(true);
        _0x51af60.nk.stop();
        _0x51af60.nk.fadeIn(0x1f4);
        _0x51af60.ok.stop();
        _0x51af60.ok.fadeIn(0x1f4);
      };
      _0x5e89e6.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
        this.uk.Le(true);
      };
      _0x5e89e6.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x5e89e6.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x5e89e6.prototype.Pa = function (_0xa8f44b, _0x2c05cc) {
        this.uk.Pa();
      };
      _0x5e89e6.prototype.ga = function () {
        return _0x28cdbd.val();
      };
      _0x5e89e6.prototype.D = function () {
        return _0x36de31.val();
      };
      _0x5e89e6.prototype.xk = function () {
        _0x2a7754.show();
      };
      _0x5e89e6.prototype.vk = function () {
        var _0x18a061 = $("#mm-advice-cont").children();
        var _0x48f973 = 0x0;
        setInterval(function () {
          _0x18a061.eq(_0x48f973).fadeOut(0x1f4, function () {
            if (++_0x48f973 >= _0x18a061.length) {
              _0x48f973 = 0x0;
            }
            _0x18a061.eq(_0x48f973).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x5e89e6.prototype.wk = function () {
        function _0x1728ba() {
          _0x5315fb.Ka(true);
          setTimeout(function () {
            _0x55b6ca.hide();
          }, 0xbb8);
        }
        var _0x5315fb = window.anApp = _0x4db052;
        if (_0x5c742c.qk && !_0x5315fb.Ha()) {
          _0x55b6ca.show();
          var _0x251fb2 = window.I18N_MESSAGES['index.game.main.menu.unlockSkins.share'];
          var _0x550348 = encodeURIComponent(window.I18N_MESSAGES['index.game.main.menu.unlockSkins.comeAndPlay'] + " https://wormate.io/ #wormate #wormateio");
          var _0xe5e002 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          _0x4b4f5d.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x550348 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x251fb2 + "</span></a>").click(_0x1728ba));
          _0x4b4f5d.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0xe5e002 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x251fb2 + "</span></a>").click(_0x1728ba));
        }
      };
      return _0x5e89e6;
    }();
    var _0x35d001 = function () {
      var _0x1e5356 = _0x26c215(_0x51af60, function () {
        _0x51af60.call(this, 0x0);
      });
      _0x1e5356.prototype.a = function () {};
      _0x1e5356.prototype.ii = function () {
        _0x51af60.fk.stop();
        _0x51af60.fk.fadeOut(0x32);
        _0x51af60.gk.stop();
        _0x51af60.gk.fadeOut(0x32);
        _0x51af60.hk.stop();
        _0x51af60.hk.fadeOut(0x32);
        _0x51af60.ik.stop();
        _0x51af60.ik.fadeOut(0x32);
        _0x51af60.jk.stop();
        _0x51af60.jk.fadeOut(0x32);
        _0x51af60.kk.stop();
        _0x51af60.kk.fadeOut(0x32);
        _0x51af60.lk.stop();
        _0x51af60.lk.fadeOut(0x1);
        _0x51af60.di.stop();
        _0x51af60.di.fadeOut(0x32);
        _0x7d3722.Le(false);
        _0x51af60.nk.stop();
        _0x51af60.nk.fadeOut(0x32);
        _0x51af60.ok.stop();
        _0x51af60.ok.fadeOut(0x32);
      };
      return _0x1e5356;
    }();
    var _0x2bffa0 = function () {
      var _0x4f2bf8 = $("#toaster-stack");
      var _0x3b20b7 = _0x26c215(_0x51af60, function () {
        _0x51af60.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x3b20b7.prototype.a = function () {};
      _0x3b20b7.prototype.ii = function () {
        _0x51af60.fk.stop();
        _0x51af60.fk.fadeOut(0x32);
        _0x51af60.gk.stop();
        _0x51af60.gk.fadeOut(0x32);
        _0x51af60.hk.stop();
        _0x51af60.hk.fadeOut(0x32);
        _0x51af60.ik.stop();
        _0x51af60.ik.fadeOut(0x32);
        _0x51af60.jk.stop();
        _0x51af60.jk.fadeIn(0x1f4);
        _0x51af60.kk.stop();
        _0x51af60.kk.fadeOut(0x32);
        _0x51af60.lk.stop();
        _0x51af60.lk.fadeIn(0x1);
        _0x51af60.di.stop();
        _0x51af60.di.fadeIn(0x1f4);
        _0x7d3722.Le(true);
        _0x51af60.nk.stop();
        _0x51af60.nk.fadeOut(0x32);
        _0x51af60.ok.stop();
        _0x51af60.ok.fadeIn(0x1f4);
      };
      _0x3b20b7.prototype.ji = function () {
        this.Ak();
      };
      _0x3b20b7.prototype.mi = function () {
        return null != this.zk || this.yk.length > 0x0;
      };
      _0x3b20b7.prototype._ = function (_0x4f0ea5) {
        this.yk.unshift(_0x4f0ea5);
        setTimeout(function () {
          (window.anApp = _0x4db052).s.ki();
        }, 0x0);
      };
      _0x3b20b7.prototype.Ti = function (_0x218837) {
        this.yk.push(_0x218837);
        setTimeout(function () {
          (window.anApp = _0x4db052).s.ki();
        }, 0x0);
      };
      _0x3b20b7.prototype.Ak = function () {
        var _0x29d4d2 = this;
        if (null == this.zk) {
          if (0x0 == this.yk.length) {
            return void (window.anApp = _0x4db052).s.gi();
          }
          var _0x3b7a82 = this.yk.shift();
          this.zk = _0x3b7a82;
          var _0x1670fc = _0x3b7a82.Bk();
          _0x1670fc.hide();
          _0x1670fc.fadeIn(0x12c);
          _0x4f2bf8.append(_0x1670fc);
          _0x3b7a82.Ck = function () {
            _0x1670fc.fadeOut(0x12c);
            setTimeout(function () {
              _0x1670fc.remove();
            }, 0x12c);
            if (_0x29d4d2.zk == _0x3b7a82) {
              _0x29d4d2.zk = null;
            }
            _0x29d4d2.Ak();
          };
          _0x3b7a82.ji();
        }
      };
      return _0x3b20b7;
    }();
    var _0x3669ab = function () {
      var _0x3ec934 = $('#popup-menu-label');
      var _0x47f23a = $('#popup-menu-coins-box');
      var _0x9491bb = $("#popup-menu-coins-val");
      $('#popup-menu-back').click(function () {
        var _0x2b6444 = window.anApp = _0x4db052;
        _0x2b6444.r.Cd();
        _0x2b6444.s.gi();
      });
      _0x47f23a.click(function () {
        var _0x1e6b8e = window.anApp = _0x4db052;
        if (_0x1e6b8e.u.P()) {
          _0x1e6b8e.r.Cd();
          _0x1e6b8e.s.I(_0x1e6b8e.s.Wh);
        }
      });
      var _0x282cc5 = _0x26c215(_0x51af60, function (_0x4db83a, _0x4cf042) {
        _0x51af60.call(this, 0x1);
        this.ad = _0x4db83a;
        this.Dk = _0x4cf042;
      });
      $("#mm-params-nickname").after("<div id=\"teamNameContainer\" class=\"input-group\"><input type=\"text\" id=\"teamCodeInput\" class=\"form-control\" placeholder=\"TeamCode\" spellcheck=\"false\" maxlength=\"10\" style=\" position: absolute;top: 0;right: 0;width: 100px;-webkit-appearance: none;text-align-last: center;overflow: hidden;height: 100%;line-height: 100%;background: transparent;font-size: 20px;padding: 0 10px;background-color: transparent !important;border: 1px solid !important;border-color: #fff !important;color: #fff !important;text-shadow: 1px 1px 2px #427388 !important;box-sizing: border-box;border-radius: 5px;border: 0;outline: 0;color: #806102;box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);text-align: center;cursor: pointer;transition: background-color .5s ease; \"></div>");
      $("#settings-view").after("<div id=\"wormtr-settings-view\" class=\"base-popup-view\" style=\"opacity: 1;\"><div class=\"settings-icons\"><span id=\"user-icon\" class=\"material-icons\">account_circle</span><span id=\"hotkeys-icon\" class=\"material-icons\">keyboard</span></div><div id=\"user-section\" class=\"settings-section\"><div class=\"settings-line\"><span id=\"wtr-settings-id\" class=\"settings-label\">ID: </span><button id=\"idkopyala\">Copiar</button></div><div class=\"popup-sep\"></div><div id=\"wtr-aplan-set\" class=\"settings-line\"><span class=\"settings-label\">Fondo</span><select id=\"arkaplan\"><option value=\"0\">Por defecto</option><option value=\"1\">Espacio</option><option value=\"2\">Espacio 2</option><option value=\"3\">Azul</option><option value=\"4\">Cuernos</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><input type=\"checkbox\" id=\"toggleTop8\" /><label for=\"toggleTop8\">Show Top 8</label><span class=\"tooltip\" id=\"tooltipTop8\" style=\"display: none;\"> Si habilita esta opción, verá la lista de los 8 mejores jugadores.</span></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Top</span><select id=\"wtrtop\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">You Color Map: </span><input type=\"color\" id=\"colorPicker\" /></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings_span\" >SkinVisible(Public): </span><input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\"></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Nombre blasfemo censurado</span><input class=\"settings-switch\" id=\"settings-kufur-isim\" type=\"checkbox\"><label for=\"settings-kufur-isim\"></label></div><div class=\"popup-sep\"></div><span id=\"wtr-settings-version\" class=\"settings-line\"></span></div><div id=\"hotkeys-section\" class=\"settings-section\" style=\"display:none\"><div class=\"settings-line\" id=\"key-settings\"><label for=\"zoom-key\">Zoom:</label><input type=\"text\" id=\"zoom-key\" class=\"key-input\"><br><label for=\"restart-key\">Replay:</label><input type=\"text\" id=\"restart-key\" class=\"key-input\"><br><label for=\"wormExplot-key\">Explote:</label><input type=\"text\" id=\"wormExplot-key\" class=\"key-input\"><br><label for=\"laserHSkey-key\">LaserHS:</label><input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\"><br><label for=\"sectores-key\">Sectors:</label><input type=\"text\" id=\"sectores-key\" class=\"key-input\"><br><label for=\"background-key\">Background:</label><input type=\"text\" id=\"background-key\" class=\"key-input\"><br><label for=\"giro-key\">Giro:</label><input type=\"text\" id=\"giro-key\" class=\"key-input\"><br></div></div></div>");
      let _0x38cbb2 = localStorage.getItem("top8") === "true" ? true : !(localStorage.getItem("top8") === "false");
      let _0x2be8f9 = localStorage.getItem("killFeed") === 'true' ? true : localStorage.getItem("killFeed") === 'false' ? false : theoKzObjects.killFeed;
      $('#toggleTop8').prop("checked", _0x38cbb2);
      $("#toggleKillFeed").prop('checked', _0x2be8f9);
      $('#top8List').toggle(_0x38cbb2);
      $("#killFeed").toggle(_0x2be8f9);
      if (localStorage.getItem("top8") === "true" || localStorage.getItem("top8") === "false") {
        theoKzObjects.top8 = _0x38cbb2;
        localStorage.setItem('top8', _0x38cbb2);
      }
      if (localStorage.getItem("killFeed") === "true" || localStorage.getItem('killFeed') === "false") {
        theoKzObjects.killFeed = _0x2be8f9;
        localStorage.setItem("killFeed", _0x2be8f9);
      }
      $('#toggleTop8').on("change", function () {
        theoKzObjects.top8 = this.checked;
        $("#top8List").toggle(this.checked);
        localStorage.setItem("top8", true);
      });
      $("#toggleKillFeed").on("change", function () {
        theoKzObjects.killFeed = this.checked;
        $("#killFeed").toggle(this.checked);
        localStorage.setItem("killFeed", theoKzObjects.killFeed);
      });
      $("#toggleTop8").hover(function () {
        $("#tooltipTop8").fadeIn();
      }, function () {
        $('#tooltipTop8').fadeOut();
      });
      $('#toggleKillFeed').hover(function () {
        $("#tooltipKillFeed").fadeIn();
      }, function () {
        $("#tooltipKillFeed").fadeOut();
      });
      $("#colorPicker").on('input', function () {
        let _0x18da46 = $(this).val();
        localStorage.setItem("teamColor", "0xffffff");
        zwormData.teamColor = '0x' + _0x18da46.substring(0x1);
      });
      $('#teamCodeInput').on("input", function () {
        zwormData.teamCode = $(this).val();
        localStorage.setItem("teamCode", '');
        console.log("Team Code updated:", '');
      });
      let _0x4317f2 = localStorage.getItem("teamCode");
      if (_0x4317f2) {
        zwormData.teamCode = _0x4317f2;
        $('#teamCodeInput').val(_0x4317f2);
      }
      let _0x1b83b0 = localStorage.getItem("teamColor");
      if (_0x1b83b0) {
        zwormData.teamColor = _0x1b83b0;
        $("#colorPicker").val('#' + _0x1b83b0.substring(0x2));
      }
      $('#zoom-key').val('z');
      $('#restart-key').val('r');
      $("#laserHSkey-key").val('l');
      $("#wormExplot-key").val('x');
      $("#giro-key").val('s');
      $("#sectores-key").val('q');
      $("#background-key").val('c');
      $("#user-icon").on("click", function () {
        $("#user-icon").addClass("active");
        $('#hotkeys-icon').removeClass("active");
        $('#user-section').toggle();
        $("#hotkeys-section").hide();
      });
      $("#hotkeys-icon").on("click", function () {
        $("#hotkeys-icon").addClass('active');
        $('#user-icon').removeClass("active");
        $("#hotkeys-section").toggle();
        $("#user-section").hide();
      });
      $(".key-input").keydown(function (_0x4ef877) {
        _0x4ef877.stopPropagation();
      });
      $(".key-input").keypress(function (_0x5c7de5) {
        _0x5c7de5.preventDefault();
        var _0x1997f0 = _0x5c7de5.key.toLowerCase();
        $(this).val(_0x1997f0);
        var _0x33aaa7 = $(this).attr('id');
        switch (_0x33aaa7) {
          case 'zoom-key':
            cambiarKey("zoom", _0x1997f0);
            break;
          case 'restart-key':
            cambiarKey("restart", _0x1997f0);
            break;
          case "wormExplot-key":
            cambiarKey('wormExplot', _0x1997f0);
            break;
          case "laserHSkey-key":
            cambiarKey("laserHS", _0x1997f0);
            break;
          case "giro-key":
            cambiarKey("giro", _0x1997f0);
            break;
          case 'sectores-key':
            cambiarKey("sectores", _0x1997f0);
            break;
          case "background-key":
            cambiarKey("background", _0x1997f0);
            break;
        }
        $(this).blur();
      });
      lxpdselectedbackground = 0x0;
      lxpdtoplist = 0xa;
      var _0x148bec = $("#arkaplan");
      var _0x38211a = $('#wtrtop');
      const _0x55e1dd = localStorage.getItem("wtr-background");
      if (_0x55e1dd) {
        const _0xd16c96 = parseInt(_0x55e1dd);
        _0x148bec.val(_0xd16c96);
        lxpdselectedbackground = _0xd16c96;
      }
      const _0x2c2c89 = localStorage.getItem("wtr-toplist");
      if (_0x2c2c89) {
        const _0x12fcc0 = parseInt(_0x2c2c89);
        lxpdtoplist = _0x12fcc0;
      }
      let _0x549c50 = true && true && true && !isNaN(0x23);
      if (_0x549c50) {
        $('#inputReplaceSkin').val(0x23);
      } else {
        let _0x415c8e = $("#inputReplaceSkin").val();
        _0x549c50 = '' !== _0x415c8e && null !== _0x415c8e && undefined !== _0x415c8e && !isNaN(_0x415c8e);
        theoKzObjects.idReplaceSkin = _0x549c50 ? _0x415c8e : 0x23;
      }
      ;
      _0x38211a.val(lxpdtoplist);
      _0x148bec.change(function (_0x18ffaa) {
        lxpdselectedbackground = this.value;
        var _0xb3edb6 = $(this).val();
        var _0x68d690;
        switch (_0xb3edb6) {
          case '0':
            _0x68d690 = 'https://i.imgur.com/8ubx4RA.png';
            break;
          case '1':
            _0x68d690 = "https://i.imgur.com/RfdzSN5.png";
            break;
          case '2':
            _0x68d690 = "https://i.imgur.com/owjXFEq.png";
            break;
          case '3':
            _0x68d690 = "https://i.imgur.com/yIXds2n.png";
            break;
          case '4':
            _0x68d690 = "https://i.imgur.com/dESso2v.png";
            break;
        }
        if (_0x68d690) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x68d690));
        }
        localStorage.setItem('wtr-background', this.value.toString());
      });
      _0x38211a.change(function (_0x2b79c4) {
        lxpdtoplist = this.value;
        localStorage.setItem("wtr-toplist", this.value.toString());
      });
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(lxpduserId);
      });
      _0x282cc5.prototype.a = function () {
        _0x282cc5.parent.prototype.a.call(this);
        if (!_0x282cc5.Ek) {
          _0x282cc5.Ek = true;
          var _0x5081f0 = window.anApp = _0x4db052;
          _0x5081f0.u.Pi(function () {
            if (_0x5081f0.u.P()) {
              _0x9491bb.html(_0x5081f0.u.zi());
            } else {
              _0x9491bb.html('0');
            }
          });
        }
      };
      _0x282cc5.Fk = $("#coins-view");
      _0x282cc5.Gk = $("#leaders-view");
      _0x282cc5.Hk = $("#profile-view");
      _0x282cc5.Ik = $("#settings-view");
      _0x282cc5.Jk = $("#login-view");
      _0x282cc5.Kk = $('#skins-view');
      _0x282cc5.Lk = $("#store-view");
      _0x282cc5.wtrset = $("#wormtr-settings-view");
      _0x282cc5.Mk = $("#wear-view");
      _0x282cc5.Nk = $("#withdraw-consent-view");
      _0x282cc5.Ok = $("#delete-account-view");
      _0x282cc5.Pk = $('#please-wait-view');
      _0x282cc5.prototype.ii = function () {
        _0x51af60.fk.stop();
        _0x51af60.fk.fadeOut(0xc8);
        _0x51af60.gk.stop();
        _0x51af60.gk.fadeOut(0xc8);
        _0x51af60.hk.stop();
        _0x51af60.hk.fadeOut(0xc8);
        _0x51af60.ik.stop();
        _0x51af60.ik.fadeIn(0xc8);
        _0x51af60.jk.stop();
        _0x51af60.jk.fadeOut(0xc8);
        _0x51af60.kk.stop();
        _0x51af60.kk.fadeOut(0xc8);
        _0x51af60.nk.stop();
        _0x51af60.nk.fadeIn(0xc8);
        _0x51af60.ok.stop();
        _0x51af60.ok.fadeIn(0xc8);
        _0x3ec934.html(this.ad);
        _0x47f23a.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x282cc5.prototype.Rk = function () {};
      _0x282cc5.prototype.Sk = function () {
        _0x3669ab.Pk.stop();
        _0x3669ab.Pk.fadeIn(0x12c);
      };
      _0x282cc5.prototype.Qk = function () {
        _0x3669ab.Pk.stop();
        _0x3669ab.Pk.fadeOut(0x12c);
      };
      return _0x282cc5;
    }();
    var _0xf755bb = function () {
      var _0x29adb8 = $('#store-buy-coins_125000');
      var _0x5dd80a = $("#store-buy-coins_50000");
      var _0x476591 = $("#store-buy-coins_16000");
      var _0xdfb837 = $('#store-buy-coins_7000');
      var _0x3bd8b1 = $('#store-buy-coins_3250');
      var _0xff292 = $("#store-buy-coins_1250");
      var _0x14c951 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var _0x6f1ff7 = window.anApp = _0x4db052;
        var _0x1b0cfe = this;
        _0x29adb8.click(function () {
          _0x6f1ff7.r.Cd();
          _0x1b0cfe.Tk("coins_125000");
        });
        _0x5dd80a.click(function () {
          _0x6f1ff7.r.Cd();
          _0x1b0cfe.Tk("coins_50000");
        });
        _0x476591.click(function () {
          _0x6f1ff7.r.Cd();
          _0x1b0cfe.Tk("coins_16000");
        });
        _0xdfb837.click(function () {
          _0x6f1ff7.r.Cd();
          _0x1b0cfe.Tk("coins_7000");
        });
        _0x3bd8b1.click(function () {
          _0x6f1ff7.r.Cd();
          _0x1b0cfe.Tk("coins_3250");
        });
        _0xff292.click(function () {
          _0x6f1ff7.r.Cd();
          _0x1b0cfe.Tk('coins_1250');
        });
      });
      _0x14c951.prototype.a = function () {
        _0x14c951.parent.prototype.a.call(this);
      };
      _0x14c951.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeIn(0xc8);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x14c951.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
      };
      _0x14c951.prototype.Tk = function (_0x538da0) {};
      return _0x14c951;
    }();
    var _0x53fb99 = function () {
      var _0x114be2 = $("#highscore-table");
      var _0x4ff0a4 = $("#leaders-button-level");
      var _0x39dd9f = $("#leaders-button-highscore");
      var _0x620f0e = $("#leaders-button-kills");
      var _0x58bd10 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var _0x318df2 = window.anApp = _0x4db052;
        var _0x4a3694 = this;
        this.Uk = {};
        this.Vk = {
          'Wk': {
            'Xk': _0x4ff0a4,
            'Yk': 'byLevel'
          },
          'Zk': {
            'Xk': _0x39dd9f,
            'Yk': "byHighScore"
          },
          '$k': {
            'Xk': _0x620f0e,
            'Yk': 'byKillsAndHeadShots'
          }
        };
        _0x4ff0a4.click(function () {
          _0x318df2.r.Cd();
          _0x4a3694._k(_0x4a3694.Vk.Wk);
        });
        _0x39dd9f.click(function () {
          _0x318df2.r.Cd();
          _0x4a3694._k(_0x4a3694.Vk.Zk);
        });
        _0x620f0e.click(function () {
          _0x318df2.r.Cd();
          _0x4a3694._k(_0x4a3694.Vk.$k);
        });
      });
      _0x58bd10.prototype.a = function () {
        _0x58bd10.parent.prototype.a.call(this);
      };
      _0x58bd10.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeIn(0xc8);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x58bd10.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
        var _0x127981 = this;
        this.Sk();
        $.get(_0x330a2d + "/pub/leaders", function (_0x7d0a2b) {
          _0x127981.Uk = _0x7d0a2b;
          _0x127981._k(null != _0x127981.al ? _0x127981.al : _0x127981.Vk.Wk);
          _0x127981.Qk();
        }).done(function () {
          _0x127981.Qk();
        });
      };
      _0x58bd10.prototype._k = function (_0xfa5a62) {
        this.al = _0xfa5a62;
        for (var _0x5be230 in this.Vk) if (this.Vk.hasOwnProperty(_0x5be230)) {
          var _0x9e7fc7 = this.Vk[_0x5be230];
          _0x9e7fc7.Xk.removeClass('pressed');
        }
        this.al.Xk.addClass('pressed');
        var _0x56a222 = this.Uk[this.al.Yk];
        var _0x3f122a = '';
        for (var _0x408853 = 0x0; _0x408853 < _0x56a222.length; _0x408853++) {
          var _0x4d3f97 = _0x56a222[_0x408853];
          _0x3f122a += "<div class=\"table-row\"><span>" + (_0x408853 + 0x1) + "</span><span><img src=\"" + _0x4d3f97.avatarUrl + "\"/></span><span>" + _0x4d3f97.username + "</span><span>" + _0x4d3f97.level + "</span><span>" + _0x4d3f97.highScore + '</span><span>' + _0x4d3f97.headShots + " / " + _0x4d3f97.kills + "</span></div>";
        }
        _0x114be2.empty();
        _0x114be2.append(_0x3f122a);
      };
      return _0x58bd10;
    }();
    var _0x452080 = function () {
      var _0x527e41 = $("#popup-login-gg");
      var _0x125e2f = $('#popup-login-fb');
      var _0x416635 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], false);
        var _0x4aa5d7 = window.anApp = _0x4db052;
        var _0x159dab = this;
        _0x527e41.click(function () {
          _0x4aa5d7.r.Cd();
          _0x159dab.Sk();
          _0x4aa5d7.u.Qi(function () {
            _0x159dab.Qk();
          });
          setTimeout(function () {
            _0x159dab.Qk();
          }, 0x2710);
          _0x4aa5d7.u.Zi();
        });
        _0x125e2f.click(function () {
          _0x4aa5d7.r.Cd();
          _0x159dab.Sk();
          _0x4aa5d7.u.Qi(function () {
            _0x159dab.Qk();
          });
          setTimeout(function () {
            _0x159dab.Qk();
          }, 0x2710);
          _0x4aa5d7.u.Vi();
        });
      });
      _0x416635.prototype.a = function () {
        _0x416635.parent.prototype.a.call(this);
      };
      _0x416635.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeIn(0xc8);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x416635.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
      };
      return _0x416635;
    }();
    var _0x532cce = function () {
      var _0x29f45c = $("#profile-avatar");
      var _0x3bdaff = $('#profile-username');
      var _0x596f45 = $("#profile-experience-bar");
      var _0x5ab4ff = $("#profile-experience-val");
      var _0x3a6a8a = $('#profile-level');
      var _0xc725b = $('#profile-stat-highScore');
      var _0x697397 = $("#profile-stat-bestSurvivalTime");
      var _0x1b88d2 = $('#profile-stat-kills');
      var _0xe68b6e = $("#profile-stat-headshots");
      var _0x70e0b0 = $("#profile-stat-gamesPlayed");
      var _0x4047c1 = $("#profile-stat-totalTimeSpent");
      var _0x5cefb4 = $("#profile-stat-registrationDate");
      var _0x4cbf06 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES['index.game.popup.menu.profile.tab'], true);
      });
      _0x4cbf06.prototype.a = function () {
        _0x4cbf06.parent.prototype.a.call(this);
      };
      _0x4cbf06.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeIn(0xc8);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x4cbf06.prototype.ji = function () {
        var _0x5af36e = window.anApp = _0x4db052;
        _0x5af36e.r.Dd();
        var _0x387e6b = _0x5af36e.u.Oi();
        var _0x4fdf76 = moment([_0x387e6b.year, _0x387e6b.month - 0x1, _0x387e6b.day]).format('LL');
        _0x3bdaff.html(_0x5af36e.u.wi());
        _0x29f45c.attr("src", _0x5af36e.u.xi());
        _0x596f45.width(0x64 * _0x5af36e.u.Bi() / _0x5af36e.u.Ci() + '%');
        _0x5ab4ff.html(_0x5af36e.u.Bi() + " / " + _0x5af36e.u.Ci());
        _0x3a6a8a.html(_0x5af36e.u.Ai());
        _0xc725b.html(_0x5af36e.u.Ii());
        _0x697397.html(_0x4ed7ee(_0x5af36e.u.Ji()));
        _0x1b88d2.html(_0x5af36e.u.Ki());
        _0xe68b6e.html(_0x5af36e.u.Li());
        _0x70e0b0.html(_0x5af36e.u.Mi());
        _0x4047c1.html(_0x4ed7ee(_0x5af36e.u.Ni()));
        _0x5cefb4.html(_0x4fdf76);
      };
      return _0x4cbf06;
    }();
    var _0x4148af = function () {
      var _0x1baa01 = $("#settings-music-enabled-switch");
      var _0x2248ca = $("#settings-sfx-enabled-switch");
      var _0x17d7bc = $("#settings-show-names-switch");
      var _0x5d9cd6 = $("#popup-logout");
      var _0x71ff2 = $("#popup-logout-container");
      var _0x2072d8 = $("#popup-delete-account");
      var _0x396a1d = $('#popup-delete-account-container');
      var _0x561172 = $("#popup-withdraw-consent");
      var _0x2aaca9 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
        var _0x10b92a = this;
        var _0x3f507c = window.anApp = _0x4db052;
        _0x1baa01.click(function () {
          var _0x9a153c = !!_0x1baa01.prop("checked");
          _0x2ec3f6(_0x240bd8.Me, _0x9a153c, 0x1e);
          _0x3f507c.r.td(_0x9a153c);
          _0x3f507c.r.Cd();
        });
        _0x2248ca.click(function () {
          var _0x5e9916 = !!_0x2248ca.prop("checked");
          _0x2ec3f6(_0x240bd8.Ne, _0x5e9916, 0x1e);
          _0x3f507c.r.rd(_0x5e9916);
          _0x3f507c.r.Cd();
        });
        _0x17d7bc.click(function () {
          _0x3f507c.r.Cd();
        });
        _0x5d9cd6.click(function () {
          _0x3f507c.r.Cd();
          _0x10b92a.Sk();
          setTimeout(function () {
            _0x10b92a.Qk();
          }, 0x7d0);
          _0x3f507c.u.Wi();
        });
        _0x2072d8.click(function () {
          if (_0x3f507c.u.P()) {
            _0x3f507c.r.Cd();
            _0x3f507c.s.I(_0x3f507c.s.Vh);
          } else {
            _0x3f507c.r.Hd();
          }
        });
        _0x561172.click(function () {
          if (_0x3f507c.Y()) {
            _0x3f507c.r.Cd();
            _0x3f507c.s.I(_0x3f507c.s.Uh);
          } else {
            _0x3f507c.r.Hd();
          }
        });
      });
      _0x2aaca9.prototype.a = function () {
        _0x2aaca9.parent.prototype.a.call(this);
        var _0x51b8a4 = window.anApp = _0x4db052;
        var _0x3ff952 = undefined;
        switch (_0xd0f967(_0x240bd8.Me)) {
          case "false":
            _0x3ff952 = false;
            break;
          default:
            _0x3ff952 = true;
        }
        _0x1baa01.prop('checked', _0x3ff952);
        _0x51b8a4.r.td(_0x3ff952);
        var _0x505976 = undefined;
        switch (_0xd0f967(_0x240bd8.Ne)) {
          case 'false':
            _0x505976 = false;
            break;
          default:
            _0x505976 = true;
        }
        _0x2248ca.prop("checked", _0x505976);
        _0x51b8a4.r.rd(_0x505976);
        var _0x90313a = undefined;
        switch (_0xd0f967(_0x240bd8.ya)) {
          case "false":
            _0x90313a = false;
            break;
          default:
            _0x90313a = true;
        }
        console.log("Load sPN: " + _0x90313a);
        _0x17d7bc.prop('checked', _0x90313a);
        _0x51b8a4.u.V(function () {
          _0x71ff2.toggle(_0x51b8a4.u.P());
          _0x396a1d.toggle(_0x51b8a4.u.P());
        });
      };
      _0x2aaca9.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeIn(0xc8);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x2aaca9.prototype.ji = function () {
        var _0x6384a6 = window.anApp = _0x4db052;
        _0x6384a6.r.Dd();
        if (_0x6384a6.Y()) {
          _0x561172.show();
        } else {
          _0x561172.hide();
        }
      };
      _0x2aaca9.prototype.wa = function () {
        return _0x17d7bc.prop("checked");
      };
      return _0x2aaca9;
    }();
    var _0x48440a = function () {
      var _0x33a5b2 = $('#store-view-canv');
      var _0x3b7d1 = $("#skin-description-text");
      var _0x5ac04a = $("#skin-group-description-text");
      var _0x17321c = $("#store-locked-bar");
      var _0x2f04f6 = $("#store-locked-bar-text");
      var _0x7b3efb = $('#store-buy-button');
      var _0x26441c = $('#store-item-price');
      var _0x5cfeb0 = $("#store-groups");
      var _0x38f1a8 = $("#store-view-prev");
      var _0xaf32ba = $("#store-view-next");
      var _0x1f2ac0 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES['index.game.popup.menu.skins.tab'], true);
        var _0x41df56 = this;
        var _0x16a1b1 = window.anApp = _0x4db052;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x22492e(_0x33a5b2);
        _0x7b3efb.click(function () {
          _0x16a1b1.r.Cd();
          _0x41df56.fl();
        });
        _0x38f1a8.click(function () {
          _0x16a1b1.r.Cd();
          _0x41df56.bl.gl();
        });
        _0xaf32ba.click(function () {
          _0x16a1b1.r.Cd();
          _0x41df56.bl.hl();
        });
      });
      _0x1f2ac0.prototype.a = function () {
        _0x1f2ac0.parent.prototype.a.call(this);
        var _0x2696a6 = this;
        var _0x1d2110 = window.anApp = _0x4db052;
        _0x1d2110.p.ca(function () {
          var _0x539a1f = _0x1d2110.p.Ac();
          if (null != _0x539a1f) {
            _0x2696a6.cl = [];
            for (var _0x95823c = 0x0; _0x95823c < _0x539a1f.skinGroupArrayDict.length; _0x95823c++) {
              _0x2696a6.cl.push(new _0x1ad0df(_0x2696a6, _0x539a1f.skinGroupArrayDict[_0x95823c]));
            }
            _0x2696a6.dl = {};
            for (var _0x1c6109 = 0x0; _0x1c6109 < _0x539a1f.skinArrayDict.length; _0x1c6109++) {
              var _0x2dfd52 = _0x539a1f.skinArrayDict[_0x1c6109];
              _0x2696a6.dl[_0x2dfd52.id] = _0x2dfd52;
            }
          }
        });
        this.il(false);
        _0x1d2110.t.xh(function () {
          _0x2696a6.il(false);
        });
      };
      _0x1f2ac0.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeIn(0xc8);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x1f2ac0.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x1f2ac0.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x1f2ac0.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x1f2ac0.prototype.Pa = function (_0x4909c0, _0x72dac9) {
        this.el.Pa();
      };
      _0x1f2ac0.prototype.jl = function () {
        var _0x1482f5 = this;
        var _0x11c1b0 = this;
        var _0x2dee85 = window.anApp = _0x4db052;
        _0x5cfeb0.empty();
        for (var _0x2f89f7 = 0x0; _0x2f89f7 < this.cl.length; _0x2f89f7++) {
          !function (_0x1a9790) {
            var _0x24595e = _0x1482f5.cl[_0x1a9790];
            var _0x53d5f8 = document.createElement('li');
            _0x5cfeb0.append(_0x53d5f8);
            var _0x2abcf0 = $(_0x53d5f8);
            _0x2abcf0.html(_0x24595e.kl());
            _0x2abcf0.click(function () {
              _0x2dee85.r.Cd();
              _0x11c1b0.ll(_0x24595e);
            });
            _0x24595e.ml = _0x2abcf0;
          }(_0x2f89f7);
        }
        if (this.cl.length > 0x0) {
          var _0x48f852 = _0x2dee85.t.ha(_0x929e6e.ia);
          for (var _0x2f89f7 = 0x0; _0x2f89f7 < this.cl.length; _0x2f89f7++) {
            var _0x1be7fe = this.cl[_0x2f89f7];
            var _0x3c4030 = _0x1be7fe.nl.list;
            for (var _0x407e1c = 0x0; _0x407e1c < _0x3c4030.length; _0x407e1c++) {
              if (_0x3c4030[_0x407e1c] == _0x48f852) {
                _0x1be7fe.ol = _0x407e1c;
                return void this.ll(_0x1be7fe);
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0x1f2ac0.prototype.ll = function (_0x40aa66) {
        if (this.bl != _0x40aa66) {
          var _0x3ae046 = window.anApp = _0x4db052;
          this.bl = _0x40aa66;
          _0x5cfeb0.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x5ac04a.html('');
          if (null != _0x40aa66.nl) {
            var _0x345a3a = _0x3ae046.p.Ac().textDict[_0x40aa66.nl.description];
            if (null != _0x345a3a) {
              _0x5ac04a.html((_0x345a3a[_0x20795c] ? _0x345a3a[_0x20795c] : _0x345a3a.en ? _0x345a3a.en : _0x345a3a.x).includes("href") ? (_0x345a3a[_0x20795c] ? _0x345a3a[_0x20795c] : _0x345a3a.en ? _0x345a3a.en : _0x345a3a.x).replaceAll("href", "target=\"_black\" href") : _0x345a3a[_0x20795c] ? _0x345a3a[_0x20795c] : _0x345a3a.en ? _0x345a3a.en : _0x345a3a.x);
            }
          }
          this.il(true);
        }
      };
      _0x1f2ac0.prototype.pl = function () {
        return null == this.bl ? _0x119dfc.Yg() : this.bl.ql();
      };
      _0x1f2ac0.prototype.fl = function () {
        var _0x5bd451 = this;
        this.pl().ah(function (_0x6a5df5) {
          _0x5bd451.rl(_0x6a5df5);
        });
      };
      _0x1f2ac0.prototype.rl = function (_0x2c8567) {
        var _0x11dd1c = this;
        var _0x58e121 = window.anApp = _0x4db052;
        var _0x5f06f6 = this.dl[_0x2c8567].price;
        if (!(_0x58e121.u.zi() < _0x5f06f6)) {
          this.Sk();
          var _0x596d61 = _0x58e121.t.ha(_0x929e6e.ia);
          var _0xe28f5 = _0x58e121.t.ha(_0x929e6e.ja);
          var _0x274227 = _0x58e121.t.ha(_0x929e6e.ka);
          var _0x228554 = _0x58e121.t.ha(_0x929e6e.la);
          var _0x401092 = _0x58e121.t.ha(_0x929e6e.ma);
          _0x58e121.u.Ui(_0x2c8567, _0x929e6e.ia, function () {
            _0x58e121.t.Bh(_0x596d61, _0x929e6e.ia);
            _0x58e121.t.Bh(_0xe28f5, _0x929e6e.ja);
            _0x58e121.t.Bh(_0x274227, _0x929e6e.ka);
            _0x58e121.t.Bh(_0x228554, _0x929e6e.la);
            _0x58e121.t.Bh(_0x401092, _0x929e6e.ma);
            if (_0x58e121.u.Ch(_0x2c8567, _0x929e6e.ia)) {
              _0x58e121.t.Bh(_0x2c8567, _0x929e6e.ia);
            }
            _0x11dd1c.Qk();
          });
        }
      };
      _0x1f2ac0.prototype.il = function (_0x1ae6bd) {
        var _0x2ed421 = window.anApp = _0x4db052;
        this.el.bk(_0x2ed421.t.ha(_0x929e6e.ja), false, false);
        this.el.ck(_0x2ed421.t.ha(_0x929e6e.ka), false, false);
        this.el.dk(_0x2ed421.t.ha(_0x929e6e.la), false, false);
        this.el.ek(_0x2ed421.t.ha(_0x929e6e.ma), false, false);
        var _0x1dcdca = this.pl();
        if (_0x1dcdca._g()) {
          var _0x53368f = _0x1dcdca.$g();
          var _0x31c13a = this.dl[_0x53368f];
          var _0x69f791 = false;
          if (_0x2ed421.t.Ja(_0x53368f, _0x929e6e.ia)) {
            _0x17321c.hide();
            _0x7b3efb.hide();
          } else {
            if (null == _0x31c13a || 0x1 == _0x31c13a.nonbuyable) {
              _0x69f791 = true;
              _0x17321c.show();
              _0x7b3efb.hide();
              _0x2f04f6.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != _0x31c13a && _0x31c13a.nonbuyable && null != _0x31c13a.nonbuyableCause) {
                var _0x130205 = _0x2ed421.p.Ac().textDict[_0x31c13a.nonbuyableCause];
                if (null != _0x130205) {
                  _0x2f04f6.text(_0x130205[_0x20795c] ? _0x130205[_0x20795c] : _0x130205.en ? _0x130205.en : _0x130205.x);
                }
              }
            } else {
              _0x17321c.hide();
              _0x7b3efb.show();
              _0x26441c.html(_0x31c13a.price);
            }
          }
          _0x3b7d1.html("ID: " + _0x53368f + " TYPE: " + _0x929e6e.ia);
          if (null != _0x31c13a && null != _0x31c13a.description) {
            var _0x5b1a02 = _0x2ed421.p.Ac().textDict[_0x31c13a.description];
            if (null != _0x5b1a02) {
              _0x3b7d1.html((_0x5b1a02[_0x20795c] ? _0x5b1a02[_0x20795c] : _0x5b1a02.en ? _0x5b1a02.en : _0x5b1a02.x).includes("href") ? (_0x5b1a02[_0x20795c] ? _0x5b1a02[_0x20795c] : _0x5b1a02.en ? _0x5b1a02.en : _0x5b1a02.x).replaceAll("href", "target=\"_black\" href") : _0x5b1a02[_0x20795c] ? _0x5b1a02[_0x20795c] : _0x5b1a02.en ? _0x5b1a02.en : _0x5b1a02.x);
            }
          }
          this.el.ak(_0x53368f, true, _0x69f791);
          if (_0x1ae6bd) {
            _0x2ed421.t.Bh(_0x53368f, _0x929e6e.ia);
          }
        }
      };
      var _0x1ad0df = function () {
        function _0x1e47b4(_0x37ea11, _0x5987b1) {
          this.sl = _0x37ea11;
          this.ol = 0x0;
          this.nl = _0x5987b1;
        }
        _0x1e47b4.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x1e47b4.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x1e47b4.prototype.kl = function () {
          return this.nl.name[_0x20795c] ? this.nl.name[_0x20795c] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
        };
        _0x1e47b4.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x119dfc.Yg() : _0x119dfc.Zg(this.nl.list[this.ol]);
        };
        return _0x1e47b4;
      }();
      return _0x1f2ac0;
    }();
    var _0x1f1228 = function () {
      var _0x5e7c30 = $('#store-go-coins-button');
      var _0x3297d8 = $("#store-go-skins-button");
      var _0x48c0a7 = $("#store-go-wear-button");
      var _0x2ef4de = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
        var _0x44822c = window.anApp = _0x4db052;
        _0x5e7c30.click(function () {
          _0x44822c.r.Cd();
          _0x44822c.s.I(_0x44822c.s.Wh);
        });
        _0x3297d8.click(function () {
          _0x44822c.r.Cd();
          _0x44822c.s.I(_0x44822c.s.$h);
        });
        _0x48c0a7.click(function () {
          _0x44822c.r.Cd();
          _0x44822c.s.I(_0x44822c.s.ai);
        });
      });
      _0x2ef4de.prototype.a = function () {
        _0x2ef4de.parent.prototype.a.call(this);
      };
      _0x2ef4de.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeIn(0xc8);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x2ef4de.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
      };
      return _0x2ef4de;
    }();
    var _0x23c028 = function () {
      var _0x48d724 = $("#settings-kufur-isim");
      var _0x41e76a = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, "WORMXT SETTINGS", 0x0);
        lxpdsettingsblockbadwords = !!(localStorage.getItem("wtr-block-bad-words") === 'true');
        _0x48d724.prop("checked", lxpdsettingsblockbadwords);
        _0x48d724.click(function () {
          let _0x1316e3 = _0x48d724.prop("checked");
          lxpdsettingsblockbadwords = _0x1316e3;
          localStorage.setItem("wtr-block-bad-words", _0x1316e3 ? "true" : "false");
        });
      });
      _0x41e76a.prototype.a = function () {
        _0x41e76a.parent.prototype.a.call(this);
      };
      _0x41e76a.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeIn(0xc8);
      };
      _0x41e76a.prototype.ji = function () {
        var _0xae80fc = window.anApp = _0x4db052;
        _0xae80fc.r.Dd();
      };
      return _0x41e76a;
    }();
    var _0x44746b = function () {
      var _0x4b8c77 = $("#wear-view-canv");
      var _0x5035c6 = $("#wear-description-text");
      var _0x2c1e0d = $("#wear-locked-bar");
      var _0x46fcfe = $('#wear-locked-bar-text');
      var _0x5ced79 = $('#wear-buy-button');
      var _0x27985e = $("#wear-item-price");
      var _0x230b0c = $("#wear-eyes-button");
      var _0x23ed89 = $("#wear-mouths-button");
      var _0x244771 = $("#wear-glasses-button");
      var _0x1503ce = $("#wear-hats-button");
      var _0x20d610 = $('#wear-tint-chooser');
      var _0x55b916 = $('#wear-view-prev');
      var _0x5a38ca = $("#wear-view-next");
      var _0x36272a = _0x26c215(_0x3669ab, function () {
        var _0x1393a0 = this;
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
        var _0x342e76 = window.anApp = _0x4db052;
        var _0x14c08e = this;
        this.tl = [];
        this.ja = new _0x109483(this, _0x929e6e.ja, _0x230b0c);
        this.ka = new _0x109483(this, _0x929e6e.ka, _0x23ed89);
        this.la = new _0x109483(this, _0x929e6e.la, _0x244771);
        this.ma = new _0x109483(this, _0x929e6e.ma, _0x1503ce);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x22492e(_0x4b8c77);
        _0x5ced79.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.Bl();
        });
        _0x55b916.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.ul.Cl();
        });
        _0x5a38ca.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.ul.Dl();
        });
        _0x230b0c.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.El(_0x1393a0.ja);
        });
        _0x23ed89.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.El(_0x1393a0.ka);
        });
        _0x244771.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.El(_0x1393a0.la);
        });
        _0x1503ce.click(function () {
          _0x342e76.r.Cd();
          _0x14c08e.El(_0x1393a0.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x36272a.prototype.a = function () {
        _0x36272a.parent.prototype.a.call(this);
        var _0x552e3d = window.anApp = _0x4db052;
        var _0x5bc405 = this;
        _0x552e3d.p.ca(function () {
          var _0x8b523 = _0x552e3d.p.Ac();
          if (null != _0x8b523) {
            _0x5bc405.vl = _0x8b523.eyesDict;
            _0x5bc405.wl = _0x8b523.mouthDict;
            _0x5bc405.xl = _0x8b523.glassesDict;
            _0x5bc405.yl = _0x8b523.hatDict;
            _0x5bc405.zl = _0x8b523.colorDict;
            _0x5bc405.ja.Fl(_0x8b523.eyesVariantArray);
            _0x5bc405.ja.Gl(_0x5bc405.vl);
            _0x5bc405.ka.Fl(_0x8b523.mouthVariantArray);
            _0x5bc405.ka.Gl(_0x5bc405.wl);
            _0x5bc405.la.Fl(_0x8b523.glassesVariantArray);
            _0x5bc405.la.Gl(_0x5bc405.xl);
            _0x5bc405.ma.Fl(_0x8b523.hatVariantArray);
            _0x5bc405.ma.Gl(_0x5bc405.yl);
          }
        });
        this.il(false);
        _0x552e3d.t.xh(function () {
          _0x5bc405.il(false);
        });
      };
      _0x36272a.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeIn(0xc8);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x36272a.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
        this.El(null != this.ul ? this.ul : this.ja);
        this.Al.Le(true);
      };
      _0x36272a.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x36272a.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x36272a.prototype.Pa = function (_0x10c24a, _0x207625) {
        this.Al.Pa();
      };
      _0x36272a.prototype.El = function (_0x3dc4c9) {
        this.ul = _0x3dc4c9;
        for (var _0x4c42d1 = 0x0; _0x4c42d1 < this.tl.length; _0x4c42d1++) {
          this.tl[_0x4c42d1].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x36272a.prototype.Hl = function () {
        return null == this.ul ? _0x119dfc.Yg() : _0x119dfc.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
        });
      };
      _0x36272a.prototype.Bl = function () {
        var _0x359380 = this;
        this.Hl().ah(function (_0x395eea) {
          _0x359380.Ui(_0x395eea.Lb, _0x395eea.rc);
        });
      };
      _0x36272a.prototype.Ui = function (_0x1e3581, _0x46466e) {
        var _0xf85e2d = this;
        var _0x4e992b = window.anApp = _0x4db052;
        var _0x125658 = undefined;
        switch (_0x46466e) {
          case _0x929e6e.ja:
            _0x125658 = this.vl[_0x1e3581].price;
            break;
          case _0x929e6e.ka:
            _0x125658 = this.wl[_0x1e3581].price;
            break;
          case _0x929e6e.la:
            _0x125658 = this.xl[_0x1e3581].price;
            break;
          case _0x929e6e.ma:
            _0x125658 = this.yl[_0x1e3581].price;
            break;
          default:
            return;
        }
        if (!(_0x4e992b.u.zi() < _0x125658)) {
          this.Sk();
          var _0x1677a6 = _0x4e992b.t.ha(_0x929e6e.ia);
          var _0xfe0763 = _0x4e992b.t.ha(_0x929e6e.ja);
          var _0x46d73c = _0x4e992b.t.ha(_0x929e6e.ka);
          var _0x6535fa = _0x4e992b.t.ha(_0x929e6e.la);
          var _0x128f06 = _0x4e992b.t.ha(_0x929e6e.ma);
          _0x4e992b.u.Ui(_0x1e3581, _0x46466e, function () {
            _0x4e992b.t.Bh(_0x1677a6, _0x929e6e.ia);
            _0x4e992b.t.Bh(_0xfe0763, _0x929e6e.ja);
            _0x4e992b.t.Bh(_0x46d73c, _0x929e6e.ka);
            _0x4e992b.t.Bh(_0x6535fa, _0x929e6e.la);
            _0x4e992b.t.Bh(_0x128f06, _0x929e6e.ma);
            if (_0x4e992b.u.Ch(_0x1e3581, _0x46466e)) {
              _0x4e992b.t.Bh(_0x1e3581, _0x46466e);
            }
            _0xf85e2d.Qk();
          });
        }
      };
      _0x36272a.prototype.Il = function (_0x374d19, _0x5c7f12) {
        switch (_0x5c7f12) {
          case _0x929e6e.ja:
            return this.vl[_0x374d19];
          case _0x929e6e.ka:
            return this.wl[_0x374d19];
          case _0x929e6e.la:
            return this.xl[_0x374d19];
          case _0x929e6e.ma:
            return this.yl[_0x374d19];
        }
        return null;
      };
      _0x36272a.prototype.il = function (_0x5cc47f) {
        var _0x186a61 = window.anApp = _0x4db052;
        this.Al.ak(_0x186a61.t.ha(_0x929e6e.ia), false, false);
        this.Al.bk(_0x186a61.t.ha(_0x929e6e.ja), false, false);
        this.Al.ck(_0x186a61.t.ha(_0x929e6e.ka), false, false);
        this.Al.dk(_0x186a61.t.ha(_0x929e6e.la), false, false);
        this.Al.ek(_0x186a61.t.ha(_0x929e6e.ma), false, false);
        var _0x20bd86 = this.Hl();
        if (_0x20bd86._g()) {
          var _0x1b189a = _0x20bd86.$g();
          var _0x23abaa = this.Il(_0x1b189a.Lb, _0x1b189a.rc);
          var _0x418671 = false;
          if (_0x186a61.t.Ja(_0x1b189a.Lb, _0x1b189a.rc)) {
            _0x2c1e0d.hide();
            _0x5ced79.hide();
          } else {
            if (null == _0x23abaa || 0x1 == _0x23abaa.nonbuyable) {
              _0x418671 = true;
              _0x2c1e0d.show();
              _0x5ced79.hide();
              _0x46fcfe.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (null != _0x23abaa && _0x23abaa.nonbuyable && null != _0x23abaa.nonbuyableCause) {
                var _0x2dc6d6 = _0x186a61.p.Ac().textDict[_0x23abaa.nonbuyableCause];
                if (null != _0x2dc6d6) {
                  _0x46fcfe.text(_0x2dc6d6[_0x20795c] ? _0x2dc6d6[_0x20795c] : _0x2dc6d6.en ? _0x2dc6d6.en : _0x2dc6d6.x);
                }
              }
            } else {
              _0x2c1e0d.hide();
              _0x5ced79.show();
              _0x27985e.html(_0x23abaa.price);
            }
          }
          _0x5035c6.html("ID: " + _0x1b189a.Lb);
          if (null != _0x23abaa && null != _0x23abaa.description) {
            var _0x31ee80 = _0x186a61.p.Ac().textDict[_0x23abaa.description];
            if (null != _0x31ee80) {
              _0x5035c6.html((_0x31ee80[_0x20795c] ? _0x31ee80[_0x20795c] : _0x31ee80.en ? _0x31ee80.en : _0x31ee80.x).includes("href") ? (_0x31ee80[_0x20795c] ? _0x31ee80[_0x20795c] : _0x31ee80.en ? _0x31ee80.en : _0x31ee80.x).replaceAll("href", "target=\"_black\" href") : _0x31ee80[_0x20795c] ? _0x31ee80[_0x20795c] : _0x31ee80.en ? _0x31ee80.en : _0x31ee80.x);
            }
          }
          switch (_0x1b189a.rc) {
            case _0x929e6e.ja:
              this.Al.bk(_0x1b189a.Lb, true, _0x418671);
              break;
            case _0x929e6e.ka:
              this.Al.ck(_0x1b189a.Lb, true, _0x418671);
              break;
            case _0x929e6e.la:
              this.Al.dk(_0x1b189a.Lb, true, _0x418671);
              break;
            case _0x929e6e.ma:
              this.Al.ek(_0x1b189a.Lb, true, _0x418671);
              break;
          }
          if (_0x5cc47f) {
            _0x186a61.t.Bh(_0x1b189a.Lb, _0x1b189a.rc);
          }
        }
      };
      var _0x109483 = function () {
        function _0x30e823(_0x824693, _0xc9d369, _0x3b8d46) {
          this.sl = _0x824693;
          this.rc = _0xc9d369;
          this.Xk = _0x3b8d46;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0x30e823.prototype.Fl = function (_0x5915a1) {
          this.Kl = _0x5915a1;
        };
        _0x30e823.prototype.Gl = function (_0x327b73) {
          this.Jl = _0x327b73;
        };
        _0x30e823.prototype.ii = function () {
          var _0x2fedb5 = window.anApp = _0x4db052;
          var _0x38a482 = _0x2fedb5.t.ha(this.rc);
          for (var _0x2738d5 = 0x0; _0x2738d5 < this.Kl.length; _0x2738d5++) {
            for (var _0x316737 = 0x0; _0x316737 < this.Kl[_0x2738d5].length; _0x316737++) {
              if (this.Kl[_0x2738d5][_0x316737] == _0x38a482) {
                this.Nl(_0x2738d5);
                return void this.Ol(_0x316737);
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0x30e823.prototype.Cl = function () {
          var _0x5a8ee6 = this.Ll - 0x1;
          if (_0x5a8ee6 < 0x0) {
            _0x5a8ee6 = this.Kl.length - 0x1;
          }
          this.Nl(_0x5a8ee6);
          this.Ol(this.Ml % this.Kl[_0x5a8ee6].length);
        };
        _0x30e823.prototype.Dl = function () {
          var _0x4b6c89 = this.Ll + 0x1;
          if (_0x4b6c89 >= this.Kl.length) {
            _0x4b6c89 = 0x0;
          }
          this.Nl(_0x4b6c89);
          this.Ol(this.Ml % this.Kl[_0x4b6c89].length);
        };
        _0x30e823.prototype.Nl = function (_0x162017) {
          var _0x4c1cdb = this;
          if (!(_0x162017 < 0x0 || _0x162017 >= this.Kl.length)) {
            this.Ll = _0x162017;
            _0x20d610.empty();
            var _0x4bffaf = this.Kl[this.Ll];
            if (_0x4bffaf.length > 0x1) {
              for (var _0x55e00a = 0x0; _0x55e00a < _0x4bffaf.length; _0x55e00a++) {
                !function (_0x44a2d7) {
                  var _0xeaf929 = _0x4bffaf[_0x44a2d7];
                  var _0x2b0ce2 = _0x4c1cdb.Jl[_0xeaf929];
                  var _0x47120f = '#' + _0x4c1cdb.sl.zl[_0x2b0ce2.prime];
                  var _0x499d57 = $("<div style=\"border-color:" + _0x47120f + "\"></div>");
                  _0x499d57.click(function () {
                    (window.anApp = _0x4db052).r.Cd();
                    _0x4c1cdb.Ol(_0x44a2d7);
                  });
                  _0x20d610.append(_0x499d57);
                }(_0x55e00a);
              }
            }
          }
        };
        _0x30e823.prototype.Ol = function (_0x41534c) {
          if (!(_0x41534c < 0x0 || _0x41534c >= this.Kl[this.Ll].length)) {
            this.Ml = _0x41534c;
            _0x20d610.children().css("background-color", "transparent");
            var _0x40d83b = _0x20d610.children(":nth-child(" + (0x1 + _0x41534c) + ')');
            _0x40d83b.css('background-color', _0x40d83b.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x30e823.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x30e823;
      }();
      return _0x36272a;
    }();
    var _0x475bda = function () {
      var _0x5e318e = $("#withdraw-consent-yes");
      var _0x3b2721 = $("#withdraw-consent-no");
      var _0x5cebbd = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES['index.game.popup.menu.consent.tab'], false);
        var _0x51ec23 = window.anApp = _0x4db052;
        _0x5e318e.click(function () {
          _0x51ec23.r.Cd();
          if (_0x51ec23.Y()) {
            _0x51ec23.s.I(_0x51ec23.s.F);
            _0x51ec23.$(false, true);
            _0x51ec23.s.aa._(new _0x1b5772());
          } else {
            _0x51ec23.s.gi();
          }
        });
        _0x3b2721.click(function () {
          _0x51ec23.r.Cd();
          _0x51ec23.s.gi();
        });
      });
      _0x5cebbd.prototype.a = function () {
        _0x5cebbd.parent.prototype.a.call(this);
      };
      _0x5cebbd.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeIn(0xc8);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeOut(0x32);
      };
      _0x5cebbd.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Dd();
      };
      return _0x5cebbd;
    }();
    var _0x583f4c = function () {
      var _0x394140 = $("#delete-account-timer");
      var _0x5e3740 = $("#delete-account-yes");
      var _0x5016fb = $('#delete-account-no');
      var _0x63a3a6 = _0x26c215(_0x3669ab, function () {
        _0x3669ab.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], false);
        var _0x28ef25 = window.anApp = _0x4db052;
        _0x5e3740.click(function () {
          _0x28ef25.r.Cd();
          if (_0x28ef25.u.P()) {
            _0x28ef25.u.bj();
            _0x28ef25.u.Wi();
          } else {
            _0x28ef25.s.gi();
          }
        });
        _0x5016fb.click(function () {
          _0x28ef25.r.Cd();
          _0x28ef25.s.gi();
        });
        this.Pl = [];
      });
      _0x63a3a6.prototype.a = function () {
        _0x63a3a6.parent.prototype.a.call(this);
      };
      _0x63a3a6.prototype.Rk = function () {
        _0x3669ab.Fk.stop();
        _0x3669ab.Fk.fadeOut(0x32);
        _0x3669ab.Gk.stop();
        _0x3669ab.Gk.fadeOut(0x32);
        _0x3669ab.Hk.stop();
        _0x3669ab.Hk.fadeOut(0x32);
        _0x3669ab.Jk.stop();
        _0x3669ab.Jk.fadeOut(0x32);
        _0x3669ab.Ik.stop();
        _0x3669ab.Ik.fadeOut(0x32);
        _0x3669ab.Kk.stop();
        _0x3669ab.Kk.fadeOut(0x32);
        _0x3669ab.Lk.stop();
        _0x3669ab.Lk.fadeOut(0x32);
        _0x3669ab.Mk.stop();
        _0x3669ab.Mk.fadeOut(0x32);
        _0x3669ab.wtrset.stop();
        _0x3669ab.wtrset.fadeOut(0x32);
        _0x3669ab.Nk.stop();
        _0x3669ab.Nk.fadeOut(0x32);
        _0x3669ab.Ok.stop();
        _0x3669ab.Ok.fadeIn(0xc8);
      };
      _0x63a3a6.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Hd();
        _0x5e3740.stop();
        _0x5e3740.hide();
        _0x394140.stop();
        _0x394140.show();
        _0x394140.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x394140.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x394140.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x394140.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x394140.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x394140.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x394140.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x394140.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x394140.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x394140.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x394140.hide();
          _0x5e3740.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x63a3a6.prototype.Rl = function (_0x1b604c, _0x538542) {
        var _0x1136ad = setTimeout(_0x1b604c, _0x538542);
        this.Pl.push(_0x1136ad);
      };
      _0x63a3a6.prototype.Ql = function () {
        for (var _0x119eb7 = 0x0; _0x119eb7 < this.Pl.length; _0x119eb7++) {
          clearTimeout(this.Pl[_0x119eb7]);
        }
        this.Pl = [];
      };
      return _0x63a3a6;
    }();
    var _0x570fb3 = function () {
      function _0x2c4c43() {
        this.Ck = function () {};
      }
      _0x2c4c43.prototype.Bk = function () {};
      _0x2c4c43.prototype.ji = function () {};
      return _0x2c4c43;
    }();
    var _0x5b3043 = function () {
      var _0x1102e1 = _0x26c215(_0x570fb3, function (_0x291365) {
        _0x570fb3.call(this);
        var _0x188b83 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x188b83 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x291365 + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x413c00 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          (window.anApp = _0x4db052).r.Cd();
          _0x413c00.Ck();
        });
      });
      _0x1102e1.prototype.Bk = function () {
        return this.Sl;
      };
      _0x1102e1.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Fd();
      };
      return _0x1102e1;
    }();
    var _0x1d4218 = function () {
      var _0x2bb75b = _0x26c215(_0x570fb3, function (_0xe2ff23) {
        _0x570fb3.call(this);
        var _0x5c5c5b = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x5c5c5b + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0xe2ff23 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x52e1e0 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = _0x4db052).r.Cd();
          _0x52e1e0.Ck();
        });
      });
      _0x2bb75b.prototype.Bk = function () {
        return this.Sl;
      };
      _0x2bb75b.prototype.ji = function () {
        (window.anApp = _0x4db052).r.Ed();
      };
      return _0x2bb75b;
    }();
    var _0x1b5772 = function () {
      var _0xb7eccc = _0x26c215(_0x570fb3, function () {
        _0x570fb3.call(this);
        var _0x50100f = this;
        var _0x37c32d = window.anApp = _0x4db052;
        var _0x174cea = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
        this.Sl = $("<div id=\"" + _0x174cea + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x37c32d.r.Cd();
          if (_0x37c32d.Y()) {
            _0x37c32d.$(true, true);
          }
          _0x50100f.Ck();
        });
      });
      _0xb7eccc.prototype.Bk = function () {
        return this.Sl;
      };
      _0xb7eccc.prototype.ji = function () {
        var _0x596e46 = this;
        var _0x259d62 = window.anApp = _0x4db052;
        if (_0x259d62.Y() && !_0x259d62.Z()) {
          _0x259d62.r.Hd();
          setTimeout(function () {
            _0x596e46.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x596e46.Ck();
          }, 0x0);
        }
      };
      return _0xb7eccc;
    }();
    var _0x40893e = {
      "main": {
        'Ma': _0x5bdcfb("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        'K': _0x5bdcfb("ltmolilci1iurq1i", atob('d29ybWF0ZS1pb185NzB4MjUw')),
        'ra': _0x3a21e1(),
        'e': 0x4,
        'oa': false,
        'qk': true
      },
      "miniclip": {
        'Ma': _0x5bdcfb("aqnvgcpz05orkobh", atob('V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==')),
        'K': _0x5bdcfb("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': _0x3a21e1(),
        'e': 0x4,
        'oa': false,
        'qk': false
      }
    };
    var _0x5c742c = _0x40893e[window.ENV];
    if (!_0x5c742c) {
      _0x5c742c = _0x40893e.main;
    }
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener('contextmenu', function (_0x5de164) {
      _0x5de164.preventDefault();
      _0x5de164.stopPropagation();
      return false;
    });
    _0x2962eb("//connect.facebook.net/" + _0x42f2ea + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        'appId': atob('ODYxOTI2ODUwNjE5MDUx'),
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': "v8.0"
      });
    });
    _0x2962eb("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
        });
      });
    });
    _0x4db052 = _0x48f082();
    _0x4db052.v();
    $('#mm-menu-cont').css("display", "block");
    theoKzObjects.loading = true;
    var _0x545f65 = function (_0x17d9e0) {
      if (theoKzObjects.PropertyManager) {
        _0x17d9e0.skinId = theoKzObjects.PropertyManager.rh;
        _0x17d9e0.eyesId = theoKzObjects.PropertyManager.sh;
        _0x17d9e0.mouthId = theoKzObjects.PropertyManager.th;
        _0x17d9e0.glassesId = theoKzObjects.PropertyManager.uh;
        _0x17d9e0.hatId = theoKzObjects.PropertyManager.vh;
      }
    };
    var _0x400a1e = function (_0x2d2567, _0x974f56) {
      let _0x28954a = function (_0x9caa3b, _0x23bf61, _0x4105b2, _0x756589) {
        $("#contadorKill_1 .kill").html(_0x9caa3b);
        $("#contadorKill_1 .headshots").html(_0x23bf61);
      };
      if (_0x2d2567 === "count") {
        theoKzObjects.kill = (0x0 || 0x0) + (_0x974f56 ? 0x0 : 0x1);
        theoKzObjects.headshot = (0x0 || 0x0) + (_0x974f56 ? 0x1 : 0x0);
        _0x28954a(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x2d2567 === 'open') {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        $('#contadorKill_1').show();
        _0x28954a(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x2d2567 === "closed") {
        $("#contadorKill_1").hide();
        _0x28954a('cerrar');
      }
      if (_0x2d2567 === "cerrar") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        theoKzObjects.totalKills = 0x0;
        theoKzObjects.totalHeadshots = 0x0;
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
          return (this / 0xf4240).toFixed(0x1) + "M🍰";
        } else {
          return this >= 0x186a0 ? (this / 0x3e8).toFixed(0x0) + "k🍰" : this.dotFormat();
        }
      };
    }
    var _0x525a47 = function _0x5ddf87() {
      requestAnimationFrame(_0x5ddf87);
      (window.anApp = _0x4db052).Pa();
    };
    _0x525a47();
    var _0x4525a6 = function () {
      var _0x185a5a = _0x565225.width();
      var _0x5f02a5 = _0x565225.height();
      var _0x11a6e8 = _0x42ba1c.outerWidth();
      var _0x1a49dd = _0x42ba1c.outerHeight();
      var _0x49a3dc = _0x40d34e.outerHeight();
      var _0xe450fb = _0x1506aa.outerHeight();
      var _0x48c308 = Math.min(0x1, Math.min((_0x5f02a5 - _0xe450fb - _0x49a3dc) / _0x1a49dd, _0x185a5a / _0x11a6e8));
      var _0x2c2da6 = "translate(-50%, -50%) scale(" + _0x48c308 + ')';
      _0x42ba1c.css({
        '-webkit-transform': _0x2c2da6,
        '-moz-transform': _0x2c2da6,
        '-ms-transform': _0x2c2da6,
        '-o-transform': _0x2c2da6,
        'transform': _0x2c2da6
      });
      (window.anApp = _0x4db052).Ra();
      window.scrollTo(0x0, 0x1);
    };
    var _0x565225 = $('body');
    var _0x42ba1c = $("#stretch-box");
    var _0x40d34e = $("#markup-header");
    var _0x1506aa = $("#markup-footer");
    _0x4525a6();
    $(window).resize(_0x4525a6);
  }();
});
const servers = ["sao-a.wormate.io", "mum-a.wormate.io", 'dxb-a.wormate.io', "fra-e.wormate.io", "fra-d.wormate.io", "fra-c.wormate.io", "fra-b.wormate.io", "waw-a.wormate.io", "dal-b.wormate.io", "vin-a.wormate.io", "dal-a.wormate.io", "sao-c.wormate.io", 'bhs-a.wormate.io', "sao-b.wormate.io", "hil-a.wormate.io", "syd-a.wormate.io", 'sin-g.wormate.io', "gra-a.wormate.io", 'sin-i.wormate.io', "sin-h.wormate.io", 'sin-f.wormate.io', 'sin-c.wormate.io', "sin-b.wormate.io", "sin-a.wormate.io", "tok-b.wormate.io", "sin-d.wormate.io", "sin-e.wormate.io"];
async function testPortOnServers(_0x43f839) {
  console.log("\n🔍 Probando servidores Wormate.io (puerto " + _0x43f839 + ")...\n");
  const _0x3f439f = [];
  const _0x5d6cc3 = $("<ul></ul>");
  $("#resultadoPuertas").html('');
  $('#resultadoPuertas').append(_0x5d6cc3);
  for (const _0x5bdc12 of servers) {
    const _0x559153 = "wss://" + _0x5bdc12 + ':' + _0x43f839 + "/wormy";
    const _0x31ce66 = performance.now();
    let _0xb76504 = false;
    const _0x4e4f7a = await new Promise(_0xb0f1e4 => {
      const _0x55dc52 = new WebSocket(_0x559153);
      const _0x54036c = (_0x41ab0b, _0x863c47 = null) => {
        if (_0xb76504) {
          return;
        }
        _0xb76504 = true;
        _0x55dc52.close();
        _0xb0f1e4({
          'host': _0x5bdc12,
          'status': _0x41ab0b,
          'latency': _0x863c47
        });
      };
      _0x55dc52.onerror = () => _0x54036c("❌ Cerrado");
      _0x55dc52.onclose = () => _0x54036c("❌ Cerrado");
      _0x55dc52.onopen = () => {
        const _0x4a3856 = Math.round(performance.now() - _0x31ce66);
        _0x54036c("✅ ", _0x4a3856);
      };
      setTimeout(() => _0x54036c("⏱️ Timeout"), 0x2710);
    });
    if (_0x4e4f7a.status === "✅ ") {
      _0x3f439f.push(_0x4e4f7a);
      const _0x592cfe = _0x4e4f7a.latency !== null ? " - Ping: " + _0x4e4f7a.latency + " ms" : '';
      const _0xdf0c3e = "wss://" + _0x4e4f7a.host + ':' + _0x43f839 + '/wormy';
      const _0x212c6a = $("\n                    <li>\n                        " + _0x4e4f7a.status + _0x592cfe + "\n                        <button class=\"connect-button\" data-server=\"" + _0xdf0c3e + "\" style=\"margin-left: 10px;\">Connect</button>\n                    </li>\n                ");
      _0x5d6cc3.append(_0x212c6a);
    }
    await new Promise(_0x38a40f => setTimeout(_0x38a40f, 0xc8));
  }
  if (_0x3f439f.length > 0x0) {
    _0x3f439f.sort((_0x33993e, _0x3a2242) => _0x33993e.latency - _0x3a2242.latency);
    const _0x31f7d5 = _0x3f439f[0x0];
    const _0x520937 = "<strong>🏆 Best server: " + _0x31f7d5.host + " - Ping: " + _0x31f7d5.latency + " ms</strong>";
    _0x5d6cc3.append("<li style=\"margin-top:10px;\">" + _0x520937 + '</li>');
  } else {
    _0x5d6cc3.append("<li><strong>❌ No se encontraron puertas abiertas.</strong></li>");
  }
  $(document).off("click", '.connect-button').on("click", ".connect-button", function () {
    const _0xe91e9e = $(this).data("server");
    anApp.sa(_0xe91e9e);
    console.log("Conectando a:", _0xe91e9e);
  });
}
console.log("Core 2022 THEO Prueba");