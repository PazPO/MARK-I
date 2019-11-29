'use strict';

function registration(form) {
        let reason = "";
		
        if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value)){
		reason =reason +"Error login ";}
        if (form.password.value == "" || /[^0-9]/.test(form.password.value)){
		reason =reason+ "Error password ";}
		
        if (reason == ""){
			alert("Process begin");	
			let { Pool } = require('./pg');
			pool =new Pool({
			host:'localhost',
			port:5432,
			database:'node_hero',
			user:'postgres',
			password:'179289',});	
							
					// // добавление объекта
					const sql = "INSERT INTO users (name, password) VALUES($1, $2)";
					const data = [name, password];
					pool.query(sql, data, function(err, results) {
					if(err) console.log(err);
						console.log(results);
					});
					pool.end();
				alert("Process end");	
			
		return true;} 
        else {
            alert(reason);  
            return false;
        }
    }
	
	function authorization(form) {
        const reason = "";
		
        if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value))
            reason += "Error login ";
        if (form.password.value == "" || /[^0-9]/.test(form.password.value))
            reason += "Error password ";
		
        if (reason == ""){
				
					
				
				
			let { Pool } = require('./pg');
			pool =new Pool({
			host:'localhost',
			port:5432,
			database:'node_hero',
			user:'postgres',
			password:'179289',});	
			
				pool.query("SELECT * FROM users", function(err, results) {
				if(err) console.log(err);
					console.dir({ results });
					console.table(results.fields);
					console.table(results.rows);
			});
						pool.end();
						
				
		return true;} 
        else {
            alert(reason);  
            return false;
		}  }
    



// function validate(form) {
        // const reason = "";
		
        // if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value))
            // reason += "Error login ";
        // if (form.password.value == "" || /[^0-9]/.test(form.password.value))
            // reason += "Error password ";
		
        // if (reason == ""){
				// alert(form.submit.value);
				// if (form.submit.value=="Registration"){
					// pool=connect();
					// alert(pool);
					// add(pool,form.username.value,form.password.value);
					// disconnect(pool);}
					
				
				// if (form.submit.value=="Authorization"){ 
						// pool=connect();
						// take(pool,form.username.value,form.password.value);
						// disconnect(pool);}
				
		// return true;} 
        // else {
            // alert(reason);  
            // return false;
        // }
    // }