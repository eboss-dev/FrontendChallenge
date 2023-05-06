var listPossibleFlag = document.getElementsByClassName("flag");
var finalURL = "";


for (let flagToCheck of listPossibleFlag) {
    /* perform various checks */
    /* is parent article ? */
    if(flagToCheck.tagName == "P"){
        article = flagToCheck.parentElement;
        if (article.tagName  == "ARTICLE"){
            /* check for the *33* condition */
            s = article.id.split("33");
            if (s[0] != "" && s[1] != ""){
                /* we can proceed with other controls */
                main = article.parentElement;
                /* check for tag main and id format *22 */
                if(main.id.endsWith("22") && main.tagName  == "MAIN"){
                    section = main.parentElement;
                    /* check for section tag and id format 11* */
                    if(section.id.startsWith("11") && section.tagName  == "SECTION"){
                        finalURL += flagToCheck.getAttribute("value");
                    }
                }
            } 
        }
    }
}
console.log(finalURL);
