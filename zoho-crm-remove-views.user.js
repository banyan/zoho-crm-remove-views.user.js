// ==UserScript==
// @name           zoho-crm-remove-views.user.js
// @author         Kohei Hasegawa
// @namespace      http://github.com/banyan
// @description    Remove predefined views and recent views from search box
// @include        https://crm.zoho.com/crm/ShowTab.do?module=Leads*
// ==/UserScript==

function $(id) {
  return document.getElementById(id);
}

function removeElement(element){
  return $(element).parentNode.removeChild($(element));
}

const delayTime = 1000;

// why **removing** DOM dicrectry?
// because when select box has been changed, then they manipulates CSS again.
// so just style.display to none isn't worked. That's why I chose side effect way.

var removeSpecificMenus = function() {
  setInterval(function() {
    removeElement('cvid_chzn_g_0');
    for (var i = 1; i <= 7; i++) {
      removeElement('cvid_chzn_o_' + i);
    }
    removeElement('cvid_chzn_g_8');
    for (var i = 9; i <= 10; i++) {
      removeElement('cvid_chzn_o_' + i);
    }
  }, delayTime);
}

removeSpecificMenus();
