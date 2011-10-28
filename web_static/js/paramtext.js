function paramtext(text)
{
	var delimiters = '#|';
	
	// We have a zero/non-zero selector and one/non-one selector
	for (var selector = 0; selector < 2; ++selector)
	{
		var delim = delimiters.charAt(selector);
		
		// Build an RE that looks like /[#](\d+)[#](.*?)[#](.*?)[#]/g
		var re = new RegExp('[' + delim + '](\\d+)[' + delim + '](.*?)[' + delim + '](.*?)[' + delim + ']', 'g');
		
		// Build an RE that will test for a valid integer or float
		var digitRe = new RegExp('^(?:\\d+|\\d*\\.\\d+)$');
		var args = arguments;
		
		text = text.replace(re, function(match, num, sub1, sub2) 
		{
			// Make sure the positional match is an integer
			if (!/\d+/.test(num))
				return '';
				
			var index = parseInt(num);
			
			// Make sure the match is in range
			if (index < 1 || index >= args.length)
				return '';
				
			// Get the specified argument, convert to a string
			var arg = args[index];
			var type = typeof arg;
			
			if (selector === 0)
			{
				var isZero;
				
				switch (type)
				{
					case 'string':
						if (arg.length === 0)
							isZero = true;
						else
							isZero = digitRe.test(arg) && parseFloat(arg) === 0;
						break;
						
					case 'number':
						isZero = arg === 0;
						break;
						
					case 'boolean':
						isZero = arg === false;
						break;
						
					default:
						return '';
						
				}
				
				return (isZero ? sub1 : sub2);
			}
			else
			{
				var isOne;
				
				switch (type)
				{
					case 'string':
						isOne = arg.length && digitRe.test(arg) && parseFloat(arg) === 1;
						break;
						
					case 'number':
						isOne = arg === 1;
						break;
						
					case 'boolean':
						isOne = arg === true;
						break;
						
					default:
						return '';
				}
				
				return (isOne ? sub1 : sub2);
			}
		});
	}
	
	for (var i = 1, len = arguments.length; i < len; ++i)
	{
		var arg = arguments[i];
		var re = new RegExp('\\^(' + i + ')|\\{(' + i + ')(?:;([^}]+))?\\}', 'g');
		text = text.replace(re, function(match, num1, num2, format)
		{
			return arg;
		});
	}
	
	return text;
}
