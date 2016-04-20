import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Map1 extends React.Component {

	render() {
		return(
				<main>
					<center>
						<img src="/mc1.png" useMap ="#imgmap" />
						<map id="imgmap" name="imgmap">
								<area shape="poly" alt="" title="" coords="260,199,172,251,157,211,248,168" href="/building/1" target="" />
								<area shape="poly" alt="" title="" coords="284,182,314,167,300,145,269,159" href="/building/2" target="" />
								<area shape="poly" alt="" title="" coords="214,278,280,230,269,213,204,262" href="/building/3" target="" />
								<area shape="poly" alt="" title="" coords="294,219,341,190,334,176,285,201" href="/building/4" target="" />
								<area shape="poly" alt="" title="" coords="355,183,404,164,396,148,347,168" href="/building/5" target="" />
								<area shape="poly" alt="" title="" coords="330,134,354,120,369,150,345,159" href="/building/6" target="" />
								<area shape="poly" alt="" title="" coords="429,145,452,136,427,76,403,89" href="/building/7" target="" />
								<area shape="poly" alt="" title="" coords="317,109,370,88,377,101,323,122" href="/building/8" target="" />
								<area shape="poly" alt="" title="" coords="221,147,301,116,310,129,229,164" href="/building/9" target="" />
								<area shape="poly" alt="" title="" coords="141,182,213,153,223,164,149,196" href="/building/10" target="" />
								<area shape="poly" alt="" title="" coords="87,151,100,146,111,184,136,206,133,234,108,226,81,190" href="/building/11" target="" />
								<area shape="poly" alt="" title="" coords="123,345,198,291,189,274,111,328" href="/building/12" target="" />
						</map>
					</center>						
				</main>
		 	)
	}
}
