namespace db;

entity Product{
    key ID   : UUID;
    Name     : String(10) @mandatory;
    Price    : Decimal(10,2) @assert.range: [1,999999];
    Category : String;
    }

