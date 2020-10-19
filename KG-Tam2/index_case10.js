const parser = require('rocketrml');

const doMapping = async () => {
	  const options = {
		      toRDF: true,
		      verbose: true,
		      xmlPerformanceMode: false,
		      replace: false,
		    };
	  const result = await parser.parseFile('./mapping_json.nt', './KGCase10.nt', options).catch((err) => { console.log(err); });
	  console.log(result);
};

doMapping();
