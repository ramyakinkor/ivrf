 --mybase is your database name. If public, remove it.
  CREATE OR REPLACE FUNCTION my_new_rotine(numeric)
  RETURNS void AS
  $BODY$
  --here, get the first variable from function
    declare id numeric= 1;

    begin
	while id >=1 and id <= 1000 LOOP
	 begin
		insert into public."Ticket" values(id);
		id := id+1;
        end;
   	END LOOP;
    end;
  $BODY$

  LANGUAGE plpgsql VOLATILE


-- execute the method.

select * from my_new_rotine(1)