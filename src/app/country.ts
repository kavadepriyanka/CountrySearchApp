// export class Country {
//     name: String;
//     id: number;
// }

export class Country {
        "name": string;
        "topLevelDomain": string[];
        "alpha2Code": string;
        "alpha3Code": string;
        "callingCodes": string[];
        "capital": string;
        "altSpellings": string[];
        "region": string;
        "subregion": string;
        "population": number;
    
        "latlng": number[];
    
        "demonym": string;
    
        "area": number;
    
        "gini": number;
    
        "timezones": string[]
    
        "borders": string[];
    
        "nativeName": string;
    
        "numericCode": string;
    
        "currencies": currency[];
    
        "languages": language[];
    
        "translations": any;
    
        "flag": string;
    
        "regionalBlocs": regionalBloc[];
    
        "cioc": string
    
    }
    
     
    
    class regionalBloc {
    
        "acronym" : string;
    
        "name" : string;
    
        "otherAcronyms": string[];
    
        "otherNames": string[];
    
    }
    
     
    
    class language {
    
        "iso639_1": string;
    
        "iso639_2": string;
    
       "name": string;
    
        "nativeName": string;
    
    }
    
     
    
    class currency {
    
        "code": string;
    
        "name": string;
    
        "symbol": string;
    
    }