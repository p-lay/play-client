type Mapping = {  vue: {    addVue: {      req: AddVueReq      res: CommonRes    }    getVue: {      req: GetVueReq      res: CommonRes<GetVueRes>    }    updateVue: {      req: UpdateVueReq      res: CommonRes    }    getVueList: {      req: any      res: CommonRes    }  }  qiniu: {    getQiniuToken: {      req: any      res: CommonRes<GetQiniuTokenRes>    }  }}type ContractType = Mapping['vue'] & Mapping['qiniu']