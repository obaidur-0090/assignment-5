# 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
tElementById("id") returns an element with a specific unique id.
getElementsByClassName("class") returns all elements with the same class, which are in the form of HTMLCollection and are live.
querySelector("CSS selector") returns the first element according to any CSS selector.
querySelectorAll("CSS selector") returns all matching elements in the form of NodeList, which is static.


# 2.How do you create and insert a new element into the DOM?
Ans:
 Adding a new element to the DOM takes three steps:
 Step1: Creating → with document.createElement("tagName").
 Step2: Setting attributes  such as innerText, className, id.
 Step3: Placing in the DOM  using appendChild().

# 3.What is Event Bubbling and how does it work?
Ans:
Event Bubbling means that the event goes from the inside out. Suppose there is a button inside a div. When you click on the button, the button's event will fire first. Then the event of that click will gradually go upwards - first to the div, then to the body, then to the html, and finally to the document. This is called bubbling, because it rises from the bottom to the top like a water bubble. Because of this rule, a single click can work in both the parent and child.

# 4.What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where we set an event listener on the parent element, and handle the events of all the children in that parent with the same listener.
That is, instead of setting a separate listener on each child element, it only works on the parent.

Why is it useful?
 Works on dynamic (newly added at runtime) elements as well.
 Requires less code and performs better.
 Events of many children can be easily handled at once.

# 5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() stops the browser's default behavior, but it does not stop event bubbling. For example, it is used to stop the page from reloading when clicking a link or refreshing when submitting a form.

stopPropagation() stops event bubbling, meaning that even if an event occurs on a child element, it will not propagate to the parent or above. However, it cannot stop the default behavior.