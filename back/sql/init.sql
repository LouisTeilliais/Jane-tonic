INSERT INTO "admins"  (id,email,"password","role")
    VALUES
        -- Generate password here: https://www.browserling.com/tools/bcrypt
        (1,'mail@mail.com' ,'$2a$10$G.x9PPIXqQn20kq6WVRtCugE8O.wLwiMdx.6h7gRiKGKo4aSN7q5u', 'ADMIN'); -- password
		
INSERT INTO session_types ("sessionTypeId", session_type)
VALUES 
    (1, 'Pilates'),
    (2, 'Circuit training'),
    (3, 'Stretching'),
    (4, 'Run & break'), 
    (5, 'Apéro(s)port'); 