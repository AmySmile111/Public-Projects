import { Machine } from './Machine';
import{User} from './user';
export class datas{
  machines: Machine[] = [
  {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci22",
      "OS_MAIN": "AIX",
      "OS_VERSION": "6.1",
      "MACHINE_NAME": "den-ci22",
      "MACHINE_TYPE": "Dev/Debug",
      "DOMAIN": "rocketsoftware.com",
      "CURRENT_PROJECT": "UD.8.2.TRUNK",
      "TEAM": "Continuous Integration",
      "NOTES": "ý",
      "RESERVED_TO": "",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.199.61"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci23",
      "OS_MAIN": "AIX",
      "OS_VERSION": "6.1",
      "MACHINE_NAME": "den-ci23",
      "MACHINE_TYPE": "Build",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UD.8.2.TRUNK",
      "TEAM": "Continuous Integration",
      "NOTES": "willie denrooster denmule dencolt sheep waylon wyattý",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.189"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci24",
      "OS_MAIN": "AIX",
      "OS_VERSION": "7.1",
      "MACHINE_NAME": "den-ci24",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UD.8.2.TRUNK",
      "TEAM": "Continuous Integration",
      "NOTES": "goat tori paint lamb morgan stallionýNetCure/Dmitry",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.113"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci25",
      "OS_MAIN": "AIX",
      "OS_VERSION": "7.1",
      "MACHINE_NAME": "den-ci25",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UD.8.2.TRUNK",
      "TEAM": "Continuous Integration",
      "NOTES": "goat tori paint lamb morgan stallionýNetCure/Dmitry",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.140"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci26",
      "OS_MAIN": "AIX",
      "OS_VERSION": "6.1",
      "MACHINE_NAME": "den-ci26",
      "MACHINE_TYPE": "Build",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "willie denrooster denmule dencolt sheep waylon wyattý",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.199.106"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci27",
      "OS_MAIN": "AIX",
      "OS_VERSION": "6.1",
      "MACHINE_NAME": "den-ci27",
      "MACHINE_TYPE": "Build",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "willie denrooster denmule dencolt sheep waylon wyattý",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.159"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci28",
      "OS_MAIN": "AIX",
      "OS_VERSION": "6.1",
      "MACHINE_NAME": "den-ci28",
      "MACHINE_TYPE": "Build",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "willie denrooster denmule dencolt sheep waylon wyattý",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.198.64"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci29",
      "OS_MAIN": "AIX",
      "OS_VERSION": "7.1",
      "MACHINE_NAME": "den-ci29",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "goat tori paint lamb morgan stallionýNetCure/Dmitry",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.61"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci30",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci30",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "rocketsoftware.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.199.127"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci31",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci31",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "rocketsoftware.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.199.141"
    },
    {
      "DATE_RESERVED": "",
      "SOFTWARE_LOADED": "",
      "OWNER": "",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci32",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci32",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "",
      "NOTES": "",
      "RESERVED_TO": "BKLEIN",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "",
      "SOFTWARE_LOADED": "",
      "OWNER": "",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci33",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci33",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "",
      "NOTES": "",
      "RESERVED_TO": "BWEDEWER",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "",
      "SOFTWARE_LOADED": "",
      "OWNER": "",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci34",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci34",
      "MACHINE_TYPE": "Dev/Debug",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "",
      "NOTES": "",
      "RESERVED_TO": "SXIA",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "",
      "SOFTWARE_LOADED": "",
      "OWNER": "",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci35",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci35",
      "MACHINE_TYPE": "Dev/Debug",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "",
      "NOTES": "",
      "RESERVED_TO": "YHIANG",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci37",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci37",
      "MACHINE_TYPE": "Dev/Debug",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UD.8.2.TRUNK",
      "TEAM": "Continuous Integration",
      "NOTES": "",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "",
      "SOFTWARE_LOADED": "",
      "OWNER": "",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci38",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci38",
      "MACHINE_TYPE": "Dev/Debug",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UDT8.2TRUNK",
      "TEAM": "",
      "NOTES": "",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "",
      "SOFTWARE_LOADED": "",
      "OWNER": "",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci39",
      "OS_MAIN": "HP Itanium",
      "OS_VERSION": "11.31 64-Bit",
      "MACHINE_NAME": "den-ci39",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "",
      "CURRENT_PROJECT": "UDT8.2TRUNK",
      "TEAM": "",
      "NOTES": "hyper hydro haiku highland",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": ""
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci210",
      "OS_MAIN": "AIX",
      "OS_VERSION": "7.1",
      "MACHINE_NAME": "den-ci210",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "goat tori paint lamb morgan stallionýNetCure/Dmitry",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.100"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci211",
      "OS_MAIN": "AIX",
      "OS_VERSION": "7.1",
      "MACHINE_NAME": "den-ci211",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "goat tori paint lamb morgan stallionýNetCure/Dmitry",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.198.126"
    },
    {
      "DATE_RESERVED": "05/20/2016",
      "SOFTWARE_LOADED": "",
      "OWNER": "JSINE",
      "SOFTWARE_VERSION": "",
      "ID": "den-ci212",
      "OS_MAIN": "AIX",
      "OS_VERSION": "7.1",
      "MACHINE_NAME": "den-ci212",
      "MACHINE_TYPE": "Certification",
      "DOMAIN": "u2lab.rs.com",
      "CURRENT_PROJECT": "UV11.3.1",
      "TEAM": "Continuous Integration",
      "NOTES": "goat tori paint lamb morgan stallionýNetCure/Dmitry",
      "RESERVED_TO": "JSINE",
      "RESTRICTION": "Continuous Integration",
      "IP_ADDRESS": "9.72.196.115"
    }
  ];

users:User[]= [

{ "name" : "Yu", "password":"1234", "permission":"admin","type":"QA","note":""},
{ "name" : "Amy", "password":"123","permission":"users","type":"Development","note":""},
{ "name" : "JSINE", "password":"JSINE","permission":"users","type":"QA","note":""},
{ "name" : "BKLEIN", "password":"1","permission":"users","type":"QA","note":""}





]







}