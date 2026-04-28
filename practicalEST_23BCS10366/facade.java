interface payment{
    void pay();
}

interface NotificationService{
    void send();
}

interface stockCheck{
    int check(int item);
}

class paymentGateway implements payment{
    public void pay(){};
}

class emailService implements NotificationService{
    public void send(){};
}

class stockAvailability implements  stockCheck{
    public int check(int item){};
}

class orderFacade{
    orderFacade r1 = new emailService();
    orderFacade p1 = new paymentGateway();
    orderFacade s1 = new stockAvailability();
    
    if(task == "Payment"){
        if(p1.pay())
            r1.send();
        else{
            error();
        }
    }

    if(task == "stock"){
        int stock = s1.check(item);
        System.out.println(stock);
    }
}