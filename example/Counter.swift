//
//  ContentView.swift
//  counter-app
//
//  Created by Even Stensberg on 11/06/2019.
//  Copyright © 2019 Even Stensberg. All rights reserved.
//

import SwiftUI


struct ContentView : View {
    @State var counter: Int = 0
    
    var body: some View {
        VStack {
            Text("Count")
            .font(.largeTitle)
            Text(String(counter))
            Button(action: {
                self.counter += 1
            }, label: {
                Text("Add")
            }).padding(20)
        }
    }
}


#if DEBUG
struct ContentView_Previews : PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif
