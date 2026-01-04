import SwiftUI

struct UserHeaderView: View {
    let username: String
    let onEditTapped: () -> Void

    var body: some View {
        HStack {
            Text("Usuario: \(username)")
            Button("Editar", action: onEditTapped)
        }
    }
}

#Preview {
    UserHeaderView(username: "Juan Pérez") {
        print("Editar tapped")
    }
}
