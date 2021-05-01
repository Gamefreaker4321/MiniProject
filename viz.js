
class Transition {
    source = null;
    inPlaces = [];
    outPlaces = [];
    enabled = false;
    transition(node) {
        source = node;
    }
}

function Initialize() {
    var activeNode = this.activeNode;
    var core = this.core;
    var logger = this.logger;
    var nodes = core.loadSubTree(activeNode);
    var places = [];
    var arcs = [];
    var transitions = new Map();
    nodes.forEach(node => {
        if (core.isInstanceOf(node, this.META['Place'])) {
            places.push(node);
        } else if (core.isInstanceOf(node, this.META['Transition'])) {
            transitions.set(core.getPath(node), new transition(node));
        } else if (core.isTypeOf(node, this.META['Arc']))
            arcs.push(node);
    });

    arcs.forEach(arc => {
        var from = core.load_pointer(arc, 'src').then(val => val);
        var to = core.load_pointer(arc, 'dst').then(val => val);
        if (core.isInstanceOf(node, this.META['InArc'])) {
            key = core.getPath(to);
            transition = transitions.get(key);
            transition.inPlaces.push(from);
            transitions.set(key, transition);
        } else if (core.isInstanceOf(node, this.META['OutArc'])) {
            key = core.getPath(from);
            transition = transitions.get(key);
            transition.outPlaces.push(to);
            transitions.set(key, transition);
        }
    });


}

// activates on button press
function simulate(transitions) {
    var active = true;
    while(active) {
        active = false;
        transitions.forEach(transition => {
            step(transition);
            if (transition.enabled)
                active = true;
        });
    }

}

function step(transition) {
    enabled = true;
    if (transition.InArc.length < 1)
        enabled = false;
    transition.InArc.forEach(place => {
        if(core.loadChildren(place).then(val => val).length == 0)
            enabled = false;
    });
    if(enabled) {
        transition.InArc.forEach(place => {
            var markings = core.loadChildren(place).then(val => val)
            core.deleteNode(markings[0]);
        });
        transition.OutArc.forEach(place => {
            core.createChild(place, this.META["Marking"]);
        });
    }
    transition.enabled = enabled;
}