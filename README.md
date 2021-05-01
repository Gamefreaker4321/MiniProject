# MiniProject Design Studio
This project is a dockerized design studio built off of webgme for designing petri nets.
This contains a vizualizer for to simulate stepping through the active states of the petri net.
Some example use cases of this studio are creating a modeling manufacturing systems for resource pregression through the system, as well as things like state progression in state based software architecture.
## Getting Started
Installation of the studio just requires a Docker installation.  
  1. Once installed, to get started modelling just boot up the docker image from the project folder with `docker-compose up -d`.
  2. Once its up and running it can be accessed from localhost:8888.
  3. Create a new project based off of the "petrinet" seed and drag a petri net object from the models section on the left.
  4. Once inside the object you can begin modeling. 
## Functionality
The functionality of the design studio comes from the representation of the markings within the places of the net, and the vizualizer that simulates the execution of the petri net.
By selecting the "Simulator" visualizer on the left from the list of vizualizers you will have the option to select the run button from the header of the widget which will run the simulation all the way through. 
You can also activate one transition at a time by clicking on the transition and if it is enabled it will progress the markings accordingly.
Three example nets are provided by default. 
  1. "Basic PetriNet" A plain petri net showing the components of the network.
  2. "Multi Timestep PetriNet" A simple petri net with multiple transitions to demonstrate the enabled action.
  3. "Candy Dispenser" A more fully fledged petri net simulating the states of a candy dispensing machine. 
