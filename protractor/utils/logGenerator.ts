export class logGenerator{
	
	static log(): any {
		
		var log4js = require("log4js");
		log4js.configure('./utils/log4js.json');
		var logger = log4js.getLogger("file");
		return logger;

	}
}


