//* System Model ''
//* Database Name 'test26'
//* Author Name ''
//* Author Email ''
//* Description ''
//* Customer ''
//**********************************/
var command="";
var table="";
var database="test26";
command="create database test26;";
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Table 'tblcliente'  */
//* Description Table 'Tabla General de Clientes'  */
table='tblcliente';
command="use " + database + "; create table tblcliente(IDCLIENTE int(11) Not NULL AUTO_INCREMENT,  PRIMARY KEY (IDCLIENTE)  )  ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'NOMBRE'  */
command="use " + database + "; alter table " + table   + " add column NOMBRE varchar(255) DEFAULT NULL comment 'texto' ;"
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify NOMBRE varchar(255) DEFAULT NULL comment 'texto' ;"
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'TEL'  */
command="use " + database + "; alter table " + table   + " add column TEL varchar(255) DEFAULT NULL comment 'whatsapp' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify TEL varchar(255) DEFAULT NULL comment 'whatsapp' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'EMAIL'  */
command="use " + database + "; alter table " + table   + " add column EMAIL varchar(255) DEFAULT NULL comment 'email' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify EMAIL varchar(255) DEFAULT NULL comment 'email' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'DOMICILIO'  */
command="use " + database + "; alter table " + table   + " add column DOMICILIO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify DOMICILIO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'COLONIA'  */
command="use " + database + "; alter table " + table   + " add column COLONIA varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify COLONIA varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'CODIGO_POSTAL'  */
command="use " + database + "; alter table " + table   + " add column CODIGO_POSTAL varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify CODIGO_POSTAL varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'ESTADO'  */
command="use " + database + "; alter table " + table   + " add column ESTADO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify ESTADO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'PAIS'  */
command="use " + database + "; alter table " + table   + " add column PAIS varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify PAIS varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Table 'tblproveedor'  */
//* Description Table 'Tabla General de Proveedores'  */
table='tblproveedor';
command="use " + database + "; create table tblproveedor(IDPROVEEDOR int(11) Not NULL AUTO_INCREMENT,  PRIMARY KEY (IDPROVEEDOR)  )  ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'NOMBRE'  */
command="use " + database + "; alter table " + table   + " add column NOMBRE varchar(255) DEFAULT NULL comment 'texto' ;"
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify NOMBRE varchar(255) DEFAULT NULL comment 'texto' ;"
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'TEL'  */
command="use " + database + "; alter table " + table   + " add column TEL varchar(255) DEFAULT NULL comment 'whatsapp' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify TEL varchar(255) DEFAULT NULL comment 'whatsapp' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'EMAIL'  */
command="use " + database + "; alter table " + table   + " add column EMAIL varchar(255) DEFAULT NULL comment 'email' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify EMAIL varchar(255) DEFAULT NULL comment 'email' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'DOMICILIO'  */
command="use " + database + "; alter table " + table   + " add column DOMICILIO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify DOMICILIO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'COLONIA'  */
command="use " + database + "; alter table " + table   + " add column COLONIA varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify COLONIA varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'CODIGO_POSTAL'  */
command="use " + database + "; alter table " + table   + " add column CODIGO_POSTAL varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify CODIGO_POSTAL varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'ESTADO'  */
command="use " + database + "; alter table " + table   + " add column ESTADO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify ESTADO varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


//* Field 'PAIS'  */
command="use " + database + "; alter table " + table   + " add column PAIS varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });


command="use " + database + "; alter table " + table   + " modify PAIS varchar(255) DEFAULT NULL comment 'texto' ;" ;
$.ajax({
url: "/sqlexec" + "?tablename=XXXX&sentencia=" + encodeURIComponent(command) + "&idobjeto=0"
   }).then(function (data) {
   console.log(data);                });
