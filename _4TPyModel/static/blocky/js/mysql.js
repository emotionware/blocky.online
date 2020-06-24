Blockly.defineBlocksWithJsonArray([{
  "type": "mysql_database",
  "message0": "Database Name %1",
  "args0": [
    {
      "type": "input_value",
      "name": "databasename",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mysql_tablename",
  "message0": "Tablename %1",
  "args0": [
    {
      "type": "input_value",
      "name": "tablename",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mysql_field",
  "message0": "Fieldname %1 Type %2 Lenght %3 Decimals %4 Comment %5",
  "args0": [
    {
      "type": "input_value",
      "name": "fieldname",
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
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "decimals",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Comment",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mysql_drop_tablename",
  "message0": "Drop Tablename %1",
  "args0": [
    {
      "type": "input_value",
      "name": "tablename",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mysql_drop_database",
  "message0": "Drop Database Name %1",
  "args0": [
    {
      "type": "input_value",
      "name": "databasename",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mysql_drop_field",
  "message0": "Drop Field name %1",
  "args0": [
    {
      "type": "input_value",
      "name": "fieldname",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);


Blockly.JavaScript['mysql_database'] = function(block) {
  var value_databasename = Blockly.JavaScript.valueToCode(block, 'databasename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mysql_tablename'] = function(block) {
  var value_tablename = Blockly.JavaScript.valueToCode(block, 'tablename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mysql_field'] = function(block) {
  var value_fieldname = Blockly.JavaScript.valueToCode(block, 'fieldname', Blockly.JavaScript.ORDER_ATOMIC);
  var value_type = Blockly.JavaScript.valueToCode(block, 'Type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lenght = Blockly.JavaScript.valueToCode(block, 'Lenght', Blockly.JavaScript.ORDER_ATOMIC);
  var value_decimals = Blockly.JavaScript.valueToCode(block, 'decimals', Blockly.JavaScript.ORDER_ATOMIC);
  var value_comment = Blockly.JavaScript.valueToCode(block, 'Comment', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mysql_drop_tablename'] = function(block) {
  var value_tablename = Blockly.JavaScript.valueToCode(block, 'tablename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mysql_drop_database'] = function(block) {
  var value_databasename = Blockly.JavaScript.valueToCode(block, 'databasename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mysql_drop_field'] = function(block) {
  var value_fieldname = Blockly.JavaScript.valueToCode(block, 'fieldname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};