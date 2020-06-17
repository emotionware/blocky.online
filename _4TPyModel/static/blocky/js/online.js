Blockly.defineBlocksWithJsonArray([{
  "type": "blockysystem",
  "message0": "System Name %1 Database Name %2 Author Name %3 Author Email %4 Description %5 Customer %6 Modules %7",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "database_name",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "authorname",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "autorhemail",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Description",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "customer",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "modules",
      "check": "Module",
      "align": "RIGHT"
    }
  ],
  "colour": 330,
  "tooltip": "",
  "helpUrl": "New System"
},{
  "type": "module",
  "message0": "Module Name %1 Tables %2",
  "args0": [
    {
      "type": "input_value",
      "name": "module_name",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "tablas",
      "check": "table",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "table",
  "message0": "Table Name %1 Description %2 Groups %3",
  "args0": [
    {
      "type": "input_value",
      "name": "tablename",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "description",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "field"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "group",
  "message0": "Group Name %1 Fields %2",
  "args0": [
    {
      "type": "input_value",
      "name": "group",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "fields",
      "check": "field",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "field",
  "message0": "Field Name %1 Type %2 Lenght %3 Comment %4 Caption %5 Helptext %6",
  "args0": [
    {
      "type": "input_value",
      "name": "field_name",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Type",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Lenght",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Comment",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Caption",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Helptext",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
}]);


//system
Blockly.JavaScript['blockysystem'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_database_name = Blockly.JavaScript.valueToCode(block, 'database_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_authorname = Blockly.JavaScript.valueToCode(block, 'authorname', Blockly.JavaScript.ORDER_ATOMIC);
  var value_autorhemail = Blockly.JavaScript.valueToCode(block, 'autorhemail', Blockly.JavaScript.ORDER_ATOMIC);
  var value_description = Blockly.JavaScript.valueToCode(block, 'Description', Blockly.JavaScript.ORDER_ATOMIC);
  var value_customer = Blockly.JavaScript.valueToCode(block, 'customer', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_modules = Blockly.JavaScript.statementToCode(block, 'modules');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//module
Blockly.JavaScript['module'] = function(block) {
  var value_module_name = Blockly.JavaScript.valueToCode(block, 'module_name', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_tablas = Blockly.JavaScript.statementToCode(block, 'tablas');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//table
Blockly.JavaScript['table'] = function(block) {
  var value_tablename = Blockly.JavaScript.valueToCode(block, 'tablename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//groups
Blockly.JavaScript['group'] = function(block) {
  var value_group = Blockly.JavaScript.valueToCode(block, 'group', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_fields = Blockly.JavaScript.statementToCode(block, 'fields');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//field generic
Blockly.JavaScript['field'] = function(block) {
  var value_field_name = Blockly.JavaScript.valueToCode(block, 'field_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_type = Blockly.JavaScript.valueToCode(block, 'Type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lenght = Blockly.JavaScript.valueToCode(block, 'Lenght', Blockly.JavaScript.ORDER_ATOMIC);
  var value_comment = Blockly.JavaScript.valueToCode(block, 'Comment', Blockly.JavaScript.ORDER_ATOMIC);
  var value_caption = Blockly.JavaScript.valueToCode(block, 'Caption', Blockly.JavaScript.ORDER_ATOMIC);
  var value_helptext = Blockly.JavaScript.valueToCode(block, 'Helptext', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};