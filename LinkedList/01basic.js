class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    size(){
        let current = this.head;
        let size = 0;
        while(current.next){
            size++;
            current = current.next;
        }

        return size;
    }

    addAt(data, index){

        if(index<0 || index > this.size()){
            console.error("Invalid Index");
            return
        }
        const newNode = new Node(data);

        let current = this.head;

        while(index > 1){
            current = current.next;
            index--;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }

    removeFrom(index){
        if(index<0 || index > this.size()){
            console.error("Invalid Index");
            return
        }

        let current = this.head;
        while(index > 1){
            current = current.next;
            index--;
        }
        current.next = current.next.next;
    }

    print(){
        let current = this.head;
        while(current){
            console.log("current data: ", current.data, "next: ", current.next)
            current = current.next;
        }
    }
}

let newLL = new LinkedList();
newLL.addFirst(5)
newLL.print()
console.log("\nNext Operation\n")
newLL.addFirst(4)
newLL.print()
console.log("\nNext Operation\n")
newLL.addLast(6)
newLL.print()
console.log("\nNext Operation\n")
newLL.addAt(12, 1)
newLL.print()
console.log("\nNext Operation\n")
newLL.removeFirst()
newLL.print()
console.log("\nNext Operation\n")
newLL.removeFrom(1)
newLL.print()
console.log("\nNext Operation\n")
newLL.removeLast()
newLL.print()