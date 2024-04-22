// ==UserScript==
// @name            LSS building notes
// @name:de         LSS Wachnotizen
// @version         1.0.3 
// @author          Crazycake (NL versie aanpassing door Rene-MKS)
// @description     Adds notes to every station
// @homepage        https://github.com/Cr4zyc4k3/LSS
// @homepageURL     https://github.com/Cr4zyc4k3/LSS
// @match           https://www.meldkamerspel.com/buildings/*
// @match           https://meldkamerspel.com/buildings/*
// @grant           none
// @downloadURL     https://github.com/Rene-63/Building_Notes/blob/main/Building_Notes.user.js
// @updateURL       https://github.com/Rene-63/Building_Notes/blob/main/Building_Notes.user.js
// ==/UserScript==

(function () {
    'use strict';
    const buildingID = window.location.pathname.split('/')[2];
    const LSName = 'LSS_CrazycakeBN_' + buildingID;
    const inputDiv = `
    <a href="#" id=crazcakeEnableBN class="btn btn-default btn-xs" data-toggle="modal" data-target="#crazycakeBNMod">
        <span class="glyphicon glyphicon-eye-close"></span>
    </a>
    <div id="crazycakeBNMod" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Notitieblok</h4>
                </div>
                <div class="modal-body">
                    <textarea class="text optional" cols="40" id="crazycakeBNInput" name="note[message]" rows="20" style="width:100%;height:200px;"></textarea>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-danger" id="crazycakeBNDelete">Annuleren</a>
                    <a href="#" class="btn btn-success" id="crazycakeBNSubmit">Opslaan</a>
                    <button type="button" id="crazycakeBNClose" class="btn btn-default" data-dismiss="modal">Opslaan & Sluiten</button>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById("tabs").insertAdjacentHTML("beforebegin", inputDiv);

    if (localStorage.getItem(LSName) != null) {
        getText();
    }

    document.getElementById('crazycakeBNSubmit').addEventListener('click', function () {
        setText(document.getElementById('crazycakeBNInput').value);
    });

    document.getElementById('crazycakeBNDelete').addEventListener('click', function () {
        document.getElementById('crazycakeBNInput').value = '';
        setText('');
    });

    function setText(input) {
        localStorage.setItem(LSName, input);
    }

    function getText() {
        document.getElementById('crazycakeBNInput').value = localStorage.getItem(LSName);
    }
})();
