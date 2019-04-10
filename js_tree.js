"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Angelina Stilphen
   Date:   4.8.19

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

var nodeCount = 0; 
var elemCount = 0;
var textCount = 0;
var wasCount = 0;

// runs and loads the makeTree() event listener 
window.addEventListener("load", makeTree);

// set up and placed the node tree within the HTML document and displays the node counts from the document 
function makeTree() {

      // 
      var asideElement = document.createElement("aside");
      asideElement.setAttribute("id", "treeBox");

      var h1 = document.createElement("h1");
      h1.textContent = "Node Tree";

      asideElement.appendChild(h1);
      document.getElementById("main").appendChild(asideElement);

      var nodeList = document.createElement("ol"); 
      asideElement.appendChild(nodeList);

      var sourceArticle = document.querySelector("#main article");     

      makeBranches(sourceArticle, nodeList);
} 

// append node trees to the node tree 
function makeBranches(treeNode, nestedList) {
      nodeCount++;
      var liElem = document.createElement("li");
      var spanElem = document.createElement("span"); 
      liElem.appendChild(spanElem);
      nestedList.appendChild(liElem);

      if (treeNode.nodeType === 1) {
            elemCount++;
            spanElem.setAttribute("class", "elementNode");
            spanElem.textContent = "<" + treeNode.nodeName + ">";
      } else if (treeNode.textNode === 3) {
            textCount++;
            var textString = treeNode.nodeValue;
      } if (isWhiteSpaceNode(textString)) {
            wasCount++;
            spanElem.setAttribute("Class", "whiteSpaceNode")
      }
}






function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
} 
