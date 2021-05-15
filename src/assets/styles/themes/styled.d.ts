import 'styled-components';

declare module 'styled-compunents'{
    export interface DefaulTheme{
        title: string;

        colors: {
            primary: string;
            secundary: string;
    
            backgroud: string;
            text: string;

        },
    
    };
}