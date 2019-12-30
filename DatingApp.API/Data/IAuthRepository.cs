using System.Threading.Tasks;
using DatingApp.API.models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Registrer(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}