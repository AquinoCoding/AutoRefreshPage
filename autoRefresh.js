
// AutoRefresh do DataStudio em JavaScript

// <-- Execução do Plugin com Função " refreshCases "
// <-- Definição do botão
// <-- Indicador de Time ( Para indicar o time do refresh )
// <-- Time definido para refresh



function otherCasesRefresh(){
    var reloadUrl = document.location.reload(true);

}

function refreshCases() {
    $(".gmat-button.mat-focus-indicator.mat-tooltip-trigger.mat-stroked-button.mat-button-base")
    
    setTimeout(function(){
        refreshCases();
    },10000)
}
refreshCases();

function refreshCasesButton() {
    console.log('Run...')
    var botoes = document.getElementsByTagName("button");
    for (var i = 0; i < botoes.length; i++) {
        
        if (botoes[i].id === 'header-refresh-button'){
            console.log('ID OK...')
            botoes[i].click();
            console.log('click...')
        }
    }
    setTimeout(function(){
        refreshCasesButton();
    },10000)
}
refreshCasesButton()

// Sem laço de Repetição

function refreshCasesButton() {
    console.log('Run...')
    var botoes = document.getElementsByTagName("button");
    
    if (botoes.id === 'header-refresh-button'){
        console.log('ID OK...')
        botoes[i].click();
        console.log('click...')
    }
    
    setTimeout(function(){
        refreshCasesButton();
    },10000)
}
refreshCasesButton()

function refresh(){
    var botoes = document.querySelectorAll
    botoes('button.mat-focus-indicator mat-tooltip-trigger mat-menu-trigger kebab_icon mat-icon-button mat-button-base ng-star-inserted');
    for (var i = 0; i < botoes.length; i++) botoes[i].onclick.apply(botoes[i]);

    botoes('button.mat-focus-indicator mat-menu-item ng-tns-c52-1 ng-star-inserted');
    for (var i = 0; i < botoes.length; i++) botoes[i].onclick.apply(botoes[i]);
}
