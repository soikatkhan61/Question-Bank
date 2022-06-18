<script>
	
</script>

<nav class="navbar">
	<!-- LOGO -->
	<div class="logo">Question Bank</div>
	<!-- NAVIGATION MENU -->
	<ul class="nav-links">
	  <!-- USING CHECKBOX HACK -->
	  <input type="checkbox" id="checkbox_toggle" />
	  <label for="checkbox_toggle" class="hamburger">&#9776;</label>
	  <!-- NAVIGATION MENUS -->
	  <div class="menu">
		<li><a href="/">Home</a></li>
		<li><a href="/">About</a></li>
		<li class="services">
		  <a href="/">Services</a>
		  <!-- DROPDOWN MENU -->
		  <ul class="dropdown">
			<li><a href="/">Dropdown 1 </a></li>
			<li><a href="/">Dropdown 2</a></li>
			<li><a href="/">Dropdown 2</a></li>
			<li><a href="/">Dropdown 3</a></li>
			<li><a href="/">Dropdown 4</a></li>
		  </ul>
		</li>
		<li><a href="/">Pricing</a></li>
		<li><a href="/">Contact</a></li>
	  </div>
	</ul>
</nav>


<style>
/* NAVBAR STYLING STARTS */
.navbar {
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
 background-color: teal;
 color: #fff;
}
.nav-links a {
 color: #fff;
}
/* LOGO */
.logo {
 font-size: 32px;
}
/* NAVBAR MENU */
.menu {
 display: flex;
 gap: 1em;
 font-size: 18px;
}
.menu li:hover {
 background-color: #4c9e9e;
 border-radius: 5px;
 transition: 0.3s ease;
}
.menu li {
 padding: 5px 14px;
}
/* DROPDOWN MENU */
.services {
 position: relative; 
}
.dropdown {
 background-color: rgb(1, 139, 139);
 padding: 1em 0;
 position: absolute; /*WITH RESPECT TO PARENT*/
 display: none;
 border-radius: 8px;
 top: 35px;
}
.dropdown li + li {
 margin-top: 10px;
}
.dropdown li {
 padding: 0.5em 1em;
 width: 8em;
 text-align: center;
}
.dropdown li:hover {
 background-color: #4c9e9e;
}
.services:hover .dropdown {
 display: block;
}
/*RESPONSIVE NAVBAR MENU STARTS*/
/* CHECKBOX HACK */
input[type=checkbox]{
 display: none;
} 
/*HAMBURGER MENU*/
.hamburger {
 display: none;
 font-size: 24px;
 user-select: none;
}
/* APPLYING MEDIA QUERIES */
@media (max-width: 768px) {
.menu { 
 display:none;
 position: absolute;
 background-color:teal;
 right: 0;
 left: 0;
 text-align: center;
 padding: 16px 0;
}
.menu li:hover {
 display: inline-block;
 background-color:#4c9e9e;
 transition: 0.3s ease;
}
.menu li + li {
 margin-top: 12px;
}
input[type=checkbox]:checked ~ .menu{
 display: block;
}
.hamburger {
 display: block;
}
.dropdown {
 left: 50%;
 top: 30px;
 transform: translateX(35%);
}
.dropdown li:hover {
 background-color: #4c9e9e;
}
}
</style>