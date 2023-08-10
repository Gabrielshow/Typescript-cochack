type Networkloadingstate = { state: "loading"; };
type Networkfailedstate = { state : "failed";
code: number; };
type Networksuccessstate = { state: "success";
response: { title: string;
duration: number;
summary: string;
};
};

type networkstate = Networkloadingstate | Networkfailedstate | Networksuccessstate

function logger( state: networkstate): string { switch( state.state){
case "loading":
return "Downloading...";
case "failed":
return `Error ${state.code} downloading`;
case "success":
return `Downloaded ${state.response.title} - ${state.response.summary}`}
}

