let val;
val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;
val = document.links;
val = document.links[0];
val = document.links[3].id;
val = document.links[5].id;// clearall

// class ko String nae lol chin yin className nae khaw array nae lol chin yin classList nae khaw
val = document.links[3].className;
val = document.links[3].classList;
val = document.links[3].classList[0];
val = document.links[3].classList[1];

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList[0];
val = document.images[0].src;
val = document.images[0].alt;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;

// console.log(val);


// ==> Change Styling

document.getElementById('tasktitle').style.backgroundColor = 'green';
document.getElementById('tasktitle').style.color = '#fff';
document.getElementById('tasktitle').style.padding = '5px';


// ==> Change Content

// document.getElementById('tasktitle').textContent = "Hello World";
// document.getElementById('tasktitle').innerText = "John Doe";
document.getElementById("tasktitle").innerHTML = "<span style='color:yellow;'>Dataland</span>";


// ==> call by class name(class)

const lis = document.getElementsByClassName('list-group-item');
// console.log(lis);
// console.log(lis[2]);
lis[2].style.color='blue';
// lis[2].textContent = "john doe";
// lis[2].innerText = "have to visit";
// lis[2].innerHTML = 'Dataland <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>';



 // ==> Call by tag name (Element)

const litags = document.getElementsByTagName('li');
// console.log(litags);
// console.log(litags[1]);
litags[1].style.color = 'purple';
// litags[1].innerHTML = 'Hello world <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>';


// ==> Query Selector; 

// console.log(document.querySelector('#tasktitle'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h3'));
// console.log(document.querySelectorAll('li'));

// document.querySelector('ul li').style.color = "violet"; 
// document.querySelector('li').style.color = 'blue';
// document.querySelector('ul li:nth-child(odd)').style.color = 'green';
// document.querySelector('ul li:last-of-type').style.color = 'orange';
// document.querySelector('ul li:nth-of-type(4)').style.color = 'steelblue';


// ==> querySelectorAll 

// console.log(document.querySelectorAll('#tasktitle'));
// console.log(document.querySelectorAll("#tasktitle")[0]);
// console.log(document.querySelectorAll('.card-title')[0]);
// console.log(document.querySelectorAll('li'));
// console.log(document.querySelectorAll('li')[2]);


// const listitems = document.querySelector("ul").getElementsByClassName('list-group-item');
// console.log(listitems);
// console.log(typeof listitems);
// console.log(listitems[1]);


// Error because listitems is not pure array; forEach only can loop pure array; HTML Collection is not pure array;
// listitems.forEach(function(listitem){
// 	console.log(listitem);
// });

// Array pyaung pay ka tal for each nae looping pat chin yin
// const arritems = Array.from(listitems);
// console.log(arritems);
// arritems.forEach(function(arritem){
// 	console.log(arritem);
// });



// NodeList ka pure array phit tat a twat forEach nae loop pat loa ya tal 
// const listItems = document.querySelectorAll('ul.list-group li.list-group-item');
// listItems.forEach(function(listItem,idx){
// 	listItem.innerText = `${++idx} Hello World`;
// });



const liodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(liodds);
liodds.forEach(function(liodd){
	liodd.style.backgroundColor = 'silver';
});

const lievens = document.querySelectorAll('li:nth-child(even)');
// lievens.forEach(function(lieven){
// 	lieven.style.backgroundColor = "grey";
// });


// for(let i=0; i < lievens.length; i++){
// 	 console.log(i);
// 	lievens[i].style.backgroundColor = 'green';
// }



// ==> Parent to Children 

	let getli = document.querySelector('ul li');
		getli = document.querySelector('li.list-group-item');
		getli = document.querySelector('li.list-group-item:first-child');
		// console.log(getli);

		let getul = document.querySelector('ul.list-group');
		// console.log(getul);

		let chl;

		// chl = getul.children;
		// console.log(chl);
		// console.log(chl[2]);

		// chl[1].textContent = "have to go";
		// getul.children[3].innerText = "Have to cook";


		// ==> Parent to Children to Children 

		chl  = getul;
		chl = getul.children;
		chl = getul.children[0];
		chl = getul.children[0].children;
		chl = getul.children[0].children[0];
		chl = getul.children[0].children[0].id;
		chl = getul.children[0].children[0].className;
		chl = getul.children[0].children[0].classList;
		chl = getul.children[0].children[0].classList[0];
		chl = getul.children[0].children[0].href;


		chl = getul.children[0].children[0].children;
		chl = getul.children[0].children[0].children[0];
		chl = getul.children[0].children[0].children[0].className;
		// console.log(chl);




		// ==> child element count
		chl = getul.children.length;
		chl = getul.childElementCount;

		chl = getul.children[0].childElementCount;
		chl = getul.children[0].children[0].childElementCount;
		// console.log(chl);


 		// ==> Children to Parent Element 

 		const getfirstli = document.querySelector('li');
 		// console.log(getfirstli);
 		let getparent = getfirstli.parentElement;
 		getparent = getfirstli.parentElement.parentElement;
 		getparent = getfirstli.parentElement.parentElement.parentElement;
 		// console.log(getparent);

 		// ==> Next Element Sibling

 		let getsibling = getfirstli;
 		// console.log(getsibling);
 		getsibling = getfirstli.nextElementSibling;
 		getsibling = getfirstli.nextElementSibling.nextElementSibling;
 		getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
 		// console.log(getsibling);

 		// ==> previous Element Sibling 

 		getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

 		// console.log(getsibling);


 		// ==> Create ELement

 		const newli = document.createElement('li');

 		// ==> Add ID 
 		newli.id = "new-item";

 		// ==> Add ClassName
 		// newli.className = "list-group-item";

 		// Multiclass Name
 		// newli.className = 'list-group-item list-group-item1';


 		// Add ClassList
 		newli.classList.add('delete-i');
 		newli.classList.add('delete-u');
 		newli.classList.add("delete-we",'delete-us');


 		// ==> Add Attribute 
 		// setAttribute(attrname,value);

 		newli.setAttribute('title','newItem');

 		// newli.textContent = "hay";
 		// newli.innerText = 'hello world';
 		// newli.innerHTML = 'List Item 6 <a href="#" id="delete-item6" class="delete-item" title="I am title" alt="I am alt"><i class="fas fa-trash-alt"></i></a>';

 		// const newtext = document.createTextNode('hello world');
 		// console.log(newtext);
 		// newli.appendChild(newtext);

 		newli.classList.add('list-group-item');
 		 newli.appendChild(document.createTextNode('hello thiland'));

		const newlink = document.createElement('a');
		 newlink.id = 'delete-item6'; 
		 newlink.href = '#';
		 // newlink.className = 'delete-item';		 
		 newlink.classList.add('delete-item');

		 const newitalic = document.createElement('i');
		 newitalic.classList.add('fas','fa-trash-alt');
		 newlink.appendChild(newitalic);
		 newli.appendChild(newlink);
 		// console.log(newli);

 		document.querySelector('ul.list-group').appendChild(newli);

 
 		// ==> Replace Element

 		// replaceChild(new,old)

 		const oldtitleh4 = document.getElementById('tasktitle');
 		// console.log(oldtitleh4);

 		
 		const newtitleh2 = document.createElement('h2');
 		
 		newtitleh2.id='tasktitle';
 		const newcaption = document.createTextNode('all my list');
 		newtitleh2.appendChild(newcaption);

 		const getcard = document.querySelector('.card-footer');

 		getcard.replaceChild(newtitleh2,oldtitleh4);

 		// console.log(newtitleh2);


 		// UI a paw mar bae pyut mar (database mar ma pyut buu)
 		// Remove Child Element
 
 	const getfirstul = document.querySelector('ul');
 	// console.log(getfirstul);
 	// getfirstul.remove();

 	// console.log(getfirstul.children[0]);

 	// getfirstul.removeChild(getfirstul.children[0]);
 	// getfirstul.removeChild(getfirstul.children[2]);
 	// getfirstul.removeChild(getfirstul.children[1]);


 	//==> Remove Element (self)

 	// const getlis = document.querySelectorAll('li');
 	// getlis[0].remove();
 	// getlis[1].remove();
 	// console.log(getlis); // 6


 // ==> Attribute 

 	const firstli = document.querySelector('li');
 	// console.log(firstli);
 	const firlichild = firstli.children[0];
 	// console.log(firlichild);
 	// console.log(firlichild.id);
 	// console.log(firlichild.href);
 	// console.log(firlichild.alt);
 	// console.log(firlichild.title);

 	// console.log(firlichild.getAttribute('href'));
 	// console.log(firlichild.getAttribute('id'));
 	// console.log(firlichild.getAttribute('alt'));
 	// console.log(firlichild.getAttribute('title'));

   // Attribute sit say tar (hasAttribute())

 	let hasatt = firlichild.hasAttribute('href');
 	hasatt = firlichild.hasAttribute('hay');

 	// console.log(hasatt)


 	// ==> className vs classList 

 	// console.log(firlichild.className);
 	// firlichild.className = 'delete-myself';
 	// firlichild.className = 'delete-myself delete-ourselve delete-yourself';
 	// firlichild.className = "delete-myself delete-yourself";

 	firlichild.classList.add('delete-myself');
 	firlichild.classList.add('delete-yourself','add-himself');
 	
 	firlichild.classList.remove('delete-myself');

 	// console.log(firlichild.className);

 	// if(firlichild.className === "delete-item delete-yourself add-himself"){
 	// 	console.log('yes')
 	// }else{
 	// 	console.log("no");
 	// }

 	// if(firlichild.classList.contains('delete')){
 	// 	console.log('yes')
 	// }else{
 	// 	console.log("no");
 	// }


 	// ==> addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

// Methods 1
clearbtn.addEventListener('click',function(e){
	// console.log("i am working");
	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList[0]);

// note this keyword ka regular function mar bae clearbtn so pya tal arrow function so yin window ko pya tal ;
	// console.log(this);
	// console.log(this.id);
	// console.log(this.className);

	// Note: a tag yae href mar 'https://google.com' so pee pay htr yin lae e.preventDefault() pay htr yin ae link ko ma twar top buu

	// e.preventDefault();
})


// Methods 2

clearbtn.addEventListener('click',myclick);

function myclick(e){
	e.preventDefault;
	// console.log('hello');
	// console.log(e.target);

	// console.log(this);
	// console.log(this.id);

	// e.target.innerText = 'Finish';
	// this.textContent="Done";


	// Coordinate Event - relative to the window
	// console.log(e);
	// const clientx = e.clientX;
	// const clienty = e.clientY;
	// console.log(clientx,clienty);


// Coordinate Event - relative to the element
	// const offsetx = e.offsetX;
	// const offsety = e.offsetY;
	// console.log(offsetx,offsety);
}


// ==> Mouse Event (Pointer Event)

const clbtn = document.querySelector('.clear-tasks');

// Single Click
// clbtn.addEventListener('click',mouseeventtype)

//Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

// Mouse Down
// clbtn.addEventListener('mousedown',mouseeventtype);

// Mouse Up
// clbtn.addEventListener('mouseup',mouseeventtype);


// Mouse Enter
const card = document.querySelector('.card');
// card.addEventListener('mouseenter',mouseeventtype);


// Mouse Over
// card.addEventListener('mouseover',mouseeventtype);


// Mouse Leave
// card.addEventListener('mouseleave',mouseeventtype);

// Mouse out
// card.addEventListener('mouseout',mouseeventtype);

// Mouse move
card.addEventListener('mousemove',mouseeventtype);

const heading2 = document.querySelector('h2');

function mouseeventtype(e){
	// console.log('I am working');
	// console.log(`Event type: ${e.type}`);
	// heading2.textContent = `MouseX: ${e.clientX} MouseY: ${e.clientY}`;
	// document.body.style.backgroundColor=`rgba(${e.clientX},${e.clientY},${e.clientY},1)`;
}

// submit

// const getform = document.querySelector('.form');

// getform.addEventListener('submit',function(e){
// 	console.log(`Event type: ${e}`);
// 	e.preventDefault();
// })





// ==> Input Event (Keyboard Event);

const getinput = document.querySelector('#task');


// keydown
// getinput.addEventListener('keydown',inputeventtype);
// keypress nae keydown nae a tutu bae
// getinput.addEventListener('keypress',inputeventtype);
// keyup
// getinput.addEventListener('keyup',inputeventtype);
// input nae keyup nae a tutu bae
// getinput.addEventListener('input',inputeventtype);

// focus cursor cha tar nae a lote lote p
// getinput.addEventListener('focus',inputeventtype);

// blur cursor hwat tar nae a lote lote p
// getinput.addEventListener('blur',inputeventtype);

// cut (ctr x)
// getinput.addEventListener('cut',inputeventtype);

//copy 
// getinput.addEventListener('copy',inputeventtype);

// paste 
// getinput.addEventListener('paste',inputeventtype);

function inputeventtype(e){
	// console.log(e.target);
	// console.log(this);
	console.log(`Event type = ${e.type}`);
	console.log(e.target.value);
	console.log(this.value);
	console.log(getinput.value);
}


// Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log("hello I am card title");
// });

// document.querySelector('.card-header').addEventListener('click',function(){
// 	console.log("hello I am card header");
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log("hello I am card");
// });



// event delegation

// const getdeleteitem = document.querySelector('.delete-item');

// getdeleteitem.addEventListener('click',function(e){
// 	console.log('i am delete item');
// 	console.log(e.target); // i tag
// 	console.log(this); // a tag
// });


// document.body.addEventListener('click',eventdeleg);

function eventdeleg(e){
	// console.log(e.target);
	// console.log(e.target.className);
	// if(e.target.className === 'fas fa-trash-alt'){
	// 	console.log("i am working , i am trash");
	// }
	// console.log(e.target.parentElement);

	if(e.target.parentElement.classList.contains('delete-item')){
		// console.log('i am working , i am a tag');
		// e.target.remove();
		// e.target.parentElement.remove();
		e.target.parentElement.parentElement.remove();
	}
}


document.querySelector('#form').addEventListener('submit',function(e){
	e.preventDefault();
	// console.log("i am working , i am submitted");
	const getnewtask = document.getElementById('task').value;
	// console.log(getnewtask);

	let alltasks;
	if(localStorage.getItem('mytasks')=== null){
		alltasks = [];
	}else{
		alltasks = JSON.parse(localStorage.getItem('mytasks'));
		// console.log(alltasks);
		console.log(typeof alltasks)
	}

	alltasks.push(getnewtask);
	localStorage.setItem('mytasks',JSON.stringify(alltasks));

})

console.log(localStorage.getItem('mytasks'));
console.log(typeof localStorage.getItem('mytasks'));

console.log(JSON.parse(localStorage.getItem('mytasks')));
console.log(typeof JSON.parse(localStorage.getItem('mytasks')));

const getmytasks = JSON.parse(localStorage.getItem('mytasks'));

getmytasks.forEach(function(getmytask){
	console.log(getmytask);
})





