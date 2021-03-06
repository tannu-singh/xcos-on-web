function SCALAR2VECTOR() {

    SCALAR2VECTOR.prototype.define = function SCALAR2VECTOR() {
        this.nout = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["scalar2vector"]), new ScilabDouble([4]));
        model.out = new ScilabDouble([this.nout]);
        model.in = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nout]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SCALAR2VECTOR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SCALAR2VECTOR.prototype.details = function SCALAR2VECTOR() {
        return this.x;
    }
}

