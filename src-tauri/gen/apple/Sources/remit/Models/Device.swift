import Foundation

struct Device: Identifiable, Codable {
    let fullName: String
    let dispName: String
    let ip: String
    let port: Int
    let properties: [[String]]

    enum CodingKeys: String, CodingKey {
        case fullName = "full_name"
        case dispName = "disp_name"
        case ip
        case port
        case properties
    }

    var id: String { fullName }
}
