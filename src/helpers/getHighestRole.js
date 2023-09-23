export default (userData) =>
{
    const isOwner = userData.roles.includes('app_intern');
    const isAdmin = userData.roles.includes('app_admin');
    const isManager = userData.roles.includes('app_manager');
    const isEditor = userData.roles.includes('app_editor');
    const isUser = userData.roles.includes('app_user');

    if(isOwner) return { role: "Owner", allRoles: [
        isOwner && "owner",
        isAdmin && "admin",
        isManager && "manager",
        isEditor && "editor",
        isUser && "user"
    ] };
    if(isAdmin) return { role: "Admin", allRoles: [
        isOwner && "owner",
        isAdmin && "admin",
        isManager && "manager",
        isEditor && "editor",
        isUser && "user"
    ] };
    if(isManager) return { role: "Manager", allRoles: [
        isOwner && "owner",
        isAdmin && "admin",
        isManager && "manager",
        isEditor && "editor",
        isUser && "user"
    ] };
    if(isEditor) return { role: "Editor", allRoles: [
        isOwner && "owner",
        isAdmin && "admin",
        isManager && "manager",
        isEditor && "editor",
        isUser && "user"
    ] };
    if(isUser) return { role: "User", allRoles: [
        isOwner && "owner",
        isAdmin && "admin",
        isManager && "manager",
        isEditor && "editor",
        isUser && "user"
    ] };
}